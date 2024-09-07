"use client"
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { AuthContext } from "@/context/useAuth";
import { useContext } from "react";

export default function ProfilePage() {
    const { user } = useContext(AuthContext)

    return (
        <div className="p-4 md:bg-gray/[0.2] dark:md:bg-gray/[0.05]">
            <div className="border border-gray/[0.8] bg-white p-8 rounded-[8px] dark:border-gray/[0.08]">
                <h3 id="account" className="py-2 text-lg">Account</h3>
                <h3 className="pb-2 pt-4 text-sm">Profile</h3>
                <p className="opacity-[0.6]">Update your photo and personal details</p>
                <div className="py-2">
                    <div className="">
                        <p className="md:w-[23%] md:mb-0 mb-2">Profile Image: </p>
                        <div className="h-[60px] w-[60px] rounded-full bg-slate-200 dark:bg-slate-200/[0.04]"></div>
                    </div>
                </div>
                <div className="py-2">
                    <div className="">
                        <Input name="Username" type="text" title="Username" label="Username" error="" value="" />
                    </div>
                </div>
                <div className="py-2 mb-4">
                    <div className="">
                        <Input name="Email" type="email" title="Email" label="Email" error="" value={user?.email} />
                    </div>
                </div>
                <Button>Save changes</Button>
            </div>
        </div>
    )
}