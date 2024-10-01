'use client'
import { AuthContext } from "@/context/useAuth";
import { SchedulesContext } from "@/context/useSchedule";
import { useContext, useEffect, useState } from "react";
import Input from "../input/input";
import Dropdown from "../dropdown/dropdown";
import { Spinner, X } from "@phosphor-icons/react";
import { ScheduleData } from "@/interface/schedule";
import Button from "../button/button";


export default function NewSchedule({ schedule, doctor, setClose }: { schedule?: ScheduleData, doctor: string, setClose: (aug0: boolean) => void}) {
  const { user } = useContext(AuthContext);
  const { addSchedule, updateSchedule, loading } = useContext(SchedulesContext);
  const [data, setData] = useState<ScheduleData>({ id: "", title: "", date: "", durationStart: "", durationEnd: "", status: "Upcoming", description: "", type: "", })



  useEffect(() => {
    if(schedule) {
        setData(schedule)
    //   setTitle(schedule.title)
    //   setDate(schedule.date.split("T")[0])
    //   setStatus(schedule.status)
    //   setType(schedule.type)
    //   setDescription(schedule.description)
    //   setDurationStart(schedule.duration.split(",")[0])
    //   setDurationEnd(schedule.duration.split(",")[1])
    }
  }, [schedule])

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-dark/[0.6] flex items-center justify-center z-[100]">        
        <div className="flex flex-col p-4 gap-4 max-w-[300px] bg-white dark:bg-black w-full">
            <Button className="px-2 py-1 mb-4" variant="tetiary" onClick={() => setClose(false)}><X /></Button>
            <Input label={"title"} onChange={(e) => setData({ ...data, title: e.target.value })} value={data.title} type={"text"} />
            <Input label={"Date"} onChange={(e) => setData({ ...data, date: e.target.value })} value={data.date} type={"date"} />

            <div className="grid grid-cols-2 gap-2">
                <Input label={"Start Time"} onChange={(e) => setData({ ...data, durationStart: e.target.value })} value={data.durationStart} type={"time"} />
                <Input label={"End Time"} onChange={(e) => setData({ ...data, durationEnd: e.target.value })} value={data.durationEnd} type={"time"} />
            </div>

            <Dropdown
              label={"Status"} 
              onChange={(value) => setData({ ...data, status: value })} 
              value={data.status} 
              options={[
                {id: 0, title: "Pending"}, {id: 1, title: "Upcoming"},{id: 2, title: "On-hold"}, {id: 3, title: "Completed"}
              ]} 
            />

            <Dropdown
              label={"Category"} 
              onChange={(value) => setData({ ...data, type: value })} 
              value={data.type || "General"} 
              options={[
                {id: 0, title: "General"}, {id: 1, title: "Study"},{id: 2, title: "Checkup"}, {id: 3, title: "Fitness"}, {id: 4, title: "Meal"}, {id: 5, title: "Others"}
              ]} 
            />

            <Input label={"Description"} onChange={(e) => setData({ ...data, description: e.target.value })} value={data.description} type={"text"} />

            <Button type="button" className="p-2 w-full bg-purple text-white rounded"
                onClick={() => 
                    schedule ?
                    updateSchedule(schedule.id, { ...data, patient: schedule.patient, doctor: schedule.doctor })
                    :
                    addSchedule({...data, patient: user?.email || "", doctor })
                }
            >
                {loading ? <Spinner className="animate-spin text-[20px]" /> : "Submit"}
            </Button>

        </div>
      
    </div>
  );
}