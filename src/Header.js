import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./order/Features/ContextProvider"

function Header (){
   // const {cart} = useContext(CartContext)

    return(
        <header className="shadow-md p-3 sm:mx-10">
            <nav className="text-white flex items-center justify-between">
                <h1 className="sm:text-4xl  text-3xl text-blue-400 font-bold">Api-Fetch</h1>
                <div className="inline-flex gap-3 sm:gap-10">
                    <Link to={'/'} className="text-white image text-sm text-white text-sm  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer">Image</Link>
                    <Link to={'/favorite'} className="text-white favorite text-sm text-white text-sm  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer">Favorite</Link>
                </div>
                <Link to={'/cart'} className="text-white save text-sm text-white text-sm  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer">Save </Link>
            </nav>
        </header>
    )

}

export default Header