'use client'
import { useOutsideClick } from "@/helpers/useClickOutside";
import { SortAscending } from "@phosphor-icons/react";
import { ReactNode, useState } from "react";

type option = {
  id: string | number;
  icon: ReactNode;
  title: string;
}

interface dropdownProps {
    className?: string;
    disabled?: boolean;
    label?: string;
    name: string;
    value: string | number;
    onChange: (value: string) => void;
    error: string | undefined;
    placeholder?: string;
    options?: option[];
}

export default function Dropdown({ className, disabled, label, name, options, value, onChange, error, placeholder }: dropdownProps) {
    const [focus, setFocus] = useState(false)
    const [active, setActive] = useState<option>({ id: 0, title: "", icon: null })

    const optionsRef = useOutsideClick(setFocus, false)

    return (
        <div ref={optionsRef} className="relative flex flex-col w-full gap-1">
            { label ? <label htmlFor={name} className="text-[12px]">{label}</label> : "" }

            <div className={`flex items-center relative rounded-[4px] bg-white dark:bg-dark dark:text-gray w-full h-[40px] p-1 px-4 border border-gray  dark:border-gray/[0.2] duration-500 z-[10] 
                ${error && !focus ? "border-red text-red" : "border-gray "}
                ${focus ? "border-primary shadow-input-active" : "border-gray "}
                ${ className }
            `}>
                <span className="text-[16px]">{ active.icon || <SortAscending /> }</span>
                <p 
                    className={` p-2 w-full outline-none bg-transparent cursor-pointer
                        ${className} 
                        ${disabled ? "opacity-[0.25]" : ""}
                    `}
                    id={name}
                    onClick={() => setFocus(!focus)}
                >{active.title || placeholder}</p>

                { error && !focus ? <p className="absolute right-2 px-2 text-[12px] bg-white dark:bg-dark dark:text-gray/[0.8] backdrop-blur-sm">{error}</p> : "" }
            </div>

            <div className={`p-2 rounded-[8px] absolute top-[50px] left-0 w-full z-[1000] bg-tetiary dark:bg-dark dark:text-gray shadow-md overflow-y-auto border border-gray/[0.2] ${focus ? "block" : "hidden"}`}>
              {
                options?.map((option: option) => (
                  <div tabIndex={1} key={option.id} onClick={() => {setActive(option); onChange(option.title); setFocus(false)}} className={`p-4 flex w-full items-center cursor-pointer gap-2 mb-[2px] hover:text-primary bg-white dark:bg-dark ${option.title === value ? "text-primary" : ""}`}>
                    <span className="text-[16px]">{option.icon}</span>
                    {option.title}
                  </div>
                ))
              }
            </div>
        </div>
    )
}