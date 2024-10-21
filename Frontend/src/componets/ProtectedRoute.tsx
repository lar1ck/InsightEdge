// import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import axios from 'axios';

const isAuthenticated = async (): Promise<boolean> => {
    const token = localStorage.getItem('token');

    if(!token){
        console.log("No token found");
        return false;
    }

    try{
        const response = await axios.post('http://localhost:3000/verifyToken', {} , {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data === true;
    }catch(err){
        console.error(err);
        return false;
    }
}
const ProtectedRoute = () => {
  if(!isAuthenticated()){
    return <Navigate to="/login" />
  }

  return <Outlet /> ;
}

export default ProtectedRoute