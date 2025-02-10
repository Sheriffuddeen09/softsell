import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import happy1 from './homeimage/happy1.png'
import happy2 from './homeimage/happy2.png'
import happy3 from './homeimage/happy3.png'

const CarePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div  className="relative">
          <img src={happy1} alt="Weekend Getaway" className="w-full h-auto rounded-lg" />
          <p className="absolute bottom-4 left-4 text-white font-semibold bg-black bg-opacity-50 p-2 rounded">
            Weekend Getaway Companions: Special rates on renting playful, family-friendly dogs for weekends.
          </p>
        </div>
        <div  className="relative">
          <img src={happy2}alt="Therapy Dogs" className="w-full h-auto rounded-lg" />
          <p className="absolute bottom-4 left-4 text-white font-semibold bg-black bg-opacity-50 p-2 rounded">
            Therapy Dogs: Discounted rentals for emotional support and therapy sessions.
          </p>
        </div>
        <div  className="relative">
          <img src={happy3} alt="Adventurous Breeds" className="w-full h-auto rounded-lg" />
          <p className="absolute bottom-4 left-4 text-white font-semibold bg-black bg-opacity-50 p-2 rounded">
            Adventurous Breeds: Deals on active breeds like Huskies or Retrievers for outdoor trips.
          </p>
        </div>
      </div>

      <h2 className="text-center text-2xl font-bold my-6" data-aos="fade-up" >
        We are truly grateful that you’ve entrusted us with the care of your beloved pup
      </h2>

      <div data-aos="zoom-out" className="flex bg-homepage flex-col md:flex-row items-center justify-end bg-gray-100 rounded-lg p-6" >
        <div className="p-6 text-center md:text-left flex flex-col justify-end items-center">
          <h3 className="text-5xl text-white font-bold">Pet Care?</h3>
          <p className="text-white text-2xl mt-2 font-bold">How to Start a Pet-Sitting</p>
          <p className="mt-2 text-white w-64 text-center text-xl">
            Thank you for trusting us to care for your furry friend. We promise to treat them with love and care, just like family.
          </p>
          <button className="mt-4 bg-[#D2016A] text-white py-1 px-4 w-60 rounded-full shadow-lg hover:bg-pink-600">
            Search Your Puppy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarePage;
