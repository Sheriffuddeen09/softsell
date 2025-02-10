import { useEffect, useState } from "react"
import { Api } from "../api/axios"
import { useNavigate } from "react-router-dom"
import Header from "../Layout/Header"

function EditProfile (){

    const [selectUpload, setSelectUpload] = useState(null)
    const [message, setMessage] = useState(false)
    const [messages, setMessages] = useState(false)
    const [viewPassword, setViewPassword] = useState(false)
    const [viewUpload, setViewUpload] = useState(false)
    const [viewUser, setViewUser] = useState(false)
    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const [viewEdit, setViewEdit] = useState(false)
    const [formData, setFormData] = useState({
        new_password:'',
        confirm_password:'',
        current_password:""
    })

    const [detail, setDetail] = useState({
        phone:'',
        firstname:"",
        lastname:""
    })
    const [errors, setErrors] = useState(false)
    const [error, setError] = useState(false)


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

   

    
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(prevState =>({
            ...prevState, [name]: value
        }))

        if (name === "new_password") {
            // Clear the confirm_password error if the user updates the new_password
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
            if (value !== formData.new_password) {
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
    }

    const handleUpdate = async (e) =>{
        e.preventDefault()
        setLoading(true)

        if (formData.new_password.length < 8) {
            setMessage(prev => ({...prev, new_password:"Password must be at least 8 characters long."}));
            setLoading(false);
            return;
        }
    
        if (formData.new_password !== formData.confirm_password) {
            setErrors(prev => ({...prev, confirm_password:"Passwords do not match."}));
            setLoading(false);
            return;
        }


        try{
            const response = await Api.post('/changepassword.php', JSON.stringify({new_password:formData.new_password, current_password:formData.current_password, confirm_password:formData.confirm_password}), {
                headers:{'Content-Type': 'application/json'},
                withCredentials:true
            })
            if(response.data.success){
                setFormData({
                    new_password:'',
                    current_password:'',
                    confirm_password:''
                })
            }
            navigate('/dashboard')
        }
        catch(err){
            if (!err?.response) {
                setErrors({ general: "No server response" });
            } else if (err.response?.status === 401) {
                setErrors({ general: "Unauthorized" });
            } else {
                setErrors({ general: "Password change failed" });
            }
        }
        finally{
        setLoading(false)
        }
    }


    const handleDetailChange = (e) =>{
        const {name, value} = e.target
        setDetail(prevState =>({
            ...prevState, [name] : value
        }))
    }

    const handleDetailUpdate = async (e) =>{

        e.preventDefault()
        setLoading(true)

        try{
            const response = await Api.post('/username.php', JSON.stringify({phone:detail.phone, firstname:detail.firstname, lastname:detail.lastname}), {
                headers:{'Content-Type': 'application/json'},
                withCredentials:true
            })
            if(response.data.success){
                setDetail({
                    firstname:'',
                    phone:'',
                    lastname:''
                })

                setMessages("Update is Successful!")
            }
            setDetail({
                firstname:'',
                phone:'',
                lastname:''
            })

            setMessages("Update is Successful!")
            navigate('/dashboard')
        }
        catch(err){
            if (!err?.response) {
                setError({ general: "No server response" });
            } else if (err.response?.status === 401) {
                setError({ general: "Unauthorized" });
            } else {
                setError({ general: "Invalid Field Data" });
            }
        }
        finally{
        setLoading(false)
        }
    }
    const handleImageChange = (e) =>{
         const files = e.target.files[0]
         setSelectUpload(files)
         setImageFile(files)
        }

    const handleImageUpload = async () =>{

        setLoading(true)
        if (!selectUpload) {
            console.error("No file selected.");
            return;
        }

        const formData = new FormData()
        formData.append('user_id', user.id)
        formData.append('profile_image', selectUpload)

        try{
        const response = await Api.post('/user_profile.php', formData,
            {
                headers: { "Content-Type": "multipart/form-data" }, // ✅ Important for file uploads
                withCredentials: true
            });
        
            const newProfileImage = response.data.profile_image + `?t=${new Date().getTime()}`;

            setUser((prevUser) => ({
                ...prevUser,
                profile_image: newProfileImage,
            }));
            setUser((prevUser) => {
                const updatedUser = { ...prevUser, profile_image: newProfileImage };
                console.log("Updated user:", updatedUser); // 🔍 Debugging
                return updatedUser;
            });
                        

        setSelectUpload(null);
        setMessage("Upload image is successful");
        setImageFile(null);
        navigate('/dashboard')
        }
        catch (error) {
            console.error("Error uploading image:", error);
        }
     finally{
        setLoading(false)
     }   
    }


    const handleUpload = () =>{
        setViewUpload(!viewUpload)
    }

    const handleuserinfo = () =>{
        setViewUser(!viewUser)
    }

    const handlePassword = () =>{
        setViewPassword(!viewPassword)
    }

    const content = (

        <div className={` flex justify-center flex-col items-center w-full h-full bg-pink-100`}>
            <p className="text-3xl font-bold mt-5">Edit User Info</p>
            <div className={` bg-white flex flex-col justify-center items-center p-10 h-96 my-5 rounded-xl `}>
            <div className=" pb-4 px-2 rounded-xl mb-5">
        <div className="flex flex-row flex-wrap justify-around sm:flex-nowrap gap-3 sm:gap-5 ">
        <div className="flex flex-col justify-center cursor-pointer w-60
cursor-pointer my-3 items-center border border border-black p-4 rounded-lg" onClick={handleUpload}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
            <p className="font-bold my-2">Upload Picture</p>
            </div>
            <div className="flex flex-col justify-center cursor-pointer w-60
cursor-pointer my-3 items-center border border border-black p-4 rounded-lg" onClick={handleuserinfo}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>

            <p className="font-bold my-2">User Info</p>
            </div>
            <div className="flex flex-col justify-center my-3 cursor-pointer w-60
            cursor-pointer items-center border border border-black p-4 rounded-lg" onClick={handlePassword}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>


            <p className="font-bold my-2">Change Password</p>
            </div>
        </div>
            </div>
        </div>
        </div>
    )
    const changepassword = (
        <div className={`fixed trans top-0 flex justify-center items-center right-0 w-full h-full ${viewPassword ? "block" : 'hidden'}`}>
        <div className={`sm:w-96 w-72 bg-white flex flex-col justify-center items-center h-96 rounded-xl `}>
        <div className=" pb-4 px-2 rounded-xl mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 relative top-2 sm:top-8 cursor-pointer  sm:left-72 left-60" onClick={handlePassword}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
            <form onSubmit={handleUpdate} >
                <div className="sm:mb-5 mt-2">
                <div className="">
                    <p className="text-sm sm:text-xl -mb-2 text-black font-Cambria">
                    Current Password:
                    </p>
                    <br />
                    <input 
                    className="border-2 border-red-200 w-64 sm:w-80 p-2 rounded-lg outline-none"
                    type="password"
                    name="current_password"
                    // ref={userRef}
                    required
                    id="current_password"
                    value={formData.current_password}
                    onChange={handleChange}
                   // {...attribUser}
                   
                    />
                </div>
                <div className="">
                    <p className="text-sm sm:text-xl -mb-2 text-black font-Cambria">
                    New Password:
                    </p>
                    <br />
                    <input 
                    className="border-2 border-red-200 w-64 sm:w-80 p-2 rounded-lg outline-none"
                    type="password"
                    name="new_password"
                    required
                    id="new_password"
                    value={formData.new_password}
                    onChange={handleChange}
                   
                    />
                     {errors.new_password && (
                     <p className={`text-red-600 my-2 `}>
                        {errors.new_password}
                    </p>
                    )}
                </div>
                    <div className="">
                    <p className="text-sm sm:text-xl -mb-2 mt-4 text-black ">
                        Confirm Password:
                    </p>
                    <br />
                    <input 
                     className="border-2 relative border-red-200 w-64 sm:w-80 p-2 rounded-lg outline-none"
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
                <button type="submit"  className="my-2 w-64 bg-red-500 text-white sm:w-80 p-2 rounded-lg outline-none"
                     disabled={!formData.new_password || !formData.confirm_password || !formData.current_password}>
                {loading ? "Update Password....." : "Update Password"}
                </button>
            </form>
            {errors.general && (
                    <p className="text-red-600 my-2 font-bold">{errors.general}</p>
                )}
            {message && (
                    <p className="text-green-600 my-2 font-bold">{message}</p>
                )}
        </div>
        </div>
    </div>
    )

    const username = (
        <div className={`fixed trans top-0 flex justify-center items-center right-0 w-full h-full ${viewUser ? "block" : 'hidden'}`}>
        <div className={`sm:w-96 w-72 bg-white flex flex-col justify-center items-center h-96 rounded-xl `}>
        <div className=" pb-4 px-2 rounded-xl mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 relative top-8 sm:top-10 cursor-pointer  sm:left-72 left-60" onClick={handleuserinfo}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

            
            <form onSubmit={handleDetailUpdate} >
                <div className="sm:mb-5 mt-3">
                <div className="">
                    <p className="text-sm sm:text-xl -mb-2 text-black font-Cambria">
                    Firstname:
                    </p>
                    <br />
                    <input 
                    className="border-2 border-red-200 w-64 sm:w-80 p-2 rounded-lg outline-none"
                    type="text"
                    name="firstname"
                    // ref={userRef}
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleDetailChange}
                   // {...attribUser}
                   
                    />
                </div>
                <div className="">
                    <p className="text-sm sm:text-xl -mb-2 text-black font-Cambria">
                    Lastname:
                    </p>
                    <br />
                    <input 
                    className="border-2 border-red-200 w-64 sm:w-80 p-2 rounded-lg outline-none"
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={formData.lastname}
                    onChange={handleDetailChange}
                   
                    />
                </div>
                    <div className="">
                    <p className="text-sm sm:text-xl -mb-2 mt-4 text-black ">
                        Phone Number:
                    </p>
                    <br />
                    <input 
                     className="border-2 relative border-red-200 w-64 sm:w-80 p-2 rounded-lg outline-none"
                     type='text'
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleDetailChange}
                    />
                    </div>
                </div>
                <button type="submit"  className="my-5 w-64 bg-red-500 text-white sm:w-80 p-2 rounded-lg outline-none" disabled={loading}>
                {loading ? "Update....." : "Update"}
                </button>
            </form>
            {error.general && (
                    <p className="text-red-600 my-2 font-bold">{error.general}</p>
                )}
            {messages && (
                    <p className="text-green-600 my-2 font-bold">{messages}</p>
                )}
        </div>
        </div>
    </div>
    )

    const uploadProfile = (
        <div className={`fixed trans top-0 flex justify-center items-center right-0 w-full h-full ${viewUpload ? "block" : 'hidden'}`}>
            <div className={`sm:w-96 w-72 bg-white flex flex-col justify-center items-center h-96 rounded-xl `}>
            <div className="border border border-black pb-4 px-2 rounded-xl mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 relative -top-24 cursor-pointer  sm:left-52 left-40" onClick={handleUpload}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            <label
                  htmlFor="image"
                  className="btn btn-outline-secondary d-flex align-items-center"
                  style={{
                    cursor: "pointer",
                    display: "inline-flex",
                    gap: "10px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="black"
                    className="border rounded-full border-black"
                    style={{ width: "20px", height: "20px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <span style={{ color: "black", fontWeight: "bold" }}>
                   Choose Profile
                  </span>
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  className="form-control"
                  accept="image/*"
                  style={{ display: "none" }} />

                    
            </div>
            {imageFile && (
                  <div className="mt-2">
                    <small>Selected file: {imageFile.name}</small>
                  </div>
                )}
            <button onClick={handleImageUpload} className="bg-pink-700 my-2 rounded text-white w-32 p-2 hover:bg-blue-500 transition-500">{loading ? "Uploading...." : "Upload Profile" }</button>
                
            {message && <p className="text-green-500 font-bold my-2">{message}!</p>}
            </div>
            
            </div>
    )

    return(
        <div>
            {content}
            {changepassword}
            {username}
            {uploadProfile}
        </div>
    )
}

export default EditProfile