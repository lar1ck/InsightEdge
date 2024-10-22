// import { Navigate, Outlet } from 'react-router-dom'
// import axios from 'axios';

// const isAuthenticated = async (): Promise<boolean> => {
//     const token = localStorage.getItem('token');

//     if(!token){
//         console.log("No token found");
//         return false;
//     }

//     try{
//         const response = await axios.post('http://localhost:3000/verifyToken', {} , {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         });
//         return response.status === 200;
//     }catch(err){
//         console.error(err);
//         return false;
//     }
// }

// const ProtectedRoute = () => {
//   if(!isAuthenticated()){
//     return <Navigate to="/login" />
//   }

//   return <Outlet /> ;
// }

// export default ProtectedRoute



// import React from 'react'
import axios from 'axios'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const isChecked = async (): Promise<boolean> => {
        const token = localStorage.getItem('token');

        if(!token){
            console.log("No token Found!");
            return false;
        }

        try{
            const response = await axios.post("http://localhost:3080/verifyToken", {} , {
                headers: {
                    "Authorization":`Bearer ${token}`
                }
            });
            return response.data === 200;
        }catch(err){
            console.error(err);
            return false;
        }
    }
  if(!isChecked()){
    return <Navigate to='/login' />
  }

  return <Outlet />;
}

export default ProtectedRoute



//////meemememememe

// import React from 'react'
// import { Navigate , Outlet } from 'react-router-dom'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const ProtectedRoute = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [isChecked, setIsChecked] = useState(false);


//     useEffect(() => {
//         const token = localStorage.getItem('token');

//         if(!token){
//             console.log("No token found");
//             setIsChecked(true);
//             setIsAuthenticated(false);
//             return;
//         }

//         const checkToken = async () => {
//             const response = await axios.post('http://localhost:3000/verifyToken', {} , {
//                 headers: {
//                     "Authorization":`Bearer ${token}`
//                 }
//             });

//             if(response.status === 200){
//                 setIsAuthenticated(true);
//             }
//         };
//         checkToken();
//     },[]);

//   if(!isChecked){
//     return <div>Loading...</div>
//   }

//   if(!isAuthenticated){
//     return <Navigate to='/login' />;
//   }

//   return <Outlet />;
// }

// export default ProtectedRoute