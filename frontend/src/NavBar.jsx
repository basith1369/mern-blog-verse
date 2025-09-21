import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="flex justify-around h-16 border-1 border-black items-center w-full">
            <h1 className="md:text-xl  text-md font-bold">BlogVerse</h1>
            <Link to="/" className="text-black font-semibold hover:bg-blue-400 cursor-pointer rounded-xl px-5 py-2 ">Home</Link>
            <div className="flex gap-3 md:gap-5 items-center h-full">
                <Link to="/signin" className="md:font-semibold font-s text-gray-700 cursor-pointer ">Sign in</Link>
                <Link to="/signup" className=" bg-blue-500 text-white px-2 py-1 md:px-4 md:py-1 rounded-xl cursor-pointer hover:bg-blue-800">Sign Up</Link>
            </div>
        </div>
    )
}
export default NavBar