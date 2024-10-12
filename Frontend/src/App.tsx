// import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Back from './componets/back'
import { RiHomeLine } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiUsersDuotone } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

// import Students from './contentDisplay/students'
// import Teachers from './contentDisplay/Teachers'
// import Users from './contentDisplay/usersModel'

function App() {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isTeacherOpen, setIsTeacherOpen,] = useState(false);
  const [isStudentOpen, setIsStudentOpen,] = useState(false);

  const toogleOpenUser = () => {
    setIsUserOpen(!isUserOpen);
  }

  const toogleOpenTeacher = () => {
    setIsTeacherOpen(!isTeacherOpen);
  }

  const toogleOpenStudent = () => {
    setIsStudentOpen(!isStudentOpen);
  }

  return (
    <div className='flex '>
      <div className='h-screen w-[20%] border border-neutral-300 px-5 sticky'>
        <div className='flex items-center'>
          <div className='h-[30px] w-[30px] rounded-full bg-indigo-700 mt-4'></div>
          <p className='mt-3 font-semibold text-2xl ml-1'>Omoi</p>
        </div>

        <div className='mt-7'>
          <nav className='h-auto flex flex-col font-semibold  '>
            <button onClick={toogleOpenUser} className='p-2  rounded-md my-1 transition duration-300 hover:bg-indigo-500 flex items-center w-full text-left'>
              <RiHomeLine className='mr-2' />
              Users
              {isUserOpen ? (
                <FaCaretUp className='ml-[140px]' />
              ) : (
                <FaCaretDown className='ml-[140px]' />
              )}
            </button>
            {isUserOpen && (
              <Link to="/users" className='p-2 ml-6 rounded-md my-1 transition duration-300  hover:bg-indigo-300 flex items-center'>
                All Users
              </Link>
            )}

            <button onClick={toogleOpenTeacher} className='p-2 rounded-md my-1 transition duration-300  hover:bg-indigo-500 flex items-center'>
              <TbBrandGoogleAnalytics className='mr-2' />
              Teachers
              {isTeacherOpen ? (
                <FaCaretUp className='ml-[120px]' />
              ) : (
                <FaCaretDown className='ml-[115px]' />
              )}
            </button>
            {isTeacherOpen && (
              <Link to="/Teachers" className='ml-6 p-2 rounded-md my-1 transition duration-300  hover:bg-indigo-300 flex items-center'>
                All Teachers
              </Link>
            )}

            <button onClick={toogleOpenStudent} className='p-2 rounded-md my-1 transition duration-300  hover:bg-indigo-500 flex items-center'>
              <PiUsersDuotone className='mr-2' />
              Students
              {isStudentOpen ? (
                <FaCaretUp className='ml-[110px]' />
              ) : (
                <FaCaretDown className='ml-[115px]' />
              )}
            </button>
            {isStudentOpen && (
              <Link to="/students" className='ml-6 p-2 rounded-md my-1 transition duration-300  hover:bg-indigo-300 flex items-center'>
                All Students
              </Link>
            )}
          </nav>
        </div>
      </div>
      <div className='h-screen w-[60%] px-3 overflow-y-auto'>
        <p className="text-2xl  mt-2"><Back /></p>
        <Outlet />
      </div>

      <div className='h-screen w-[20%]'>

      </div>
    </div>
  )
}

export default App
