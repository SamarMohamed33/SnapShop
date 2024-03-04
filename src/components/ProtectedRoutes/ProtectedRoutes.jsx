import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
// import { userContext } from '../../context/UserContext';


function ProtectedRoutes({children}) {
    // let {setUser}=useContext(userContext)
    let token = localStorage.getItem("token")
    try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        // setUser(decoded.id)
    } catch (error) {
        localStorage.clear()
        return <Navigate to="/signin"/>
    }
    return children
}

export default ProtectedRoutes;