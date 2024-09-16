"use client"
import OverviewChart from "@/components/charts/overview"
import SchedulesLayout from "@/components/schedules/schedules"
import { PatientsTable } from "@/components/tables/patientsTable"
import { AuthContext } from "@/context/useAuth"
import { Calendar, ChartBar, UserPlus } from "@phosphor-icons/react"
import Link from "next/link"
import { useContext } from "react"


export default function Dashboard() {
    const { user } = useContext(AuthContext)

    const data = [
        {  "id": "0", "name": "Adam Messi", "age": "26", "sex": "Male", "ward no": "#123456", "priority": "Medium", "start date": "June, 3, 2024", "end date": "-- --"},
        {  "id": "1", "name": "Celine Alista", "age": "22", "sex": "Female", "ward no": "#123456", "priority": "Low", "start date": "May, 23, 2024", "end date": "June, 9, 2024"},
        {  "id": "2", "name": "Malachi Ardo", "age": "22", "sex": "Male", "ward no": "#123456", "priority": "High", "start date": "December, 7, 2023", "end date": "May, 4, 2024"},
    ]

    return (
        <div className="w-full h-full">
            <div className="flex flex-col gap-2 p-4 border border-transparent border-b-gray/[0.6] dark:border-b-gray/[0.08] bg-white dark:bg-dark dark:text-gray">
                <h2 className="capitalize font-semibold text-[14px]"><span className="">Good Morning, Dr. </span>{user?.displayName || user?.email?.split("@")[0]}</h2>
                <p className="opacity-[0.8]">Hope you&apos;re in a good mood. There are 56 patients waiting for you.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 md:m-4 flex-wrap gap-4">
                <div className="flex flex-col gap-4 w-full min-h-[300px] md:my-0 my-8 px-4 pb-4 md:border border-gray/[0.6] dark:border-gray/[0.08] md:rounded-[8px] bg-white dark:bg-dark dark:text-gray">
                    <div className="flex justify-between items-center py-4 border border-transparent border-b-gray/[0.6] dark:border-b-gray/[0.08]">
                    
                        <h2 className="flex gap-2 items-center capitalize text-[14px] font-semibold text-[14px]">
                            <ChartBar size={20} color="green" />
                            Overview
                        </h2>
                        <div className="px-2">
                            <p className="flex items-center gap-1 text-[8px] mb-1">
                                <span className="h-2 w-2 bg-primary rounded-full"></span>
                                <span>Schedules</span>
                            </p>
                            <p className="flex items-center gap-1 text-[8px]">
                                <span className="h-2 w-2 bg-red rounded-full"></span>
                                <span>Patients</span>
                            </p>
                        </div>
                    </div>
                    <OverviewChart />
                </div>

                <div className="flex flex-col gap-4 w-full min-h-[300px] md:my-0 my-8 px-4 pb-4 border border-gray/[0.6] dark:border-gray/[0.08] md:rounded-[8px] bg-white dark:bg-dark dark:text-gray">
                    <div className="flex justify-between items-center py-5 md:border border-transparent border-b-gray/[0.6] dark:border-b-gray/[0.08]">
                    
                        <h2 className="flex gap-2 items-center capitalize text-[14px] font-semibold text-[14px]">
                            <UserPlus size={20} color="orange" />
                            Patients
                        </h2>

                        <Link href="/dashboard/patients" className="text-[10px] text-primary px-2 font-bold underline">See All</Link>
                    </div>
                    <PatientsTable data={data} fields={["Name", "Ward no", "Priority", "Start date", "End date"]} />
                </div>
            </div>

            <div className="flex flex-col gap-4 md:mx-4 mb-4 max-h-[300px] overflow-y-auto md:my-0 my-8 px-4 pb-4 border border-gray/[0.6] dark:border-gray/[0.08] md:rounded-[8px] bg-white dark:bg-dark dark:text-gray">
                <div className="flex justify-between items-center py-5 md:border border-transparent border-b-gray/[0.6] dark:border-b-gray/[0.08]">
                
                    <h2 className="flex gap-2 items-center capitalize text-[14px] font-semibold text-[14px]">
                        <Calendar size={20} color="purple" />
                        Schedules
                    </h2>

                    <Link href="/dashboard/schedules" className="text-[10px] text-primary px-2 font-bold underline">See All</Link>
                </div>
                
                <SchedulesLayout schedules={[]} value={new Date()} layout={"Calendar"} />
            </div>
        </div>
    )
}