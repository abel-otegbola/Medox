'use client'
import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-black dark:bg-[#000]/[0.6] text-[#D9D9F2] mt-12">
            <div className="grid lg:grid-cols-4 grid-cols-2 text-[12px] gap-[30px] py-[30px] md:px-[10%] px-8 border border-transparent border-t-gray-700/[0.09] dark:border-t-gray-100/[0.09]">
                <ul className="w-full">
                    <h2 className="py-2 font-semibold uppercase">Pages</h2>
                    <li className="flex w-full"><Link href="/" className="py-[5px] w-full hover:text-primary">Homepage</Link></li>
                    <li className="flex w-full"><Link href="/about" className="py-[5px] w-full hover:text-primary">About</Link></li>
                    <li className="flex w-full"><Link href="/contact" className="py-[5px] w-full hover:text-primary">Contact Us</Link></li>
                </ul>
                <ul className="w-full">
                    <h2 className="py-2 font-semibold uppercase text-purple">Features</h2>
                    <li className="flex w-full"><Link href="/find" className="py-[5px] w-full hover:text-primary">Find Doctors</Link></li>
                    <li className="flex w-full"><Link href="/checkup" className="py-[5px] w-full hover:text-primary">Take Checkup</Link></li>
                </ul>
                <ul className="w-full">
                    <h2 className="py-2 font-semibold uppercase text-purple">Others</h2>
                </ul>
                <ul className="w-full">
                    <div className="flex flex-wrap gap-4 py-4 text-[20px] text-purple">
                        <a href="https://facebook.com/"><FacebookLogo /></a>
                        <a href="https://twitter.com/"><TwitterLogo /></a>
                        <a href="https://instagram.com/"><InstagramLogo /></a>
                    </div>
                    <p className="py-1">OAU, Ile-Ife, Osun state, Nigeria</p>
                    <a href="tel:+2347060989331" className="block py-1">+2347060989331</a>
                    <a href="mailto:support@ennovate.com" className="block py-1">Support@medox.com</a>
                </ul>
            </div>
            <div className="bg-[#000]/[0.2] dark:bg-[#000]/[0.8] text-white text-center md:mb-0 mb-[65px]">
                <p className="px-[3%] py-3 flex items-center gap-2 justify-center">medox &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;