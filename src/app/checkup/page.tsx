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

export default function Checkup() {
    const [data, setData] = useState({ condition: "", location: "",  msg: "" })
    const [prompts, setPrompts] = useState<{ type: "bot" | "user", id: string, result: string }[]>([])

    const handleChange = (index: string, value: string) => {
        setData({ ...data, [index]: value })
    }

    const promptBot = () => {
        askGemini(`Hello! I have a health condition which is ${data.condition}, I currently live in ${location} region. What can i do`)
        .then(result => {
            setPrompts([ { type: "bot", id: nanoid(5), result } ])
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="flex flex-col gap-6 items-start md:px-[12%] px-4">
            <h2 className="flex w-full items-center gap-3 font-semibold md:text-[32px] text-[24px] py-4 border border-transparent border-b-gray/[0.1] dark:border-b-gray/[0.08]">Checkup</h2>

            <div className="rounded-[8px] w-full border border-primary/[0.09]">
                <div className="bg-primary text-white p-4 rounded-t-[8px]">
                    <h2 className="flex items-center gap-2 text-[16px]"><LogoIcon width={30} className="p-1 rounded-full bg-dark" /> Chat with Medox</h2>
                </div>

                <div className="flex flex-col p-4">
                    <div className="flex-1 min-h-[300px]">
                        <h2 className="flex items-center gap-3 font-semibold mb-2">Condition and Location</h2>
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
                            <Button variant="tetiary" className="rounded-full" disabled={data.condition === "" || data.location === ""}>Continue</Button>

                        </div>

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
                
                    <div className="flex flex-col items-end gap-2 p-4 border border-primary/[0.09] rounded-[6px]">
                        <Input name="message" className="border-none shadow-none" placeholder="Send message" type="text" value={data.msg} onChange={(e) => handleChange("msg", e.target.value)} error=""/>
                        <Button className="rounded-full gap-2" onClick={() => promptBot()}><PaperPlaneTilt size={16} /> Send</Button>
                    </div>
                </div>

            </div>

        </div>
    )
}