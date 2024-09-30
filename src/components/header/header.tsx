'use client'
import Tab from "../tab/tab";
import { House, Info, Stethoscope } from "@phosphor-icons/react";
import { ReactNode, useContext, useState } from "react";
import Menu from "../navMenu/navMenu";
import Link from "next/link";
import LogoIcon from "@/assets/icons/logo";
import { useOutsideClick } from "@/helpers/useClickOutside";
import { AuthContext } from "@/context/useAuth";
import Button from "../button/button";
import Avatar from "../avatar/avatar";

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
        { id: 1, label: "Checkup", to: "/checkup", icon: <Stethoscope /> },
        { id: 2, label: "About", to: "/about", icon: <Info /> },
    ]
    
    const menuRef = useOutsideClick(setToggleMenu, false)

    return (
        <div className="flex items-center justify-between sticky md:top-2 top-0 left-0 z-[50] bg-white/[0.8] dark:bg-dark/[0.9] dark:text-gray md:p-3 p-4 md:m-2 md:mx-[5%] md:rounded-full backdrop-blur-sm border border-gray/[0.09] dark:border-gray/[0.03]">
            <Link href="/" className="md:ml-3">
                <div className="flex items-center">
                    <LogoIcon width={30}/>
                    <h2 className="font-bold text-xl">edo<span className="text-primary">x</span></h2>
                </div>
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
                    <Button href="/login" className="-my-2 rounded-full shadow">Login</Button>
                    :
                    <button className="bg-gray/[0.3] dark:bg-gray/[0.08] rounded-full" onClick={() => setToggleMenu(!toggleMenu)}>
                        <Avatar />
                    </button>
                }
                {
                    toggleMenu && <Menu close={setToggleMenu} />
                }
            </div>
        </div>
    )
}