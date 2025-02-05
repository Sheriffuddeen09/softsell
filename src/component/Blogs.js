import Header from "../Layout/Header"
import imageone from './image/Frame 107.png'
import imagetwo from './image/Frame 115.png'
import imagethree from './image/Frame 116.png'
import imagefour from './image/Frame 117.png'
import logoone from './image/Frame 108.png'
import logotwo from './image/Frame 110.png'
import logothree from './image/Frame 112.png'
import picone from './image/Frame 124.png'
import pictwo from './image/Frame 125.png'
import picthree from './image/Frame 126.png'
function Blogs (){

    const content = (
        <div>
            <img src={imageone} alt="imagepicture" className="sm:block hidden w-full" style={{height:"500px"}}/>
            <img src={imageone} alt="imagepicture" className=" w-full block sm:hidden" style={{height:"240px"}}/>
            <p className="text-center sm:w-4/12 w-72 mx-auto text-[#d9286c] font-bold text-sm my-6">Discover the Joy of Pet Ownership Without Long-Term Commitments</p>
            <div className="text-white flex  flex-row gap-5 flex-wrap justify-center mx-auto px-2 items-center">
                <img src={logoone} alt="imagepicture" className="sm:h-64 h-52 lg:relative lg:left-36"/>
                <div className="bg-[#20daaf] widt mx-auto flex flex-col items-center py-7 rounded-xl ">
                    <h1 className="font-bold w-72 text-center">The Joy of Renting a Pet: Why It’s Perfect for Everyone</h1>
                    <p className="w-64 text-center my-6" style={{fontSize:"10px"}}>Explore how renting a pet can bring happiness to families, individuals, and even workplaces. Discuss how this service is great for those who love animals but cannot commit to long-term ownership due to time, space, or lifestyle constraints.</p>
                    <div className="flex flex-row justify-between gap-16 sm:gap-24 items-center">
                        <h1 className="font-bold text-sm text-black">24 January 2025</h1>
                        <button className="bg-gray-200  text-green-500 p-1 w-20 text-sm rounded">More </button>
                    </div>
                </div>
            </div>
            {/* second */}

            <div className="text-white flex my-4  flex-row gap-5 flex-wrap justify-center mx-auto px-2 items-center">
                <img src={logotwo} alt="imagepicture" className="sm:h-64 h-52 lg:relative lg:left-36"/>
                <div className="bg-[#ffd2d2] widt mx-auto flex flex-col items-center py-9 rounded-xl ">
                    <h1 className="font-bold w-72 text-center text-[#d9286c]">How to Choose the Perfect Pet for Your Needs</h1>
                    <p className="w-72  text-[#d9286c] font-bold text-center my-6" style={{fontSize:"10px"}}>A guide on selecting the right pet based on lifestyle, space availability, and personality. Highlight how your platform offers options for dogs, cats, and more to suit every preference.</p>
                    <div className="flex flex-row justify-between gap-16 sm:gap-24 items-center">
                        <h1 className="font-bold text-sm text-black">24 January 2025</h1>
                        <button className="bg-[#d9286c]  text-white p-1 w-20 text-sm rounded">More </button>
                    </div>
                </div>
                </div>

                {/* third */}

                <div className="text-white flex  flex-row gap-5 flex-wrap justify-center mx-auto px-2 items-center">
                <img src={logothree} alt="imagepicture" className="sm:h-64 h-52 lg:relative lg:left-36"/>
                <div className="bg-[#20daaf] widt mx-auto flex flex-col items-center py-9 rounded-xl ">
                    <h1 className="font-bold w-72 text-center">Benefits of Renting Pet Accessories and Supplies</h1>
                    <p className="w-64 text-center my-6" style={{fontSize:"10px"}}>Discuss the cost-effectiveness and convenience of renting pet essentials like beds, toys, crates, and seasonal outfits. Explain how renting helps reduce waste and ensures pets always have what they need.</p>
                    <div className="flex flex-row justify-between gap-16 sm:gap-24 items-center">
                        <h1 className="font-bold text-sm text-black">24 January 2025</h1>
                        <button className="bg-gray-200  text-green-500 p-1 w-20 text-sm rounded">More </button>
                    </div>
                </div>
                </div>
            <p className="sm:mt-12 sm:mb-4 mt-3 -mb-3 text-sm text-center wid mx-auto text-[#d9286c]">Everything we offer makes it exciting to have a dog and even more rewarding to be a dog lover. Discover our rental pack today</p>

            <div className="text-white flex mt-4  flex-row gap-4 flex-wrap justify-center mx-auto px-2 items-center">
                <div className="bg-white widt mx-auto flex flex-col items-center py-9 rounded-xl ">
                    <h1 className="font-bold w-72 text-center text-black">Pet-Friendly Vacation Ideas: Rent a Pet for Your Trip!</h1>
                    <p className="w-72  text-black font-bold text-center my-6" style={{fontSize:"10px"}}>Inspire readers with pet-friendly travel destinations and how renting a pet enhances the vacation experience. Include tips for traveling with pets and highlight your travel-ready pet packages.</p>
                    
                        <button className="bg-[#d9286c]  text-white p-1 w-28 text-sm rounded">Get Started </button>
                </div>
                <img src={imagetwo} alt="imagepicture" className="sm:h-64 h-52 lg:relative lg:translate-x-1 lg:right-32"/>
                </div>

            {/* second */}
                <div className="text-white flex mb-4 mt-2 flex-row sm:gap-5 gap-2  sm:gap-0 flex-wrap justify-center mx-auto px-2 items-center">
                <img src={imagethree} alt="imagepicture" className="sm:h-64 h-52 "/>
                <img src={imagefour} alt="imagepicture" className="sm:h-64 h-52 "/>
                </div>

        <h1 className="font-bold w-72 text-center text-black mx-auto">Bringing Pets and People Together – One Rental at a Time</h1>
        <div className="text-white flex mt-4  flex-row gap-4 flex-wrap justify-center mx-auto px-2 items-center mb-6">
            <div className="flex flex-col border rounded w-64 sm:w-72 border-2 shadow-md border-green-100 items-center justify-center text-center">
                <img src={picone} alt="picture" className="w-full" />
                <h1 className="w-48 my-2 text-black" style={{fontSize:"11px"}}>“Experience the Love of Pets Without the Commitment”</h1>
                <div></div>
                <p className="text-[#d9286c] text-sm mb-3">Read More</p>
            </div>

            {/* second  */}
            <div className="flex flex-col border rounded w-64 sm:w-72 border-2 shadow-md border-green-100 items-center justify-center text-center">
                <img src={pictwo} alt="picture" className="w-full" />
                <h1 className="w-48 my-2 text-black" style={{fontSize:"11px"}}>“Creating Moments of Joy with Pets and Essentials”</h1>
                <div></div>
                <p className="text-[#d9286c] text-sm mb-3">Read More</p>
            </div>

            {/* third */}

            <div className="flex flex-col border rounded w-64 sm:w-72 border-2 shadow-md border-green-100 items-center justify-center text-center">
                <img src={picthree} alt="picture" className="w-full" />
                <h1 className="w-48 my-2 text-black" style={{fontSize:"11px"}}>“Making Pet Ownership Easy, Affordable, and Flexible”</h1>
                <div></div>
                <p className="text-[#d9286c] text-sm mb-3">Read More</p>
            </div>
        </div>
        </div>
    )

    return (
        <div>
            <Header />
            {content}
        </div>
    )
}

export default Blogs