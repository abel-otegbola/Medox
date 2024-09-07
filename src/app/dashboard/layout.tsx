"use client"
import Button from "@/components/button/button";
import { AuthContext } from "@/context/useAuth";
import { Bell, Download, Gear, House, Question, User } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname()
    const { logOut } = useContext(AuthContext)
    const [openTablet, setOpenTablet] = useState(false)


    const general = [
        { id: 1, title: "Dashboard", to: "/dashboard", icon: <House /> },
        { id: 2, title: "Profile", to: "/dashboard/profile", icon: <User /> },
        { id: 3, title: "Orders", to: "/dashboard/orders", icon: <Download /> },
        { id: 4, title: "Request", to: "/dashboard/requests", icon: <Question /> },
        { id: 5, title: "Inbox", to: "/dashboard/inbox", icon: <Bell /> },
    ]
    const preferences = [
        { id: 6, title: "Settings", to: "/settings", icon: <Gear /> },
    ]
        return (
            <div className="flex min-h-[90vh]">
                <div className="flex flex-col justify-between md:w-[250px] p-2 border border-gray/[0.3] dark:border-gray/[0.08] bg-white dark:bg-dark dark:text-gray">
                    <div className="flex flex-col gap-2 p-2 w-full rounded " onMouseOver={() => setOpenTablet(true)} onMouseOut={() => setOpenTablet(false)}>
                        <p className="opacity-[0.4] font-bold pt-4 pb-2 md:block hidden">GENERAL</p>
                        { 
                            general.map(item => (
                                <Link
                                    key={item.id}
                                    href={item.to}
                                    className={`flex items-center gap-2 h-[40px] p-3 border hover:border-gray/[0.5] dark:hover:border-gray/[0.2] hover:text-primary font-semibold rounded-[4px]
                                        ${pathname === item.to ? "bg-tetiary dark:bg-gray/[0.05] text-primary border border-gray/[0.5] dark:border-gray/[0.2] " : "border-transparent "}
                                    `}
                                >
                                    <span className="text-lg opacity-[0.6]">{item.icon}</span>
                                    <span className="md:block hidden">{item.title}</span>
                                </Link>
                            )) 
                        }
                        <p className="opacity-[0.4] font-bold pt-6 pb-2 md:block hidden">PREFERENCES</p>
                        { 
                            preferences.map(item => (
                                <Link
                                    key={item.id}
                                    href={item.to}
                                    className={`flex items-center gap-2 h-[40px] p-3 border hover:border-gray/[0.5] dark:hover:border-gray/[0.2] hover:text-primary font-semibold rounded-[4px]
                                        ${pathname === item.to ? "bg-tetiary dark:bg-gray/[0.08] text-primary border border-gray/[0.5] dark:border-gray /[0.2] " : "border-transparent "}
                                    `}
                                >
                                    <span className="text-lg opacity-[0.6]">{item.icon}</span>
                                    <span className="md:block hidden">{item.title}</span>
                                </Link>
                            )) 
                        }

                    </div>  
                    
                </div>
                <div className="flex-1">
                    {children}
                </div>
            </div>
        )
}