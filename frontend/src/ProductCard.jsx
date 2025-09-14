const ProductCard = () => {
    return (
        <div className="border-1 border-black w-[300px] flex flex-col items-center gap-10 py-4 rounded-xl bg-blue-200">
            <img src="vite.svg" alt="" className="w-[150px] h-[150px] border-2 border-blue-600 rounded-full"/>
            <div className="flex flex-col gap-5 items-center">
            <h2 className="font-bold text-[50px] text-yellow-200 border-black">Product 1</h2>
            <p className="text-xl text-blue-600 text-center">This is a sample Product for sample testing</p>
            <p className="text-xl font-bold text-red-400">$29.99</p>
        </div>
        <button className="bg-blue-600 text-white w-[90%] py-4 rounded-2xl cursor-pointer hover:bg-blue-900">Add to Cart</button>
     </div>
   )
}

export default ProductCard