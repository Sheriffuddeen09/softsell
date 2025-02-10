import { useEffect, useState } from "react"
import { Api } from "../api/axios"

const cartimage='http://localhost/source_code/product.php'

function Cart (){

    const [cart, setCart ] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetchCart = async () =>{

        try{
            const response = await Api.get('/cart.php') 
            if(response.data.success){
              setCart(response.data.message)
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
                    <div key={cart.id}>
                      <img
                        src={`${cartimage}${car.image}`} // Change URL to match your setup
                        alt={car.title}
                        className="w-full h-64 object-cover cursor-pointer"
                        // onClick={() => window.location.href = `/product/${product.id}`} // Redirect to details page
                      />
                        <p>{car.title}</p>
                        <p>{car.price}</p>
                        <p>{car.description}</p>
                        <p>{car.location}</p>
                    </div>
                ))
        ) : (
            <p>No Cart to display</p>
        )}

        </div>
    )
}

export default Cart