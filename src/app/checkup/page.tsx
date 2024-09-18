'use client'
import LogoIcon from "@/assets/icons/logo";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { FilePlus, Stethoscope, User, UserCheck } from "@phosphor-icons/react";
import { useState } from "react";

export default function Checkup() {
    const [data, setData] = useState({ condition: "", location: "",  msg: "" })
    const [active, setActive] = useState(0)

    const handleChange = (index: string, value: string) => {
        setData({ ...data, [index]: value })
    }

    const flow = [
        { id: 0, icon: <User />, title: "Describe your condition", text: "Provide information on the medical condition" },
        { id: 1, icon: <Stethoscope />, title: "Quick Assessments", text: "Answer few important questions." },
        { id: 2, icon: <UserCheck />, title: "Symptoms", text: "State the symptoms you're currently experiencing." },
        { id: 3, icon: <FilePlus />, title: "Finish", text: "Get your report and connect with our doctor." },
    ]

    return (
        <div className="flex flex-col gap-6 items-start md:px-[6%] py-6 px-4">

            <div className="flex w-full border border-gray/[0.09] dark:border-gray/[0.05] bg-tetiary dark:bg-[#000]/[0.2]">

                <div className="md:block hidden md:w-[35%] text-md text-[12px] leading-[120%] p-10 py-[10%] bg-dark/[0.06] dark:bg-[#000]/[0.2]">

                
                <LogoIcon width={40} height={40} className="p-2 rounded border border-primary/[0.2]" /> 

                {
                    flow.map((status) => (
                        <div key={status.id} className={`relative flex my-7 gap-4 items-center ${status.id < active+1 ? "text-green-600" : ""}`}>
                            <span className={`relative text-[20px] p-2 rounded-full border border-dark/[0.2] z-[2] ${status.id < active+1 ? "bg-green-600 text-white" : ""}`}>{status.icon}</span>
                            <div>
                                <h2 className="sm:text-[12px] text-[14px] font-semibold">{status.title}</h2>
                                <p className="opacity-[0.7] text-[12px] mt-1">{status.text}</p>
                            </div>
                        </div>
                    ))
                }

                </div>

                <div className="flex flex-col  p-[10%] flex-1">
                    <div className="flex-1 min-h-[400px]">

                        <div className="flex flex-col gap-1 items-center justify-center">
                            <div className="flex p-8 py-6 mb-4 rounded bg-tetiary/[0.5] dark:bg-black/[0.1] text-gray">
                                <LogoIcon width={50} height={50} className="p-3 rounded border border-primary/[0.09] bg-dark" /> 
                            </div>
                            <h2 className="font-bold text-[16px]">Checkup with Medox</h2>

                            <div className="relative min-h-[250px] w-full overflow-x-hidden overflow-y-auto p-2 my-6">

                                <div className={`w-full absolute top-0 left-0 duration-500 ${active === 0 ? "translate-x-0": "translate-x-[-120%]"}`}>
                                    <p className="text-center">Describe your medical condition so we can connect you with the best healthcare</p>

                                    <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-4 mb-5">
                                        {
                                            [
                                                { id: 0, title: "Emergency Care", example: "Accident, stroke, heart attack", color: "bg-red/[0.09]" },
                                                { id: 1, title: "Chronic Conditions", example: "Diabetes, arthritis, asthma", color: "bg-orange-600/[0.09]" },
                                                { id: 2, title: "Preventive Care", example: "Annual physicals, vaccinations, screenings", color: "bg-green-600/[0.09]" },
                                                { id: 3, title: "Symptom Management", example: "Pain, fatigue, fever", color: "bg-blue-600/[0.09]" },
                                                { id: 4, title: "Mental Health", example: "Anxiety, depression, stress", color: "bg-purple-600/[0.09]" },
                                                { id: 5, title: "Women's Health", example: "Gynecology, obstetrics, menopause", color: "bg-pink-600/[0.09]" },
                                                { id: 6, title: "Men's Health", example: "Prostate health, testosterone, erectile dysfunction", color: "bg-slate/[0.09]" },
                                                { id: 7, title: "Pediatrics", example: "Child development, vaccinations, common childhood illnesses", color: "bg-yellow-600/[0.09]" },
                                                { id: 8, title: "Geriatrics", example: "Age-related conditions, memory loss, mobility issues", color: "bg-gray/[0.09]" },
                                                { id: 9, title: "Specialized Care", example: "Oncology, cardiology, neurology", color: "bg-indigo-600/[0.09]" }
                                            ].map(item => (
                                                <button key={item.id} onClick={() => handleChange("condition", item.title)} className={`text-start p-3 px-4 border ${item.color} ${data.condition === item.title ? "border-2 border-primary text-primary" : "dark:border-gray/[0.04] border-gray/[0.7]" } rounded-[10px] text-[12px]`}>
                                                    <h2 className="font-semibold">{item.title}</h2>
                                                    <p>e.g {item.example}</p>
                                                </button>
                                            ))
                                        }
                                    </div>  
                                </div>
                                
                                <div className={`w-full absolute top-0 left-0 duration-500 ${active === 0 ? "translate-x-[120%]": active === 1 ? "translate-x-0" : "translate-x-[-120%]"}`}>
                                    <div className="flex flex-col gap-6 w-full">
                                        <p className="text-center">Provide these information for our records</p>
                                        <Input className="rounded-full" placeholder="Describe the symptoms you are experiencing" />
                                        <Input className="rounded-full" placeholder="How long have you been experiencing this symptoms" />
                                        <Input className="rounded-full" placeholder="Any known triggers or causes" />
                                    </div>                    
                                </div>
                                
                                <div className={`w-full absolute top-0 left-0 duration-500 ${active < 2 ? "translate-x-[120%]": active === 2 ? "translate-x-0" : "translate-x-[-120%]"}`}>
                                    <div className="flex flex-col gap-6 w-full">
                                        <p className="text-center">Symptoms</p>
                                        <Input className="rounded-full" placeholder="Describe the symptoms you are experiencing" />
                                    </div>                    
                                </div>
                            </div>

                            <div className="flex justify-between w-full">
                                {
                                    active > 0 ?
                                    <Button variant="secondary" onClick={() => setActive(active - 1)} className="rounded-full">Back</Button>
                                    :
                                    <span></span>
                                }
                                <Button onClick={() => setActive(active + 1)} className="rounded-full">Continue</Button>
                            </div>

                        </div>

                    </div>
                
                    
                </div>

            </div>

        </div>
    )
}