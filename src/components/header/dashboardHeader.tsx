'use client'
import { User } from "@phosphor-icons/react";
import Menu from "../navMenu/navMenu";
import Link from "next/link";
import Search from "../search/search";
import { useState } from "react";
import { useOutsideClick } from "@/helpers/useClickOutside";
import LogoIcon from "@/assets/icons/logo";


export default function DashboardHeader() {
    const [toggleMenu, setToggleMenu] = useState(false)
    
    const menuRef = useOutsideClick(setToggleMenu, false)
    return (
        <div className="flex items-center justify-between sticky top-0 left-0 w-full z-[50] px-6 bg-white dark:bg-dark dark:text-gray p-3 border border-transparent border-b-primary/[0.1]">
            <Link href="/" className="md:ml-3">
                <div className="flex items-center">
                    <LogoIcon width={30}/>
                    <h2 className="font-bold text-xl">edo<span className="text-primary">x</span></h2>
                </div>
            </Link>

            <div ref={menuRef} className="flex items-center justify-end gap-6 xl:w-[40%] md:w-[35%] relative">
                <div className="md:block hidden flex-1">
                    <Search placeholder="Search Products, Gigs and Talents" className="rounded-full" />
                </div>
                <button className="p-2 bg-gray/[0.3] dark:bg-gray/[0.08] rounded-full" onClick={() => setToggleMenu(!toggleMenu)}><User size={16}/></button>
                {
                    toggleMenu && <Menu />
                }
            </div>
        </div>
    )
}