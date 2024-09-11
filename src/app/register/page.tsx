'use client'
import Button from "@/components/button/button";
import Dropdown from "@/components/dropdown/dropdown";
import Input from "@/components/input/input";
import { AuthContext } from "@/context/useAuth";
import { registerSchema } from "@/schema/auth";
import { Envelope, Hospital, LockKey, Spinner, Stethoscope, User } from "@phosphor-icons/react";
import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export interface signupData { role: string, email: string, fullname: string, password: string }

export default function Register() {
    const { signUp, loading } = useContext(AuthContext)

    return (
        <div className="min-h-[500px] flex mt-[3%] gap-8 md:px-[12%] py-5 justify-between">

            <div className="md:block hidden w-[400px] h-[500px] relative rounded-[20px]">
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

            <div className="flex-1 flex justify-center items-center">
                
                <div className="sm:w-[476px] w-full px-12">   

                    <div className="flex flex-col justify-center">
                        <Formik
                        initialValues={{ role: "", email: '', password: '', fullname: "" }}
                        validationSchema={registerSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            signUp(values)
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
                            setFieldValue,
                            /* and other goodies */
                        }) => (
                            <form className="flex flex-col items-center gap-5 p-[10%] border md:border-transparent border-primary/[0.1]" onSubmit={handleSubmit}>
                                
                                <div>
                                    <h1 className="text-[32px] font-bold text-center">Create Account</h1>     
                                    <p className="mt-2 mb-3 text-center">All of your supplied information provided is secured.</p> 
                                </div>

                                <Dropdown name="role" className="rounded-full" placeholder="Select type of account" value={values.role} onChange={(value) => setFieldValue("role", value)} error={touched.role ? errors.role : ""} 
                                    options={[
                                        { id: 0, title: "User", icon: <User /> },
                                        { id: 1, title: "Doctor", icon: <Stethoscope /> },
                                        { id: 2, title: "Health center", icon: <Hospital /> },
                                    ]}
                                />
                                
                                <Input name="fullname" className="rounded-full" value={values.fullname} onChange={handleChange} type="text" error={touched.fullname ? errors.fullname : ""} placeholder="Full name" leftIcon={<User size={16}/>}/>

                                <Input name="email" className="rounded-full" value={values.email} onChange={handleChange} type="email" error={touched.email ? errors.email : ""} placeholder="Email address" leftIcon={<Envelope size={16}/>}/>

                                <Input name="password" className="rounded-full" value={values.password} onChange={handleChange} type={"password"} error={touched.password ? errors.password : ""} placeholder="Password" leftIcon={<LockKey size={16}/>}/>

                                <Button size="full" type="submit" className="rounded-full py-5 mt-2">{ isSubmitting || loading ? <Spinner size={16} className="animate-spin" /> : "Create new account" }</Button>

                    
                                <p className="text-center">Already have an account? <Link href={"/login"} className="text-primary">Login</Link></p>
                            </form>
                        
                        )}
                    </Formik>
                    </div>
                </div>
            </div>

        </div>
    )
}