// import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
// import Back from './componets/back'
import { RiHomeLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import Tr_bg_logo from "./assets/IElogo/tr_bg_logo.png"
import { FaListUl } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { TbSettings2 } from "react-icons/tb";
import { HiOutlineUserCircle } from "react-icons/hi2";


interface userProps {
  name: string,
}

function App() {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isOrderOpen, setIsOrdersOpen] = useState(false);
  const [user, setUser] = useState<userProps | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);


  const toogleOpenProduct = () => setIsProductOpen(!isProductOpen);

  const toogleOpenUser = () => setIsUserOpen(!isUserOpen);

  const toogleOpenOrder = () => setIsOrdersOpen(!isOrderOpen);

  const toogleOpenProfile = () => setIsProfileOpen(!isProfileOpen);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  }
  if (!user) {
    return <div className="">
      Loading...
    </div>
  }


  return (
    <div className='flex bg-slate-50'>
      <div className='h-screen w-[20%] border border-neutral-300 px-5 overflow-y-auto'>
        <div className='flex items-center'>
          <Link to="/" className='flex items-center'>
            <div className='h-[60px] w-[60px] rounded-full  mt-2 overflow-hidden '>
              <img src={Tr_bg_logo} alt="" className='h-full w-full object-cover' />
            </div>
            <p className='mt-3 font-semibold text-xl ml-1'>InsightEdge</p>
          </Link>
        </div>
        <div className='mt-2'>
          <nav className='h-auto flex flex-col font-semibold '>

            <Link
              // onClick={toogleOpenUser}
              to='/dashboard'
              className='p-2 rounded-md my-1 group transition duration-300 hover:bg-custom-dback flex items-center justify-between w-full text-left'
            >
              <div className='flex items-center group-hover:bg-custom-dback duration-300'>
                <RiHomeLine className='mr-2 group-hover:bg-custom-dback duration-300' />
                <span className='group-hover:bg-custom-dback duration-300'>
                  Home
                </span>
              </div>
            </Link>

            <span className='text-neutral-500'>Tools</span>
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
          </nav>
        </div>
      </div>
      <div className='h-screen w-[60%] px-3 overflow-y-auto rounded-r-2xl   '>
        <p className="text-2xl mt-2">
          {/* <Back /> */}
        </p>
        <Outlet />
      </div>

      <div className='ml-2 h-screen w-[20%] pt-2 px-3 rounded-l-2xl '>
        <div className=' mt-3'>
          <div className='py-1 px-4 rounded-full shadow-sm border-2 font-semibold flex items-center justify-between'>
            <div className='flex gap-2 items-center '>
              <div className='w-[20px] h-[20px] rounded-full bg-slate-400'></div>
              <div>{user.name}</div>
            </div>
            <div className='items-center'>
              <button onClick={toogleOpenProfile}>
                {isProfileOpen ? (
                  <div>
                    <FaCaretUp />
                  </div>
                ) : (
                  <div>
                    <FaCaretDown />
                  </div>
                )}

              </button>
            </div>
          </div>
          {isProfileOpen && (
            <div className='w-[150px]  bg-slate-50 flex flex-col mt-1 font-semibold'>
              <Link to='/settings' className='border-b p-1 px-3 bg-slate-50 border-zinc-500 flex items-center gap-2'>
                <TbSettings2 />
                Settings
              </Link>
              <Link to='/Profile' className='border-b p-1 px-3 bg-slate-50 border-zinc-500 flex items-center gap-2'>
                <HiOutlineUserCircle />
                Profile
              </Link>
              <button onClick={handleLogOut} className=' p-1 px-3 group bg-slate-50 hover:bg-red-700 duration-100 hover:text-white items-center flex gap-2'>
                <BiLogOut className='bg-slate-50 group-hover:bg-red-700 duration-100 group-hover:text-white' />
                Log Out
              </button>
            </div>
          )}

        </div>
      </div>
    </div >
  )
}

export default App
