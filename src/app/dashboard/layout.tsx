"use client"
import Sidebar from "@/components/sidebar/sidebar";
import SchedulesProvider from "@/context/useSchedule";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
        return (
            <div className="flex min-h-[90vh]">
                <SchedulesProvider>
                    <Sidebar />
                    <div className="w-full md:bg-gray/[0.09] dark:md:bg-gray/[0.03] ">
                        {children}
                    </div>
                </SchedulesProvider>
            </div>
        )
}