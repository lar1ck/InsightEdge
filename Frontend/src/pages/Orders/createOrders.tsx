import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateOrders = () => {

    const [formData, setFormData] = useState({
        product_id: "",
        quantity: 0,
        price: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const order = await axios.post('http://localhost:3000/order', formData);
            console.log("order sucessfully placed", order);
            setFormData({
                product_id: "",
                quantity: 0,
                price: 0,
            });
            navigate('/products')

        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold my-4'> CreateOrders</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex w-full'>
                <div className='w-full'>
                    <label htmlFor="product_id">Product_id</label> <br />
                    <input type="text"
                        name='product_id'
                        value={formData.product_id}
                        onChange={handleChange}
                        placeholder='45724b6fg576607jfec3f552'
                        className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                    /> 
                </div>
                <div className='w-[40%]'>
                    <label htmlFor="Quantity">Quantity</label> <br />
                    <input type="text"
                        name='quantity'
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder='000'
                        className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                    /> 
                </div>
                </div>
                <div>
                    <label htmlFor="Price">Price</label> <br />
                    <input type="number"
                        name='price'
                        value={formData.price}
                        onChange={handleChange}
                        placeholder='000'
                        className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                    /> 
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateOrders