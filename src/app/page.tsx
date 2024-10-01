"use client"
import CirclesIcon from "@/assets/icons/circles";
import CircleText from "@/assets/icons/circleText";
import Hero from "@/assets/icons/hero";
import Button from "@/components/button/button";
import { useOutsideClick } from "@/helpers/useClickOutside";
import { ArrowRight, Play, Stethoscope, Storefront, X } from "@phosphor-icons/react";
import { ListBullets } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function Home() {
  const [openVideo, setOpenVideo] = useState(false)

  const modalRef = useOutsideClick(setOpenVideo, false)

  return (
    <main className="">

      <header className="flex flex-wrap bg-slate dark:bg-slate/[0.02] justify-between gap-8 md:px-[5%] px-4 md:py-[5%] py-12">
        <div className="flex flex-col gap-6 lg:w-[52%] md:pl-6">
          <h1 className="sm:text-[48px] leading-[130%] text-[28px] font-bold mx-auto">Access Quality Healthcare from Anywhere</h1>
          <p className="mb-2">Our platform connects you with experienced doctors for online consultations, making healthcare more accessible and convenient.</p>
          <div className="flex gap-6 items-center">
            <Button href="/checkup" className="gap-4 pr-6 rounded-full py-6">Get Started<ArrowRight size={16} /> </Button>
            <button className="flex relative h-[65px] w-[65px] items-center justify-center" onClick={() => setOpenVideo(!openVideo)}>
              <CircleText width={65} height={65} className="animate-spin-slow absolute top-0 left-0"/>
              <Play weight="fill" size={24} className="text-primary cursor-pointer z-[2]"/>
            </button>
            {
              openVideo ? 
              <div className="fixed top-0 left-0 w-full h-screen bg-dark/[0.6] flex flex-col gap-4 justify-center items-center z-[120]">
                <div ref={modalRef} className="flex flex-col gap-4 md:w-[50%] w-[90%]">
                  <Button variant="tetiary" className="px-3 py-1 bg-dark" onClick={() => setOpenVideo(false)}><X /></Button>
                  <ReactPlayer url="https://youtu.be/7wM82x3yXFE" width={"100%"} />
                </div>
              </div>
              : ""
            }
          </div>
          <div className="flex items-center gap-4 mt-2 -mb-3 pt-4 border border-transparent border-t-primary/[0.1]">
            <Image src="/images/avatars.webp" alt="avatars" width={100} height={50} />
            <Image src="/images/stars.webp" alt="avatars" width={100} height={20} />
          </div>
          <p className="font-medium"><b className="font-bold">5.0</b> from 120+ reviews</p>
        </div>

        <div className="flex py-[2%] items-start lg:w-[44%] text-white dark:text-[#181819]/[0.3]">
          <Hero className="md:h-[340px] h-auto w-full" />
          {/* <Image src="/images/hero-img.webp" alt="hero-img" width={500} height={340} /> */}
        </div>
      </header>

      <section className="md:px-[5%] px-4 md:py-[3%] py-6">
        <div className="flex flex-col sm:items-center gap-4 md:pl-6">
          <CirclesIcon className="text-primary h-[20px]" />
          <h1 className="sm:text-[32px] leading-[130%] text-[20px] font-bold sm:mx-auto">Exploring healthcare Innovation</h1>
          <p className="mb-2 sm:text-center">Providing quality, affordable, virtual healthcare services. Here are spotlight on key features and advances</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 my-12">
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center gap-4 font-bold text-[16px]"><Stethoscope size={20} color="red" /> Virtual Consultations</h2>
            <p className="">Real-time secure and convenient consultaions</p>
            <p></p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center gap-4 font-bold text-[16px]"><ListBullets size={20} color="red" /> Electronic Prescriptions</h2>
            <p className="">Receive prescriptions sent directly to your pharmacy</p>
            <p></p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center gap-4 font-bold text-[16px]"><Storefront size={20} color="red" /> Medical History Storage</h2>
            <p className="">Securely store your medical records</p>
            <p></p>
          </div>
        </div>


        <div className="md:h-[500px] h-[300px] relative w-full sm:rounded-[40px] overflow-hidden my-6">
          <Image src="/images/doctor-consult.jpg" alt="doctor" width={1400} height={500}/>
        </div>
      </section>

      
      <section className="md:px-[5%] px-4 py-6">
        <div className="flex flex-col sm:items-center gap-4 md:pl-6">
          <CirclesIcon className="text-red h-[20px]" />
          <h1 className="sm:text-[32px] leading-[130%] text-[20px] font-bold sm:mx-auto">How it Works</h1>
          <p className="mb-2 sm:text-center">Providing quality, affordable, virtual healthcare services. Here are spotlight on key features and advances</p>
        </div>

        <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2 my-12">
          <div className="flex flex-col gap-2 font-bold">
            <Image src="/images/fill-form.svg" alt="doctor" width={800} height={500} className=" fill-white dark:text-dark "/>
            <p className="px-10 py-2">Fill out a brief medical history form</p>
          </div>
          <div className="flex flex-col gap-2 font-bold">
            <Image src="/images/book-call.svg" alt="doctor" width={800} height={500} className=" fill-white dark:text-dark "/>
            <p className="px-10 py-2">Book an appointment with a specialist</p>
          </div>
          <div className="flex flex-col gap-2 font-bold">
            <Image src="/images/calling.svg" alt="doctor" width={800} height={500} className=" fill-white dark:text-dark "/>
            <p className="px-10 py-2">Consult with your doctor via video</p>
          </div>
          <div className="flex flex-col gap-2 font-bold">
            <Image src="/images/prescriptions.svg" alt="doctor" width={800} height={500} className=" fill-white dark:text-dark "/>
            <p className="px-10 py-2">Receive personalized treatment plans and prescriptions</p>
          </div>
        </div>

        <Button className="rounded-full mx-auto">Get Started</Button>

      </section>

    </main>
  );
}
