import imagepic from './homeimage/real-natures-food-IONRpiJcOJI-unsplash 1.png'
import homeimageone from './homeimage/amy-humphries-AllEP6K_TAg-unsplash 1.png'
import homeimagetwo from './homeimage/andy-bodemer-eXIIXFpf49k-unsplash 1.png'
import homeimagethree from './homeimage/Frame 6.png'
import homeimagefour from './homeimage/Frame 7.png'
import homeimagefive from './homeimage/Frame 8.png'
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, MapPin, Search } from "lucide-react";
import HomePagePet from "./HomepagePet"
import author1 from './homeimage/author1.png'
import author2 from './homeimage/author2.png'
import author3 from './homeimage/author3.png'
import icon from './homeimage/Frame 53.png'
import Frame18 from './homeimage/Frame 18.png'
import Frame19 from './homeimage/Frame 19.png'
import Frame20 from './homeimage/Frame 20.png'
import Frame21 from './homeimage/Frame 21.png'
import Frame22 from './homeimage/Frame 22.png'
import Frame23 from './homeimage/Frame 23.png'
import Frame24 from './homeimage/Frame 24.png'
import Frame25 from './homeimage/Frame 25.png'
import { Link } from 'react-router-dom'
import CarePage from './Care'
import { useEffect, useState } from 'react'
import { Api } from '../api/axios'
import HomePages from './HomePages'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageUrl = 'http://localhost/source_code/image/'


const petTypes = [
  { name: "Dogs", img: homeimageone, color: "bg-pink-500" },
  { name: "Cat", img: homeimagetwo, color: "bg-teal-500" },
  { name: "Pet Accessories", img: homeimagethree, color: "bg-pink-500" },
  { name: "Pet Beds", img: homeimagefour, color: "bg-teal-500" },
  { name: "Pet Clothes", img: homeimagefive, color: "bg-pink-500" },
];

const testimonials = [
  {
    name: "Benjamin",
    image: author1,
    bgColor: "bg-[#FFCCEA]",
    review:
      "I rented an adorable rabbit, Snowball, for my kids, and they had so much fun! Snowball was friendly, clean, and came with all the supplies we needed. The website made the booking process effortless, and the customer support team was fantastic. Renting a rabbit was such a unique and joyful experience. Perfect for families or anyone looking for a cuddly companion. Highly recommended!",
  },
  {
    name: "Ava",
    image: author2,
    bgColor: "bg-[#CEEEE9]",
    review:
      "I rented a beautiful Persian cat, Luna, from [CatRental Hub], and it was an absolute delight! The process was simple, and Luna arrived well-groomed, healthy, and super cuddly. She was the perfect companion for a cozy weekend. The customer service was excellent, answering all my questions promptly. I loved how easy it was to find the right cat for my needs. Highly recommend this service to all cat lovers.",
  },
  {
    name: "Isabella",
    image: author3,
    bgColor: "bg-[#FFCCEA]",
    review:
      "I had a fantastic time renting a Golden Retriever, Max, through [Pet Rental Hub]. The website was easy to use, and the process was quick and seamless. Max came well-groomed, vaccinated, and with all the supplies I needed. The customer service team was friendly and helpful, making the entire experience stress-free. It’s the perfect way to enjoy the company of a dog without long-term commitment. Highly recommend!",
  },
];

