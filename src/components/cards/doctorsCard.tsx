import { DoctorData } from "@/interface/profile";
import Link from "next/link";

export default function DoctorCard({ doctor }: {doctor: DoctorData}) {

    return (
        <div className="flex items-center gap-2 p-4 w-full rounded-[8px] bg-white dark:bg-[#000]/[0.3] border border-gray/[0.5] dark:border-gray/[0.08]">
            <p className="p-2 px-[10px] bg-primary/[0.09] font-bold rounded-full uppercase sm:block hidden">{doctor?.fullname.charAt(0) + doctor?.fullname.charAt(1)}</p>
            <div className="flex flex-col gap-2 px-1 justify-between">
                <Link href={"/doctor?id=" + doctor?.id}>
                    <h3 className="font-bold">{doctor?.fullname}</h3>
                    <p className="text-[10px]">{doctor?.email}</p>
                </Link>
                <div className="flex items-center gap-2">
                    {
                        doctor?.expertise?.map((item: string, i: number) => (
                            <span key={i} className="text-[10px]">{item}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}