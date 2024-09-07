'use client'
import { useLocalStorage } from "@/customHooks/useLocaStorage";
import { app } from "../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from 'react';
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export const AuthContext = createContext<any>({});

const auth = getAuth(app)

const AuthProvider = ({ children }: { children: ReactNode}) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [popup, setPopup] = useState({ type: "", msg: "" });
    const [loading, setLoading] = useState(false);
    const router = useRouter()


    const signIn = (email: string, password: string) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setPopup({ type: "success", msg: "Login Successful" })
            setLoading(false)
            router.push("/dashboard")
        })
        .catch((error) => {
            setPopup({ type: "error", msg: error.message.replace("Firebase: Error", "") })
            setLoading(false)
        });
    }

    const signUp = (email: string, password: string) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setPopup({ type: "success", msg:  "Signup Successful" })
            setLoading(false)
            router.push("/dashboard")
        })
        .catch((error) => {
            setPopup({ type: "error", msg:  error.message.replace("Firebase: Error", "") })
            setLoading(false)
        });
    }
    
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setPopup({ type: "success", msg:  "Logout Successful" })
          }).catch((error) => {
            setPopup({ type: "error", msg:  error.message.replace("Firebase: Error", "") })
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            setUser(user)
        })
    }, [setUser]);

    useEffect(() => {
        if (popup?.type === "success") {
            toast.success(popup.msg)
        }
        if (popup?.type === "error") {
            toast.error(popup.msg);
        }
      }, [popup]);

    return (
        <AuthContext.Provider value={{ user, popup, loading, setPopup, signIn, signUp, logOut }}>
            <Toaster containerClassName="p-8" />
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;