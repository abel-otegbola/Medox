import { AuthContext } from "@/context/useAuth"
import Image from "next/image"
import { useContext } from "react"

export default function Avatar() {
    const { user } = useContext(AuthContext)

    if(user?.photoURL) 
    return (
        <Image src={user?.photoURL} alt="user" width={32} height={32} className="rounded-full" />
    )
    else {
        <p className="p-2 bg-primary/[0.09] rounded-full uppercase">{user?.displayName ? user?.displayName.charAt(0) + user?.displayName.charAt(1) : "ab"}</p>
    }
}