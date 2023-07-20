import React, { useContext } from 'react';
import { AuthContax } from '../Contax/UserContax';
import {Navigate, useLocation} from 'react-router-dom'

const PrivetRoute = ({children}) => {
    const {user, loding} = useContext(AuthContax)
    
    const location = useLocation()

    
    if(loding){
        return <div>loding.......</div>
    }
    
    if(user && user?.uid){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivetRoute;