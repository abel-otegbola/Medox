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
                <div className="flex-1">
                    {children}
                </div>
            </div>
        )
}