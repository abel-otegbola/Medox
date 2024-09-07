'use client'
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { AuthContext } from "@/context/useAuth";
import { registerSchema } from "@/schema/auth";
import { Envelope, LockKey, Spinner } from "@phosphor-icons/react";
import { Formik } from "formik";
import Link from "next/link";
import { useContext } from "react";

interface formProps {
    data: { role: string, email: string, fullname: string, password: string },
    setData: ( augs: formProps["data"] ) => void;
    loading: boolean;
}

export default function DoctorForm({ data, setData, loading }: formProps) {
    const { signUp } = useContext(AuthContext)

    return (
        <div className="min-h-[400px] flex flex-col mt-[3%] gap-4 px-4 py-5 items-center justify-center">

            <div className="sm:w-[476px] w-full p-8">
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: "" }}
                    validationSchema={registerSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        signUp(values.email, values.password )
                        setData({...data, ...values});
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
                        /* and other goodies */
                      }) => (
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            
                            <Input name="email" label="Email address" value={values.email} onChange={handleChange} type="email" error={touched.email ? errors.email : ""} placeholder="e.g alex@email.com" leftIcon={<Envelope size={16}/>}/>

                            <Input name="password" label="Create password" value={values.password} onChange={handleChange} type={"password"} error={touched.password ? errors.password : ""} placeholder="At least 8 characters" leftIcon={<LockKey size={16}/>}/>

                            <Input name="confirmPassword" label="Confirm password" value={values.confirmPassword} onChange={handleChange} type={"password"} error={touched.confirmPassword ? errors.confirmPassword : ""} placeholder="At least 8 characters" leftIcon={<LockKey size={16}/>}/>

                            <Button size="full" className="rounded-full">{ isSubmitting || loading ? <Spinner size={16} className="animate-spin" /> : "Create new account" }</Button>

                            <p className="text-center">Already have an account? <Link href={"/"} className="text-primary">Login</Link></p>
                        </form>
                    
                    )}
                </Formik>
            </div>
        </div>
    )
}