"use client"
import { usePathname } from "next/navigation";
import DashboardHeader from "./dashboardHeader";
import Header from "./header";

export default function CheckDashboard() {
    const pathname = usePathname()

    return (        
        pathname.includes("dashboard") ? <DashboardHeader /> : <Header />
    )

}