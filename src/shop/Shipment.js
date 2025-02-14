import { useEffect, useRef, useState } from "react"
import { Api } from "../api/axios"
import { useNavigate } from "react-router-dom"

function Shipment ({paymentMethod, totalPrice}) {

    const [shipment, setShipment] = useState({
        recipient_firstname:'',
        recipient_lastname:'',
        recipient_phone:'',
        city:'',
        address:'',
        state:'',
        zip_code:"",
        country:""
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)

    const navigate = useNavigate()

    
    const handleChange = ( e) =>{
        const {name, value} = e.target
        setShipment(prev =>({
            ...prev, [name]:value
        }))
    }

    const handleSubmit = async (e) =>{

        e.preventDefault()
        setLoading(true)
        setMessage(true)

        const userId = parseInt(localStorage.getItem('user_id'), 10);

        if (!userId) {
            console.log("Error: User ID is missing in localStorage");
            return;
        }
        
        try {
            const response = await Api.post('/checkout.php', JSON.stringify({
                shipment: shipment,
                user_id: userId, // Ensure it's a number
                payment_method: paymentMethod,
                total_price: totalPrice
            }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
        
            console.log("Server response:", response.data);
        
            if (response.data.success) {
                setMessage("Your Information has been Saved");
                navigate('/checkout');
            }
        } catch (err) {
            console.log("Invalid Data Input", err);
        }
        
    }


    return(
        <div>
<form onSubmit={handleSubmit} className="border w-72 border-pink-600 flex flex-col justify-center mx-auto items-center rounded ">
                <div className="sm:mb-5">
                    <p className="text-sm sm:text-2xl font-bold my-2 text-black my-3"> 
                    Kindly enter your Information Details</p>
                <div className="">
                    <p className="text-sm sm:text-xl -mb-2 text-black font-Cambria">
                    Recipient FirstName:
                    </p>
                    <br />
                    <input 
                    className="border-2 border-red-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                    type="text"
                     name="recipient_firstname"
                    required
                    id="recipient_firstname"
                    value={shipment.recipient_firstname}
                    onChange={handleChange}
                   
                    />
                </div>
                    <div className="">
                    <p className="text-sm sm:text-xl -mb-2 mt-4 text-black ">
                        Recipient LastName:
                    </p>
                    <br />
                    <input 
                     className="border-2 relative border-red-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                     type='text'
                    name="recipient_lastname"
                    required
                    id="recipient_lastname"
                    value={shipment.recipient_lastname}
                    onChange={handleChange}
                    />
                    </div>

                    <div className="">
                    <p className="text-sm sm:text-xl -mb-2 mt-4 text-black ">
                        Recipient Phone-Number:
                    </p>
                    <br />
                    <input 
                     className="border-2 relative border-red-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                     type='text'
                    name="recipient_phone"
                    required
                    id="recipient_phone"
                    value={shipment.recipient_phone}
                    onChange={handleChange}
                    />
                    </div>

                    <div className="">
                    <p className="text-sm sm:text-xl -mb-2 mt-4 text-black ">
                        Recipient Address:
                    </p>
                    <br />
                    <input 
                     className="border-2 relative border-red-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                     type='text'
                    name="address"
                    required
                    id="address"
                    value={shipment.address}
                    onChange={handleChange}
                    />
                    </div>

                    <div className="">
                    <p className="text-sm sm:text-xl -mb-2 mt-4 text-black ">
                        Country:
                    </p>
                    <br />
                    <input 
                     className="border-2 relative border-red-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                     type='text'
                    name="country"
                    required
                    id="country"
                    value={shipment.country}
                    onChange={handleChange}
                    />
                    </div>
                    <div className="">
                    <p className="text-sm sm:text-xl -mb-2 mt-4 text-black ">
                        City:
                    </p>
                    <br />
                    <input 
                     className="border-2 relative border-red-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                     type='text'
                    name="city"
                    required
                    id="city"
                    value={shipment.city}
                    onChange={handleChange}
                    />
                    </div>
                    <div className="">
                    <p className="text-sm sm:text-xl -mb-2 mt-4 text-black ">
                        State:
                    </p>
                    <br />
                    <input 
                     className="border-2 relative border-red-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                     type='text'
                    name="state"
                    required
                    id="state"
                    value={shipment.state}
                    onChange={handleChange}
                    />
                    </div>
                    <div className="">
                    <p className="text-sm sm:text-xl -mb-2 mt-4 text-black ">
                        Zip Code:
                    </p>
                    <br />
                    <input 
                     className="border-2 relative border-red-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                     type='text'
                    name="zip_code"
                    required
                    id="zip_code"
                    value={shipment.zip_code}
                    onChange={handleChange}
                    />
                    </div>
                </div>
                <button type="submit"  className="my-5 w-64 bg-red-500 text-white sm:w-96 p-2 rounded-lg outline-none"
                  disabled={!shipment.recipient_firstname || !shipment.recipient_lastname || !shipment.recipient_phone || !shipment.country || !shipment.city || !shipment.zip_code || !shipment.address || !shipment.state}>
                   
                    {loading ? "Submit...." : "Submit Form"}
                </button>
            </form>
            {message &&
            <p className={`text-red-600 my-2 font-bold`}>
                {message}
            </p>
            }
    </div>
    )
}

export default Shipment