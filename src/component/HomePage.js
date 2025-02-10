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

const imageUrl = 'http://localhost/source_code/image/'
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
  const [page, setPage] = useState(1) 
  const limit = 4

  const FetchPets = async () =>{
    
    try{
    const response = await Api.get('/homepage.php',{ 
      params:{
        limit: show ? 8 : limit,
        location,
        dateSearch: pickDate, // Pass pickup date
        dropSearch: dropDate, // Pass drop-off date
        page
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
  }, [page, show, pickDate, dropDate, location]);

  const pageNext = (

    <div>
    <div className="grid md:grid-cols-3 grid-cols-1 mt-6 lg:grid-cols-4 gap-5">
        {pets.map((pet) => (
          <div key={pet.id} className="border rounded-lg p-3 shadow-lg">
            <img src={`${imageUrl}${pet.image}`} alt={pet.name} className="w-full object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{pet.name}</h3>
            <p className="text-sm">Price: ${pet.price}</p>
            <p className="text-xs">Pick-up Date: {new Date(pet.pickup_date).toLocaleString()}</p>
            <p className="text-xs">Drop-off Date: {new Date(pet.dropoff_date).toLocaleString()}</p>
            <button 
              className="bg-pink-500 text-white px-4 py-2 rounded-lg mt-3"
              onClick={() => window.location.href = `/checkout?petId=${pet.id}`}
            >
              Rent Now
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-5">
        <button 
          className="mr-2 bg-gray-300 px-3 py-1 rounded-lg" 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1}
        >
         -
        </button>

        <button 
          className="mx-2 bg-pink-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "View All"}
        </button>

        <button 
          className="ml-2 bg-gray-300 px-3 py-1 rounded-lg" 
          onClick={() => setPage(page + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
    const contents = (
        <div>
<div className="flex my-5 flex-row justify-around sm:mx-20 flex-wrap sm:flex-nowrap gap-5 sm:gap-0">
    <div data-aos="fade-right" className="w-72 flex flex-col items-center py-4 text-center rounded-xl mx-auto bg-[#FFCCEA]">
        <img src={author1} alt="logo" className="p-3 w-24 h-24 rounded-full -mb-3" />
        <p className="" style={{fontSize:"12px", width:"130px"}}>Benjamin</p>
        <img src={icon} alt="logo" className="p-3 w-20 h-9 -mt-2 rounded-full" />
        <p className="text-black" style={{fontSize:"12px", width:"260px"}}>I rented an adorable rabbit, Snowball, for my kids, and they had so much fun! Snowball was friendly, clean, and came with all the supplies we needed. The website made the booking process effortless, and the customer support team was fantastic. Renting a rabbit was such a unique and joyful experience. Perfect for families or anyone looking for a cuddly companion. Highly recommended!</p>
    </div>
    <div data-aos="fade-right" className="w-72 flex flex-col items-center py-4 text-center rounded-xl mx-auto bg-[#CEEEE9]">
        <img src={author2} alt="logo" className="p-3 w-24 h-24 rounded-full -mb-3" />
        <p className="" style={{fontSize:"12px", width:"130px"}}> Ava</p>
        <img src={icon} alt="logo" className="p-3 w-20 h-9 -mt-2 rounded-full" />
        <p className="text-black" style={{fontSize:"12px", width:"260px"}}>I rented a beautiful Persian cat, Luna, from [CatRental Hub], and it was an absolute delight! The process was simple, and Luna arrived well-groomed, healthy, and super cuddly. She was the perfect companion for a cozy weekend.
        The customer service was excellent, answering all my questions promptly. I loved how easy it was to find the right cat for my needs. Highly recommend this service to all cat lovers</p>
    </div>
    <div data-aos="fade-right" className="w-72 flex flex-col items-center py-4 text-center rounded-xl mx-auto bg-[#FFCCEA]">
        <img src={author3} alt="logo" className="p-3 w-24 h-24 rounded-full -mb-3" />
        <p className="" style={{fontSize:"12px", width:"130px"}}>Isabella</p>
        <img src={icon} alt="logo" className="p-3 w-20 h-9 -mt-2 rounded-full" />
        <p className="text-black" style={{fontSize:"12px", width:"260px"}}>I had a fantastic time renting a Golden Retriever, Max, through [Petr Rental Hub ]. The website was easy to use, and the process was quick and seamless. Max came well-groomed, vaccinated, and with all the supplies I needed. The customer service team was friendly and helpful, making the entire experience stress-free. It’s the perfect way to enjoy the company of a dog without long-term commitment. Highly recommend!</p>
    </div>
</div>
        </div>
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
          <Calendar value={dropDate} onChange={(e) => setDropDate(e.target.value)} className="text-gray-500 mr-2" />
          <input style={{fontSize:'9px'}} type="text" placeholder="Pick UP Date & Time" className="w-full outline-none" />
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg shadow-sm w-44">
          <Calendar value={pickDate} onChange={(e) => setPickDate(e.target.value)} className="text-gray-500 mr-2" />
          <input style={{fontSize:'9px'}} type="text" placeholder="Drop off Date & Time" className="w-full outline-none" />
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
      <div className="mt-0 text-center" data-aos="zoom-out">
        <h2 className="text-xl font-bold text-gray-800">Deals by Pet Type</h2>
        <div className="flex justify-center flex-wrap gap-6 mt-4">
          {[
            { name: "Dogs", img: homeimageone, color: "bg-pink-500" },
            { name: "Cat", img: homeimagetwo, color: "bg-teal-500" },
            { name: "Pet Accessories", img: homeimagethree, color: "bg-pink-500" },
            { name: "Pet Beds", img: homeimagefour, color: "bg-teal-500" },
            { name: "Pet Clothes", img: homeimagefive, color: "bg-pink-500" },
          ].map((item, index) => (
            <Card key={index} className="w-60 sm:w-52 text-center p-2">
              <CardContent className="flex flex-col items-center">
                <img src={item.img} alt={item.name} className="w-24 h-24 rounded-full border-2 border-white shadow-md" />
                <p className={`text-white font-semibold px-3 py-1 rounded-full mt-2 ${item.color}`}>{item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>

    )

    const animal = (
      <div>
      <div data-aos="zoom-in" className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center mt-5 mb-10 '>
        {
          animals.map((animal) =>(
            <div>
              <img src={animal.image} />  
            </div>
          ))
        }
       
      </div>
      <Link to={'register'} data-aos="fade-up">
            <p className='bg-[#D2016A] text-white mx-auto mt-3 mb-6 p-1 w-60 rounded-2xl flex
            yitems-center justify-center text-center'>Sign up for free</p>
          </Link>
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