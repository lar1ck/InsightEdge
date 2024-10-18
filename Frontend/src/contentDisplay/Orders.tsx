import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

interface orderProps {
    _id: string,
    product_id: string,
    quantity: number,
    price: number,
    createdAt: string,
}

const Orders = () => {
    const [orders, setOrders] = useState<orderProps[]>([]);

    useEffect(() => {
        const getAllOrders = async () => {
            const orders = await axios.get('http://localhost:3000/orders');
            setOrders(orders.data);
        }
        getAllOrders();
    }, [])

    return (
        <div>
            <h1 className='text-3xl font-semibold my-4'> Orders</h1>
            <div className='grid grid-cols-2 gap-3'>
                {orders.map((order) => (
                    <div key={order._id} className='border-2 border-neutral-400 my-2  p-5'>
                        <div>
                            <span className='font-semibold'> Product_id </span> : {order.product_id} <br />
                            <button className='m-2 font-semibold'>
                                <Link to={`/order/${order.product_id}`} className='py-1 px-4 bg-custom-dback rounded-lg'>
                                    View product
                                </Link>
                            </button>
                        </div>
                        <div>
                            <span className='font-semibold'> Quantity </span>: {order.quantity}
                        </div>
                        <div>
                            <span className='font-semibold'> Price </span>: {order.price}
                        </div>
                        <div>
                            <span className='font-semibold'> CreatedAt </span>: {new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders