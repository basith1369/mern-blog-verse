const NavBar =() =>{
    return(
        <div className="flex justify-around h-16 border-2 border-black items-center">
            <h1 className="text-xl font-bold">BlogVerse</h1>
            <button className="text-gray-700 hover:bg-blue-200 cursor-pointer px-5 py-2">Home</button>
            <div className="flex gap-5">
                <button className="font-semibold text-gray-700 cursor-pointer">Sign in</button>
                <button className="bg-blue-500 text-white px-5 py-2 rounded-xl cursor-pointer hover:bg-blue-800">Sign Up</button>
        </div>
       </div> 
    )
}
export default NavBar