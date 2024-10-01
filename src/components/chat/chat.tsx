"use client"
import { dataProps } from "@/app/checkup/page"
import LogoIcon from "@/assets/icons/logo"
import Button from "@/components/button/button"
import Input from "@/components/input/input"
import { askGemini } from "@/utils/geminiApi"
import { PaperPlaneTilt, User } from "@phosphor-icons/react"
import Markdown from "markdown-to-jsx"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { LoaderIcon } from "react-hot-toast"

export default function Chat({ data }: { data: dataProps }) {
    const [prompts, setPrompts] = useState<{ type: "bot" | "user", id: string, result: string }[]>([])
    const [loading, setLoading] = useState(false)
    const [newPrompt, setNewPrompt] = useState("")

    
    const startBot = () => {
        setLoading(true)
        askGemini(`Hello! my name is ${data.fullname} I have this conditions: ${data.condition}, my medical history is ${data.medicalHistory} and these symptoms: ${data.symptoms}. I currently reside in ${data.location} region. Give me a short diagnosis with each possible conditions having probability. Also provide health care centers i can visit based on my location.`)
        .then(result => {
            setPrompts([ { type: "bot", id: nanoid(5), result } ])
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })
    }
        
    const promptBot = () => {
        setNewPrompt("")
        setLoading(true)
        askGemini(newPrompt)
        .then(result => {
            setPrompts([ { type: "bot", id: nanoid(5), result } ])
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })
    }

    useEffect(() => {
        startBot()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>


            <div className="flex flex-wrap gap-2 items-center py-4 max-h-[350px] overflow-y-auto">
            {
                prompts.map((item) => (
                    <div key={item.id} className="flex items-start gap-2 md:w-[90%]">
                        <p className={`p-[6px] py-0 rounded-full border border-primary/[0.09]`}>{item.type === "bot" ? <LogoIcon width={16} /> : <User/>}</p>
                        
                        <div className="p-2 px-4 rounded bg-primary/[0.05] border border-gray/[0.4] dark:border-gray/[0.06]">
                            <div className={`markdown flex flex-col gap-2 p-2 mb-[2px] text-[12px] rounded-[8px] w-fit ${item.type === "bot" ? "" : "ml-auto"}`}>
                                <Markdown>{item.result}</Markdown>
                            </div>
                        </div>
                    </div>
                ))
            }
            
            {
                loading ? <LoaderIcon /> : ""
            }
            </div>

            <div className="flex items-end mx-auto w-full gap-2 p-1 bg-white dark:bg-dark border border-primary/[0.2] rounded-full">
                <Input name="message" className="border-none rounded-full shadow-none" value={newPrompt} onChange={(e) => setNewPrompt(e.target.value)} placeholder="Write a message here..." type="text" error=""/>
                <Button className="rounded-full gap-2 px-3" onClick={() => promptBot()}><PaperPlaneTilt size={16} /></Button>
            </div>
        </div>
    )
}