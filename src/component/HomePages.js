import { useEffect, useState } from "react"
import { Api } from "../api/axios"


const imageUrl = 'http://localhost/source_code/image/'


function HomePages ({pickDate, dropDate, location}){


    const [pets, setPets] = useState([])
    const [showAll, setShowAll] = useState(false)
    const [page, setPage] = useState(1) 
    const limit = 4
  
    const FetchPets = async () =>{
      
      try{
      const response = await Api.get('/homepages.php',{ 
        params:{
          dropDate,
          limit: showAll ? 8 : limit,
          location,
          pickDate
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
    }, [page, showAll, pickDate, dropDate, location]);
  
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
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Hide" : "View All"}
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
    return(
        <div>
            {pageNext}
        </div>
    )
}

export default HomePages