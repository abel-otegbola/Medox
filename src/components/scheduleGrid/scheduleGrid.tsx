import { scheduleLayout } from "@/helpers/scheduleLayout"
import { useOutsideClick } from "@/helpers/useClickOutside"
import { ScheduleData } from "@/interface/schedule"
import { X } from "@phosphor-icons/react"
import { useState } from "react"

export default function ScheduleGrid({element, layout}: { element: ScheduleData, layout: string }) {
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

    const scheduleEditRef = useOutsideClick(setOpenEdit, false)
    const scheduleRef = useOutsideClick(setOpen, false)

    return (
        <>
        <div 
            ref={scheduleRef} 
            onClick={() => setOpen(!open)}
            onKeyDown={(e) => e.key === "Enter" ? setOpen(!open) : ""}
            style={{ top: scheduleLayout(element.duration).top, height: !open ? scheduleLayout(element.duration).height : "auto" }} 
            className={`m-[2px] ${layout === "Calendar" ? `absolute text-[10px] w-[97%]` : `${!open ? "max-h-[150px] min-h-[80px]" : ""} text-[12px]`} 
            left-0 border duration-500 rounded px-2 py-1 pb-2 break-inside-avoid min-h-[65px] z-[1]
            ${element.status === "Completed" ? "bg-emerald-400/[0.2] border-green-400/[0.4]" 
            : element.status === "Upcoming" ? "bg-yellow-400/[0.2] border-orange-400/[0.4]" 
            : element.status === "On-hold" ? "bg-red-400/[0.2] border-red-400/[0.4]" 
            : "bg-purple/[0.3] border-purple/[0.4]"}`}>          
            
            <button className="font-medium mt-1 text-start">{element.title}</button>  
            <p className="text-[10px] mt-1">{element.duration.replace(",", " - ")}</p>  
            <p className="text-[10px] mt-1">{element.date}</p>  

            <div className={`p-2 rounded bg-slate-100/[0.09] mr-2 mt-2 ${open ? "block" : "hidden"}`}>
                <p className="mb-2">Description: {element.description}</p>
                <button className="p-4 py-1 bg-gray-500/[0.2] rounded" onClick={() => setOpenEdit(true)}>Edit</button>
            </div>


        </div>

        
        <div className={`${openEdit ? "fixed top-0 left-0 w-full h-screen bg-white/[0.8] dark:bg-black/[0.8] backdrop-blur-sm flex items-center justify-center z-[4]": ""}`}>
            <div ref={scheduleEditRef} className={`h-auto p-8 rounded-[15px] bg-white dark:bg-black w-[350px] border border-gray-500/[0.1] shadow-md z-[12] transition-all duration-700 ${openEdit ? "block" : "hidden"}`}>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-[16px]">Edit task</h2>
                    <button onClick={() => setOpenEdit(false)}><X className="p-2 text-[28px] rounded shadow-lg border border-gray-500/[0.3]" /></button>
                </div>
                {/* <NewSchedule schedule={element} /> */}
            </div>
        </div>
    </>
    )
}