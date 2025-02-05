import { Link, useLocation } from "react-router-dom"
import logo from './image/lo_ve-removebg-preview 1.png'
import { useState } from "react"

function Header (){

    const [menu, setMenu] = useState(false)

    const homepage = useLocation().pathname

    const handleMenu = () =>{
        setMenu(!menu)
    }
    return(
        <header className="bg-white">
    <div class="head font-roboto text-center text-sm sm:block hidden text-white p-1 -mb-2 ">Special Discount Alert: Flat 20% Off on Your Rental Needs!</div>
    <div class="head font-roboto text-center sm:hidden block text-white p-1 -mb-2 " style={{fontSize:"8px"}}>Special Discount Alert: Flat 20% Off on Your Rental Needs!</div>
    <div class="flex flex-row justify-between items-center shadow-md">
      <div class="inline-flex gap-6 items-center">
        <span>
          <img src={logo} alt="" class="w-32 sm:h-20 h-16 mt-2" />
        </span>
        <div class="sm:block hidden">
        <ul class="inline-flex gap-6 mt-4 text-sm ">
          <Link to="/home" class={` hover:bg-gray-100 px-2 py-1 rounded `}>
          <p>Home</p>
          <div className={`${homepage === '/home' ? 'home' : ''}`}></div>
          </Link>

          <Link to="/shop" class={` hover:bg-gray-100 px-2 py-1 rounded`}>
          <p>Shop</p>
          <div className={`${homepage === '/shop' ? 'shop' : ''}`}></div>
          </Link>
        <select name="category hover:bg-gray-100 px-2 py-1 rounded" id="category">
          <option value="">Category</option>
        </select>
          <Link to="/about " class={`hover:bg-gray-100 px-2 py-1 rounded`}> 
          <p>About</p>
          <div className={` ${homepage === '/about' ? 'about' : null}`}></div>
          </Link>
          <Link to="/blogs" class={`hover:bg-gray-100 px-2 py-1 rounded `}>
          <p>Blogs</p>
          <div className={` ${homepage === '/blogs' ? 'blogs' : null}`}></div>
          </Link>
       </ul>
      </div>
      </div>
    <div class="inline-flex sm:gap-6 mt-4 text-sm sm:mr-10 mr-5 items-center">
      <Link to="/help" class={` hover:bg-gray-100 px-2 py-1 rounded sm:block hidden `}> 
    <p>Help Center</p>
    <div className={`${homepage === '/help' ? 'help' : null}`}></div>
    </Link>
      <p class="hover:bg-gray-100 px-2 py-1 rounded sm:block hidden">country</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 hover:bg-gray-100 px-2 py-1 rounded-full">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <Link to={'/user'}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-10 hover:bg-gray-100 px-2 py-1 rounded-full ${` ${homepage === '/user' ? 'user' : null}`}`}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      </Link>
      <Link to={'/cart'}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-10 hover:bg-gray-100 px-2 py-1 rounded-full  ${homepage === '/cart' ? 'cart' : null}`}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
      </Link>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-6 sm:hidden block`} onClick={handleMenu}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    
    </div>
  </div>
  <div className={`trans z-1 w-full h-full fixed top-0 right-0 ${menu ? 'block' : 'hidden'}`}>
        <div className="w-52 h-full bg-white flex flex-col ">
            <div className="flex flex-row justify-between items-center">
            <img src={logo} alt="" class="w-32 h-20" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" onClick={handleMenu}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
        <div className="flex flex-col gap-4 ">
        <Link to={'/home'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded">Home</p></Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 "></div>
        <Link to={'/home'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded">Shop</p></Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 "></div>
        <Link to={'/home'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded">Category</p></Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 "></div>
        <Link to={'/home'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded">About</p></Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 "></div>
        <Link to={'/home'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded">Blogs</p></Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 "></div>
        <Link to={'/home'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded">Help Center</p></Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 "></div>
        <Link to={'/home'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded">country</p></Link>
        </div>
        </div>
  </div>
  </header>
    )

}

export default Header