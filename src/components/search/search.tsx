'use client'
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ReactNode, useState } from "react";

interface dropdownProps {
    className?: string;
    value?: string;
    onChange?: (aug0: string) => void;
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    leftIcon?: ReactNode;
}

export default function Search({ value, onChange, className, disabled, placeholder }: dropdownProps) {
    const [focus, setFocus] = useState(false)

    return (
        <div className="relative flex flex-col w-full gap-1">

            <div className={`flex items-center relative rounded-[4px] bg-white dark:bg-primary/[0.04] dark:text-gray w-full h-[40px] p-1 px-4 border duration-500 z-[10] 
                ${focus ? "border-primary shadow-input-active" : "border-primary/[0.1] "}
                ${className}
            `}>
                <span className="opacity-[0.5]"><MagnifyingGlass size={16} /></span>
                <input 
                    className={` p-2 w-full outline-none bg-transparent
                        ${className} 
                        ${disabled ? "opacity-[0.25]" : ""}
                    `}
                    value={value}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={(e) => onChange ? onChange(e.target.value): ""}
                />
            </div>
        </div>
    )
}