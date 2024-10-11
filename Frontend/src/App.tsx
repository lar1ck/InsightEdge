// import React from 'react'
import { StrictMode } from 'react'
import './App.css'
import Students from './contentDisplay/students'
import Teachers from './contentDisplay/Teachers'
import Users from './contentDisplay/usersModel'

function App() {
  return (
    <StrictMode>
      <p className='font-bold underline'></p>
      <Students />
      <Teachers />
      <Users />
    </StrictMode>
  )
}

export default App
