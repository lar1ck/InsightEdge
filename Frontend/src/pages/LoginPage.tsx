// import React from 'react'
import "./login.css"
import Back from "../componets/back"

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-[60%] lftimg"></div>
      <div className="w-[40%] bg-white">
        <p className="text-2xl ml-3 -mb-2 mt-2"><Back /></p>
        <div className=" pt-20 px-12">
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
              <button
                type="submit"
                className="bg-black w-[250px] text-white font-semibold rounded-lg text-center p-2 ml-12 active:bg-slate-800"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login