
import React, { useState, useEffect } from 'react'
import axios from 'axios'


interface studentsProps {
    _id: string;
    name: string;
    age: number;
    class: string;
    email: string;
    school: string;
}

const Students = () => {
    const [students, setStudents] = useState<studentsProps[]>([]);

    useEffect(() => {
        const getStudents = async () => {
            try {
                const students = await axios.get('http://localhost:3000/students');
                setStudents(students.data);
            } catch (err) {
                console.error(err);
            };
        };
        getStudents();
    }, [])
    return (
        <div className=" ">
            <h1 className="text-3xl  ">List of Students</h1>
            <div className="">
                {students.map((student) => (
                    <div key={student._id} className="border-2 border-neutral-300 rounded-lg p-4 my-2">
                        <p>
                            <span className="font-semibold text-lg">Name:</span> {student.name} <br />
                            <span className="font-semibold text-lg">Age:</span> {student.age} <br />
                            <span className="font-semibold text-lg">Email:</span> {student.email} <br />
                            <span className="font-semibold text-lg">Class:</span> {student.class} <br />
                            <span className="font-semibold text-lg">School:</span> {student.school}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Students