import { useState } from "react";
import { Api } from "../api/axios";
import Header from "../Layout/Header"
import imageone from './image/Frame 129.png'
import logoone from './image/Vector (1).png'
import logotwo from './image/Vector (2).png'
import logothree from './image/Vector.png'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Contact (){

    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        message:"",
        phone:""
    })
    const [message, setMessage] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(prev =>({
            ...prev, [name]:value
        }))
    }
    
    const handleSubmit = async (e) =>{

        e.preventDefault()

        setLoading(true)

        try{
            const response = await Api.post('/contact.php', formData,
                {
                    headers:{'Content-Type': 'application/json'},
                }

            
            )
          
            if (response.data.success) {
              setMessage("Inquiry sent successfully!");
              setErrors("");
              setFormData({ name: "", email: "", message: "" });
          } else {
              setErrors(response.data.error || "Something went wrong.");
          }
            
            if(response.data){
              setMessage('Contact Submit successfully')
              setFormData({
                firstname:"",
                lastname:"",
                email:"",
                message:"",
                phone:""
            })
            }
        }
        catch(err){
        console.error("Error Response:", err.response);
    
        if (!err?.response) {
            setErrors({server: 'No server Response'});
        } else if (err.response?.status === 409) {
            setErrors({server: 'Email already registered. Please use another email.' });
        } else if(err.response?.status === 400){
            setErrors({server:'Missing Username or Password'})
        }
        }
    } 

    const containerStyle = {
      width: "100%",
      height: "400px", // Adjust height as needed
    };
    
    const center = {
      lat: 51.5033, // Latitude of London Eye
      lng: -0.1195, // Longitude of London Eye
    };
    
    const map = (
      
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
            {/* Marker at London Eye */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      );
    
    const content =  (
        <div className="min-h-screen bg-contact flex flex-col -mt-2 items-center justify-center p-6">
            <h1 className="text-black -mt-4 mb-2">Contact Customer Support</h1>
            <div className="inline-flex gap-10 my-6">
                <div className="inline-flex gap-1">
                    <img src={logothree} alt="logo" className="bg-[#d9286c] w-8 p-2 h-8 rounded-full"/>
                    <div>
                      <p style={{fontSize:"10px"}}>Address</p>
                      <p className="w-20 text-center " style={{fontSize:"8px"}}>Sentral DTLA at 755 S. Spring</p>
                    </div>
                  </div>
                    {/* second */}

                    <div className="inline-flex gap-1">
                    <img src={logotwo} alt="logo" className="bg-[#d9286c] w-8 p-2 h-8 rounded-full"/>
                    <div>
                      <p style={{fontSize:"10px"}}>Phone</p>
                      <p className="w-20 " style={{fontSize:"8px"}}>+(123) 654 6540</p>
                    </div>
                  </div>

                  {/* third */}
                  <div className="inline-flex gap-1">
                    <img src={logoone} alt="logo" className="bg-[#d9286c] w-8 p-2 h-8 rounded-full"/>
                    <div>
                      <p style={{fontSize:"10px"}}>Email</p>
                      <p className="w-20 " style={{fontSize:"8px"}}>petrental@123.com</p>
                    </div>
                  </div>

            </div>
          <div className=" p-8 rounded-lg  w-full max-w-lg">
            {message && <p className="text-center text-green-500 text-xl font-bold mb-5">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                <label className="font-bold mb-4">Firstname</label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name *" className="p-2 w-full mt-3 border rounded" required />
                </div>
                <div>
                <label className="font-bold mb-4 ">Lastname</label>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name *" className="p-2 w-full border mt-3 rounded" required />
                </div>
              </div>
              <div>
                <label className="font-bold mb-4 ">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} 
              placeholder="Email Address *" className="p-2 w-full border mt-2 rounded" required />
              </div>
              <div>
                <label className="font-bold mb-4 ">Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" className="p-2 w-full border mt-2 rounded" required />
              </div>
              <div>
                <label className="font-bold mb-4 ">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message *" className="p-2 w-full border rounded mt-2 h-24" required></textarea>
              </div>
              <button type="submit" className="bg-pink-500 text-white py-1 px-4 sm:w-96 w-60 mx-auto flex items-center text-center justify-center rounded hover:bg-pink-600 transition"disabled={!formData.email || !formData.phone ||!formData.message || !formData.firstname || !formData.lastname}>
                {loading ? "Submiting....." : "Submit"}
                </button>
            {errors.server && <p className="text-center text-red-500">{errors.server}</p>}

            </form>
          </div>
        </div>
      );

      return (
        <div>
            <img src={imageone} alt="imagepicture" className="sm:block hidden w-full" style={{height:"550px"}}/>
            <img src={imageone} alt="imagepicture" className=" w-full block sm:hidden" style={{height:"240px"}}/>
            {content}
            {map}
        </div>
      )
}
export default Contact