import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";

interface usersProps {
    _id: string;
    name: string;
    age: number;
    email: string;
}

const Users = () => {
    const [users, setUsers] = useState<usersProps[]>([]);

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const res = await axios.get("http://localhost:3000/users");
                setUsers(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        getAllUsers();
    }, []);

    const deleteUser = async (_id: string) => {
        try {
            const confirmDel = window.confirm(`Are you sure you want to delete this user`);
            if (confirmDel) {
                await axios.delete(`http://localhost:3000/user/${_id}`);
                setUsers(users.filter(users => users._id != _id));
            }

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <div className=' font-semibold mt-2 mb-4 flex items-center justify-between'>
                <h1 className='text-3xl'> Users </h1>
                <div
                    className='text-right py-1 text-white rounded-lg pr-4 pl-2 bg-custom-blue group hover:bg-custom-dblue duration-300 hover:scale-x-110'>
                    <Link to="/create/user" className='bg-custom-blue group group-hover:bg-custom-dblue duration-300 flex items-center'>
                        <IoMdAdd className='bg-custom-blue text-xl mx-1 group-hover:bg-custom-dblue duration-300' />
                        <span className='bg-custom-blue group group-hover:bg-custom-dblue duration-300 '> new</span> 
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                {users.map((user) => (
                    <div className=' border border-neutral-600 p-2' key={user._id}>
                        <div key={user._id} className=''>
                            ID : {user._id} <br />
                            name : {user.name} <br />
                            age : {user.age} <br />
                            email : {user.email} <br />
                        </div>
                        <div className='text-right mt-2 space-x-3'>
                            <Link to={`/user/edit/${user._id}`} className='py-1 px-4 bg-custom-ddback text-custom-back rounded-lg font-semibold'>Update</Link>
                            <button onClick={() => deleteUser(user._id)} className='py-1 px-4 bg-custom-dpink text-custom-back rounded-lg font-semibold'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users