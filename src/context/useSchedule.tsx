import { createContext, ReactNode, useContext, useState } from "react"
import { addDoc, AddPrefixToKeys, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { useLocalStorage } from "@/customHooks/useLocaStorage";
import { AuthContext } from "./useAuth";
import { ScheduleData } from "@/interface/schedule";


type values = {
    popup: { type: string, msg: string };
    loading: boolean;
    setPopup: (aug0: values["popup"]) => void;
    schedules: ScheduleData[];
    addSchedule: (aug0: ScheduleData) => void;
    getAllSchedules: (aug0: ScheduleData) => void;
    updateSchedule: (id: string, data: ScheduleData) => void;
}

export const SchedulesContext = createContext({} as values)

export default function SchedulesProvider({ children }: { children: ReactNode}) {
    const [schedules, setSchedules] = useLocalStorage("schedules", [])
    const [popup, setPopup] = useState({ type: "", msg: "" })
    const [loading, setLoading] = useState(false)
    const {user} = useContext(AuthContext)

    const addSchedule = async (data: ScheduleData) => {
        setLoading(true)
        try {
            const docRef = await addDoc(collection(db, "schedules"), data);
            console.log(docRef)
            getAllSchedules()
            setPopup({ type: "success", msg: "Schedule added successfully" })
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "Error adding schedules" })
            setLoading(false)
        }
    }
    
    const updateSchedule = async (id: string, data: AddPrefixToKeys<string, ScheduleData>) => {
        setLoading(true)
        try {
            const docRef = await updateDoc(doc(db, "schedules", id), data);
            console.log(docRef)
            getAllSchedules()
            setPopup({ type: "success", msg: "Schedule updated successfully" })
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "Error updating schedules" })
            setLoading(false)
        }
    }
    
    const getAllSchedules = async () => {
        setLoading(true)
        try {
            const arr: {id: string}[] = []
            const querySnapshot = await getDocs(query(collection(db, "schedules"), where("user", "==", user?.email)));
            querySnapshot.forEach((doc) => {
                arr.push({...doc.data(), id: doc.id})
            })
            console.log(arr)
            setSchedules(arr)
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "error loading schedules" })
            setLoading(false)
        }
    }

    return (
        <SchedulesContext.Provider value={{ schedules, popup, setPopup, loading, addSchedule, getAllSchedules, updateSchedule }}>
            { children }
        </SchedulesContext.Provider>
    )
}