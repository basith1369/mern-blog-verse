import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { CircleUser, X } from 'lucide-react';
import { Eye } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { User } from 'lucide-react';
import { EyeClosed } from 'lucide-react';
import { useState } from "react"
const SignUp = () => {
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [ShowPassword, setShowPassword] = useState(false)
    const [ShowPassword1, setShowPassword1] = useState(false)
    const [FormData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const handlePassword = () => {
        setShowPassword((password) => !password)
    }
    const handlePassword1 = () => {
        setShowPassword1((password) => !password)
    }
    const handleChange = (event) => {
        setError("")
        setSuccess("")
        setFormData({ ...FormData, [event.target.name]: event.target.value })
        setErrors((errors) => ({ ...errors, [event.target.name]: "" }))
        if (event.target.name==='password')
            setErrors((errors) => ({ ...errors, confirmpassword: "" }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        let newErrors = {}
        if (!FormData.fullName) {
            newErrors.fullName = "please enter your fullname"
        }
        if (!FormData.email) {
            newErrors.email = "please enter your email"
        }
        if (!FormData.password) {
            newErrors.password = "please enter your password"
        }
        if (!FormData.confirmpassword) {
            newErrors.confirmpassword = "please enter your confirm password"
        }
        if (FormData.password !== FormData.confirmpassword) {
            newErrors.confirmpassword = "password and confirm password didn't match"
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        }
        else {
            setSuccess("account created successfully")
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmpassword: ""

            })
            setErrors({
                fullName: "",
                email: "",
                password: "",
                confirmpassword: ""

            })
        }
        // if(!FormData.fullName || !FormData.email || !FormData.password || !FormData.confirmpassword){
        //     setError("Please fill all the fields")
        // }
        // else if(FormData.password !== FormData.confirmpassword){
        //     setError("password and confirm password didn't match")
        // }
        // else{
        //     setSuccess("Your account is created Successfully")
        //     FormData.fullName=""
        //     FormData.email=""
        //     FormData.password=""
        //     FormData.confirmpassword=""
        // }
    }

    return (
        <div className="flex flex-col items-center gap-5">
            <NavBar />
            <h1 className="font-bold text-2xl text-blue-400">Join BlogVerse</h1>
            <p className="text-gray-500 text-xl text-center font-semibold">Create your Account <br /> start your journey with BlogVerse</p>
            <form onSubmit={handleSubmit} className="flex flex-col lg:w-[50%] border-1 border-gray-400 rounded-2xl shadow-lg shadow-gray-500 hover:shadow-black w-[80%] py-7 items-center gap-5">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <div className="relative">
                        <input value={FormData.fullName} type="text" placeholder="Enter full name" name="fullName" onChange={handleChange}
                            className="border-1 border-black w-full py-2 px-10 rounded-2xl focus:outline-none
                     focus:border-purple-500 focus:shadow-lg focus:shadow-purple-400">
                        </input>
                        {errors.fullName && <p className="text-red-400">{errors.fullName}</p>}
                        <User className="text-gray-400 absolute left-2 top-2 " />
                    </div>
                </div>

                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <div className="relative">
                        <input type="email" placeholder="Enter Email" name="email" onChange={handleChange} value={FormData.email}
                            className="border-1 border-black w-full py-2 px-10 rounded-2xl focus:outline-none
                     focus:border-purple-500 focus:shadow-lg focus:shadow-purple-400">
                        </input>
                        {errors.email && <p className="text-red-400">{errors.email}</p>}
                        <Mail className="text-gray-400 absolute left-2 top-2 " />
                    </div>
                </div>

                <div className="w-[90%] flex flex-col gap-2 ">
                    <p className="text-md text-gray-700 font-semibold ">Pasword</p>
                    <div className="relative">
                        <input type={ShowPassword ? "text" : "password"} placeholder="Enter Password" name="password" onChange={handleChange} value={FormData.password}
                            className="border-1 border-black w-full py-2 px-10 rounded-2xl focus:outline-none
                     focus:border-purple-500 focus:shadow-lg focus:shadow-purple-400 ">
                        </input>
                        {errors.password && <p className="text-red-400">{errors.password}</p>}
                        <p onClick={handlePassword}>{ShowPassword ? <EyeClosed className="text-gray-400 absolute right-2 top-2" /> : <Eye className="text-gray-400 absolute right-2 top-2" />}</p>
                        <KeyRound className="text-gray-400 absolute left-2 top-2 " />
                    </div>
                </div>

                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Conform Password</p>
                    <div className="relative">
                        <input type={ShowPassword1 ? "text" : "password"} placeholder="Re-enter Password" name="confirmpassword" onChange={handleChange} value={FormData.confirmpassword}
                            className="border-1 border-black w-full py-2 px-10 rounded-2xl focus:outline-none
                     focus:border-purple-500 focus:shadow-lg focus:shadow-purple-400 ">
                        </input>
                        {errors.confirmpassword && <p className="text-red-400">{errors.confirmpassword}</p>}
                        <p onClick={handlePassword1}>{ShowPassword1 ? <EyeClosed className="text-gray-400 absolute right-2 top-2" /> : <Eye className="text-gray-400 absolute right-2 top-2" />}</p>
                        <KeyRound className="text-gray-400 absolute left-2 top-2 " />
                    </div>
                </div>

                <div className="flex gap-2 border-1 border-gray-800 w-[90%] p-3 items-center justify-center">
                    <input required type="checkbox" className="h-5 w-5 cursor-pointer"></input>
                    <p>I agree to the terms and conditions</p>
                </div>
                {/* {error && <p className="text-red-400">{error}</p>} */}
                {success && <p className="text-green-400">{success}</p>}
                <button type="submit" className="text-white border-1 bg-purple-500 font-semibold p-3 rounded-2xl cursor-pointer flex gap-3"><CircleUser />Create Account</button>

                <div className="border-[0.5px] border-gray-500 w-[90%] mt-4"></div>

                <p className="text-gray-500 font-semibold">Already have an account?<Link to="/login" className="text-purple-700 cursor-pointer hover:underline">Sign In here</Link></p>

                <Link to="/" className="hover:bg-gray-500 cursor-pointer py-4 px-3 text-center rounded-xl w-[90%]">Back to Home</Link>
            </form>
        </div>
    )

}
export default SignUp