function HomePage () {


  const animals = [{
    image:Frame19
  },
  {
    image:Frame20
  },
  {
    image:Frame21
  },
  {
    image:Frame22
  },
  {
    image:Frame23
  },
  {
    image:Frame24
  },
  {
    image:Frame25
  },
  {
    image:Frame18
  }]


  const [pets, setPets] = useState([])
  const [show, setShow] = useState(false)
  const [dropDate, setDropDate] = useState('')
  const [pickDate, setPickDate] = useState('')
  const [location, setLocation] = useState('')
  const [pages, setPages] = useState(1) 
  const limit = 4

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 1 } });
    }
  }, [inView, controls]);


  const FetchPets = async () =>{
    
    try{
    const response = await Api.get('/homepage.php',{ 
      params:{
        limit: show ? 8 : limit,
        location,
        dateSearch: pickDate, // Pass pickup date
        dropSearch: dropDate, // Pass drop-off date
        pages
    }})

    
    if(Array.isArray(response.data.message)){
    setPets(response.data.message)
  }
    }
    catch (error) {
      console.error("Error fetching pets:", error);
    }
  }

  useEffect(() => {
    FetchPets();
  }, [pages, show, pickDate, dropDate, location]);

  const pageNext = (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Pet Grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 mt-6 lg:grid-cols-4 gap-5">
        {pets.map((pet, index) => (
          <motion.div
            key={pet.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border rounded-lg p-3 shadow-lg"
          >
            <img src={`${imageUrl}${pet.image}`} alt={pet.name} className="w-full object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{pet.name}</h3>
            <p className="text-sm">Price: ${pet.price}</p>
            <p className="text-xs my-2">Pick-up Date: {new Date(pet.pick_up_date).toLocaleString()}</p>
            <p className="text-xs">Drop-off Date: {new Date(pet.drop_off_date).toLocaleString()}</p>
  
            <Link to={`/home/${pet.id}`}>
              <motion.button
                className="bg-pink-500 text-white px-4 py-2 rounded-lg mt-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = `/home/${pet.id}`)}
              >
                Rent Now
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
  
      {/* Pagination */}
      <div className="flex justify-center items-center mt-5">
        <motion.button
          className="mr-2 bg-gray-300 px-3 py-2 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setPages(pages - 1)}
          disabled={pages === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-pink-700 font-bold">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

        </motion.button>
  
        <motion.button
          className="mx-2 bg-pink-500 text-white px-4 py-2 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "View All"}
        </motion.button>
  
        <motion.button
          className="ml-2 bg-gray-300 px-3 py-2 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setPages(pages + 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-pink-700 font-bold">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>

        </motion.button>
      </div>
    </motion.div>
  );


    const contents = (
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="mt-5"
    >
      <div className="flex my-5 flex-row justify-around sm:mx-20 flex-wrap sm:flex-nowrap gap-5 sm:gap-0">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`w-72 flex flex-col items-center py-4 text-center rounded-xl mx-auto ${item.bgColor}`}
          >
            <img src={item.image} alt={item.name} className="p-3 w-24 h-24 rounded-full -mb-3" />
            <p className="text-sm font-semibold w-32">{item.name}</p>
            <img src={icon} alt="logo" className="p-3 w-20 h-9 -mt-2 rounded-full" />
            <p className="text-black text-xs w-64">{item.review}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
    )

    const content = (

    <div className="bg-white p-2 flex flex-wrap items-center z-10 isolate justify-center">
      {/* Search Section */}
      <div className="bg-pink-100 p-3 rounded-xl sm:w-8/12 flex z-10 flex-wrap items-center justify-center gap-4 shadow-md">
        <div className="flex items-center bg-white p-2 rounded-lg shadow-sm w-44">
          <MapPin className="text-gray-500 mr-2" />
          <input style={{fontSize:'9px'}} type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location , Address" className="w-full outline-none" />
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg shadow-sm w-44 ">
          <Calendar className="text-gray-500 mr-2" />
          <input style={{fontSize:'9px'}} type="text"  value={dropDate} onChange={(e) => setDropDate(e.target.value)} placeholder="Pick UP Date & Time" className="w-full outline-none" />
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg shadow-sm w-44">
          <Calendar className="text-gray-500 mr-2" />
          <input style={{fontSize:'9px'}} type="text" value={pickDate} onChange={(e) => setPickDate(e.target.value)}  placeholder="Drop off Date & Time" className="w-full outline-none" />
        </div>
        <Button onClick={FetchPets()} className="bg-pink-500 text-white px-6 py-2 rounded-lg flex items-center">
          <Search className="mr-2" /> Search
        </Button>
      </div>
      
      {/* Image Section */}
      <div className="mt-6 flex  justify-center relative bottom-10">
        <img src={imagepic} alt="Dogs on couch" className="rounded-2xl shadow-lg" />
      </div>
      
      {/* Deals Section */}
      <div className="mt-0 text-center">
    <motion.h2
      className="text-xl font-bold text-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Deals by Pet Type
    </motion.h2>

    <div className="flex justify-center flex-wrap gap-6 mt-4">
      {petTypes.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Card className="w-60 sm:w-52 text-center p-2 shadow-lg">
            <CardContent className="flex flex-col items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 rounded-full border-2 border-white shadow-md"
              />
              <p className={`text-white font-semibold px-3 py-1 rounded-full mt-2 ${item.color}`}>
                {item.name}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>

        </div>

    )

    const animal = (
<div ref={ref}>
      {/* Animal Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center mt-5 mb-10">
        {animals.map((animal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={animal.image} alt={`Animal ${index}`} className="w-full h-auto rounded-lg" />
          </motion.div>
        ))}
      </div>

      {/* Sign-Up Button Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay: animals.length * 0.2 }}
      >
        <Link to="register">
          <p className="bg-[#D2016A] text-white mx-auto mt-3 mb-6 p-1 w-60 rounded-2xl flex items-center justify-center text-center shadow-lg hover:bg-pink-600">
            Sign up for free
          </p>
        </Link>
      </motion.div>
    </div>
    )
    return (
        <div>
            {content}
            {pageNext}
            <HomePages dropDate={dropDate} location={location} pickDate={pickDate} />
            <HomePagePet />
            {contents}
            {animal}
          <CarePage />
        </div>
    )
}
export default HomePage