"use client"
import OverviewChart from "@/components/charts/overview"
import { AuthContext } from "@/context/useAuth"
import { Calendar, ChartBar, UserPlus } from "@phosphor-icons/react"
import Link from "next/link"
import { useContext } from "react"

export default function Dashboard() {
    const { user } = useContext(AuthContext)

    return (
        <div className="md:bg-gray/[0.09] dark:md:bg-gray/[0.03] w-full h-full">
            <div className="flex flex-col gap-2 p-4 border border-transparent border-b-gray/[0.6] dark:border-b-gray/[0.08] bg-white dark:bg-dark dark:text-gray">
                <h2 className="capitalize font-semibold text-[14px]"><span className="">Good Morning, Dr. </span>{user?.displayName || user?.email?.split("@")[0]}</h2>
                <p className="opacity-[0.8]">Hope you&apos;re in a good mood. There are 56 patients waiting for you.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 md:m-4 flex-wrap gap-4">
                <div className="flex flex-col gap-4 w-full min-h-[300px] px-4 pb-4 border border-gray/[0.6] dark:border-gray/[0.08] md:rounded-[8px] bg-white dark:bg-dark dark:text-gray">
                    <div className="flex justify-between items-center py-4 border border-transparent border-b-gray/[0.6] dark:border-b-gray/[0.08]">
                    
                        <h2 className="flex gap-2 items-center capitalize text-[14px] font-semibold text-[16px]">
                            <ChartBar size={20} color="green" />
                            Overview
                        </h2>
                        <div>
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

                <div className="flex flex-col gap-4 w-full min-h-[300px] px-4 pb-4 border border-gray/[0.6] dark:border-gray/[0.08] md:rounded-[8px] bg-white dark:bg-dark dark:text-gray">
                    <div className="flex justify-between items-center py-5 border border-transparent border-b-gray/[0.6] dark:border-b-gray/[0.08]">
                    
                        <h2 className="flex gap-2 items-center capitalize text-[14px] font-semibold text-[16px]">
                            <UserPlus size={20} color="orange" />
                            Patients
                        </h2>

                        <Link href="/dashboard/patients" className="text-[10px] text-primary px-2 font-bold underline">See All</Link>
                    </div>

                    <table className="table-auto rounded-lg text-[10px] overflow-hidden text-left w-full">
                        <thead className="border border-gray/[0.6] dark:border-gray/[0.08] ">
                            <tr className="bg-primary/[0.08]">
                                <th className="p-2 py-3 font-medium">Name</th>
                                <th className="p-2 py-3 font-medium">Ward No</th>
                                <th className="p-2 py-3 font-medium">Priority</th>
                                <th className="p-2 py-3 font-medium">Start Date</th>
                                <th className="p-2 py-3 font-medium">End Date</th>
                            </tr>
                        </thead>
                        
                        <tbody className="border border-gray/[0.6] dark:border-gray/[0.08] ">
                            {
                                [
                                    {  id: 0, name: "Adam Messi", age: "26", sex: "Male", wardNo: "#123456", priority: "Medium", startDate: "June, 3, 2024", endDate: "-- --"},
                                    {  id: 1, name: "Celine Alista", age: "22", sex: "Female", wardNo: "#123456", priority: "Low", startDate: "May, 23, 2024", endDate: "June, 9, 2024"},
                                    {  id: 2, name: "Malachi Ardo", age: "22", sex: "Male", wardNo: "#123456", priority: "High", startDate: "December, 7, 2023", endDate: "May, 4, 2024"},
                                ].map(patient => (
                                    <tr key={patient.id} className={patient.id%2 === 0 ? "" : "bg-primary/[0.04] border border-primary/[0.1]"}>
                                        <td className="flex items-center gap-2 p-2 py-4">
                                            <p className="p-2 bg-primary/[0.09] rounded-full uppercase">{patient.name.charAt(0) + patient.name.charAt(1)}</p>
                                            <p className="flex flex-col gap-1">
                                                <span className="font-semibold">{patient.name}</span>
                                                <span>{patient.sex}, {patient.age} Years</span>
                                            </p>
                                        </td>
                                        <td className="p-2 py-3">{patient.wardNo}</td>
                                        <td className="p-2 py-3"><span className={`${patient.priority === "High" ? "bg-emerald-500/[0.3]" : patient.priority === "Medium" ? "bg-fuchsia-500/[0.3]" : "bg-red/[0.3]"} py-1 px-2 rounded-lg text-[8px]`}>{patient.priority}</span></td>
                                        <td className="p-2 py-3">{patient.startDate}</td>
                                        <td className="p-2 py-3">{patient.endDate}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col gap-4 md:mx-4 mb-4 min-h-[300px] px-4 pb-4 border border-gray/[0.6] dark:border-gray/[0.08] md:rounded-[8px] bg-white dark:bg-dark dark:text-gray">
                <div className="flex justify-between items-center py-5 border border-transparent border-b-gray/[0.6] dark:border-b-gray/[0.08]">
                
                    <h2 className="flex gap-2 items-center capitalize text-[14px] font-semibold text-[16px]">
                        <Calendar size={20} color="purple" />
                        Schedules
                    </h2>

                    <Link href="/dashboard/schedules" className="text-[10px] text-primary px-2 font-bold underline">See All</Link>
                </div>
            </div>
        </div>
    )
}