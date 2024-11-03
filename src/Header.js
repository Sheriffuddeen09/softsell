import { Link } from "react-router-dom"

function Header (){

    return(
        <header className="shadow-md p-4 sm:mx-10">
            <nav className="text-white flex items-center justify-around">
                <h1 className="sm:text-4xl  text-3xl text-blue-400 font-bold">Api-Fetch</h1>
                <div className="inline-flex sm:gap-20">
                    <Link to={'/'} className="text-white image sm:text-xl text-white text-sm  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer">Image</Link>
                    <Link to={'/favorite'} className="text-white favorite sm:text-xl text-white text-sm  rounded-xl lg:p-2 p-1 transition-all duration-500 ease-in-out cursor-pointer">Favorite</Link>
                    
                </div>
            </nav>

        </header>
    )

}

export default Header