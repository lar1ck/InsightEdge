// import React from 'react'
import "./login.css"
import Back from "../componets/back"
import Logo from "../assets/IElogo/tr_color_logo.png"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-[60%] lftimg"></div>
      <div className="w-[40%] ">
        <p className="text-2xl ml-3 -mb-2 mt-2"><Back /></p>
        <div className=" pt-5 px-12 items-center flex flex-col ">
          <img src={Logo} alt="" className="h-[120px] " />
          <h1 className="font-bold text-3xl font-sans text-center ">
            Welcome back!
          </h1>
          <p className="text-gray-600 font-semibold text-center mt-4">
            Enter your dettails
          </p>
          <div className="flex flex-col mt-9 ml-10 ">
            <form className="space-y-9 ">
              <input
                type="text"
                className="text-black border-b-2 border-black outline-none bg-slate-200 p-2 w-[350px] font-sans font-semibold"
                placeholder="Username"
              />
              <input
                type="password"
                className="text-black border-b-2 border-black outline-none bg-slate-200 p-2 w-[350px] font-sans font-semibold"
                placeholder="password"

              />
              <label className="text-gray-600 font-mono space-x-2 flex">
                <input type="checkbox" />
                <p>remeber me</p>
              </label>
              <Link to="/">
                <button
                  type="submit"
                  className="bg-black w-[250px] mt-5 text-white font-semibold rounded-lg text-center p-2 ml-12 active:bg-slate-800"
                >
                  Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login