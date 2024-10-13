import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface productProps {
    name: string,
    description: string,
    price: number,
    category: string,
    currency: string,
    stock: number,
    brand: string,
    image: string,
}

const Editproduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<productProps | null>(null); 
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: 0,
        category: "",
        currency: "",
        stock: 0,
        brand: "",
        image: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/product/${id}`);
                setProduct(res.data);
                setFormData({
                    name: res.data.name,
                    description: res.data.description,
                    price: res.data.price,
                    category: res.data.category,
                    currency: res.data.currency,
                    stock: res.data.stock,
                    brand: res.data.brand,
                    image: res.data.image,
                });

            } catch (err) {
                console.error(err);
            }
        };

        getProduct();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
        const confirmUpdate = window.confirm('Are you sure you want to edit this product?');
        if(confirmUpdate){
            e.preventDefault();
            await axios.put(`http://localhost:3000/product/${id}`, formData);
            navigate("/products");
        }else{
            navigate("/products");
        }
    };

    return (
        <div className=" p-6 rounded-lg">
            {product ? ( 
                <div >
                    <h1 className="text-2xl font-semibold flex mb-6">Edit : <p className='text-blue-700'> {product.name}</p></h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className='flex gap-5'>
                            <div className='w-full'>
                                <label className=" block text-sm font-medium text-gray-700">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                                />
                            </div>
                            <div className='w-full'>
                                <label className="block text-sm font-medium text-gray-700">Description:</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                                />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='w-[60%]'>
                                <label className="block text-sm font-medium text-gray-700">Category:</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                                />
                            </div>
                            <div className='w-[40%]'>
                                <label className="block text-sm font-medium text-gray-700">Price:</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                                />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='w-[70%]'>
                                <label className="block text-sm font-medium text-gray-700">Currency:</label>
                                <input
                                    type="text"
                                    name="currency"
                                    value={formData.currency}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                                />
                            </div>
                            <div className='w-[30%]'>
                                <label className="block text-sm font-medium text-gray-700">Stock:</label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                                />
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Brand:</label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                                />
                            </div>
                            <div className='w-[80%]'>
                                <label className="block text-sm font-medium text-gray-700">Image</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                                />
                            </div>

                        </div>
                        <button
                            type="submit"
                            className="px-2 bg-indigo-400 text-white py-2 rounded-md hover:bg-indigo-500 transition duration-200"
                        >
                            Update Product
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    No product found
                </div>
            )}
        </div>
    );
}

export default Editproduct;
