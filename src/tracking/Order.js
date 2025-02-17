import { useEffect, useState } from "react";
import { Api } from "../api/axios";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageUrl = "http://localhost/source_code/image/";

function Order({ pickDate, dropDate, location }) {
  const [pets, setPets] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPets, setTotalPets] = useState(0);

  const limit = 4;

  const FetchPets = async () => {
    try {
      const response = await Api.get("/homepages.php", {
        params: {
          dropDate,
          limit: showAll ? 8 : limit,
          location,
          pickDate,
          page,
        },
      });

      if (Array.isArray(response.data.message)) {
        setPets(response.data.message);
        setTotalPets(response.data.totalPets);
      }
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  useEffect(() => {
    FetchPets();
  }, [page, showAll, pickDate, dropDate, location]);

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
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls} transition={{ duration: 0.6 }}>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-6 lg:grid-cols-4 mb-10 mx-10 gap-3">
        {pets.map((pet, index) => (
            
          <motion.div
            key={pet.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border rounded-lg p-3 shadow-lg"
          > <Link to={`/homes/${pet.id}`}>
            <img src={`${imageUrl}${pet.image}`} alt={pet.name} className="w-full object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{pet.name}</h3>
            <p className="text-sm">Price: ${pet.price}</p>
            <p className="text-xs my-2">Pick-up Date: {new Date(pet.pick_up_date).toLocaleString()}</p>
            <p className="text-xs">Drop-off Date: {new Date(pet.drop_off_date).toLocaleString()}</p>
            </Link>
          </motion.div>
        ))}
      </div>

</motion.div>
       );
}

export default Order;
