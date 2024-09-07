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
        <div className="min-h-[500px] flex mt-[3%] md:mx-[10%] sm:items-center justify-center">
            <div className="md:block hidden w-[400px] h-[450px] relative rounded-[20px]">
              <Image src={"/images/doctor.jpg"} alt="guitarist" fill sizes={"100%"} className="rounded-[20px] object-cover" />
            </div>

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
                                <h1 className="font-bold text-xl">Welcome</h1>
                                <p className="mt-2 mb-3">Add your details below to get back into the app</p>
                            </div>
                            
                            <Input name="email" label="Email address" value={values.email} onChange={handleChange} type="email" error={touched.email ? errors.email : ""} placeholder="e.g alex@email.com" leftIcon={<Envelope size={16}/>}/>

                            <Input name="password" label="Password" value={values.password} onChange={handleChange} type={"password"} error={touched.password ? errors.password : ""} placeholder="At least 8 characters" leftIcon={<LockKey size={16}/>}/>

                            <Button size="full">{ isSubmitting || loading ? <Spinner size={16} className="animate-spin" /> : "Login"}</Button>
                            
                            <p className="text-center">Don&apos;t have an account? <Link href={"/register"} className="text-primary">Create account</Link></p>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
