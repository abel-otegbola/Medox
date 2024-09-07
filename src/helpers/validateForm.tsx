export const validateForm = (email: string, password: string, cpassword: string) => {
    let errorsObject = { email: "", password: "", cpassword: "" }

    if(email === "") {
        errorsObject.email = "Email is not valid"
    }
    if(password.length < 8) {
        errorsObject.password = "Password should be more than 8 characters"
    }
    if(password !== cpassword) {
        errorsObject.cpassword = "Passwords do not match"
    }

    if( email === "" && password === "" && cpassword === "" ) {
        return null;
    }
    else {
        return errorsObject;
    }
}