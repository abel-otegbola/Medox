'use client'
import Button from "@/components/button/button";
import SchedulesLayout from "@/components/schedules/schedules";
import { SchedulesContext } from "@/context/useSchedule";
import { dateParser } from "@/helpers/dateParser";
import { useOutsideClick } from "@/helpers/useClickOutside"
import { ScheduleData, Value } from "@/interface/schedule";
import { Calendar as CalendarIcon, GridFour, List, X } from "@phosphor-icons/react"
import { useContext, useEffect, useState } from "react"
import Calendar from "react-calendar";

export default function SchedulesPage() {
    const [openNewSchedule, setOpenNewSchedule] = useState(false)
    const [layout, setLayout] = useState("Calendar")
    const [openCalendar, setOpenCalendar] = useState(false)
    const [value, setValue] = useState<Value>(new Date())
    const scheduleRef = useOutsideClick(setOpenNewSchedule, false)
    const { schedules } = useContext(SchedulesContext);

    const booked = schedules?.map((schedule: ScheduleData) => dateParser(schedule.date));

    const layoutList = [
        { id: 0, icon: <CalendarIcon />, title: "Calendar"},
        { id: 1, icon: <GridFour />, title: "Grid"},
        { id: 2, icon: <List />, title: "List"},
    ]

    useEffect(() => {
        console.log(schedules)
    }, [schedules])

    const calendarRef = useOutsideClick(setOpenCalendar, false)

    return (
        <div className="w-full">
            <h2 className="flex items-center gap-3 font-semibold md:text-[28px] bg-white dark:bg-dark text-[20px] p-4 border border-transparent border-b-gray/[0.1] dark:border-b-gray/[0.08]">
                <p className={``}><CalendarIcon width={24} /> </p>
                Schedules
            </h2>

            <div className="flex justify-between flex-wrap items-start">

                <div className="w-full relative overflow-hidden">
                    <div className="flex flex-wrap gap-4 justify-between items-center p-4 rounded border border-transparent border-b-gray/[0.1] bg-white dark:bg-dark">

                        {/* Calendar date display */}
                        <div className="relative" ref={calendarRef}>
                            <Button variant="tetiary" className="gap-4 rounded-full" onClick={() => setOpenCalendar(!openCalendar)}>
                                <span className="flex items-center gap-1 uppercase"><CalendarIcon size={16} className="text-fuchsia-600"/></span>
                                <span>{(value?.toLocaleString())}</span>
                            </Button>

                            <div className={`absolute top-[110%] left-0 w-[250px] z-[10] bg-white dark:bg-dark shadow-lg ${ openCalendar ? "block" : "hidden" }`}>
                                <Calendar onChange={setValue} value={value} tileClassName={( { date }) => {
                                    let classes = "tile";

                                    if(booked?.some((b) => b?.getTime() === date.getTime())) {
                                        classes = `${classes} dotted`;
                                    }
                                    return classes;
                                }} />
                            </div>
                        </div>

                        <div className="flex gap-4 justify-between sm:w-fit w-full">

                            {/* layout buttons list */}
                            <div className="flex gap-2 items-center text-lg">
                                {
                                    layoutList.map(item => (
                                        <button 
                                            key={item.id}
                                            title={item.title}
                                            className={`p-2 rounded ${layout === item.title ? "border border-primary shadow-md text-primary" : "bg-gray-500/[0.09]"}`} 
                                            onClick={() => setLayout(item.title)}>
                                            {item.icon}
                                        </button>
                                    ))
                                }
                            </div>

                            {/* add new schedule toggle button */}
                            <Button
                                className="p-3 px-6 shadow-md" 
                                href="/doctor"
                            >Add new
                            </Button>
                        </div>
                    </div>

                    {/* open new schedule modal */}
                    <div className={`${openNewSchedule ? "fixed top-0 left-0 w-full h-screen bg-white/[0.8] dark:bg-dark/[0.8] backdrop-blur-sm flex items-center justify-center z-[3]": ""}`}>
                            <div ref={scheduleRef} className={`h-auto p-8 rounded-[15px] bg-white dark:bg-black w-[350px] border border-gray/[0.3] dark:border-gray/[0.07] shadow-md transition-all duration-700 ${openNewSchedule ? "block" : "hidden"}`}>
                                <div className="flex justify-between items-center">
                                    <h2 className="font-bold text-[16px]">New task</h2>
                                    <button onClick={() => setOpenNewSchedule(false)}><X className="p-2 text-[28px] rounded shadow-lg border border-gray-500/[0.3]" /></button>
                                </div>
                                {/* <NewSchedule /> */}
                            </div>
                    </div>

                    <SchedulesLayout schedules={schedules} value={value} layout={layout} />

                </div>

            </div>
        </div>
    )
}