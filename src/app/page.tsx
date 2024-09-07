"use client"
import CircleText from "@/assets/icons/circleText";
import Button from "@/components/button/button";
import { MagnifyingGlass, Play } from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">

      <header className="min-h-screen flex flex-wrap justify-between gap-4 md:px-[10%] px-4 md:py-[5%] py-12">
        <div className="flex flex-col gap-6 lg:w-[48%]">
          <h1 className="sm:text-[40px] text-[32px] font-bold mx-auto">Access Quality Healthcare from Anywhere</h1>
          <p className="mb-2">Our platform connects you with experienced doctors for online consultations, making healthcare more accessible and convenient.</p>
          <div className="flex gap-6 items-center">
            <Button href="/doctors" className="gap-3 pl-4"><MagnifyingGlass /> Search Doctors</Button>
            <div className="flex relative h-[65px] w-[65px] items-center justify-center">
              <CircleText width={65} height={65} className="animate-spin-slow absolute top-0 left-0"/>
              <Play weight="fill" size={24} className="text-primary cursor-pointer z-[2]"/>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 -mb-3 pt-4 border border-transparent border-t-primary/[0.1]">
            <Image src="/images/avatars.webp" alt="avatars" width={100} height={50} />
            <Image src="/images/stars.webp" alt="avatars" width={100} height={20} />
          </div>
          <p className="font-medium"><b className="font-bold">5.0</b> from 120+ reviews</p>
        </div>

        <div className="flex py-[3%] items-start lg:w-[50%]">
          <Image src="/images/hero-img.webp" alt="video call" width={550} height={500} />
        </div>
      </header>

    </main>
  );
}
