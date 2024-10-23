// import React from 'react'
import { Navigate , Outlet } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isChecked, setIsChecked] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!token){
            console.log("No token found");
            setIsChecked(true);
            setIsAuthenticated(false);
            return;
        }

        const checkToken = async () => {

            try{

                const response = await axios.post('http://localhost:3000/verifyToken', {} , {
                    headers: {
                        "Authorization":token,
                    }
                });
    
                setIsAuthenticated(response.status === 200);
            }catch(err){
                console.error(err);
                setIsAuthenticated(false);
            }finally{
                setIsChecked(true);
            }
        };
        checkToken();
    },[]);

  if(!isChecked){
    return <div>Loading...</div>
  }

  if(!isAuthenticated){
    return <Navigate to='/login' />;
  }

  return <Outlet />;
}

export default ProtectedRoute