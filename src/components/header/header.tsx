'use client'
import Tab from "../tab/tab";
import { Headphones, House, Info, User } from "@phosphor-icons/react";
import { ReactNode, useContext, useState } from "react";
import Menu from "../navMenu/navMenu";
import Link from "next/link";
import LogoIcon from "@/assets/icons/logo";
import { useOutsideClick } from "@/helpers/useClickOutside";
import { AuthContext } from "@/context/useAuth";
import Button from "../button/button";

type navTab =  {
    id: number | string,
    label: string,
    to: string,
    icon: ReactNode
}

export default function Header() {
    const { user } = useContext(AuthContext)
    const [toggleMenu, setToggleMenu] = useState(false)

    const navTabs: navTab[] = [
        { id: 0, label: "Home", to: "/", icon: <House /> },
        { id: 1, label: "About", to: "/shop", icon: <Info /> },
        { id: 2, label: "Contact Us", to: "/talents", icon: <Headphones /> },
    ]
    
    const menuRef = useOutsideClick(setToggleMenu, false)

    return (
        <div className="flex items-center justify-between sticky md:top-2 top-0 left-0 z-[50] bg-white/[0.8] dark:bg-dark/[0.9] dark:text-gray p-3 md:m-2 md:mx-[10%] md:rounded-full backdrop-blur-sm border border-primary/[0.1] dark:border-primary/[0.09]">
            <Link href="/" className="md:ml-3">
                <LogoIcon width={30} />
            </Link>

            <nav className="md:flex items-center justify-between gap-4 hidden">
                {
                    navTabs.map((tab: navTab) => (
                        <Tab key={tab.id} label={tab.label} to={tab.to} icon={tab.icon} />
                    ))
                }
            </nav>

            <div ref={menuRef} className="flex items-center justify-end gap-6 relative">
                {
                    !user ?
                    <Button href="/login" className="-my-2 md:rounded-full shadow">Login</Button>
                    :
                    <button className="p-2 bg-gray/[0.3] dark:bg-gray/[0.08] rounded-full" onClick={() => setToggleMenu(!toggleMenu)}><User size={16}/></button>
                }
                {
                    toggleMenu && <Menu />
                }
            </div>
        </div>
    )
}