import { ITalentsProps } from "@/interface/store";
import { FacebookLogo, Heart, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function TalentCard({ talent }: {talent: ITalentsProps}) {

    return (
        <div className="flex flex-col gap-4 p-2 rounded-[8px] border border-gray/[0.5] dark:border-gray/[0.08]">

            <div className="w-full h-[200px] relative rounded bg-gray/[0.3] dark:bg-gray/[0.08]">
                <Link href={"/talent?id=" + talent.id}>
                    <Image src={talent.img} sizes="100%" fill alt={talent.name} className="rounded object-cover" />
                </Link>                
            </div>
            <div className="flex flex-col gap-3 px-1">
                <div className="flex items-center gap-2">
                    {
                        talent.instruments?.map((item: string, i: number) => (
                            <span key={i} className="opacity-[0.7] hover:opacity-[1] p-1 px-2 text-[8px] border border-gray /[0.8] rounded">{item}</span>
                        ))
                    }
                </div>
                <Link href={"/talent?id=" + talent.id}>
                    <h3 className="">{talent.name}</h3>
                </Link>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <Link href="https://facebook.com"><FacebookLogo size={16} /></Link>
                        <Link href="https://twitter.com"><TwitterLogo size={16} /></Link>
                        <Link href="https://twitter.com"><InstagramLogo size={16} /></Link>
                    </div>
                    {talent.available ? <p className="text-green-600 text-[10px] flex items-center gap-1"><span className="animate-ping p-[2px] rounded-full bg-green-600"></span>Available</p>: <p className="text-red text-[10px]">Booked</p>}
                </div>
            </div>
        </div>
    )
}