'use client'
import DoctorForm from "@/components/auth/register/doctorForm";
import SelectType from "@/components/auth/register/selectType";
import Button from "@/components/button/button";
import { AuthContext } from "@/context/useAuth";
import { useContext, useState } from "react";

export interface data { role: string, email: string, fullname: string, password: string }

export default function Register() {
    const { signUp, loading } = useContext(AuthContext)
    const [flow, setFlow] = useState(0)
    const [data, setData] = useState<data>({ role: "", email: "", fullname: "", password: "" })

    return (
        <div className="min-h-[500px] flex flex-col mt-[3%] gap-4 px-4 py-5 items-center justify-center">

            <h1 className="text-[32px] font-bold">Create Your Account</h1>     
            <p className="text-center w-[80%]">Provide every credential appropriately. We ensure your data is secured and only shared based on your consent.</p>    

            <div className="border border-primary/[0.09] min-h-[400px] mt-6 rounded-lg px-12 bg-gray/[0.09] ">
                {
                    flow === 0 ?
                        <SelectType data={data} setData={setData} />            
                    : 
                    flow === 1 ? 
                        <DoctorForm data={data} setData={setData} loading={loading}/>
                    :
                    ""
                }

                <div className="flex justify-end gap-4 py-6 w-full border border-transparent border-t-gray/[0.1]">
                    {
                        flow > 0 ?
                        <Button className="text-right" variant="tetiary" onClick={() => setFlow(flow - 1)}>Back</Button>   
                        : "" 
                    }
                    {
                        flow === 2 ?
                        <Button className="text-right" onClick={() => signUp(data?.email, data?.password)} >Finish</Button>     
                        : 
                        <Button className="text-right" onClick={() => setFlow(flow + 1)}>Continue</Button>  
                    } 
                </div>
            </div>

        </div>
    )
}