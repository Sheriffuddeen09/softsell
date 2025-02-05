import { Navigate } from "react-router-dom"

function Protected({children}){

    const isLoggin = localStorage.getItem('isLogged', ) || sessionStorage.getItem('isLogged', )

    if (!isLoggin){
        return <Navigate to="/login" replace/>
    }
    return children
}

export default Protected