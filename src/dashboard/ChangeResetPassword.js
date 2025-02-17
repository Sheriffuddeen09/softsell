import {useEffect, useRef, useState } from "react"
import { Link, useNavigate, useSearchParams} from "react-router-dom"
import { Api } from "../api/axios"
import Header from "../Layout/Header"

const ChangeResetPassword = () =>{
    const userRef = useRef()
   const [formData, setFormData] = useState({
    password:"",
    confirm_password:"",
   })
    
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [errMsg, setErrMsg] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(false)
    const [message, setMessage] = useState(false)


    const navigate = useNavigate()

    useEffect(() => {
        userRef.current.focus()

    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    
        if (name === "password") {
            // Clear the confirm_password error if the user updates the password
            if (formData.confirm_password && value !== formData.confirm_password) {
                setErrors((prev) => ({
                    ...prev,
                    confirm_password: "Passwords do not match.",
                }));
            } else {
                setErrors((prev) => ({
                    ...prev,
                    confirm_password: "",
                }));
            }
        }
    
        if (name === "confirm_password") {
            // Validate confirm_password when it's updated
            if (value !== formData.password) {
                setErrors((prev) => ({
                    ...prev,
                    confirm_password: "Passwords do not match.",
                }));
            } else {
                setErrors((prev) => ({
                    ...prev,
                    confirm_password: "",
                }));
            }
        }
    };

   
   const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(formData.password, formData.confirm_password, token)
    setLoading(true)

    if (formData.password.length < 8) {
        setMessage(prev => ({...prev, password:"Password must be at least 8 characters long."}));
        setLoading(false);
        return;
    }

    if (formData.password !== formData.confirm_password) {
        setErrors(prev => ({...prev, confirm_password:"Passwords do not match."}));
        setLoading(false);
        return;
    }


    try{
        const response = await Api.post("/changepassword.php",
            JSON.stringify({password:formData.password, token}),
           { 
            headers:{ 'Content-Type':'application/json'}, 
           withCredentials: true
        }
       
        )
        
        const data = await response.data
      setMessage(data.message || data.error)

        
        setFormData({
            password:"",
            confirm_password:""
        })
        navigate('/dashboard')
   
    }
    catch(err){
        if(!err?.response){
            setErrMsg({errors:'No server Response'})
        }
        else if(err.response?.status === 401){
            setErrMsg({errors:'Unauthorised'})
        }
        else{
            setErrMsg({errors:'Login failed'})
        }
    }
    finally{
    setLoading(false)
    }
   }

    const content = (
        <>
        
            <div className='flex flex-column justify-center mx-auto lg:my-3 my-3 rounded-xl border border-red-500 items-center bg-white lg:w-5/12 md:w-8/12 md:my-28 items-center p-10 w-72'>
            <div className="">
            
            <form onSubmit={handleSubmit} >
                <div className="sm:mb-5">
                    <p className="text-sm text-black my-3"> 
                    Kindly enter your details to reset your Password</p>
                <div className="">
                    <p className="text-sm sm:text-xl -mb-2 text-black font-Cambria">
                    New Password:
                    </p>
                    <br />
                    <input 
                    className="border-2 border-red-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                    type="password"
                    name="password"
                    ref={userRef}
                    required
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                   // {...attribUser}
                   
                    />
                    {message.password && (
                     <p className={`text-red-600 my-2 `}>
                        {message.password}
                    </p>
                    )}
                </div>
                    <div className="">
                    <p className="text-sm sm:text-xl -mb-2 mt-4 text-black ">
                        Confirm Password:
                    </p>
                    <br />
                    <input 
                     className="border-2 relative border-red-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                     type='password'
                    name="confirm_password"
                    required
                    id="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    />
                     {errors.confirm_password && (
                     <p className={`text-red-600 my-2 `}>
                        {errors.confirm_password}
                    </p>
                    )}
                    </div>
                </div>
                <button type="submit"  className="my-5 w-64 bg-red-500 text-white sm:w-96 p-2 rounded-lg outline-none"
                     disabled={!formData.password || !formData.confirm_password}>
                {loading ? "Reset Password....." : "Reset Password"}
                </button>
            </form>
            <p className={`text-red-600 my-2 font-bold  ${errMsg ? 'errMsg' : 'hide'}`}>
                {errMsg}
            </p>
            <p className={`text-red-600 my-2 font-bold  ${message ? 'errMsg' : 'hide'}`}>
                {message}
            </p>
        </div>
        </div>
            
        </>
        
    )

    return (
        <div className="overflow-hidden">
         {content}
        </div>
        
    )
}
export default ChangeResetPassword