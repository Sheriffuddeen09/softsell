import Header from "../Layout/Header"
import imageone from './image/Frame 119.png'
import imagetwo from './image/Frame 121.png'
import logoone from './image/shield-cat-solid 1.png'
import logotwo from './image/shield-dog-solid 1.png'
import logothree from './image/Mask group.png'
import logofour from './image/Pets--Streamline-Rounded-Material 3.png'
import love from './image/Frame 52.png'
import imageside from './image/istockphoto-1218724795-612x612 1.png'
import aboutone from './image/download.png'
import abouttwo from './image/Boston.png'
import aboutthree from './image/Frame 126.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"
import { Link } from "react-router-dom"



function About (){


    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
      } else {
        controls.start({ opacity: 0, y: 50, transition: { duration: 1 } });
      }
    }, [inView, controls]);


    const content = (
        <div>
            <img src={imageone} alt="imagepicture" className="sm:block hidden w-full" style={{height:"500px"}}/>
            <img src={imageone} alt="imagepicture" className=" w-full block sm:hidden" style={{height:"270px"}}/>
            <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.8 }} className="text-center sm:w-5/12 w-72 mx-auto text-sm my-6">Flexible Options: Whether it’s a day, a weekend, or longer, our rental plans are designed to fit your needs.</motion.p>
            <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.8 }} className="text-white flex flex-row flex-wrap justify-center mx-auto px-2 items-center">
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
            </motion.div>
            <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.8 }} className="my-6 font-bold text-center">Join the Pet Rental Revolution</motion.p>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-row justify-around sm:mx-20 flex-wrap sm:flex-nowrap gap-5 sm:gap-0">

                <div className="w-64 flex flex-col items-center py-4 text-center rounded-xl mx-auto bg-[#ffd2d2]">
                    <img src={logoone} alt="logo" className="bg-[#d9286c] p-3 w-16 h-16 rounded-full" />
                    <p className="text-[#d9286c] my-5" style={{fontSize:"12px", width:"180px"}}>Pet Rental Hub – Rent a Pet, Share the Love</p>
                    <p className="text-black" style={{fontSize:"12px", width:"230px"}}>Short-term pet rentals for companionship and joy. Choose from dogs, cats, and more. Easy, ethical, and hassle-free!</p>
                </div>
                <div className="w-64 flex flex-col items-center py-4 text-center rounded-xl mx-auto bg-[#CEEEE9]">
                    <img src={logotwo} alt="logo" className="bg-[#23BCA8] p-3 w-16 h-16 rounded-full" />
                    <p className="text-[#23BCA8] my-5" style={{fontSize:"12px", width:"180px"}}>Your Trusted Companion Connection!</p>
                    <p className="text-black" style={{fontSize:"12px", width:"230px"}}>Looking for a furry friend without the long-term commitment? Pet Rental Hub connects you with adorable, well-cared-for pets for short-term companionship. Whether you need a playful pup for the weekend, a cuddly cat for a few days, or a therapy pet for special occasions, we make pet sharing easy, ethical, and enjoyable. Rent, love, return—hassle-free pet experiences for everyone</p>
                </div>
                <div className="w-64 flex flex-col items-center py-4 text-center rounded-xl mx-auto bg-[#ffd2d2]">
                    <img src={logothree} alt="logo" className="bg-[#d9286c] p-3 w-16 h-16 rounded-full" />
                    <p className="text-[#d9286c] my-5" style={{fontSize:"12px", width:"180px"}}> Premium Accessories for Your Pets</p>
                    <p className="text-black" style={{fontSize:"12px", width:"230px"}}>Discover top-quality accessories for your furry friends! From comfy beds and stylish collars to fun toys and healthy treats, we have everything to keep your dogs and cats happy. Shop now for the best care and comfort</p>
                </div>
                <div className="w-64 flex flex-col items-center py-4 text-center rounded-xl mx-auto bg-[#CEEEE9]">
                    <img src={logofour} alt="logo" className="bg-[#23BCA8] p-3 w-16 h-16 rounded-full" />
                    <p className="text-[#23BCA8] my-5" style={{fontSize:"12px", width:"180px"}}>Love Pets but Not Ready to Own? Rent One Today</p>
                    <p className="text-black" style={{fontSize:"12px", width:"230px"}}>Looking for a furry friend without the long-term commitment? Pet Rental Hub connects you with adorable, well-cared-for pets for short-term companionship. Whether you need a playful pup for the weekend, a cuddly cat for a few days, or a therapy pet for special occasions, we make pet sharing easy, ethical, and enjoyable. Rent, love, return—hassle-free pet experiences for everyone</p>
                </div>
            </motion.div>

            <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.8 }} className="text-black font-bold sm:text-xl my-6 sm:w-96 w-72 text-sm mx-auto text-center">Wide Variety: Access pets and supplies for every occasion or lifestyle.</motion.p>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex justify-center mb-5 gap-8">
                <div className="inline-flex flex-wrap gap-0">
                    <img src={imageside} alt="imageside" className="w-64 h-64 rounded-l-xl sm:rounded-r-none rounded-r-xl " />
                 <div className="w-64 py-4 sm:-translate-x-3 rounded-l-xl sm:rounded-l-none rounded-r-xl bg-[#CEEEE9]">
                    <p className="font-bold text-sm text-center">Scarlett</p>
                    <img src={love} alt="logo" className=" p-3 w-28 mx-auto" />
                    <p className="text-[#23BCA8] my-5 text-center mx-auto" style={{fontSize:"12px", width:"180px"}}>Amazing Experience</p>
                    <p className="text-black text-center mx-auto" style={{fontSize:"12px", width:"230px"}}>I rented a dog for the weekend, and it was the best experience ever! The process was smooth, and the pet was well taken care of. Highly recommended</p>
                </div>

                <div className="inline-flex flex-wrap gap-0">
                    <img src={aboutone} alt="imageside" className="w-64 h-64 rounded-l-xl sm:rounded-r-none rounded-r-xl " />
                 <div className="w-64 py-4 sm:-translate-x-3 rounded-l-xl sm:rounded-l-none rounded-r-xl bg-[#CEEEE9]">
                 <p className="font-bold text-sm text-center">Elizabeth</p>
                    <img src={love} alt="logo" className=" p-3 w-28 mx-auto" />
                    <p className="text-[#23BCA8] my-2 text-center mx-auto" style={{fontSize:"12px", width:"180px"}}>Perfect for Pet Lovers</p>
                    <p className="text-black text-center mx-auto" style={{fontSize:"12px", width:"230px"}}>I love animals but can't own one right now. This service allowed me to enjoy the company of a loving cat for a few days. So happy with it
                    I was worried about pet rental, but the team ensured the pets were well cared for. The dog I rented was super friendly and healthy</p>
                </div>
                </div>
                </div>
                   </motion.div>
            {/* second */}

                   <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.6, delay: 0.8 }}
                 className="flex justify-center mb-5">
                <div className="inline-flex flex-wrap gap-0">
                    <img src={abouttwo} alt="imageside" className="w-64 h-64 rounded-l-xl sm:rounded-r-none rounded-r-xl " />
                 <div className="w-64 py-4 sm:-translate-x-3 rounded-l-xl sm:rounded-l-none rounded-r-xl bg-[#CEEEE9]">
                    <p className="font-bold text-sm text-center">Aarav</p>
                    <img src={love} alt="logo" className=" p-3 w-28 mx-auto" />
                    <p className="text-[#23BCA8] my-5 text-center mx-auto" style={{fontSize:"12px", width:"180px"}}>Dogs are the purest form of love</p>
                    <p className="text-black text-center mx-auto" style={{fontSize:"12px", width:"230px"}}>Renting a stroller from this was a lifesaver during our vacation! The quality was excellent, and the process was hassle-free. Highly recommended!</p>
                </div>
                </div>

                <div className="inline-flex flex-wrap gap-0">
                    <img src={aboutthree} alt="imageside" className="w-64 h-64 rounded-l-xl sm:rounded-r-none rounded-r-xl " />
                 <div className="w-64 py-4 sm:-translate-x-3 rounded-l-xl sm:rounded-l-none rounded-r-xl bg-[#CEEEE9]">
                 <p className="font-bold text-sm text-center">Joshua</p>
                    <img src={love} alt="logo" className=" p-3 w-28 mx-auto" />
                    <p className="text-[#23BCA8] my-2 text-center mx-auto" style={{fontSize:"11px", width:"180px"}}>Loyal, loving, and always by your side</p>
                    <p className="text-black text-center mx-auto" style={{fontSize:"12px", width:"230px"}}>I rented a dog kennel for a month, and it was in perfect condition. Affordable prices and great customer service - I would definitely use this service again!</p>
                </div>
                </div>
                </motion.div>
     

                {/* new section */}

                <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.8 }} className="text-black font-bold sm:text-xl my-6 sm:w-96 w-72 text-sm mx-auto text-center">Eco-Friendly: Reduce waste by renting instead of buying pet products</motion.p>

                <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex bg-about flex-col md:flex-row items-center justify-end bg-gray-100 rounded-lg p-6"
      >
        <div className="p-6 text-center md:text-left flex flex-col justify-end items-center">
          <h3 className="text-5xl text-white font-bold">Pet Friendly?</h3>
          <p className="text-white text-2xl mt-2 font-bold">Reduce waste by renting</p>
          <p className="mt-2 text-white w-64 text-center text-xl">
          instead of buying pet products
          </p>
          <Link to={'category'}>
          <button className="mt-4 bg-[#D2016A] text-white py-1 px-4 w-60 rounded-full shadow-lg hover:bg-pink-600">
            Search Your Puppy
          </button>
          </Link>
        </div>
      </motion.div>
        </div>
    )

    return (
        <div>
            {content}
        </div>
    )
}

export default About