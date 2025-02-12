import { Link, useLocation } from "react-router-dom"
import logo from './image/lo_ve-removebg-preview 1.png'
import { useEffect, useState } from "react"

function Header ({categories, setSelectedCategory, selectedCategory, fetchProduct}){

    const [menu, setMenu] = useState(false)
    const [drop, setDrop] = useState(false)
    const [dropWeb, setDropWeb] = useState(false)
    const [dropmobile, setDropMobile] = useState(false)

    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartLength(cart.length);
    }, []);

    const handleDropweb = () =>{
      setDropWeb(!dropWeb)
    }

    const handleDropMobile = () =>{

      setDropMobile(!dropmobile)
    }
    const homepage = useLocation().pathname

    const handleMenu = () =>{
        setMenu(!menu)
    }

    const category = (
      <div onClick={handleDropweb} className="z-10">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "w-full text-2xl border-none whitespace-nowrap smal font-bold flex flex-col text-center items-center justify-center translate-x-6  bg-pink-500 hover:bg-gray-200 hover:text-black text-white px-4  rounded" : "flex flex-col smal font-bold whitespace-nowrap text-center items-center justify-center translate-x-6 px-3 rounded border hover:bg-gray-200 hover:text-black  text-2xl border-none"}
          onClick={() => {
            setSelectedCategory(category.title);
            fetchProduct(category.title);
          }}
        >
          {category.title}
        </button>
      ))}
      </div>
    )
    const categorys = (
      <div onClick={handleDropMobile} className="z-10">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "w-full text-2xl border-none whitespace-nowrap smal font-bold flex flex-col text-center items-center justify-center translate-x-6  bg-pink-500 hover:bg-gray-200 hover:text-black text-white px-4  rounded" : "flex flex-col smal font-bold whitespace-nowrap text-center items-center justify-center translate-x-6 px-3 rounded border hover:bg-gray-200 hover:text-black  text-2xl border-none"}
          onClick={() => {
            setSelectedCategory(category.title);
            fetchProduct(category.title);
          }}
        >
          {category.title}
        </button>
      ))}
      </div>
    )
    return(
        <header className="bg-white mb-3 shadow-md">
    <div class="head font-roboto text-center text-sm sm:block hidden text-white p-1 -mb-2 ">Special Discount Alert: Flat 20% Off on Your Rental Needs!</div>
    <div class="head font-roboto text-center sm:hidden block text-white p-1 -mb-2 " style={{fontSize:"8px"}}>Special Discount Alert: Flat 20% Off on Your Rental Needs!</div>
    <div class="flex flex-row justify-between items-center p-1 shadow-md">
      <div class="inline-flex sm:gap-6 items-center">
        <span>
          <img src={logo} alt="" class="w-20 sm:h-16 sm:h-12 h-10 mt-2" />
        </span>
        <div class="sm:block hidden">
        <ul class="inline-flex gap-6 mt-4 text-sm ">
          <Link to="/" class={` hover:bg-gray-100 px-2 py-1 rounded `}>
          <p>Home</p>
          <div className={`${homepage === '/' ? 'home' : ''}`}></div>
          </Link>

          <Link to="/shop" class={` hover:bg-gray-100 px-2 py-1 rounded`}>
          <p>Shop</p>
          <div className={`${homepage === '/shop' ? 'shop' : ''}`}></div>
          </Link>
        <Link to={'/category'}  class={` hover:bg-gray-100 px-2 py-1 rounded `}>
        <div className="inline-flex items-center w-20 gap-3">
          <p>Category</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 font-bold" onClick={handleDropweb}>
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
        </div>
          <div className={`${homepage === '/category' ? 'category' : ''}`}></div>
         
        </Link>
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
      <Link to={'/dashboard'}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-10 hover:bg-gray-100 px-2 py-1 rounded-full ${` ${homepage === '/dashboard' ? 'user' : null}`}`}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      </Link>
      <Link to={'/cart'}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-10 hover:bg-gray-100 px-2 py-1 rounded-full  ${homepage === '/cart' ? 'cart' : null}`}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
      {cartLength}
      </Link>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-6 sm:hidden block`} onClick={handleMenu}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    
    </div>
  </div>
  <div className={`trans z-1 w-full h-full fixed top-0 right-0 ${menu ? 'block' : 'hidden'}`}>
        <div className="w-52 h-full bg-white flex flex-col " >
            <div className="flex flex-row justify-between items-center">
            <img src={logo} alt="" class="w-32 h-20" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" onClick={handleMenu}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
        <div className="flex flex-col gap-4 ">
        <Link to={'/'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded" onClick={handleMenu}>Home</p></Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 ">
        </div>
        <Link to={'/shop'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded" onClick={handleMenu}>Shop</p></Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 "></div>
        <Link to={'/category'}  class={` hover:bg-gray-100 px-2 rounded `}>
        <div className="inline-flex items-center w-20 gap-1 translate-x-2">
          <p className="text-sm font-bold">Category</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 " onClick={handleDropMobile}>
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
        </div>
         
        </Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 "></div>
        <Link to={'/about'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded" onClick={handleMenu}>About</p></Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 "></div>
        <Link to={'/blogs'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded" onClick={handleMenu}>Blogs</p></Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 "></div>
        <Link to={'/help'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded" onClick={handleMenu}>Help Center</p></Link>
        <div className="sm:w-80 w-48 flex justify-center items-center mx-auto bg-gray-200 h-0.5 mb-0 "></div>
        <Link to={'/country'} className="text-black"><p className="text-black hover:bg-gray-100 px-5 font-bold text-sm py-1 rounded" onClick={handleMenu}>country</p></Link>
        </div>
        </div>
        <div onClick={handleMenu} className={`fixed z-10 top-60 w-40 left-4 z-10 sm:hidden block bg-white shadow-md rounded ${dropmobile ? 'block' :'hidden'}`}>
        <p className="text-sm w-full py-1 px-4 rounded text-center hover:bg-gray-200 hover:text-black font-bold relative right-8" onClick={() =>{
        setSelectedCategory('All'); fetchProduct('All')
      }}>All</p>
        {categorys}
        </div>
        </div>
        <div className="hidden sm:block">
        <div onClick={handleDropweb}  className={`fixed top-24 w-40 left-56 z-10  bg-white shadow-md rounded ${dropWeb ? 'block' :'hidden'}`}>
        <button className="text-sm w-full py-1 px- rounded px-9 hover:bg-gray-200 hover:text-black font-bold "  onClick={handleDropweb}>
        <p className="relative right-8" onClick={() =>{
        setSelectedCategory('All'); fetchProduct('All'); 
      }}>All</p>
      </button>
        {category}
        </div>
        </div>
  
  </header>
    )

}

export default Header