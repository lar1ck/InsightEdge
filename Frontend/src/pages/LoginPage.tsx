import React from 'react'
import "./login.css"
import Back from "../componets/back"
import Logo from "../assets/IElogo/tr_color_logo.png"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const [Loading,setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:3000/login", { email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      console.log('login successful');
      setLoading(false);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
      setLoading(false);
    }
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.preventDefault();

    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  return (
    <div className="flex h-screen">
      <div className="w-[60%] lftimg"></div>
      <div className="w-[40%] ">
        <p className="text-2xl ml-3 -mb-2 mt-2"><Back /></p>
        <div className=" pt- px-12 items-center flex flex-col ">
          <img src={Logo} alt="" className="h-[120px] " />
          <h1 className="font-bold text-3xl font-sans text-center ">
            Welcome back!
          </h1>
          <p className="text-gray-600 font-semibold text-center mt-4">
            Enter your details
          </p>
          <div className="flex flex-col mt-9 ml-10 ">
            <form className="space-y-9 " onSubmit={handleLogin}>
              <input
                type="text"
                name='email'
                value={email}
                onChange={handleChange}
                className="text-black border-b-2 border-black outline-none bg-slate-200 p-2 w-[350px] font-sans font-semibold"
                placeholder="Email"
                required
              />
              <input
                type="password"
                name='password'
                value={password}
                onChange={handleChange}
                className="text-black border-b-2 border-black outline-none bg-slate-200 p-2 w-[350px] font-sans font-semibold"
                placeholder="password"
                required

              />
              <div className='flex justify-between items-center'>
                <div>
                  <label className="text-gray-600 font-mono space-x-2 flex">
                    {/* <input type="checkbox" />
                    <p>remember me</p> */}
                  </label>
                </div>
                <div className='mr-16 text-sm text-neutral-600 font-semibold hover:underline'>
                  <Link to="/signup">Don't have an account ?</Link>
                </div>
              </div>
              {error && <p className='font-semibold text-custom-dpink'>{error}</p>}
              <button
                type="submit"
                className="bg-black w-[250px] mt-5 text-white font-semibold rounded-lg text-center p-2 ml-12 active:bg-slate-800"
              >
                {Loading ? 'Loging in...' : ('Login') }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login