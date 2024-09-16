'use client'
import { Bell } from "@phosphor-icons/react";

export default function InboxPage() {
    
    return (
        <div className="w-full">
            <h2 className="flex items-center gap-3 font-semibold md:text-[28px] bg-white dark:bg-dark text-[20px] p-4 border border-transparent border-b-gray/[0.1] dark:border-b-gray/[0.08]">
                <p className={``}><Bell width={24} /> </p>
                Inbox
            </h2>

        </div>
    )
}