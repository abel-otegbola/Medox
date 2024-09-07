'use client'
import LogoIcon from "@/assets/icons/logo";
import DoctorForm from "@/components/auth/register/doctorForm";
import SelectType from "@/components/auth/register/selectType";
import Button from "@/components/button/button";
import { AuthContext } from "@/context/useAuth";
import { PaperPlaneTilt, User } from "@phosphor-icons/react";
import { UserSwitch } from "@phosphor-icons/react/dist/ssr";
import { useContext, useState } from "react";

export interface data { role: string, email: string, fullname: string, password: string }

export default function Register() {
    const { signUp, loading } = useContext(AuthContext)
    const [flow, setFlow] = useState(0)
    const [data, setData] = useState<data>({ role: "", email: "", fullname: "", password: "" })

    const steps = [
        { id: 0, heading: "Choose type of Account", text: "Select user or doctor account to continue", icon: <UserSwitch size={16}/> },
        { id: 1, heading: "Personal Details", text: "Provide necessary credentials to setup your account", icon: <User size={16}/> },
        { id: 2, heading: "Finish", text: "Get started using medox ", icon: <PaperPlaneTilt size={16} /> },
    ]

    return (
        <div className="min-h-[500px] flex mt-[3%] gap-8 md:px-[10%] py-5 justify-center">

            <div className="lg:flex flex-col sticky hidden w-[500px] h-[600px] top-[80px] left-0 p-12 rounded-[20px] border border-primary/[0.09] bg-gray/[0.09]">

                <div className="flex items-center mb-4">
                    <LogoIcon width={30}/>
                    <h2 className="font-bold text-xl">edo<span className="text-primary">x</span></h2>
                </div>
                
                <div className="py-6 flex flex-col gap-4">
                    {
                        steps.map(step => (
                            <button key={step.id} className={`flex items-start
                                ${flow === step.id ? "opacity-[1] text-primary" : "opacity-[0.5] text-dark/[0.8]"}`}
                            >
                                <span className="p-[5px] rounded-full border border-primary/[0.2]">{step.icon}</span>
                                <div className="p-2 text-start">
                                    <h3 className="font-medium mb-3 leading-[0px]">{step.heading}</h3>
                                    <p className="text-[10px]">{step.text}</p>
                                </div>
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className="px-[5%] py-[5%] md:w-[800px]">
                <h1 className="text-[40px] font-bold">Create Your Account</h1>     
                <p className="w-[80%] mt-2 mb-3">Provide every credential appropriately. We ensure your data is secured.</p>    

                <div className="flex flex-col justify-center border border-primary/[0.09] min-h-[200px] mt-6 rounded-lg px-6 bg-gray/[0.09] dark:bg-gray/[0.03]">
                    {
                        flow === 0 ?
                            <SelectType data={data} setData={setData} />            
                        : 
                        flow === 1 ? 
                            <DoctorForm data={data} setData={setData} loading={loading}/>
                        :
                        ""
                    }

                    <div className="flex justify-end gap-4 py-6 w-full border border-transparent border-t-gray/[0.4]">
                        {
                            flow > 0 ?
                            <Button className="text-right rounded-full" variant="tetiary" onClick={() => setFlow(flow - 1)}>Back</Button>   
                            : "" 
                        }
                        {
                            flow === 2 ?
                            <Button className="text-right rounded-full" onClick={() => signUp(data?.email, data?.password)} >Finish</Button>     
                            : 
                            <Button className="text-right rounded-full" onClick={() => setFlow(flow + 1)}>Continue</Button>  
                        } 
                    </div>
                </div>
            </div>

        </div>
    )
}