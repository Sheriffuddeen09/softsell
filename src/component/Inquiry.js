import { useState } from "react";
import { Api } from "../api/axios";
import Header from "../Layout/Header";

function Inquiry (){

    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        remark:"",
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
        setErrors({})
        setLoading(true)

        try{
            const response = await Api.post('/inquiry.php', 
                JSON.stringify(formData),
                {
                    headers:{'Content-Type': 'application/json'},
                }
            )
          
            if (response.data.success) {
                setMessage("Inquiry sent successfully!");
                setErrors("");
                setFormData({
                    firstname:"",
                    lastname:"",
                    email:"",
                    remark:"",
                    phone:""
                })
            } 
            setFormData({
                firstname:"",
                lastname:"",
                email:"",
                remark:"",
                phone:""
            })
           
        }
        catch(err){
        console.error("Error Response:", err.response);
    
        if (!err?.response) {
            setErrors({ server: 'No server Response'});
        } else if (err.response?.status === 409) {
            setErrors({  server: 'Email already registered. Please use another email.' });
        } else if(err.response?.status === 400){
            setErrors({ server:'Missing Username or Password'})
        }
        }
        finally{
            setLoading(false)
        }
    } 
    const content =  (
        <div className="min-h-screen bg-image flex flex-col items-end justify-end -mt-12 mb-0 p-6">
            <h1 className="text-xl text-center text-white font-bold sm:-translate-x-32">We're Here to Assist You!</h1>
            <div className="bg-pink-300 flex px-2 flex-row widt my-10 p-1 justify-between">
                <h1 className="font-bold">
                Submit a request
                </h1>
                <button className="p-1 w-24 text-white text-sm bg-pink-800">Search</button>
            </div>
          <div className=" p-8 rounded-lg shadow-lg w-full max-w-lg bg-pink-300">
            
          {message && <p className="text-center text-green-500 text-xl font-bold mb-5">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <div className="grid grid-cols-2 gap-4">
              <div>
              <label className="font-bold mb-4 ">Fistname</label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name *" className="p-2 mt-2 w-full border rounded" required />
                </div>
                <div>
                <label className="font-bold mb-4 ">Lastname</label>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name *" className="p-2 w-full border mt-2 rounded" required />
                </div>
              </div>
              <div>
             <label className="font-bold mb-4 ">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" className="p-2 w-full border mt-2 rounded" required />
              </div>
              <div>
              <label className="font-bold mb-4 ">Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" className="p-2 w-full border mt-2 rounded" required />
              </div>
              <div>
                <label className="font-bold mb-4 ">Remark</label>
              <textarea name="remark" value={formData.remark} onChange={handleChange} placeholder="Remark *" className="p-2 w-full border rounded h-24 mt-2" required></textarea>
              </div>
              <button type="submit" className="bg-pink-500 text-white py-2 px-4 w-full rounded hover:bg-pink-600 transition" disabled={!formData.email || !formData.phone ||!formData.remark || !formData.firstname || !formData.lastname}>
                {loading ? "Submiting....." : "Submit"}
                </button>
            {errors.server && <p className="text-center text-red-500">{errors.serverx}</p>}

            </form>
          </div>
        </div>
      );

      return (
        <div>
            {content}
        </div>
      )
}
export default Inquiry