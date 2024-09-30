'use client'
import LogoIcon from "@/assets/icons/logo";
import Button from "@/components/button/button";
import DoctorCard from "@/components/cards/doctorsCard";
import Dropdown from "@/components/dropdown/dropdown";
import Input from "@/components/input/input";
import Textarea from "@/components/textarea/textarea";
import { ProfilesContext } from "@/context/useProfile";
import { symptoms } from "@/data/symptoms";
import { FilePlus, Stethoscope, Trash, User, UserCheck } from "@phosphor-icons/react";
import { useContext, useState } from "react";

export default function Checkup() {
    const [data, setData] = useState({ condition: "", fullname: "",  age: "", medicalHistory: "", symptoms: ["Headache", "Fever"] })
    const [symptom, setSymptom] = useState("")
    const [active, setActive] = useState(0)
    const { getAllProfiles, profiles, loading } = useContext(ProfilesContext)

    const handleChange = (index: string, value: string) => {
        setData({ ...data, [index]: value })
    }

    const handleNext = () => {
        if(active === 0) {
            if(data.condition !== "") {
                setActive(1)
            }
        }
        else if (active === 1) {
            if(data.fullname !== "" && data.age !== "" && data.medicalHistory !== "") {
                setActive(2)
            }
        }
        else if(active === 2) {
            setActive(3)
            getAllProfiles()
        }
        else if(active === 3) {
            setActive(4)
        }
    }

    const addSymptom = () => {
        if(symptom === "") {

        }
        else if(!data.symptoms.includes(symptom)) {
            setData({ ...data, symptoms: [...data.symptoms, symptom] })
        }
    }

    const flow = [
        { id: 0, icon: <User />, title: "Describe your condition", text: "Provide information on the medical condition" },
        { id: 1, icon: <Stethoscope />, title: "Quick Assessments", text: "Answer few important questions." },
        { id: 2, icon: <UserCheck />, title: "Symptoms", text: "State the symptoms you're currently experiencing." },
        { id: 3, icon: <FilePlus />, title: "Checkup", text: "Get your report and connect with our doctor." },
    ]

    return (
        <div className="flex flex-col gap-6 items-start md:px-[6%] py-6 px-4">

            <div className="flex w-full border border-gray/[0.09] dark:border-gray/[0.05] bg-tetiary dark:bg-[#000]/[0.2]">

                <div className="md:block hidden md:w-[35%] text-md text-[12px] leading-[120%] p-10 py-[10%] bg-dark text-gray dark:bg-[#000]/[0.2]">

                
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

                <div className="flex flex-col p-[10%] flex-1">
                    <div className="flex-1 min-h-[400px]">

                        <div className="flex flex-col gap-1 items-center">
                            <div className="flex p-8 py-6 rounded bg-tetiary/[0.5] dark:bg-black/[0.1] text-gray">
                                <LogoIcon width={50} height={50} className="p-3 rounded border border-primary/[0.09] bg-dark" /> 
                            </div>
                            <h2 className="font-bold text-[16px]">Checkup with Medox</h2>

                            <div className="relative min-h-[330px] w-full overflow-x-hidden overflow-y-auto p-2 my-6">

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
                                            ].map(item => (
                                                <button key={item.id} onClick={() => handleChange("condition", item.title)} className={`text-start p-3 px-4 border ${item.color} ${data.condition === item.title ? "border-2 border-primary text-primary" : "dark:border-gray/[0.04] border-gray/[0.7]" } rounded-[10px] text-[12px]`}>
                                                    <h2 className="font-semibold">{item.title}</h2>
                                                    <p className="text-[10px]">e.g {item.example}</p>
                                                </button>
                                            ))
                                        }
                                    </div>  
                                </div>
                                
                                <div className={`w-full absolute top-0 left-0 duration-500 ${active === 0 ? "translate-x-[120%]": active === 1 ? "translate-x-0" : "translate-x-[-120%]"}`}>
                                    <div className="flex flex-col gap-4 w-full">
                                        <p className="text-center">Administrative reports and medical history</p>
                                        <div>
                                            <p className="text-[12px] font-bold mb-1">Full name</p>
                                            <Input className="rounded" placeholder="Please enter your full name" value={data.fullname} onChange={(e) => setData({ ...data, fullname: e.target.value })} />
                                        </div>
                                        <div>
                                            <p className="text-[12px] font-bold mb-1">Age</p>
                                            <Input className="rounded" placeholder="Please enter your age" type="number" value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })}  />
                                        </div>
                                        <div>
                                            <p className="text-[12px] font-bold mb-1">Medical History</p>
                                            <Textarea className="rounded" placeholder="Briefly describe your medical history?" value={data.medicalHistory} onChange={(e) => setData({ ...data, medicalHistory: e.target.value })} />
                                        </div>
                                    </div>                    
                                </div>
                                
                                <div className={`w-full absolute top-0 left-0 duration-500 ${active < 2 ? "translate-x-[120%]": active === 2 ? "translate-x-0" : "translate-x-[-120%]"}`}>
                                    <div className="flex flex-col gap-6 w-full">
                                        <p className="text-center">What are the health symptoms you are experiencing</p>
                                        <div className="flex gap-2">
                                            <Dropdown className="rounded" placeholder="Describe the symptoms you are experiencing" value={symptom} onChange={(value) => setSymptom(value)}
                                                options={symptoms.sort((a, b) => a.description.localeCompare(b.description)).map(item => {
                                                    return { id: item.id, title: item.description, icon: "" }
                                                })}
                                            />
                                            <Button onClick={() => addSymptom()}>Add</Button>
                                        </div>

                                        <table className="table-auto sm:text-[10px] text-[10px] overflow-hidden text-left w-full min-w-[250px]">
                                            <thead  className="border border-gray/[0.6] dark:border-gray/[0.08] ">
                                                <tr className="bg-primary/[0.08]">
                                                    <th className="p-2">S/N</th>
                                                    <th className="p-2">Symptom</th>
                                                    <th className="p-2">action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="border border-gray/[0.6] dark:border-gray/[0.08] ">
                                                {
                                                    data.symptoms.map((symptom: string, i:number) => (
                                                        <tr key={i} className="font-medium">
                                                            <td className="p-2">{i + 1}</td>
                                                            <td className="p-2 flex-1">{symptom}</td>
                                                            <td className="p-2"><Button variant="tetiary" onClick={() => setData({ ...data, symptoms: data.symptoms.filter(item => item !== symptom) })} className="h-[20px] px-1"><Trash /></Button></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>                    
                                </div>

                                <div className={`w-full absolute top-0 left-0 duration-500 ${active < 3 ? "translate-x-[120%]": active === 3 ? "translate-x-0" : "translate-x-[-120%]"}`}>
                                    <div className="flex flex-col gap-6 w-full">
                                        <p className="text-center">Provide answers to the questions to help our doctor assist you better</p>
                                        
                                    </div>                    
                                </div>

                                <div className={`w-full absolute top-0 left-0 duration-500 ${active < 4 ? "translate-x-[120%]": active === 4 ? "translate-x-0" : "translate-x-[-120%]"}`}>
                                    <div className="flex flex-col gap-6 w-full">
                                        <p className="text-center">Choose one of the available doctors or find health centers around you</p>
                                        <div className="grid gap-4 w-full">
                                        {
                                            loading ? 
                                            <p>Loading</p>
                                            :
                                            profiles?.map(doctor => (
                                                <DoctorCard key={doctor.id} doctor={doctor}/>
                                            ))
                                        }
                                        </div>
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
                                <Button onClick={() => handleNext()} className="rounded-full">Continue</Button>
                            </div>

                        </div>

                    </div>
                
                    
                </div>

            </div>

        </div>
    )
}