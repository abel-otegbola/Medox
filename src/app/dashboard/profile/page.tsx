"use client"
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { AuthContext } from "@/context/useAuth";
import { User } from "@phosphor-icons/react";
import { useContext } from "react";

export default function ProfilePage() {
    const { user } = useContext(AuthContext)

    return (
        <div className="bg-white dark:bg-dark h-full">
            <div className="p-8 rounded-[8px]">
                <h2 className="flex items-center gap-3 font-semibold md:text-[28px] bg-white dark:bg-dark text-[20px] p-4 border border-transparent border-b-gray/[0.1] dark:border-b-gray/[0.08]">
                    <p className={``}><User width={24} /> </p>
                    Profile
                </h2>

                <p className="opacity-[0.6] mt-6">Update your photo and personal details</p>
                <div className="py-2">
                    <div className="">
                        <p className="md:w-[23%] mb-4">Profile Image: </p>
                        <div className="h-[60px] w-[60px] rounded bg-slate dark:bg-slate/[0.04]"></div>
                    </div>
                </div>
                <div className="py-2">
                    <div className="">
                        <Input name="Username" type="text" title="Username" label="Username" error="" value="" />
                    </div>
                </div>
                <div className="py-2 mb-4">
                    <div className="">
                        <Input name="Email" type="email" title="Email" label="Email" error="" value={user?.email || ""} />
                    </div>
                </div>
                <Button className="bg-green-500 hover:bg-green-600">Save changes</Button>
            </div>
        </div>
    )
}