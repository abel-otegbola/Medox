'use client'
import { createContext, ReactNode, useContext, useState } from "react"
import { addDoc, AddPrefixToKeys, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { useLocalStorage } from "@/customHooks/useLocaStorage";
import { AuthContext } from "./useAuth";
import { DoctorData } from "@/interface/profile";


type values = {
    popup: { type: string, msg: string };
    loading: boolean;
    setPopup: (aug0: values["popup"]) => void;
    profiles: DoctorData[];
    addProfile: (aug0: DoctorData) => void;
    getAllProfiles: () => void;
    updateProfile: (id: string, data: DoctorData) => void;
    getSingleProfile: (aug0: DoctorData) => void;
}

export const ProfilesContext = createContext({} as values)

export default function ProfilesProvider({ children }: { children: ReactNode}) {
    const [profiles, setProfiles] = useLocalStorage("Profiles", [])
    const [popup, setPopup] = useState({ type: "", msg: "" })
    const [loading, setLoading] = useState(false)
    const {user} = useContext(AuthContext)

    const addProfile = async (data: DoctorData) => {
        setLoading(true)
        try {
            const docRef = await addDoc(collection(db, "users"), data);
            console.log(docRef)
            getAllProfiles()
            setPopup({ type: "success", msg: "Profile added successfully" })
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "Error adding profile" })
            setLoading(false)
        }
    }
    
    const updateProfile = async (id: string, data: AddPrefixToKeys<string, DoctorData>) => {
        setLoading(true)
        try {
            const docRef = await updateDoc(doc(db, "users", id), data);
            console.log(docRef)
            getAllProfiles()
            setPopup({ type: "success", msg: "Profile updated successfully" })
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "Error updating Profiles" })
            setLoading(false)
        }
    }
    
    const getAllProfiles = async () => {
        setLoading(true)
        try {
            const arr: {id: string}[] = []
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                arr.push({...doc.data(), id: doc.id})
            })
            console.log(arr)
            setProfiles(arr)
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "error loading Profiles" })
            setLoading(false)
        }
    }
    
    const getSingleProfile = async () => {
        setLoading(true)
        try {
            const arr: {id: string}[] = []
            const querySnapshot = await getDocs(query(collection(db, "users"), where("email", "==", user?.email)));
            querySnapshot.forEach((doc) => {
                arr.push({...doc.data(), id: doc.id})
            })
            console.log(arr)
            setLoading(false)
            return arr
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "error loading Profile" })
            setLoading(false)
        }
    }

    return (
        <ProfilesContext.Provider value={{ profiles, popup, setPopup, loading, addProfile, getAllProfiles, updateProfile, getSingleProfile }}>
            { children }
        </ProfilesContext.Provider>
    )
}