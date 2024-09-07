'use client'
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";

interface dropdownProps {
    className?: string;
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    leftIcon?: any;
}

export default function Search({ className, disabled, placeholder }: dropdownProps) {
    const [focus, setFocus] = useState(false)

    return (
        <div className="relative flex flex-col w-full gap-1">

            <div className={`flex items-center relative rounded-[4px] bg-white dark:bg-dark dark:text-gray w-full h-[40px] p-1 px-4 border border-gray  dark:border-gray/[0.2] duration-500 z-[10] 
                ${focus ? "border-primary shadow-input-active" : "border-gray "}
            `}>
                <span className="opacity-[0.5]"><MagnifyingGlass size={16} /></span>
                <input 
                    className={` p-2 w-full outline-none bg-transparent
                        ${className} 
                        ${disabled ? "opacity-[0.25]" : ""}
                    `}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            </div>
        </div>
    )
}