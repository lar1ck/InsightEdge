import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface usersProps {
    _id: string,
    name: string,
    email: string,
    age: number,
}

const Users = () => {
    const [users, setUsers] = useState<usersProps[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            const users = await axios.get("http://localhost:3000/users");
            setUsers(users.data);
        };
        getUsers();
    });

    return (
        <div className='my-5'>
           <h1 className='text-3xl font-bold '>Users' List</h1> 
            <div className='grid grid-cols-4 gap-6 mx-6 '>
                {users.map((user) => (
                    <div key={user._id} className='mt-3'>
                        <p className='border border-blue-600 p-3'>
                            <span className="font-semibold text-lg">Name:</span> {user.name} <br />
                            <span className="font-semibold text-lg">Age:</span> {user.age} <br />
                            <span className="font-semibold text-lg">Email:</span> {user.email} <br />
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users