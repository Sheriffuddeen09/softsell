import {useEffect, useRef, useState } from "react"
import { Api } from "../api/axios"
import Header from "../Layout/Header"


const ResetPassword = () =>{
    const userRef = useRef()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)

    useEffect(() => {
        userRef.current.focus()

    }, [])

   
   const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(email)
    setLoading(true)
    try{
        const response = await Api.post("/request_reset.php",
            JSON.stringify({email}),
           { 
            headers:{ 'Content-Type':'application/json'}, 
            withCredentials: true
            })
        
    const data = response.data
    
    setMessage(data.message || data.error)
        
        setEmail('')

    }
    catch(err){
        if(!err?.response){
            setMessage('No server Response')
        }
        else if(err.response?.status === 401){
            setMessage('Unauthorised')
        }
        else if(err.response?.status === 400){
            setMessage('Missing Username or Password')
        }
        else{
            setMessage('Login failed')
        }
    }
    finally{
    setLoading(false)

    }
   }

    const content = (
        <>
        
            <div className='flex flex-column justify-center mx-auto lg:my-3 my-3 rounded-xl border border-red-500 items-center bg-white sm:w-96 md:my-28 items-center p-10 w-72'>
            <div className="">
            
            <form onSubmit={handleSubmit} >
                <div className="sm:mb-5">
                <h1 className="sm:text-3xl text-xl text-center text-red-400 font-serif"><span className=" text-sm mb-4 text-black mt-5 text-center font-bold font-roboto">Forgot your Password?</span></h1>
                <p className="text-black my-3  text-center font-roboto w-48 mx-auto" style={{fontSize:"8px"}}> 
                Please enter the email address associated with your account. We’ll send you an email with instructions to reset your password. </p>
                <div className=" mt-2">
                    <p className="text-sm font-roboto sm:text-sm font-bold -mb-5 text-black font-Cambria">
                        Email Address:
                    </p>
                    <br />
                    <input 
                    className="border-2 border-red-200 w-64 sm:w-80 p-1 rounded-lg text-black outline-none"
                    type="text"
                    ref={userRef}
                    required
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    />
                </div>
                
                <button type="submit"  className="my-5 w-64 bg-red-500 text-white sm:w-80 p-2 rounded-lg outline-none"
                     disabled={!email}>
                {loading ? "Sending Email....." : "Send Email"}
                </button>
                </div>
            </form>
            <p className={`text-red-600 my-2 text-center font-bold  ${message ? 'errMsg' : 'hide'}`}>
                {message}
            </p>
            
       
        </div>
        </div>
        </>
        
    )

    return (
        <div className="overflow-hidden">
        <Header />
         {content}
        </div>
        
    )
}
export default ResetPassword