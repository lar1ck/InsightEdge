import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface teachersProps {
    _id: string,
    name: string,
    email: string,
    class: string,
    age: number,
}

const Teachers = () => {
    const [teachers, setTeachers] = useState<teachersProps[]>([]);

    useEffect(() => {
        const getTeachers = async () => {
            try {
                const teachers = await axios.get('http://localhost:3000/teachers');
                setTeachers(teachers.data);
            } catch (err) {
                console.error(err);
            };
        };
        getTeachers();
    }, []);


    return (
        <div className='m'>
            <h1 className='font-bold text-3xl mb-5'>List of teachers</h1>
            <div className='grid grid-cols-4 gap-6 mx-6'>
            {teachers.map((teacher) => (
                    <div key={teacher._id} className="">
                        <p className='border border-blue-600 p-3'>
                            <span className="font-semibold text-lg">Name:</span> {teacher.name} <br />
                            <span className="font-semibold text-lg">Age:</span> {teacher.age} <br />
                            <span className="font-semibold text-lg">Email:</span> {teacher.email} <br />
                            <span className="font-semibold text-lg">Class:</span> {teacher.class} <br />
                        </p>
                    </div>
            ))}
            </div>
        </div>
    )
}

export default Teachers