import store from './image/store.png'
import play from './image/play.png'
import logo from './image/lo_ve-removebg-preview 1.png'
export default function Footer() {
    return (
      <footer className="bg-footer text-black py-8 px-6">
        <div className="container mx-auto flex flex-wrap justify-around items-start gap-8">
          {/* Left Section */}
          <div className="max-w-sm -mt-5">
            <img src={logo} alt='logo' />
            <p className="mt-2 text-sm">
              Create heartwarming memories with this lovable Golden Retriever puppy – 
              the perfect addition to your special moments! 🐾
            </p>
            <div className="mt-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="p-1 w-full border border-pink-400 rounded-xl focus:outline-none"
              />
              <button className="mt-2 w-full bg-pink-600 text-white py-1 rounded-xl hover:bg-black transition">
                Sign UP
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-black text-xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-black text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-black text-xl"><i className="fab fa-google"></i></a>
              <a href="#" className="text-black text-xl"><i className="fab fa-x-twitter"></i></a>
              <a href="#" className="text-black text-xl"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
  
          {/* Middle Section */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-black">Quick Links</h3>
              <ul className="space-y-1 mt-2">
                <li><a href="/about" className="hover:text-pink-700">About Us</a></li>
                <li><a href="/contact" className="hover:text-pink-700">Contact Us</a></li>
                <li><a href="/blogs" className="hover:text-pink-700">Blog</a></li>
                <li><a href="#" className="hover:text-pink-700">FAQ</a></li>
                <li><a href="/help" className="hover:text-pink-700">Help</a></li>
                <li><a href="#" className="hover:text-pink-700">Returns</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-bold text-black">Product</h3>
              <ul className="space-y-1 mt-2">
                <li><a href="#" className="hover:text-pink-700">Pet Clothing</a></li>
                <li><a href="#" className="hover:text-pink-700">Pet Carriers</a></li>
                <li><a href="/category" className="hover:text-pink-700">Dog & Cat Beds</a></li>
                <li><a href="/shop" className="hover:text-pink-700">Shop</a></li>
                <li><a href="#" className="hover:text-pink-700">Shipping</a></li>
                <li><a href="#" className="hover:text-pink-700">Delivery</a></li>
              </ul>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="text-sm">
            <h3 className="font-bold text-black">Our Locations</h3>
            <p className="mt-2 inline-flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            635 Rogers Street <br/> Downers Grove, IL 60515 USA</p>
            <p className="mt-1"><a href="tel:+1 (234) 547 234 4376" className="hover:text-pink-700">📞 +1 (234) 547 234 4376</a></p>
            <div className="mt-4 flex sm:flex-col flex-row gap-2">
              <img src={store} alt="Google Play" className="h-10 sm:w-40" />
              <img src={play} alt="App Store" className="h-10 sm:w-40" />
            </div>
          </div>
        </div>
  
        <hr className="my-6 border-pink-400"/>
        <p className="text-center text-sm font-bold">&copy; 2025 Shofx. All rights reserved.</p>
      </footer>
    );
  }
  