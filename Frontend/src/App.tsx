// import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Back from './componets/back'
import { RiHomeLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
// import { PiShoppingCartSimple } from "react-icons/pi"; //chart icon
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import Tr_bg_logo from "./assets/IElogo/tr_bg_logo.png"
import { FaListUl } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";


function App() {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isOrderOpen, setIsOrdersOpen] = useState(false);

  const toogleOpenProduct = () => {
    setIsProductOpen(!isProductOpen);
  }
  const toogleOpenUser = () => {
    setIsUserOpen(!isUserOpen);
  }
  const toogleOpenOrder = () => {
    setIsOrdersOpen(!isOrderOpen);
  }

  return (
    <div className='flex '>
      <div className='h-screen w-[20%] border border-neutral-300 px-5 sticky'>
        <div className='flex items-center'>
          <Link to="/" className='flex items-center'>
            <div className='h-[60px] w-[60px] rounded-full  mt-2 overflow-hidden '>
              <img src={Tr_bg_logo} alt="" className='h-full w-full object-cover' />
            </div>
            <p className='mt-3 font-semibold text-xl ml-1'>InsightEdge</p>
          </Link>
        </div>
        <div className='mt-2'>
          <nav className='h-auto flex flex-col font-semibold  '>

            <button
              onClick={toogleOpenUser}
              className='p-2 rounded-md my-1 group transition duration-300 hover:bg-custom-dback flex items-center justify-between w-full text-left'
            >
              <div className='flex items-center group-hover:bg-custom-dback duration-300'>
                <LuUsers className='mr-2 group-hover:bg-custom-dback duration-300' />
                Users
              </div>
              <div className='flex items-center group-hover:bg-custom-dback duration-300'>
                {isUserOpen ? (
                  <FaCaretUp className=' group-hover:bg-custom-dback duration-300' />
                ) : (
                  <FaCaretDown className=' group-hover:bg-custom-dback duration-300' />
                )}
              </div>
            </button>

            {isUserOpen && (
              <div className=' rounded-xl p-1'>
                <Link to="/users" className='p-2 ml-6 rounded-md my-1 transition duration-300  hover:bg-custom-dback flex items-center'>
                  All Users
                </Link>
                <Link to="/create/user" className='p-2 ml-6 rounded-md my-1 transition duration-300  hover:bg-custom-dback flex items-center'>
                  New User
                </Link>
              </div>
            )}
            <button
              onClick={toogleOpenProduct}
              className='p-2 rounded-md my-1 group transition duration-300 hover:bg-custom-dback flex items-center justify-between w-full text-left'
            >
              <div className='flex items-center group-hover:bg-custom-dback duration-300'>
                <RiHomeLine className='mr-2 group-hover:bg-custom-dback duration-300' />
                Products
              </div>
              <div className='flex items-center group-hover:bg-custom-dback duration-300'>
                {isProductOpen ? (
                  <FaCaretUp className=' group-hover:bg-custom-dback duration-300' />
                ) : (
                  <FaCaretDown className=' group-hover:bg-custom-dback duration-300' />
                )}
              </div>
            </button>

            {isProductOpen && (
              <div className=' rounded-xl p-1'>
                <Link to="/products" className='p-2 ml-6 rounded-md my-1 transition duration-300  hover:bg-custom-dback flex items-center'>
                  All Products
                </Link>
                <Link to="/product/new" className='p-2 ml-6 rounded-md my-1 transition duration-300  hover:bg-custom-dback flex items-center'>
                  New Product
                </Link>
              </div>
            )}

            <button
              onClick={toogleOpenOrder}
              className='p-2 rounded-md my-1 group transition duration-300 hover:bg-custom-dback flex items-center justify-between w-full text-left'
            >
              <div className='flex items-center group-hover:bg-custom-dback duration-300'>
                <FaListUl className='mr-2 group-hover:bg-custom-dback duration-300' />
                Orders
              </div>
              <div className='flex items-center group-hover:bg-custom-dback duration-300'>
                {isOrderOpen ? (
                  <FaCaretUp className=' group-hover:bg-custom-dback duration-300' />
                ) : (
                  <FaCaretDown className=' group-hover:bg-custom-dback duration-300' />
                )}
              </div>
            </button>

            {isOrderOpen && (
              <div className=' rounded-xl p-1'>
                <Link to="/orders" className='p-2 ml-6 rounded-md my-1 transition duration-300  hover:bg-custom-dback flex items-center'>
                  All Orders
                </Link>
                <Link to="/order/new" className='p-2 ml-6 rounded-md my-1 transition duration-300  hover:bg-custom-dback flex items-center'>
                  New Order
                </Link>
              </div>
            )}

            {/* 
             */}
          </nav>
          <div className='bottom-0 absolute my-2'>
            <Link to="/login" className='items-center flex gap-2 py-2 px-3'>
              <BiLogOut />
              Log Out
            </Link>
          </div>
        </div>
      </div>
      <div className='h-screen w-[60%] px-3 overflow-y-auto'>
        <p className="text-2xl mt-2"><Back /></p>
        <Outlet />
      </div>

      <div className='h-screen w-[20%]'>

      </div>
    </div >
  )
}

export default App
