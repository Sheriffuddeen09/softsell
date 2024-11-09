import logo from './image/ecologo.png'
import logoText from './image/ECOREME Logo PNG.png'

function Header (){

    const head = (
        <nav className="text-white p-1 bg-[#6e684b] flex justify-around" style={{fontSize:"11px"}}>
            <div className="inline-flex  gap-4 items-center">
                <p>Become A Seller</p>
                <p className="w-i h-5 bg-white"></p>
                <p>About us</p>
                <p className="w-i h-5 bg-white"></p>
                <p>Free Delivery</p>
                <p className="w-i h-5 bg-white"></p>
                <p>Returns Policy</p>
            </div>
            <div className="inline-flex  gap-4 items-center">
                <p className="inline-flex items-center gap-1">Help Center <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </p>
                <p className="w-i h-5 bg-white"></p>
                <p className="inline-flex items-center gap-1">Eng <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </p>
                <p className="w-i h-5 bg-white"></p>
                <p className="inline-flex items-center gap-1">USD <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </p>
                <p className="w-i h-5 bg-white"></p>
                <p className="inline-flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 border rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                My Account</p>
            </div>
        </nav>
    )

    const mainhead = (
        <nav className="text-white p-4 bg-[#d5ceaa]  flex justify-around" style={{fontSize:"11px"}}>
            <div className='inline-flex gap-1 items-center'>
                <img src={logo} alt='logo' width={30} height={30} className='border rounded-full p-1 border-black' />
                <img src={logoText} alt='logo' width={120} height={120} />
            </div>

            <div className='inline-flex gap-0 items-center'>
                <p className='categories-radius border-gray-400 bg-white text-black w-32 inline-flex gap-1 items-center'>All Categories <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </p>
                <input placeholder='Search for a product or brand' className='w-96 p-3 border border-gray-400 input-radius'/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 relative right-10 bg-[#6e684b] text-white rounded-full p-1" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>


            </div>
            <div className='inline-flex gap-3 items-center text-black font-bold'>
            <p className="inline-flex items-center gap-1">Wishlist</p>
            <p className="inline-flex items-center gap-1">Cart</p>
            </div>
        </nav>
    )

    const mainheadsecond = (
        <nav className="text-black border border-gray-300 border-0.5 flex justify-around" style={{fontSize:"12px"}}>
           <p className='justify-items-center border-gray-400 bg-white text-black w-36 justify-center p-3 categories-border flex gap-1 items-center'>All Categories <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
               </p>
           
            <div className="inline-flex  gap-4 items-center">
                <p className="inline-flex items-center gap-1">Home <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </p>
                <p className="w-i h-5 bg-white"></p>
                <p className="inline-flex items-center gap-1">Shop <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </p>
                <p className="inline-flex items-center gap-1">pages <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </p>
                <p className="inline-flex items-center gap-1">Vendors <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </p>
                <p className="inline-flex items-center gap-1">Blog <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </p>
                <p className="">Contact Us</p>
            </div>
            <p className='justify-items-center bg-[#6e684b] hover:bg-black text-sm border-gray-400 text-black w-36 justify-center p-3 categories-border flex gap-1 items-center' style={{transition:"all 2s ease-in-out"}}><a href="tel:09062830059" className="text-white">09062830059</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
               </p>
           
        </nav>
    )
    return(
        <header>
            {head}
            {mainhead}
            {mainheadsecond}

        </header>
    )
}

export default Header