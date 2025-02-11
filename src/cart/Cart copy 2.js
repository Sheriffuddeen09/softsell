import { useEffect, useState } from "react"
import { Api } from "../api/axios"

const productUrl = 'http://localhost/source_code/image/'

function Cart (){

    const [cart, setCart ] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    const fetchCart = async () =>{
      const userId = localStorage.getItem("user_id");

        try{
            const response = await Api.get(`/cart.php?user_id=${userId}`) 
            if(response.data.success){
              setCart(response.data.cart)
            }
            else{
              setCart([])
            }
          }
          catch (error) {
            console.error("Error Display Products", error);
            }
          finally{
            setLoading(false)
          }   
        }   

    useEffect(() =>{
        fetchCart()
    },[])

    return (
        <div>
        {loading ? (
          <p>Loading Cart...</p>
        ) : error ? (
          <p className="text-red-500">Error loading cart</p>
        ) : cart.length > 0 ? (
                cart.map((car) =>(
                    <div key={cart.id} className="flex gap-5 border border-pink-700 p-2 flex-row ">
                      <img
                        src={`${productUrl}${car.image}`} 
                        alt={car.title}
                        className="w-52 h-52 "
                        // onClick={() => window.location.href = `/product/${product.id}`} // Redirect to details page
                      />
                      
                      <div className="flex flex-col">
                        <p className="text-sm font-bold bg-[#7fffd4] w-56 text-center  p-1 rounded">{car.title}</p>
                        <div className="inline-flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                        <p className='w-52 my-2' style={{fontSize:"13px"}}>{car.location}</p>
                        </div>
                        <div className="inline-flex flex-wrap gap-5 sm:gap-40">
                        <p className="text-sm h-8 font-bold bg-[#7fffd4]  text-center  p-1 rounded 
                        w-20">${car.price}</p>
                    <p className="width-des ">{car.maintenance}</p>
                    </div>
                    </div>
                    </div>
                ))
        ) : (
            <p>No Cart to display</p>
        )}

        </div>
    )
}

export default Cart