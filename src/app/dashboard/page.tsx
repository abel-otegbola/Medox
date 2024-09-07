"use client"
import OverviewChart from "@/components/charts/overview"
import { AuthContext } from "@/context/useAuth"
import { useContext } from "react"

export default function Dashboard() {
    const { user } = useContext(AuthContext)

    return (
        <div className="md:p-4 md:bg-gray/[0.2] dark:md:bg-gray/[0.05] w-full h-full">
            <div className="flex p-4 border border-gray/[0.6] dark:border-gray/[0.08] md:rounded-[8px] bg-white dark:bg-dark dark:text-gray">
                <h2 className="capitalize"><span className="font-semibold text-lg">Welcome, </span>{user?.displayName || user?.email.split("@")[0]}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 md:mt-4 flex-wrap gap-4">
                <div className="flex w-full min-h-[300px] p-4 border border-gray/[0.6] dark:border-gray/[0.08] md:rounded-[8px] bg-white dark:bg-dark dark:text-gray">
                    <OverviewChart />
                </div>

                <div className="flex w-full p-4 border border-gray/[0.6] dark:border-gray/[0.08] md:rounded-[8px] bg-white dark:bg-dark dark:text-gray">
                    <h2 className="capitalize text-md">Orders</h2>
                </div>
            </div>
        </div>
    )
}