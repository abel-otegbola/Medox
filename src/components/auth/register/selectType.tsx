import { data } from "@/app/register/page";
import Image from "next/image";

export default function SelectType({ data, setData }: { data: data, setData: (augs: data ) => void }) {
    return (
        <div className="flex flex-col gap-2 py-6 flex-1">
                <h2 className="text-[18px] font-bold border border-transparent border-b-gray/[0.4] pb-2">Choose type of account</h2>

                <div className="grid sm:grid-cols-2 gap-4 py-6 flex-1 items-center">
                    <button className={`flex items-center px-6 py-3 rounded border border-primary/[0.2] w-full hover:border-primary 
                        ${data.role === "patient" ? "text-white bg-primary " : "bg-white dark:bg-dark/[0.3]"}`}
                        onClick={() => setData({...data, role: "patient" })}
                    >
                        <Image src="/images/patient.svg" alt="patient" width={50} height={50} className="rounded-full bg-white" />
                        <div className="p-2 text-start">
                            <h3 className="font-semibold mb-1 text-[16px]">User</h3>
                            <p className="text-[10px]">Find a doctor anytime, access medical records.</p>
                        </div>
                    </button>
                    <button className={`flex items-center px-6 py-3 rounded border border-primary/[0.2] w-full hover:border-primary 
                        ${data.role === "doctor" ? "text-white bg-primary " : "bg-white dark:bg-dark/[0.3]"}`}
                        onClick={() => setData({...data, role: "doctor" })}
                    >
                        <Image src="/images/doctor.svg" alt="doctor" width={50} height={50} className="rounded-full bg-white" />
                        <div className="p-2 text-start">
                            <h3 className="font-semibold mb-1 text-[16px]">Doctor</h3>
                            <p className="text-[10px]">The easiest way to fetch your patients easily.</p>
                        </div>
                    </button>
                </div>

            </div>   
    )
}