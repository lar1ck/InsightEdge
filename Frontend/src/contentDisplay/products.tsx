import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

interface productsProps {
    _id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    currency: string,
    stock: number,
    brand: string,
    image: string,
    createdAt: string,
    updatedAt: string,
}

const Products = () => {
    const [products, setProducts] = useState<productsProps[]>([]);

    useEffect(() => {
        const getproduct = async () => {
            const products = await axios.get("http://localhost:3000/products");
            setProducts(products.data);
        };
        getproduct();

    });
    const deleteProduct = async (id: string) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this product');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/product/${id}`);
                setProducts(products.filter(products => products._id != id));
            } catch (err) {
                console.error("Error deleting product", err);
            }
        }
    }

    return (
        <div className=''>
            <div className='font-semibold mt-2  flex items-center justify-between'>
                <h1 className='text-3xl'>Products' List</h1>
                <div
                    className='text-right py-1 text-white rounded-lg pr-4 pl-2 bg-custom-blue group hover:bg-custom-dblue duration-300 hover:scale-x-110'>
                    <Link to="/product/new" className='bg-custom-blue group group-hover:bg-custom-dblue duration-300 flex items-center'>
                        <IoMdAdd className='bg-custom-blue text-xl mx-1 group-hover:bg-custom-dblue duration-300' />
                        <span className='bg-custom-blue group group-hover:bg-custom-dblue duration-300 '> new</span>
                    </Link>
                </div>
            </div>
            <div className='mb-1 '>
                {products.map((product) => (
                    <div key={product._id} className="border-b-4 border-neutral-400 my-2  p-5">
                        <div className=" rounded-lg flex  gap-1">
                            <div className='w-[50%]'>
                                <img src={product.image} className='rounded-lg max-w-[300px]' alt={`this is an image of ${product.name}`} />
                            </div>
                            <div className="max-w-[50%] mb-1">
                                <h2 className="text-xl font-bold  mb-2 ">{product.name}</h2>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold ">Description:</span> {product.description}
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold">Price:</span> {product.price} {product.currency}
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold">Category:</span> {product.category}
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold">Stock:</span> {product.stock}
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold">Brand:</span> {product.brand}
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold">Created At:</span> {new Date(product.createdAt).toLocaleDateString()} {new Date(product.createdAt).toLocaleTimeString()}
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold">Updated At:</span> {new Date(product.updatedAt).toLocaleDateString()} {new Date(product.updatedAt).toLocaleTimeString()}
                                </p>
                            </div>
                        </div>
                        <div className="text-right space-x-2">
                            <button
                                onClick={() => deleteProduct(product._id)}
                                className="px-4 py-2 group bg-custom-dpink text-white font-semibold rounded-md hover:bg-custom-ddpink transition-all duration-300"
                            >
                                <RiDeleteBin6Line className='bg-custom-dpink group-hover:bg-custom-ddpink duration-300' />
                            </button>
                            <button
                                className="px-2 py-1 group bg-custom-ddback text-white font-semibold rounded-md hover:bg-custom-dback transition-all duration-300"
                            >
                                <Link to={`/products/edit/${product._id}`} className='bg-custom-ddback group-hover:bg-custom-dback transition-all duration-300'>Update</Link>
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Products