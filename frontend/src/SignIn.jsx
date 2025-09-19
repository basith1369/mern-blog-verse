import React from "react"
const SignIn = () => {
    return(
      <div className="flex flex-col border-1 border-black rounded-xl items-center w-1/3">
        <h1 className="text-md text-2xl font-bold text-black ">Sign In</h1>
        <p className="text-md font-semibold text-gray-700">Access your account</p>
     <div className="p-4">
        <form>
        <p className="text-md font-semibold text-black">Email Address</p>
        <input type="text" placeholder="sample@gmail.com" className="text-md border-1 border-gray-400 rounded-xl text-gray-600 
        px-15 py-2 focus:outline-none focus:border-black"/>
     </div>
     <div className="p-4">
        <p className="text-md font-semibold text-black">Password</p>
        <input type="text" placeholder="sample123" className="text-md border-1 border-gray-400 rounded-xl text-gray-600 
        px-15 py-2 focus:outline-none focus:border-black"/>
     </div>
     <form>
     <div className="flex gap-2 ">
        <input type="checkbox"/>
        <p className="text-md text-black cursor-pointer">Remember me</p>
        <p className="font-semibold text-blue-600 cursor-pointer ">Forgot Password?</p>
        <button className="text-white font-semibold cursor:pointer border-2 rounded-xl hover:bg-blue-600">Sign In</button>
          
     </div>
     </div>
    )
}
export default SignIn