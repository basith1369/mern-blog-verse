const SignUp= () =>{
   return(
    <div className="flex items-center flex-col gap-5 mt-10">
    
    <h1 className="text-3xl text-blue-600 font-bold">Join BlogVerse</h1>
    <p className="text-center text-black-700">create your account and <br></br>start your blogging journey today</p>
    
    <form className="flex flex-col border-1 border-black w-1/3 py-5 items-center gap-5 rounded-2xl" action="">
        <div className="w-[90%] flex flex-col gap-2 ">
            <p className="text-md font-semibold text-gray-700">Full Name</p>
            <input type="text" placeholder="Enter your full name" className="border-1 border-gray-700 w-[95%] py-5 px-2 rounded-2xl 
            focus:outline-none focus:border-purple-500"/>
        </div>
        <div className="w-[90%] flex flex-col gap-2 ">
            <p className="text-md font-semibold text-gray-700">Email</p>
            <input type="text" placeholder="Enter your email" className="border-1 border-gray-700 w-[95%] py-5 px-2 rounded-2xl 
            focus:outline-none focus:border-purple-500"/>
        </div>
        <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md font-semibold text-gray-700">Type password</p>
            <input type="text" placeholder="Enter your password" className="border-1 border-gray-700 w-[95%] py-5 px-2 rounded-2xl 
            focus:outline-none focus:border-purple-500"/>
        </div>
        <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md font-semibold text-gray-700">confirm password</p>
            <input type="text" placeholder="Confirm your password" className="border-1 border-gray-700 w-[95%] py-5 px-2 rounded-2xl 
            focus:outline-none focus:border-purple-500"/>
        </div>
        <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-2 rounded-xl items-center justify-center">
            <input type="checkbox" name="" id="" className="h-5 w-5"/>
            <p>I agree to terms of service and privacy policy</p>
        </div>
        <button className="w-[90%] bg-purple-500 py-4 text-white rounded-xl cursor-pointer ">Create Account</button>
        <div className="border-[0.5px] border-gray-500 w-[90%] mt-5"></div>.
        <p className="text-gray-700 font-semibold ">Already have an account?<span className="text-purple-500">Sign in here</span></p>
        <button className="text-semibold text-gray-500 hover:bg-blue-200 p-2 rounded-xl">Back to home</button>
    </form>
    </div>   
)
}
export default SignUp

