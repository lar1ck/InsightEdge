import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
}

const ProtectedRoute = () => {
    if(!isAuthenticated()){
        return <Navigate to='/login'/>
    }
    
  return <Outlet /> 
}

export default ProtectedRoute