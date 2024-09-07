'use client'

import { AuthContext } from "@/context/useAuth";
import { Gear, House, SignOut } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function Menu () {
    const pathname = usePathname()
    const { logOut } = useContext(AuthContext)

    const menu = [
        { id: 1, title: "Dashboard", to: "/dashboard", icon: <House /> },
        { id: 2, title: "Settings", to: "/settings", icon: <Gear /> },
    ]

    return (
        <div className="flex flex-col gap-2 p-2 w-[150px] rounded shadow-md border border-gray/[0.3] dark:border-gray/[0.1] absolute top-12 right-0 bg-white dark:bg-dark dark:text-gray">
            { 
                menu.map(item => (
                    <Link
                        key={item.id}
                        href={item.to}
                        className={`flex items-center gap-2 h-[32px] p-[8px] hover:text-primary font-semibold rounded-[4px]
                            ${pathname === item.to ? "bg-tetiary dark:bg-gray/[0.08] text-primary" : ""}
                        `}
                    >
                        <span className="md:text-lg text-2xl opacity-[0.6]">{item.icon}</span>
                        <span className="md:inline opacity-[0.6]">{item.title}</span>
                    </Link>
                )) 
            }

            <button 
                onClick={() => logOut()}
                className={`flex items-center gap-2 h-[32px] p-[8px] hover:text-primary font-semibold rounded-[4px]
                `}
            >
                <span className="md:text-lg text-2xl opacity-[0.6]"><SignOut /></span>
                <span className="md:inline opacity-[0.6]">Logout</span>
            </button>
        </div>       
    )
}