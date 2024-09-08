"use client"
import { usePathname } from "next/navigation";
import DashboardHeader from "./dashboardHeader";
import Header from "./header";
import { useEffect } from "react";

export default function CheckDashboard() {
    const pathname = usePathname()

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
    })

    return (        
        pathname.includes("dashboard") ? <DashboardHeader /> : <Header />
    )

}