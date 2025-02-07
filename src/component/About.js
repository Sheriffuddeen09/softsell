import Header from "../Layout/Header"
import imageone from './image/Frame 119.png'
import imagetwo from './image/Frame 121.png'
import logoone from './image/shield-cat-solid 1.png'
import logotwo from './image/shield-dog-solid 1.png'
import logothree from './image/Mask group.png'
import logofour from './image/Pets--Streamline-Rounded-Material 3.png'
import star from './image/⭐⭐⭐⭐⭐.png'
import imageside from './image/istockphoto-1218724795-612x612 1.png'
function About (){

    const content = (
        <div>
            <img src={imageone} alt="imagepicture" className="sm:block hidden w-full" style={{height:"500px"}}/>
            <img src={imageone} alt="imagepicture" className=" w-full block sm:hidden" style={{height:"270px"}}/>
            <p className="text-center sm:w-5/12 w-72 mx-auto text-sm my-6">Flexible Options: Whether it’s a day, a weekend, or longer, our rental plans are designed to fit your needs.</p>
            <div className="text-white flex flex-row flex-wrap justify-center mx-auto px-2 items-center">
                <img src={imagetwo} alt="imagepicture" className="h-96 lg:relative lg:left-52"/>
                <div className="bg-[#20daaf] wid mx-auto flex flex-col items-center py-16 ">
                    <p className="sm:text-xl text-sm sm:w-96 text-center ">Redefining Pet Experiences with Care and Convenience</p>
                    <p className="my-4 read">At Pet Rental Hub, we believe in creating joyful connections between people and pets, offering a unique platform where you can rent pets and pet essentials with ease. Whether you're looking for a furry friend for companionship, temporary care, or the best accessories for your pet, we’ve got you covered!</p>

                    <p className="bring translate-x-2 mb-2 mt-0">Bring joy and companionship through pets.</p>
                    <p className="bring translate-x-2 mb-2">Promote sustainable pet parenting by offering rental solutions for products and access2ries.</p>
                    <p className="bring translate-x-2 mb-2">Foster responsible pet care and education.</p>
                    <p className="bring translate-x-2 mb-2">Pet Rentals: From playful puppies and adorable kittens to charming rabbits and colorful birds, we offer pets for rent to suit every preference and lifestyle.</p>
                    
                    <p className="text-white text-start bg-red-500 py-1 px-6 mt-5 flex justify-start items-start text-sm rounded-xl sm:-translate-x-32 -translate-x-20">Rent Now</p>
                </div>
            </div>
            <p className="my-6 font-bold text-center">Join the Pet Rental Revolution</p>

            <div className="flex flex-row justify-around sm:mx-20 flex-wrap sm:flex-nowrap gap-5 sm:gap-0">

                <div className="w-52 flex flex-col items-center py-4 text-center rounded-xl mx-auto bg-[#ffd2d2]">
                    <img src={logoone} alt="logo" className="bg-[#d9286c] p-3 w-16 h-16 rounded-full" />
                    <p className="text-[#d9286c] my-5" style={{fontSize:"9px", width:"130px"}}>Pet Rental Hub – Rent a Pet, Share the Love</p>
                    <p className="text-black" style={{fontSize:"9px", width:"190px"}}>Short-term pet rentals for companionship and joy. Choose from dogs, cats, and more. Easy, ethical, and hassle-free!</p>
                </div>
                <div className="w-52 flex flex-col items-center py-4 text-center rounded-xl mx-auto bg-[#CEEEE9]">
                    <img src={logotwo} alt="logo" className="bg-[#23BCA8] p-3 w-16 h-16 rounded-full" />
                    <p className="text-[#23BCA8] my-5" style={{fontSize:"9px", width:"130px"}}>Your Trusted Companion Connection!</p>
                    <p className="text-black" style={{fontSize:"9px", width:"190px"}}>Looking for a furry friend without the long-term commitment? Pet Rental Hub connects you with adorable, well-cared-for pets for short-term companionship. Whether you need a playful pup for the weekend, a cuddly cat for a few days, or a therapy pet for special occasions, we make pet sharing easy, ethical, and enjoyable. Rent, love, return—hassle-free pet experiences for everyone</p>
                </div>
                <div className="w-52 flex flex-col items-center py-4 text-center rounded-xl mx-auto bg-[#ffd2d2]">
                    <img src={logothree} alt="logo" className="bg-[#d9286c] p-3 w-16 h-16 rounded-full" />
                    <p className="text-[#d9286c] my-5" style={{fontSize:"9px", width:"130px"}}> Premium Accessories for Your Pets</p>
                    <p className="text-black" style={{fontSize:"9px", width:"190px"}}>Discover top-quality accessories for your furry friends! From comfy beds and stylish collars to fun toys and healthy treats, we have everything to keep your dogs and cats happy. Shop now for the best care and comfort</p>
                </div>
                <div className="w-52 flex flex-col items-center py-4 text-center rounded-xl mx-auto bg-[#CEEEE9]">
                    <img src={logofour} alt="logo" className="bg-[#23BCA8] p-3 w-16 h-16 rounded-full" />
                    <p className="text-[#23BCA8] my-5" style={{fontSize:"9px", width:"130px"}}>Love Pets but Not Ready to Own? Rent One Today</p>
                    <p className="text-black" style={{fontSize:"9px", width:"190px"}}>Looking for a furry friend without the long-term commitment? Pet Rental Hub connects you with adorable, well-cared-for pets for short-term companionship. Whether you need a playful pup for the weekend, a cuddly cat for a few days, or a therapy pet for special occasions, we make pet sharing easy, ethical, and enjoyable. Rent, love, return—hassle-free pet experiences for everyone</p>
                </div>
            </div>

            <p className="text-black font-bold sm:text-xl my-6 sm:w-96 w-72 text-sm mx-auto text-center">Wide Variety: Access pets and supplies for every occasion or lifestyle.</p>

            <div className="flex justify-center mb-5">
                <div className="inline-flex flex-wrap gap-0">
                    <img src={imageside} alt="imageside" className="w-64 h-60 rounded-l-xl sm:rounded-r-none rounded-r-xl " />
                 <div className="w-52 py-4 sm:-translate-x-3 rounded-l-xl sm:rounded-l-none rounded-r-xl bg-[#CEEEE9]">
                    <img src={star} alt="logo" className=" p-3 w-28 mx-auto" />
                    <p className="text-[#23BCA8] my-5 text-center mx-auto" style={{fontSize:"9px", width:"130px"}}>Amazing Experience</p>
                    <p className="text-black text-center mx-auto" style={{fontSize:"9px", width:"190px"}}>I rented a dog for the weekend, and it was the best experience ever! The process was smooth, and the pet was well taken care of. Highly recommended</p>
                    <p className="my-3 font-bold text-start translate-x-3"> Aisha K.</p>
                </div>
                </div>

                <div className="inline-flex flex-wrap gap-0">
                    <img src={imageside} alt="imageside" className="w-64 h-60 rounded-l-xl sm:rounded-r-none rounded-r-xl " />
                 <div className="w-52 py-4 sm:-translate-x-3 rounded-l-xl sm:rounded-l-none rounded-r-xl bg-[#CEEEE9]">
                    <img src={star} alt="logo" className=" p-3 w-28 mx-auto" />
                    <p className="text-[#23BCA8] my-2 text-center mx-auto" style={{fontSize:"9px", width:"130px"}}>Perfect for Pet Lovers</p>
                    <p className="text-black text-center mx-auto" style={{fontSize:"9px", width:"190px"}}>I love animals but can't own one right now. This service allowed me to enjoy the company of a loving cat for a few days. So happy with it
                    I was worried about pet rental, but the team ensured the pets were well cared for. The dog I rented was super friendly and healthy</p>
                    <p className="my-3 font-bold text-start translate-x-3"> Rohan M.</p>
                </div>
                </div>

            </div>

                {/* new section */}

                <p className="text-black font-bold sm:text-xl my-6 sm:w-96 w-72 text-sm mx-auto text-center">Eco-Friendly: Reduce waste by renting instead of buying pet products</p>
        </div>
    )

    return (
        <div>
            <Header />
            {content}
        </div>
    )
}

export default About