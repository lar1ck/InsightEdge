import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Test = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        category: '',
        currency: 'RW',
        stock: 0,
        brand: '',
        image: '',
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("/product", formData);
            console.log("product created successfully",res);
            setFormData({
                name: '',
                description: '',
                price: 0,
                category: '',
                currency: 'RW',
                stock: 0,
                brand: '',
                image: '',
            });
            navigate("/product");
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" 
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='name'
                />

            </form>
        </div>
    )
}

export default Test