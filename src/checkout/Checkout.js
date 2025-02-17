import { useEffect, useState } from "react"
import { Api } from "../api/axios";
import colorone from './image/Rectangle 81.png'
import colortwo from './image/Rectangle 82.png'
import colorthird from './image/Rectangle 83.png'
import colorfour from './image/Rectangle 84.png'
import paypal from './image/paypal.png'
import googlepay from './image/googlepay.png'
import visa from './image/visa.png'
import { useNavigate } from "react-router-dom";

const productUrl = "http://localhost/source_code/image/";


function Checkout ({setOrder, order, paymentMethod, totalPrice, setTotalPrice}) {

    
    const [loading, setLoading] = useState(false)
    const [shipment, setShipment] = useState('')
    const navigate = useNavigate()
    const calculateTotal = (items) =>{
        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0 )
        setTotalPrice(total)
    }

    const handleQuantity = (index, event) =>{
        const value = parseInt(event.target.value)
        const newOrder = [...order]
        newOrder[index].quantity = value
        setOrder(newOrder)
        calculateTotal(newOrder)

    }

    const handleSize = (index, size) =>{

        const newOrder = [...order]
        newOrder[index].size = size
        setOrder(newOrder)

    }

    const handleColor = (index, color) =>{

        const newOrder = [...order]
        newOrder[index].color = color
        setOrder(newOrder)
        calculateTotal(newOrder)

    }


    const fetchCart = async (e) =>{
        

        const userId = localStorage.getItem("user_id");
        try {
          setLoading(true);
          const response = await Api.get(`/cart.php?user_id=${userId}`);
          if (response.data.success && response.data.cart ) {
            setOrder(response.data.cart);
            calculateTotal(response.data.cart)
          } else {
            setOrder([]);
          }
        } catch (error) {
          console.error("Error fetching cart:", error);
          setOrder([]);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() =>{

        fetchCart()
      },[])

      const fetchOrder = async (e) =>{
        e.preventDefault()

        const userId = localStorage.getItem("user_id");
        
        try{
        const response = await Api.post('/checkout.php', JSON.stringify({
            total_price: totalPrice,
            user_id: userId,
            payment_method: paymentMethod,
            items: order.map((item) =>({
                product_id: item.product_id,
                image: item.image,
                title: item.title,
                price: item.price,
                color: item.color,
                size: item.size,
                quantity: item.quantity,
                pick_up_date: item.pick_up_date,
                pick_up_time: item.pick_up_time,
                drop_off_date: item.drop_off_date,
                drop_off_time: item.drop_off_time,
            }))
        }))

        if(response.data.success){
            setOrder([])
            setTotalPrice(0)
            navigate('/payment')
        }
    } 
    catch (error) {
      console.log("Checkout error:", error);
      alert("An error occurred. Please try again.");
    }
      }
    const orderList = (
        <div>
 {order.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        order.map((item, index) => (
          <div key={item.product_id} className="flex-col p-2 flex items-center gap-4 mb-4">
        <div className="flex inline-flex gap-4 flex-wrap">
            <img src={`${productUrl}${item.image}`} className=" rounded-tl-2xl rounded-bl-2xl  w-72 h-72" />
                    <div>   
                        <p className="font-bold my-2">
                            {item.title}
                        </p>
                        <p className="font-bold">
                            ${item.price}
                        </p>
                        <div>
                        <div className="flex flex-col">
                        <p className="font-bold my-2">Color</p>
                        <div className="inline-flex flex-wrap ">
                        <img src={colorone} alt="color" className="w-5 h-5"/>
                        <img src={colortwo} alt="color" className="w-5 h-5"/>
                        <img src={colorthird} alt="color" className="w-5 h-5"/>
                        <img src={colorfour} alt="color" className="w-5 h-5"/>
                    </div>
                    <select className="my-2 border border-2 p-2 w-32 rounded border-pink-700 outline-pink-700" value={item.color} onChange={(e) => handleColor(index, e.target.value)}>
                        <option value={'Pink'}>Pink</option>
                        <option value={'Orange'}>Orange</option>
                        <option value={'Sky blue'}>Sky blue</option>
                        <option value={'Red'}>Red</option>
                     </select>
                    </div>
                    <div className="flex flex-col mb-3">
                        <p className="font-bold">Size</p>
                    <div className="inline-flex flex-wrap gap-2 my-2">
                        <p className="border rounded border-pink-700 border-2 font-bold h-7 text-center w-6">S</p>
                        <p className="border rounded border-pink-700 border-2 font-bold h-7 text-center w-6">M</p>
                        <p className="border rounded border-pink-700 border-2 font-bold h-7 text-center w-6">L</p>
                        <p className="border rounded border-pink-700 border-2 font-bold h-7 text-center w-6">XL</p>
                    </div>
                    <select className="mt-2 border border-2 p-2 w-28 rounded border-pink-700 outline-pink-700" value={item.size} onChange={(e) => handleSize(index, e.target.value)}>
                        <option value={'S'}>Small</option>
                        <option value={'M'}>Medium</option>
                        <option value={'L'}>Large</option>
                        <option value={'XL'}>Extra</option>
                     </select>
                    </div>
                    <div>
                        <p className="font-bold">Quantity</p>
                        <select className="mb-2 border border-2 p-2 w-28 rounded border-pink-700 outline-pink-700" value={item.quantity} onChange={(e) => handleQuantity(index, e)}>
                        {[...Array(10).keys()].map(num =>(
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                        </select>
                     </div>
                    </div>
                    <div className="inline-flex gap-6 flex-wrap">
                    <div >
                    <p className="text-center font-bold">Pick up Date & Time</p>
                    <div className="border w-36 border-2 rounded-lg p-2 mx-auto border-pink-700 text-center">
                     <p>{item.pick_up_date}</p>
                     <p>{item.pick_up_time}</p>
                     
                    </div>
                    </div>
                    <div>
                    <p className="text-center font-bold">Drop off Date & Time</p>
                    <div className="border w-36 border-2 rounded-lg p-2 mx-auto border-pink-700 text-center">
                     <p>{item.pick_up_date}</p>
                     <p>{item.pick_up_time}</p>
                    
                    </div>
                    </div>
                    </div>
                    
                    </div>
                    <div className="bg-black block h-0.5 w-full"></div>

                    </div>
                    </div>
                ))
            )
            }
        </div>
    )

    return (
        <div className="bg-pink-200 my-10 sm:mx-5 flex justify-around p-4 items-end flex-row flex-wrap">
            {orderList}

            <div className="bg-white border border-2 border-pink-700 rounded-xl sm:w-96 w-72 p-5 h-96">
                <div className="flex flex-row justify-around text-pink-700 my-4 font-bold">
                    <div>Your Order </div>
                    <div>Subtotal</div>
                </div>
                <div className="sm:w-80 w-64 bg-blue-400 h-0.5 block mx-auto"></div>
                <div className="flex flex-row justify-around  my-4 font-bold">
                    <div>product </div>
                    <div>$480</div>
                </div>
                <div className="sm:w-80 w-64 bg-blue-400 h-0.5 block mx-auto"></div>
                <div className="flex flex-row justify-around  my-4 font-bold">
                    <div>Subtotal </div>
                    <div>${totalPrice}</div>
                </div>
                <div className="sm:w-80 w-64 bg-blue-400 h-0.5 block mx-auto"></div>

                <div className="flex justify-center gap-4 mt-20">
                <img
                    src={paypal}
                    alt="PayPal"
                    className={`w-20 h-12 cursor-pointer`}
                    
                />
                <img
                    src={googlepay}
                    alt="Google Pay"
                    className={`w-16 h-12 cursor-pointer`}
                    
                />
                <img
                    src={visa}
                    alt="Visa"
                    className={`w-20 h-12 cursor-pointer`}
                   
                />
            </div>
            <button className="bg-pink-700 p-2 rounded-lg mx-auto text-white w-32 flex justify-center items-center my-3" onClick={fetchOrder}>Rent</button>
            </div>
        </div>
    )
}

export default Checkout