'use client'
import LogoIcon from "@/assets/icons/logo";
import Button from "@/components/button/button";
import Dropdown from "@/components/dropdown/dropdown";
import Input from "@/components/input/input";
import { askGemini } from "@/utils/geminiApi";
import { PaperPlaneTilt, User } from "@phosphor-icons/react";
import { nanoid } from "nanoid";
import Markdown from "markdown-to-jsx"
import { useState } from "react";
import { LoaderIcon } from "react-hot-toast";
import Image from "next/image";

export default function Checkup() {
    const [data, setData] = useState({ condition: "", location: "",  msg: "" })
    const [prompts, setPrompts] = useState<{ type: "bot" | "user", id: string, result: string }[]>([])
    const [loading, setLoading] = useState(false)

    const handleChange = (index: string, value: string) => {
        setData({ ...data, [index]: value })
    }

    const promptBot = () => {
        setLoading(true)
        askGemini(`Hello! I have a health condition which is ${data.condition}, I currently live in ${data.location} region. List simple steps to follow in this condition.`)
        .then(result => {
            setPrompts([ { type: "bot", id: nanoid(5), result } ])
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })
    }

    return (
        <div className="flex flex-col gap-6 items-start md:px-[12%] py-6 px-4">
            
            <div className="rounded-t-[8px]">
                <h2 className="flex items-center gap-2 text-[20px] font-bold">
                    <Image src="/images/doctor.svg" alt="doctor" width={40} height={40} className="rounded-full p-1" />
                    Checkup with Medox
                </h2>
            </div>

            <div className="rounded-[24px] w-full border border-primary/[0.09]">

                <div className="flex flex-col p-4">
                    <div className="flex-1 min-h-[300px]">

                        <div className="flex item-start gap-2 md:w-[50%]">
                            <LogoIcon width={30} className="p-1 rounded-full border border-primary/[0.09]" /> 
                            <div className="p-2 px-4 rounded bg-primary/[0.05] border border-gray/[0.4] dark:border-gray/[0.06]">
                                <h2 className="flex items-center gap-3 font-semibold my-1">Condition and Location</h2>
                                <p className="mb-4">Select the health condition and your location so we can connect you with the right healthcare.</p>
                                            
                                <div className="flex flex-col gap-4 w-full pb-5">
                                    <Dropdown name="" value={data.condition} onChange={(value) => handleChange("condition", value)} error="" className="rounded-full" placeholder="What type of condition do you need checkup on."
                                        options={[
                                            {id: 0, title: "Emergency condition", icon: ""},
                                            {id: 1, title: "An accident", icon: ""},
                                            {id: 2, title: "Chronic condition", icon: ""},
                                            {id: 3, title: "Symptoms check", icon: ""},
                                            {id: 4, title: "General Health checkups", icon: ""},
                                        ]}
                                    />          
                                    <Dropdown name="" value={data.condition} onChange={(value) => handleChange("location", value)} error="" className="rounded-full" placeholder="Select your location"
                                        options={[
                                            {id: 0, title: "Lagos", icon: ""},
                                            {id: 1, title: "Abia", icon: ""},
                                            {id: 2, title: "Nassarawa", icon: ""},
                                            {id: 3, title: "Yobe", icon: ""},
                                            {id: 4, title: "Ogun", icon: ""},
                                        ]}
                                    />
                                    <Button variant="tetiary" className="rounded-full" disabled={data.condition === "" || data.location === ""} onClick={() => promptBot()}>Continue</Button>

                                </div>
                            </div>
                        </div>

                        {
                            loading ? <LoaderIcon /> : ""
                        }


                        <div className="flex flex-wrap gap-2 items-center py-4 max-h-[350px] overflow-y-auto">
                        {
                            prompts.map((item) => (
                                <div key={item.id} className="p-4">
                                    <div className={`markdown flex flex-col gap-2 p-2 mb-[2px] text-[12px] rounded-[8px] w-fit ${item.type === "bot" ? "" : "ml-auto"}`}><Markdown>{item.result}</Markdown></div>
                                    <p className={`text-lg rounded-full p-2 border border-gray-500/[0.2] w-fit ${item.type === "bot" ? "" : "ml-auto"}`}>{item.type === "bot" ? <LogoIcon width={16} /> : <User/>}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                
                    <div className="flex flex-col items-end gap-2 p-4 border border-primary/[0.09] rounded-[16px]">
                        <Input name="message" className="border-none shadow-none" placeholder="Send message" type="text" value={data.msg} onChange={(e) => handleChange("msg", e.target.value)} error=""/>
                        <Button className="rounded-full gap-2 pl-6" onClick={() => promptBot()}><PaperPlaneTilt size={16} /> Send</Button>
                    </div>
                </div>

            </div>

        </div>
    )
}