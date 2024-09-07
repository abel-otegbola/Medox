import { data } from "@/app/register/page";
import Image from "next/image";

export default function SelectType({ data, setData }: { data: data, setData: (augs: data ) => void }) {
    return (
        <div className="flex flex-col gap-2 py-6 items-center ">
                <h2 className="text-[20px] font-bold">Choose type of account</h2>

                <div className="flex gap-4 flex-wrap py-6">
                    <button className={`flex items-center px-6 py-1 rounded border border-primary/[0.2] md:max-w-[300px] w-full hover:border-primary 
                        ${data.role === "patient" ? "text-white bg-primary " : "bg-white"}`}
                        onClick={() => setData({...data, role: "patient" })}
                    >
                        <Image src="/images/patient.svg" alt="patient" width={80} height={80} className="rounded-full bg-white" />
                        <div className="p-4 text-start">
                            <h3 className="font-semibold mb-3 text-[18px]">User</h3>
                            <p>Find a doctor anytime, access medical records and more</p>
                        </div>
                    </button>
                    <button className={`flex items-center px-6 py-1 rounded border border-primary/[0.2] md:max-w-[300px] w-full hover:border-primary 
                        ${data.role === "doctor" ? "text-white bg-primary " : "bg-white"}`}
                        onClick={() => setData({...data, role: "doctor" })}
                    >
                        <Image src="/images/doctor.svg" alt="doctor" width={80} height={80} className="rounded-full bg-white" />
                        <div className="p-4 text-start">
                            <h3 className="font-semibold mb-3 text-[18px]">Doctor</h3>
                            <p>The easiest way to fetch your patients easily.</p>
                        </div>
                    </button>
                </div>

            </div>   
    )
}