import React, { useEffect } from "react";
import homepage1 from './homeimage/homepage1.png'
import homepage2 from './homeimage/homepage2.png'
import homepage3 from './homeimage/homepage3.png'
import homepage4 from './homeimage/homepage4.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const services = [
  {
    title: "Variety of Options:",
    description:
      "Choose from stainless steel bowls, ceramic dishes, and anti-slip designs to suit your pet’s eating style.",
    button: "Rent →",
    bgColor: "bg-teal-100",
    bgColorText: "text-teal-100",
    bgColorButton: "text-teal-400",
    bgColorBg: "bg-teal-400",
    image: homepage1,
  },
  {
    title: "Extra 20% on Supplies",
    description:
      "Elevated Feeders: Perfect for large breeds or senior pets to promote better digestion.",
    button: "Rent →",
    bgColor: "bg-pink-700",
    bgColorButton: "text-pink-200",
    bgColorBg: "bg-pink-300",
    image: homepage2,
    bgColorText: "text-pink-700",

  },
  {
    title: "Cozy Pet Jackets for Every Season",
    description:
      "Weather-Resistant: Shields your pets from cold, wind, and light rain. Lightweight & Durable.",
    button: "Rent →",
    bgColor: "bg-pink-700",
    bgColorText: "text-pink-700",
    bgColorButton: "text-pink-200",
    bgColorBg: "bg-pink-300",
    image: homepage3,
  },
  {
    title: "Pet Accessories",
    bgColorText: "text-teal-100",
    description:
      "Collars & Leashes: Stylish, durable, and comfortable options for every pet. Beds & Crates: Cozy resting spots.",
    button: "Rent →",
    bgColorButton:"text-teal-400",
    bgColor: "bg-teal-100",
    bgColorBg: "bg-teal-400",
    image: homepage4,
  },
];

const HomePagePet = () => {

   

  return (
    <div className="p-6">

      {/* Services Section */}
      <h2 className="text-center text-xl font-bold mb-4"  >Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 ">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-white ${service.bgColorBg} flex flex-col justify-between`}
          >
            <div className="flex flex-row justify-around" >
                <div className="flex flex-col items-center">
                    <h3 style={{lineHeight:'20px'}} className={`text-lg font-bold w-36 text-center font-bold ${service.bgColorText}`}>{service.title}</h3>
                    <p className={`text-sm my-2 w-48 text-center ${service.bgColorText}`}>{service.description}</p>
                <button className={`${service.bgColorButton} text-white px-4 py-2 rounded-lg mt-4`}>
                    <p className={`${service.bgColor} px-4 py-2 rounded-lg mt-4`}>
                {service.button}
                </p>
                </button>
                </div>
                    <img src={service.image} alt={service.title} className="w-56 h-56" />
          </div>

          </div>

          
        ))}
      </div>
    </div>
  );
};

export default HomePagePet;
