import React from "react"
const SignIn = () => {
    return(
      <div className="flex min-h-screen items-center justify-center">
        <form className="flex flex-col border-1 border-gray-400 w-1/3 items-center gap-5 mb-7 rounded-2xl">
        <div className="flex flex-col justify-center items-center gap-3 mt-8">
        <h1 className="text-md text-2xl font-bold text-black ">Sign In</h1>
        <p className="text-md font-semibold text-gray-700">Access your account</p>
        </div>
     <div className="flex flex-col gap-2 w-[90%]">
        <p className="text-md font-semibold text-black py-1">Email Address</p>
        <input type="text" placeholder="sample@gmail.com" className="text-md border-1 border-gray-400 rounded-xl text-gray-600 
        px-3 py-3 w-full focus:outline-none focus:border-black"/>
     </div>
     <div className="flex flex-col gap-2 w-[90%]">
        <p className="text-md font-semibold text-black py-1">Password</p>
        <input type="text" placeholder="sample123" className="text-md border-1 border-gray-400 rounded-xl text-gray-600 
        px-3 py-3 w-full focus:outline-none focus:border-black"/>
     </div>
     <div className="flex justify-center items-center w-[90%]">
      <div className="flex gap-2 justify-items-start w-[70%] px-3 py-1 items-center">
      <input type="checkbox" className="h-5 w-5"/>
        <p className="text-md text-black font-semibold cursor-pointer">Remember me</p>
        </div>
        <button className="font-semibold text-white rounded-xl cursor-pointer bg-blue-800 py-3 w-[90%]">Forgot Password?</button>
        </div>
        <button className="text-white py-3 w-[90%] font-semibold cursor:pointer border-2 rounded-xl hover:bg-blue-600">Sign In</button>
        <div className="border-[0.5px] border-gray-400 w-[90%] mt-1"></div>
        <p className="text-gray-700 font-semibold mb-8">Don't have an Account?<span className="text-blue-500">create one here</span></p>

      </form>  
     </div>
   )
}
export default SignIn