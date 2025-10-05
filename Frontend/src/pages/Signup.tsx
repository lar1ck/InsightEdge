import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface userProps {
    email: string,
    name: string,
    age: number,
    password: string,
}

const Signup = () => {
    const [formData, setFormData] = useState<userProps>({
        email: '',
        name: '',
        age: 0,
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = await axios.post('http://localhost:3000/api/auth/register', formData);
            console.log("user created", user);
            setFormData({
                email: '',
                name: '',
                age: 0,
                password: '',
            })
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='flex'>
            <div className="w-[40%] ml-[100px] mt-12">
                <div className=" pt- px-12 items-center flex flex-col ">
                    <h1 className="font-bold text-3xl font-sans text-center ">
                        Welcome on InsightEdge
                    </h1>
                    <p className="text-gray-600 font-semibold text-center mt-4">
                        Create an account
                    </p>
                    <div className="flex flex-col mt-9 ml-10 " onSubmit={handleSubmit}>
                        <form className="space-y-9 " >
                            <input
                                type="text"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className="text-black border-b-2 border-black outline-none bg-slate-200 p-2 w-[350px] font-sans font-semibold"
                                placeholder="Username"
                                required

                            />
                            <input
                                type="text"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className="text-black border-b-2 border-black outline-none bg-slate-200 p-2 w-[350px] font-sans font-semibold"
                                placeholder="Email"
                                required
                            />
                            <input
                                type="password"
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                className="text-black border-b-2 border-black outline-none bg-slate-200 p-2 w-[350px] font-sans font-semibold"
                                placeholder="password"
                                required

                            />

                            <input
                                type="number"
                                name='age'
                                value={formData.age}
                                onChange={handleChange}
                                className="text-black border-b-2 border-black outline-none bg-slate-200 p-2 w-[350px] font-sans font-semibold"
                                placeholder="Age"
                                required
                            />

                            <div className='flex justify-between items-center'>
                                <div>
                                    <label className="text-gray-600 font-mono space-x-2 flex">
                                        {/* <input type="checkbox" />
                    <p>remember me</p> */}
                                    </label>
                                </div>
                                <Link to='/login'>
                                    <div className='pr-24 text-sm text-neutral-600 font-semibold hover:underline'>
                                        Already have an account ?
                                    </div>
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="bg-black w-[250px] mt-5 text-white font-semibold rounded-lg text-center p-2 ml-12 transform hover:opacity-65 duration-500 transition-all hover:bg-gradient-to-r from-orange-600  via-custom-ddpink to-purple-900"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-[60%] blob h-screen flex'>

            </div>
        </div>
    )
}

export default Signup