'use client'
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { AuthContext } from "@/context/useAuth";
import { loginSchema } from "@/schema/auth";
import { Envelope, LockKey, Spinner } from "@phosphor-icons/react";
import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react"

export default function Loginpage() {
    const { signIn, loading } = useContext(AuthContext)

    
    return (
        <div className="min-h-[500px] flex mt-4 md:mx-[12%] sm:items-center justify-between">
            <div className="md:block hidden w-[400px] h-[450px] relative rounded-[20px]">
              <Image src={"/images/doctor.png"} alt="guitarist" fill sizes={"100%"} className="rounded-[20px] bg-primary object-cover" />
              <div className="flex justify-end flex-col p-8 h-full">
                <div className="flex flex-col gap-4 p-4 rounded-lg bg-[#101012]/[0.9] z-[2] text-white text-xs">
                    <h4 className="text-[12px]">I got access to the patients in minutes</h4>
                    <p className="text-[10px]">Love the experience. Got my professional profile setup and all neccessary details in minutes. I barely had to do anything to connect with my patients. Definitely recommend</p>
                    <div className="flex justify-between items-center">
                        <Image src="/images/profile-img.webp" alt="user" width={30} height={30} className="rounded-full" />
                        <Image src="/images/stars.webp" alt="user" width={50} height={15} />                        
                    </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
                <div className="sm:w-[476px] w-full p-12">
                    <Formik
                        initialValues={{ email: '', password: ''}}
                        validationSchema={loginSchema}
                        onSubmit={( values, { setSubmitting }) => {
                            signIn(values.email, values.password);
                            setSubmitting(false);
                        }}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                        }) => (

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-[10%] border md:border-transparent border-primary/[0.1]">
                                <div>
                                    <h1 className="font-bold text-[32px]">Welcome</h1>
                                    <p className="mt-2 mb-3">Add your details below to get back into the app</p>
                                </div>
                                
                                <Input name="email" className="rounded-full" label="" value={values.email} onChange={handleChange} type="email" error={touched.email ? errors.email : ""} placeholder="Email Address" leftIcon={<Envelope size={16}/>}/>

                                <Input name="password" className="rounded-full" label="" value={values.password} onChange={handleChange} type={"password"} error={touched.password ? errors.password : ""} placeholder="Password" leftIcon={<LockKey size={16}/>}/>

                                <Button size="full" className="rounded-full py-5">{ isSubmitting || loading ? <Spinner size={16} className="animate-spin" /> : "Login"}</Button>
                                
                                <p className="text-center">Don&apos;t have an account? <Link href={"/register"} className="text-primary">Create account</Link></p>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>

        </div>
    )
}
