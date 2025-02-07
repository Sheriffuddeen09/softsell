import { Navigate } from "react-router-dom"

function Protected({children}){

    const isLoggin = localStorage.getItem('user_id', ) || sessionStorage.getItem('user_id', )

    if (!isLoggin){
        return <Navigate to="/login" replace/>
    }
    return children
}

export default Protected