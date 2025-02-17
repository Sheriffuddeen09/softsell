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
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"


function Blogs() {
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
    <div ref={ref} className="w-full">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      >
        <img
          src={imageone}
          alt="imagepicture"
          className="sm:block hidden w-full"
          style={{ height: "500px" }}
        />
        <img
          src={imageone}
          alt="imagepicture"
          className="w-full block sm:hidden"
          style={{ height: "240px" }}
        />
      </motion.div>

      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.8 }} className="text-center sm:w-4/12 w-72 mx-auto text-[#d9286c] font-bold text-sm my-6">
        Discover the Joy of Pet Ownership Without Long-Term Commitments
      </motion.p>

      {/* First Blog Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-white flex flex-row gap-5 flex-wrap justify-center mx-auto px-2 items-center"
      >
        <img
          src={logoone}
          alt="imagepicture"
          className="sm:h-72 h-52 lg:relative lg:left-32"
        />
        <div className="bg-[#20daaf] widt mx-auto flex flex-col items-center py-7 sm:p-11 rounded-xl">
          <h1 className="font-bold w-72 text-center">
            The Joy of Renting a Pet: Why It’s Perfect for Everyone
          </h1>
          <p
            className="w-64 text-center my-6"
            style={{ fontSize: "10px" }}
          >
            Explore how renting a pet can bring happiness to families,
            individuals, and even workplaces. Discuss how this service is great
            for those who love animals but cannot commit to long-term ownership
            due to time, space, or lifestyle constraints.
          </p>
          <div className="flex flex-row justify-between gap-16 sm:gap-24 items-center">
            <h1 className="font-bold text-sm text-black">24 January 2025</h1>
            <button className="bg-gray-200 text-green-500 p-1 w-20 text-sm rounded">
              More
            </button>
          </div>
        </div>
      </motion.div>

      {/* Additional Blog Cards */}
      {[ 
        { 
          img: logotwo, 
          bgColor: "#ffd2d2", 
          textColor: "#d9286c", 
          title: "How to Choose the Perfect Pet for Your Needs", 
          desc: "A guide on selecting the right pet based on lifestyle, space availability, and personality. Highlight how your platform offers options for dogs, cats, and more to suit every preference."
        }, 
        { 
          img: logothree, 
          bgColor: "#20daaf", 
          textColor: "#000000", 
          title: "Benefits of Renting Pet Accessories and Supplies", 
          desc: "Discuss the cost-effectiveness and convenience of renting pet essentials like beds, toys, crates, and seasonal outfits. Explain how renting helps reduce waste and ensures pets always have what they need."
        }
      ].map((blog, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white flex -mb-8 flex-row gap-5 -mt-4 flex-wrap sm:flex-nowrap justify-center mx-auto px-2 items-center"
        >
          <img src={blog.img} alt="imagepicture" className="sm:h-80 sm:w-6/12 h-52 lg:relative lg:left-2"/>
          <div className={`bg-[${blog.bgColor}] widt mx-auto flex flex-col items-center py-9 sm:py-14 sm:w-6/12 rounded-xl`}>
            <h1 className={`font-bold w-72 text-center text-[${blog.textColor}]`}>{blog.title}</h1>
            <p className={`w-72 text-[${blog.textColor}] font-bold text-center my-6`} style={{ fontSize: "14px", width:"360px" }}>{blog.desc}</p>
            <div className="flex flex-row justify-between gap-16 sm:gap-24 items-center">
              <h1 className="font-bold text-sm text-black">24 January 2025</h1>
              <button className={`bg-[${blog.textColor}] text-white p-1 w-20 text-sm rounded`}>More</button>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Final Section with Image Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-white flex mb-4 -mt-6 sm:-translate-y-6 flex-row sm:gap-5 gap-2 flex-wrap justify-center mx-auto px-2 items-center"
      >
        <img src={imagethree} alt="imagepicture" className="sm:h-64 h-52" />
        <img src={imagefour} alt="imagepicture" className="sm:h-64 h-52" />
      </motion.div>

      {/* Quote Section */}
      <h1 className="font-bold w-72 text-center text-black mx-auto">
        Bringing Pets and People Together – One Rental at a Time
      </h1>

      {/* Three Quote Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-white flex mt-4 flex-row gap-4 flex-wrap justify-center mx-auto px-2 items-center mb-6"
      >
        {[ 
          { img: picone, text: "Experience the Love of Pets Without the Commitment" }, 
          { img: pictwo, text: "Creating Moments of Joy with Pets and Essentials" }, 
          { img: picthree, text: "Making Pet Ownership Easy, Affordable, and Flexible" }
        ].map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col border rounded w-64 sm:w-72 border-2 shadow-md border-green-100 items-center justify-center text-center"
          >
            <img src={quote.img} alt="picture" className="w-full" />
            <h1 className="w-48 my-2 text-black" style={{ fontSize: "11px" }}>
              {quote.text}
            </h1>
            <p className="text-[#d9286c] text-sm mb-3">Read More</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Blogs;
