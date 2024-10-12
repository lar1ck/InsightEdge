// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";

const Back = () => {
    const history = useNavigate();
    const goBack = () => {
        history(-1);
    };

  return (
    <div>
        <button onClick={goBack}><IoArrowBack /></button>
    </div>
  )
}

export default Back