import LogoIcon from "@/assets/icons/logo"
import Button from "@/components/button/button"
import Input from "@/components/input/input"
import { askGemini } from "@/utils/geminiApi"
import { PaperPlaneTilt, User } from "@phosphor-icons/react"
import Markdown from "markdown-to-jsx"
import { nanoid } from "nanoid"
import { useState } from "react"
import { LoaderIcon } from "react-hot-toast"

export default function Chat() {
    const [prompts, setPrompts] = useState<{ type: "bot" | "user", id: string, result: string }[]>([])
    const [loading, setLoading] = useState(false)

    
    const promptBot = () => {
        setLoading(true)
        askGemini(`Hello! As an Ai support, I want to diagnose a patient after which i will connect the patient to a doctor. the patient health condition which is, and currently reside in region. Generate an interview with the patient to get all necessary information before connecting with the doctor.`)
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
                <Input name="message" className="border-none rounded-full shadow-none" placeholder="Write a message here..." type="text" error=""/>
                <Button className="rounded-full gap-2 px-3" onClick={() => promptBot()}><PaperPlaneTilt size={16} /></Button>
            </div>
        </div>
    )
}