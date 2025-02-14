import { useEffect, useRef, useState } from "react"
import { Api } from "../api/axios"
import { Link, useNavigate } from "react-router-dom"
import Header from "../Layout/Header"
import vectorone from './image/Vector (3).png'
import vectortwo from './image/Vector (4).png'
import vectorthree from './image/Vector (5).png'
import vectorfour from './image/Vector (6).png'
import vectorfive from './image/Vector (7).png'
import vectorsix from './image/Vector (8).png'
import vectorseven from './image/Vector (9).png'
import vectoreight from './image/Pets--Streamline-Rounded-Material 1.png'
import vectorpay from './image/Frame 144.png'
import vectorvisa from './image/download (3) 1.png'
import vectorgoogle from './image/Frame 146.png'

const uploadUrl = "http://localhost/source_code/upload/"
function Profile (){

    const [user, setUser] = useState({
        id: "",
        firstname: "",
        email: "",
        lastname: "",
        profile_image: "",
        phone:''
    })
    const navigate = useNavigate()
    const fetchUser = async () =>{
        const userId = localStorage.getItem('user_id')
        if (!userId) {
            console.error("No user_id found in localStorage.");
            return;
        }
        try{
        const response = await Api.get(`/get_user.php?user_id=${userId}`,{
        headers:{"Content-Type": "application/json"},
        withCredentials: true
        })
        if (response.data.success && response.data.user) {
          
           setUser(response.data.user)
        } else {
            console.error("Error: Invalid user data structure.", response.data);
        }
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}


    useEffect( () =>{
        fetchUser()

    },[])

    const handleLogout = () =>{

        localStorage.removeItem('user_id')
        localStorage.removeItem('firstname')
        localStorage.removeItem('lastname')
        localStorage.removeItem('email')

        navigate('/login')
    }

    
    const sidebar = (
        <div className="flex flex-col gap-4">
            <Link to={'/notification'}>
            <div className="bg-[#CEEEE9] sm:w-80 w-72 rounded p-4 border border-2 border-blue-200">
                <div className="inline-flex items-center gap-3  ">
                <img src={vectorseven} className="h-4 w-4" alt="imagevector" />
                    <p className="font-bold  text-sm">Settings</p>
                </div>
                <p className="text-sm my-2"> Notification</p>
                <p className=" w-64" style={{fontSize:"10px"}}> We send SMS messages for booking-related notifications. You can select the notifications you would like to receive.</p>
            </div>
        </Link>
            <div className="bg-[#CEEEE9] sm:w-80 w-72 rounded p-4 border border-2 border-blue-200">
                <div className="inline-flex items-center gap-3  ">
                <img src={vectoreight} className="h-4 w-4" alt="imagevector" />
                    <p className="font-bold  text-sm">Pets</p>
                </div>
                <p className="text-sm my-2"> Tell Us About Your Pets</p>
                <p className=" w-64 sm:w-72" style={{fontSize:"10px"}}> Share details about your furry companions to help us provide the perfect rental experience! Add them one by one to ensure we understand their unique needs and preferences.</p>
                <p className=" w-64 sm:w-72 my-2" style={{fontSize:"10px"}}> To ensure safety and compatibility with the rental environment.</p>
                <Link to={'/shop'}><p className="text-pink-700 text-sm">View Pets</p></Link>
            </div>

            <div className="bg-[#CEEEE9] sm:w-80 w-72 rounded p-4 border border-2 border-blue-200">
                <Link to={'/payment'}>
                <div className="inline-flex items-center gap-3  ">
                <img src={vectorsix} className="h-3 w-3" alt="imagevector" />
                    <p className="font-bold  text-sm">Payment Methods</p>
                </div>
                <p className=" w-64" style={{fontSize:"10px"}}> We offer a variety of secure and convenient payment options to make your rental experience hassle-free. Choose the method that works best for you:</p>
                <div className="mt-2 flex flex-row justify-around">
                <img src={vectorgoogle} className="h-6 w-14" alt="imagevector" />
                <img src={vectorpay} className="h-6 w-14" alt="imagevector" />
                <img src={vectorvisa} className="h-4 w-14" alt="imagevector" />
            
                </div>
                </Link>
            </div>
            
        </div>
    )
   
    const content =  (
        <div className="bg-profile flex flex-col sm:w-96 w-72 justify-center items-center ">
             {user.profile_image && <img src={`http://localhost/source_code/${user.profile_image}`} alt="Profile" width="100" className="rounded-full w-40 h-40"
            key={user.profile_image} />}
             <Link to={'/edit'}>
             <h2 className="text-black mt-4 font-bold text-sm hover:text-blue-500 cursor-pointer">Edit Profile</h2>
             </Link>
             <h2 className="text-xl my-2 font-bold ">{user.firstname || "No Name"} {user.lastname || "No Name"}</h2>
            <p className="text-sm mb-2 font-bold">{user.email || "No Name"}</p>
            <p className="text-sm mb-2 font-bold">{user.phone || "No Number"}</p>
            
            
        </div>
    )


    return(
        <div>
            <div className="my-10  flex w-72 scroll-wid rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300 sm:scrollbar-thumb-transparent  scrollbar-thin scrollbar-track-white sm:scrollbar-track-transparent  mx-auto my-2 gap-3">
            <Link to={'/dashboard'}>
            <button className='bg-[#FFCCEA] p-2 sm:w-28 w-32 rounded items-center gap-2 font-bold text-[#D2016A] flex justify-center '> <img src={vectorone} className="h-4 w-4" alt="imagevector" /> <p> Profile </p></button>
            </Link>
            <Link to={'/cart'}>
            <button className='bg-[#FFCCEA] p-2 w-36 rounded items-center gap-2 font-bold text-[#D2016A] flex justify-center '> <img src={vectortwo} className="h-4 w-4" alt="imagevector" /> <p> My Wishlist </p>
            </button>
            </Link>
            <Link to={'/history'} className="hidden sm:block">
            <button className='bg-[#FFCCEA] p-2 w-40 rounded items-center gap-2 font-bold text-[#D2016A] flex justify-center '> <img src={vectorthree} className="h-4 w-4" alt="imagevector" /> <p> Order History </p>
            </button>
            </Link>
            <Link to={'/help'}>
            <button className='bg-[#FFCCEA] p-2 sm:w-36 w-40 rounded items-center gap-2 font-bold text-[#D2016A] flex justify-center '> <img src={vectorfour} className="h-4 w-4" alt="imagevector" /> <p> Help Center </p>
            </button>
            </Link>
            <button onClick={handleLogout} className='bg-[#FFCCEA] py-2 px-6 sm:px-2 w-40 rounded items-center gap-2 font-bold text-[#D2016A] flex whitespace-nowrap justify-center '> <img src={vectorfive} className="h-4 w-4" alt="imagevector" /> <p> Log Out </p></button>

            <Link to={'/history'} className="sm:hidden block">
            <button className='bg-[#FFCCEA] p-2 w-40 rounded items-center gap-2 font-bold text-[#D2016A] flex justify-center '> <img src={vectorthree} className="h-4 w-4" alt="imagevector" /> <p> Order History </p>
            </button>
            </Link>
          
            </div>
            <div className="mb-10 flex gap-4 flex-row flex-wrap justify-center ">
            {content}
            {sidebar}
           
            </div>
        </div>
    )
}

export default Profile