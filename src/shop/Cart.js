import { useEffect, useState } from "react"
import { Api } from "../api/axios"

function Cart (){

    const [cart, setCart ] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetchCart = async () =>{

        try{
            const response = await Api.get('/cart.php')
            
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
                    <div>
                        <p>{car.title}</p>
                    </div>
                ))
        ) : (
            <p>No Cart to display</p>
        )}

        </div>
    )
}

export default Cart