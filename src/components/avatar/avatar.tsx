import { AuthContext } from "@/context/useAuth"
import Image from "next/image"
import { useContext } from "react"

export default function Avatar() {
    const { user } = useContext(AuthContext)

    if(user?.photoURL) {
        return (
            <Image src={user?.photoURL} alt="user" width={32} height={32} className="rounded-full" />
        )
    }
    else {
       return <p className="h-[36px] w-[36px] flex items-center justify-center bg-primary/[0.4] text-white font-bold rounded-full uppercase">{user?.displayName ? user?.displayName.charAt(0) : user?.email?.charAt(0)}</p>
    }
}