import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface userProps {
    name: string;
    email: string;
    age: number;
    password: string;
    image: string;
}

const EditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState<userProps | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: 0,
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/user/${id}`);
                setUser(res.data);
                setFormData({
                    name: res.data.name,
                    email: res.data.email,
                    age: res.data.age,
                    password: "",
                });
            } catch (err) {
                console.error(err);
            }
        };
        getUser();
    }, [id]);

    const navigate = useNavigate();

    const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = () => {
                const basicString = reader.result as string;
                setFormData((prev) => ({...prev, image:basicString}));
            }
            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            const confirmUpdate = window.confirm("are you sure ou want to update this user?");
            if (confirmUpdate) {
                e.preventDefault();
                await axios.put(`http://localhost:3000/user/${id}`, formData);
                navigate('/users');
            } else {
                navigate("/users");
            }
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            {user ? (

                <form onSubmit={handleSubmit} className='p-3 '>
                    <div className='flex gap-5 '>
                        <div className='w-full'>
                            <label htmlFor="">Name</label>
                            <input type="text"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Name'
                                className='mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 '
                            />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="">Email</label>
                            <input type="text"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email'
                                className='mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 '
                            />
                        </div>

                    </div>
                    <div>
                        <label htmlFor="">Age</label>
                        <input type="number"
                            name='age'
                            value={formData.age}
                            onChange={handleChange}
                            placeholder='Age'
                            className='mt-1 block  border border-gray-300 outline-none rounded-md p-2 '
                        />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Password'
                            className='mt-1 block  border border-gray-300 outline-none rounded-md p-2 '
                        />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="file"
                            name='image'
                            onChange={handleImageChange}
                            className='mt-1 block  border border-gray-300 outline-none rounded-md p-2 '
                        />
                    </div>
                    <button type='submit' className='py-1 px-4 mt-3 font-semibold text-white bg-custom-ddback rounded-lg text-right'>Submit</button>
                </form>
            ) : (
                <div>
                    No User Found
                </div>
            )}
        </div>
    )
}

export default EditUser