import { useEffect, useState } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'

interface productProps {
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

const ViewProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<productProps | null>(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/product/${id}`);
                setProduct(response.data);
            } catch (err) {
                console.error(err);
            }
        }
        getProduct();
    }, [id])

    if(!product){
        return <div>loading....</div>
    }

    return (
        <div>
            
           <h1 className='text-3xl ml-5 font-semibold'> {product.name} </h1>
            
                <div  className='border-1 border-neutral-400 my-2  p-5'>
                    <div className=" rounded-lg flex  gap-1">
                            <div className='w-[50%]'>
                                <img src={product.image} className='rounded-lg max-w-[300px]' alt={`this is an image of ${product.name}`} />
                            </div>
                            <div className="max-w-[50%] mb-1">
                                <h2 className="text-xl font-bold  mb-2 "></h2>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold ">Description:</span> {product.description}
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold">Price:</span> {product.currency} {product.price} 
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
                </div>
            
        </div>
    )
}

export default ViewProduct