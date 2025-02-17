import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import happy1 from "./homeimage/happy1.png";
import happy2 from "./homeimage/happy2.png";
import happy3 from "./homeimage/happy3.png";

const CarePage = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 1 } });
    }
  }, [inView, controls]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Grid Section */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[happy1, happy2, happy3].map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            <img src={img} alt={`Happy ${index + 1}`} className="w-full h-auto rounded-lg" />
            <p className="absolute bottom-4 left-4 text-white font-semibold bg-black bg-opacity-50 p-2 rounded">
              {index === 0 && "Weekend Getaway Companions: Special rates on renting playful, family-friendly dogs for weekends."}
              {index === 1 && "Therapy Dogs: Discounted rentals for emotional support and therapy sessions."}
              {index === 2 && "Adventurous Breeds: Deals on active breeds like Huskies or Retrievers for outdoor trips."}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center text-2xl font-bold my-6"
      >
        We are truly grateful that you’ve entrusted us with the care of your beloved pup
      </motion.h2>

      {/* Animated Pet Care Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex bg-homepage flex-col md:flex-row items-center justify-end bg-gray-100 rounded-lg p-6"
      >
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
      </motion.div>
    </div>
  );
};

export default CarePage;
