import { IDoctorProps } from "@/interface";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorCard({ doctor }: {doctor: IDoctorProps}) {

    return (
        <div className="flex flex-col gap-4 p-2 w-full rounded-[8px] border border-gray/[0.5] dark:border-gray/[0.08]">

            <div className="w-full lg:h-[200px] h-[300px] relative rounded bg-gray/[0.3] dark:bg-gray/[0.08]">
                <Link href={"/doctor?id=" + doctor.id}>
                    <Image src={doctor.img} sizes="100%" fill alt={doctor.name} className="rounded object-cover object-center" />
                </Link>                
            </div>
            <div className="flex flex-col gap-3 px-1">
                <div className="flex items-center gap-2">
                    {
                        doctor.expertise?.map((item: string, i: number) => (
                            <span key={i} className="p-1 px-2 text-[10px] border border-gray/[0.8] rounded">{item}</span>
                        ))
                    }
                </div>
                <Link href={"/doctor?id=" + doctor.id}>
                    <h3 className="">{doctor.name}</h3>
                </Link>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <Link href="https://facebook.com"><FacebookLogo size={16} /></Link>
                        <Link href="https://twitter.com"><TwitterLogo size={16} /></Link>
                        <Link href="https://twitter.com"><InstagramLogo size={16} /></Link>
                    </div>
                    {doctor.available ? <p className="text-green-600 text-[10px] flex items-center gap-1"><span className="animate-ping p-[2px] rounded-full bg-green-600"></span>Available</p>: <p className="text-red text-[10px]">Booked</p>}
                </div>
            </div>
        </div>
    )
}