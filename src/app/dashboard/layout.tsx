"use client"
import Sidebar from "@/components/sidebar/sidebar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
        return (
            <div className="flex min-h-[90vh]">
                <Sidebar />
                <div className="flex-1 md:bg-gray/[0.09] dark:md:bg-gray/[0.03] ">
                    {children}
                </div>
            </div>
        )
}