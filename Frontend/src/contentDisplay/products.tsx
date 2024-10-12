import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";


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
    createdAt: string | Date,
    updatedAt: string | Date,
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
        <div className='m'>
            <h1 className='text-3xl font-bold '>Products' List</h1>
            <div className='mb-1'>
                {products.map((product) => (
                    <div key={product._id} className="my-2 bg-neutral-50 p-5">
                        <div className=" rounded-lg flex  gap-6">
                            <div className='w-[50%]'>
                                <img src={product.image} className='rounded-lg' alt={`this is an image of ${product.name}`} />
                            </div>
                            <div className="max-w-[50%] mb-1">
                                <h2 className="text-xl font-bold  mb-2 ">{product.name}</h2>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold">Description:</span> {product.description}
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
                                    <span className="font-semibold">Created At:</span> {new Date(product.createdAt).toLocaleDateString()}
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold">Updated At:</span> {new Date(product.updatedAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="text-right space-x-2">
                            <button
                                onClick={() => deleteProduct(product._id)}
                                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-all duration-300"
                            >
                                <RiDeleteBin6Line />
                            </button>
                            <button
                                className="px-2 py-1 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
                            >
                                <Link to={`/products/edit/${product._id}`}>Update</Link>
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Products