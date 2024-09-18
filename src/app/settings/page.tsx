"use client"
import { ReactNode, useEffect, useState } from "react";
import { useLocalStorage } from "@/customHooks/useLocaStorage";
import { Desktop, Moon, Sun } from "@phosphor-icons/react";
import Button from "@/components/button/button";
import Dropdown from "@/components/dropdown/dropdown";

interface Theme {
    id: number, icon: ReactNode, title: string
}
export interface Themes extends Array<Theme>{}


function Settings() {
    const [theme, setTheme] = useState("")
    const [font, setFont] = useLocalStorage("size", "14px")

    const themes: Themes = [
        { id: 0, icon: <Desktop />, title: "System" },
        { id: 1, icon: <Sun />, title: "light" },
        { id: 2, icon: <Moon />, title: "dark" },
    ]
    
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setTheme("dark")
        } else {
            document.documentElement.classList.remove('dark')
            setTheme("light")
        }
        if(!localStorage.theme) {
            setTheme("System")
        }
    }, [theme])

    const themeChange = (value: string) => {
        setTheme(value)
        if(value === 'light') {
            localStorage.theme = 'light'
        }
        else if(value === 'dark') {
            localStorage.theme = 'dark'
        }  
        else {
            localStorage.removeItem('theme')
        } 
    }

    return (
        <>
        <div className="md:flex items-start md:px-[6%] px-4">
            
            <div className="md:m-2 flex-1 py-6">
                <h2 className="flex items-center gap-3 font-semibold md:text-[32px] text-[24px] py-4 border border-transparent border-b-gray/[0.1] dark:border-b-gray/[0.08]">Settings</h2>


                <div className="py-4 border border-transparent border-b-gray/[0.2] dark:border-b-gray/[0.08]">
                    <h3 id="appearance" className="py-2 text-primary">Appearance</h3>
                    <p className="py-4">Select or customize your ui theme</p>
                    <div className="flex gap-4 py-2">
                        {
                            themes.map(item => {
                                return (
                                    
                                <Button key={item.id} variant={item.title !== theme ? "tetiary" : "primary"} className="gap-2 pl-4 rounded-full" onClick={() => themeChange(item.title)} >
                                    <span className="md:text-lg text-2xl opacity-[0.6]">{item.icon}</span>
                                    <span className="md:inline md:text-[12px] md:opacity-[0.6] text-[10px]">{item.title}</span>
                                </Button>
                                )
                            })
                        }
                    </div>

                    
                </div>

                <div className="py-4 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.08]">
                    <h3 id="preferences" className="py-2 text-primary">Preferences</h3>
                    <p className="py-4">Font size</p>
                    <div className="">
                        <Dropdown name="font" className="rounded-full" placeholder="Select Font" value={font} onChange={setFont} error="" 
                            options={[
                                { id: 0, title: "Small", icon: "" },
                                { id: 1, title: "Medium", icon: "" },
                                { id: 2, title: "Large", icon: "" },
                            ]}
                        />
                    </div>
                </div>
                
            </div>

        </div>
        </>
    )
}

export default Settings;