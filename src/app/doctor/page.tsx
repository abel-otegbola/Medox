'use client'

import Button from "@/components/button/button"
import DoctorCard from "@/components/cards/doctorsCard"
import NewSchedule from "@/components/schedules/createSchedule"
import { ProfilesContext } from "@/context/useProfile"
import { UserPlus } from "@phosphor-icons/react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useContext, useEffect, useState } from "react"

export default function Doctors() {
    const { getAllProfiles, profiles, loading } = useContext(ProfilesContext)
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(profiles.length < 0) {
            getAllProfiles()
        }
    }, [profiles]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="flex flex-col items-start md:px-[7%] px-4 pb-8 bg-tetiary dark:bg-dark">
            

            <div className="flex gap-6 md:flex-row flex-col w-full">
                <div className="flex gap-6 flex-col md:w-[60%] p-4 border border-transparent md:border-r-gray/[0.3]">
                    {
                        profiles?.filter(item => item.id === id).map(doctor => (
                            <>
                                <Image src={doctor?.img || "/images/doctor-avatar.jpg"} alt="doctor" width={400} height={300} className="rounded bg-gray" />
                                <div className="flex items-center gap-2 w-full rounded-[8px]">
                                    <div className="flex flex-col gap-2 px-1 w-full">
                                        <h3 className="font-bold flex justify-between items-center w-full">FULLNAME: {doctor?.fullname}</h3>
                                        <p className="text-[10px] flex justify-between items-center w-full">EMAIL: {doctor?.email}</p>
                                        <div className="flex items-center gap-2">
                                            {
                                                doctor?.expertise?.map((item: string, i: number) => (
                                                    <span key={i} className="text-[10px]">{item}</span>
                                                ))
                                            }
                                        </div>
                                        <div className="flex gap-4">
                                            <Button onClick={() => setOpen(!open)}>Schedule meeting</Button>
                                            <Button href="/dashboard/schedules">View schedules</Button>
                                        </div>
                                        {
                                            open ? <NewSchedule doctor={doctor?.email} setClose={setOpen} /> : ""
                                        }
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
                
                <div className=" md:w-[40%] p-4">
                    <h2 className="flex gap-2 py-2 items-center capitalize text-[14px] font-semibold text-[14px]">
                        <UserPlus size={20} color="purple" />
                        Doctors
                    </h2>
                    <div className="grid grid-cols-2 items-start gap-4">
                    {
                        loading ? 
                        <p>Loading</p>
                        :
                        profiles?.filter(item => item.role !== "doctor").map(doctor => (
                            <DoctorCard key={doctor.id} doctor={doctor}/>
                        ))
                    }
                    </div>
                </div>
            </div>

        </div>
    )
}