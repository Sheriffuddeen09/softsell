import Header from "../Layout/Header"
import imageone from './image/Frame 119.png'
import imagetwo from './image/Frame 121.png'
import logoone from './image/shield-cat-solid 1.png'
import logotwo from './image/shield-dog-solid 1.png'
import logothree from './image/Mask group.png'
import logofour from './image/Pets--Streamline-Rounded-Material 3.png'
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

                <div className="w-52 flex flex-col items-center py-10 text-center rounded-xl mx-auto bg-[#ffd2d2]">
                    <img src={logoone} alt="logo" className="bg-[#d9286c] p-3 rounded-full" />
                    <p className="text-[#d9286c] my-5" style={{fontSize:"9px", width:"130px"}}>Pet Rental Hub – Rent a Pet, Share the Love</p>
                    <p className="text-[#d9286c]" style={{fontSize:"9px", width:"190px"}}>Short-term pet rentals for companionship and joy. Choose from dogs, cats, and more. Easy, ethical, and hassle-free!</p>
                </div>
                <div className="w-52 flex flex-col items-center py-10 text-center rounded-xl mx-auto bg-[#ffd2d2]">
                    <img src={logoone} alt="logo" className="bg-[#d9286c] p-3 rounded-full" />
                    <p className="text-[#d9286c] my-5" style={{fontSize:"9px", width:"130px"}}>Pet Rental Hub – Rent a Pet, Share the Love</p>
                    <p className="text-[#d9286c]" style={{fontSize:"9px", width:"190px"}}>Short-term pet rentals for companionship and joy. Choose from dogs, cats, and more. Easy, ethical, and hassle-free!</p>
                </div>
                <div className="w-52 flex flex-col items-center py-10 text-center rounded-xl mx-auto bg-[#ffd2d2]">
                    <img src={logoone} alt="logo" className="bg-[#d9286c] p-3 rounded-full" />
                    <p className="text-[#d9286c] my-5" style={{fontSize:"9px", width:"130px"}}>Pet Rental Hub – Rent a Pet, Share the Love</p>
                    <p className="text-[#d9286c]" style={{fontSize:"9px", width:"190px"}}>Short-term pet rentals for companionship and joy. Choose from dogs, cats, and more. Easy, ethical, and hassle-free!</p>
                </div>
                <div className="w-52 flex flex-col items-center py-10 text-center rounded-xl mx-auto bg-[#ffd2d2]">
                    <img src={logoone} alt="logo" className="bg-[#d9286c] p-3 rounded-full" />
                    <p className="text-[#d9286c] my-5" style={{fontSize:"9px", width:"130px"}}>Pet Rental Hub – Rent a Pet, Share the Love</p>
                    <p className="text-[#d9286c]" style={{fontSize:"9px", width:"190px"}}>Short-term pet rentals for companionship and joy. Choose from dogs, cats, and more. Easy, ethical, and hassle-free!</p>
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

export default About