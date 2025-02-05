import {useEffect, useRef, useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { Api } from "../api/axios"
import Header from "../Layout/Header"


const LoginPage = () =>{
    const userRef = useRef()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        userRef.current.focus()

    }, [])

   
   const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(email, password)
    setLoading(true)
    try{
        const response = await Api.post("/login.php",
            JSON.stringify({email, password}),
           { headers:{ 'Content-Type': 'application/json'}, 
           withCredentials: true
        }
       
        )
        
        if(response.data.success){

            const user = response.data.user

            console.log("Login successful", user);

            localStorage.setItem('user_id', user.id)
            localStorage.setItem('user_firstname', user.firstname || "")
            localStorage.setItem('user_lastname', user.lastname || "")
            localStorage.setItem('user_email', user.email || "")
            navigate("/dashboard"); // Redirect to profile page
        } 
        else {
            setErrMsg(response.data.message);
        }

        setEmail('')
        setPassword('')

    }
    catch(err){
        if(!err?.response){
            setErrMsg('No server Response')
        }
        else if(err.response?.status === 401){
            setErrMsg('Unauthorised')
        }
        else if(err.response?.status === 400){
            setErrMsg('Missing Username or Password')
        }
        else{
            setErrMsg('Login failed')
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
                <h1 className="sm:text-3xl text-xl text-center text-green-400 font-serif"><span className="sm:text-2xl text-xl text-black mt-5 text-center font-bold font-roboto">Sign in</span></h1>
                <div className=" mt-2">
                    <p className="text-sm font-roboto sm:text-sm font-bold -mb-5 text-black font-Cambria">
                        Email Address:
                    </p>
                    <br />
                    <input 
                    className="border-2 border-red-400 w-64 sm:w-80 p-1 rounded-lg text-black outline-none"
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
                    <div className="">
                    <p className="text-sm font-roboto font-bold mt-2 mb-1 text-black ">
                        Password:
                    </p>
                    <input 
                     className="border-2 relative -mb-6 border-red-400 w-64 sm:w-80 p-1 rounded-lg text-black outline-none"
                     type={showPassword ? 'text' : 'password'}
                    required
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                    />   
                     <span
                    style={{ cursor: "pointer", transform: "-50" }}
                    onClick={() => setShowPassword(!showPassword)}
                    >
                    {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 absolute right-10 lg:right-96 md:right-32 lg:bottom-56 bottom-56 md:top-96 lg:translate-y-1
                        md:translate-y-28 translate-y-3 sm:-translate-x-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                      
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 absolute right-10 lg:right-96 md:right-32 lg:bottom-56 bottom-56 md:top-96 lg:translate-y-1
                        md:translate-y-28 translate-y-3 sm:-translate-x-20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    )}
                    </span>
                    </div>
                </div>
                
                <button type="submit"  className="my-5 w-64 bg-red-500 text-white sm:w-80 p-2 rounded-lg outline-none"
                     disabled={!email || !password}>
                {loading ? "Sign in....." : "Sign in"}
                </button>
            </form>
            <p className={`text-red-600 mt-0 mb-8 text-center  ${errMsg ? 'errMsg' : 'hide'}`}>
                {errMsg}
            </p>
            <div className="flex flex-row justify-center font-bold gap-1 -mt-5 mb-1 text-sm items-center">
                No account?  <Link to={'register'} className="text-sm text-center text-red-500"> Create one</Link>
                </div> 
                <p style={{fontSize:'9px', textAlign:'center'}}>Click “Sign in” to agree to medium’s Terms of Service and acknowledg that medium’s Privacy Policy applies to you </p>
                <Link to={'/reset'}><p className="text-sm text-center text-red-600 font-bold mt-3 mb-2">Forgot Password?</p></Link>
                <div className="sm:w-80 w-60 bg-gray-200 h-0.5 mb-3 "></div>
            <p className="text-sm text-center sm:block hidden"> Don’t have Pet Rent Hub account?
                <span>
                    <Link to="/register" className="text-red-500 text-sm"> Sign up now</Link>
                </span>
            </p>
            <p className=" block sm:hidden" style={{
                fontSize:"12px", textAlign:"center"
            }}> Don’t have Pet Rent Hub account?
                <span>
                    <Link to="/register" className="text-red-500 "> Sign up now</Link>
                </span>
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
export default LoginPage