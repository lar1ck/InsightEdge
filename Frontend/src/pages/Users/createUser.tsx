import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface userProps {
    name: string,
    age: number,
    email: string,
}

const CreateUser = () => {
    const [formData, setFormData] = useState<userProps>({
        name: "",
        age: 0,
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newUser = await axios.post("http://localhost:3000/user", formData);
        setFormData({
            name: "",
            age: 0,
            email: "",
        });
        console.log("new user created", newUser);
        navigate('/users');
    }

    return (
        <div>
            Create New User
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">name</label>
                    <input type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Name'
                    />
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input type="number"
                        name='age'
                        value={formData.age}
                        onChange={handleChange}
                        placeholder='Age'
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser