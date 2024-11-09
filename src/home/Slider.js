import { useEffect, useState } from "react"
import { homesdata } from "../Data";
import { Link } from "react-router-dom";

function Slider(){
    const [index, setIndex] = useState(0);

   
    useEffect(() => {
      const lastIndex = homesdata.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, homesdata]);


    useEffect(() =>{

        let slider = setInterval(() => {
            setIndex(index + 1);
          }, 10000);
          return () => clearInterval(slider);

    },[index])

    const content = <>
    
    {homesdata.map((home, homeIndex) => {
          const { id, images, title, click, body, clicked} = home;
          let position = "nextSlide";
          if (homeIndex === index) {
            position = "activeSlide";
          }
          if (
            homeIndex === index - 1 ||
            (index === 0 && homeIndex === homesdata.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={`${position} bg-gray-700`}>
              <div className="flex justify-around p-20 gap-12 bg-green-200 rounded-xl">
             
              <div className=" translate-x-3 sm:translate-x-14">
              <p className=" text-black mb-3 mt-10 text-3xl w-96 font-bold">{title}</p>
             <Link to={'/about'}>
              <p className={`text-white text-center bg-green-500 rounded-2xl border border- mt-4 w-40 py-2 transition-all duration-500 ease-in-out hover:bg-black hover:text-white cursor-pointer font-bold `}>{click}</p>
              </Link> 
              </div>
              <img src={images} alt={'imagePicture'} className=" w-80  hidden sm:block" style={{height:"150px"}}/>
              </div>
              
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>

        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>

        </button>
      
    </>
return(
    <div className='translate-y-20 flex flex-col bg-black'> 
        {content}
       
    </div>
)
}

export default Slider
