"use client"
import { Bell, Calendar, Gear, House, User, UserPlus } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
    const pathname = usePathname()
    const [toggleSidebar, setToggleSidebar] = useState(false)

    const general = [
        { id: 1, title: "Dashboard", to: "/dashboard", icon: <House /> },
        { id: 2, title: "Profile", to: "/dashboard/profile", icon: <User /> },
        { id: 3, title: "Schedules", to: "/dashboard/schedules", icon: <Calendar /> },
        { id: 4, title: "Patients", to: "/dashboard/patients", icon: <UserPlus /> },
        { id: 5, title: "Inbox", to: "/dashboard/inbox", icon: <Bell /> },
    ]
    const preferences = [
        { id: 6, title: "Settings", to: "/settings", icon: <Gear /> },
    ]

    return (
        <>
            <button className="md:hidden fixed top-3 right-5 p-2 bg-gray/[0.3] dark:bg-gray/[0.08] rounded-full z-[100]" onClick={() => setToggleSidebar(!toggleSidebar)}><User size={16}/></button>

            <div className={`flex flex-col justify-between md:sticky fixed top-[55px] right-0 h-screen z-[20] md:w-[250px] w-full p-2 border border-gray/[0.3] dark:border-gray/[0.08] bg-white dark:bg-dark dark:text-gray 
                    ${ toggleSidebar ? "translate-x-0" : "md:translate-x-0 translate-x-[100%]" } duration-700`}>

                <div className="flex flex-col gap-2 p-2 w-full rounded ">
                    <p className="opacity-[0.4] font-medium pt-4 pb-2">GENERAL</p>
                    { 
                        general.map(item => (
                            <Link
                                key={item.id}
                                href={item.to}
                                className={`flex items-center gap-2 h-[40px] p-3 border hover:border-gray/[0.5] dark:hover:border-gray/[0.06] hover:text-primary font-medium rounded-[4px]
                                    ${pathname === item.to ? "bg-tetiary dark:bg-gray/[0.01] text-primary border border-gray/[0.5] dark:border-gray/[0.03] " : "border-transparent "}
                                `}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="">{item.title}</span>
                            </Link>
                        )) 
                    }
                    <p className="opacity-[0.4] font-medium pt-6 pb-2">PREFERENCES</p>
                    { 
                        preferences.map(item => (
                            <Link
                                key={item.id}
                                href={item.to}
                                className={`flex items-center gap-2 h-[40px] p-3 border hover:border-gray/[0.5] dark:hover:border-gray/[0.2] hover:text-primary font-medium rounded-[4px]
                                    ${pathname === item.to ? "bg-tetiary dark:bg-gray/[0.08] text-primary border border-gray/[0.5] dark:border-gray /[0.2] " : "border-transparent "}
                                `}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="">{item.title}</span>
                            </Link>
                        )) 
                    }

                </div>  
                
            </div>
        </>
        )
}