import { useEffect, useState } from "react"
import { Api } from "../api/axios"
import { useNavigate } from "react-router-dom"
import Header from "../Layout/Header"

function Profile (){

    const [user, setUser] = useState({
        id: "",
        firstname: "",
        email: "",
        lastname: "",
        profile_image: ""
    })
    const [selectUpload, setSelectUpload] = useState(null)

    const navigate = useNavigate()
    useEffect( () =>{

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
            setUser(response.data.user);  // ✅ Correcting data structure
        } else {
            console.error("Error: Invalid user data structure.", response.data);
        }
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

        fetchUser()

    },[])

    const handleImageChange = (e) => setSelectUpload(e.target.files[0])

    const handleImageUpload = async () =>{

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
        
        if(response.data.profile_image){ 
            setUser(prevUser =>({...prevUser, profile_image:response.data.profile_image}))
        }
        }
        catch (error) {
            console.error("Error uploading image:", error);
        }
    }

    const handleLogout = () =>{

        localStorage.removeItem('user_id')
        localStorage.removeItem('firstname')
        localStorage.removeItem('lastname')
        localStorage.removeItem('email')

        navigate('/login')
    }
    const content =  (
        <div>
             <h2>{user.id || "No Id"}</h2>
             <h2>{user.firstname || "No Name"}</h2>
             <h2>{user.lastname || "No Name"}</h2>
            <p>{user.email || "No Name"}</p>
            <img src={user.profile_image || 'default.png'} alt="Profile" width="100" />
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Upload Image</button>
            <button onClick={handleLogout}>Logput</button>

        </div>
    )

    return(
        <div>
            <Header />
            {content}
        </div>
    )
}

export default Profile