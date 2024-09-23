'use client'
import DoctorCard from "@/components/cards/doctorsCard";
import Map from "@/components/map/map";
import Search from "@/components/search/search";
import { IDoctorProps } from "@/interface";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Doctors() {
    const [doctors, setDoctors] = useState<IDoctorProps[]>()
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("Dr")

    useEffect(() => {
        setLoading(true)
        // npiregistry.cms.hhs.gov/api/?version=2.1
        axios.get(`https://clinicaltables.nlm.nih.gov/api/npi_org/v3/search?terms=${search}&count=20`)
        .then(res => {
            const data = res.data[3]
            const doctors = data.map((item: string[]) => {
                return {
                    id: item[1],
                    img: "/images/doctor.jpg",
                    name: item[0],
                    available: true,
                    expertise: [ item[2] ],
                    address: item[3]
                }
            })
            setDoctors(doctors)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })
    }, [search])

    return (
        <div className="flex flex-col gap-6 items-start md:px-[12%] px-4 pb-8 bg-tetiary dark:bg-dark">
            
            <div className="w-full py-6">
                <h2 className="flex items-center gap-3 font-semibold md:text-[32px] text-[24px] py-4 border border-transparent border-b-gray/[0.1] dark:border-b-gray/[0.08]">Doctors</h2>
                <Search className="rounded-full" value={search} onChange={setSearch} placeholder="Search doctors..." />
            </div>

            <div className="w-full h-[300px]">
                <Map />
            </div>

            <div className="grid gap-4 w-full">
            {
                loading ? 
                <p>Loading</p>
                :
                doctors?.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor}/>
                ))
            }
            </div>

        </div>
    )
}