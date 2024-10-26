import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

interface orderProps {
    _id: string,
    product_id: string,
    quantity: number,
    user_id: string,
    price: number,
    createdAt: string,
}

interface userNameMap {
    [key: string]: string;
}

const Orders = () => {
    const [orders, setOrders] = useState<orderProps[]>([]);
    const [userNames, setUserNames] = useState<userNameMap>({} as userNameMap);

    useEffect(() => {
        const getAllOrders = async () => {
            const orders = await axios.get('http://localhost:3000/orders');
            setOrders(orders.data);
        }
        getAllOrders();
    }, [])

    // const handleDelete = async (id: string) => {
    //     const confirmDel = window.confirm('Are you sure you want to delete');
    //     if (confirmDel) {
    //         const delOrder = await axios.delete(`http://localhost:3000/order/${id}`);
    //         setOrders(orders.filter(orders => orders._id != id));
    //         console.log(delOrder);
    //     }
    // }

    useEffect(() => {
        const getUserNames = async () => {
            try {
                const newUserNames = { ...userNames };
                for (const order of orders) {
                    if (!newUserNames[order.user_id]) {
                        const response = await axios.get(`http://localhost:3000/user/${order.user_id}`);
                        newUserNames[order.user_id] = response.data.name;
                    }
                }
                setUserNames(newUserNames);
            } catch (err) {
                console.log(err);
            }
        }
        if (orders.length) getUserNames();
    })

    return (
        <div>
            <h1 className='text-3xl font-semibold my-3'> Orders</h1>
            <div className='grid grid-cols-2 gap-3'>
                {orders.map((order) => (
                    <div key={order._id} className='border-2 border-neutral-400 my-2  py-3 px-5'>
                        <div>
                            <span className='font-semibold'> Product_id </span> : {order.product_id} <br />

                        </div>
                        <div>
                            <span className='font-semibold'> Quantity </span>: {order.quantity}
                        </div>
                        <div>
                            <span className='font-semibold'> User </span>: {order.user_id}
                        </div>
                        <div>
                            <span className='font-semibold'> User name </span>: {userNames[order.user_id] || 'Loading...'}
                        </div>
                        <div>
                            <span className='font-semibold'> Price </span>: {order.price}
                        </div>
                        <div>
                            <span className='font-semibold'> Placed on </span>: {new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString()}
                        </div>
                        {/* <button onClick={() => handleDelete(order._id)} className='py-1 px-4 bg-custom-dpink text-white font-semibold rounded-xl mx-1'>
                            Delete
                        </button> */}
                        <button className='mt-3 font-semibold'>
                            <Link to={`/order/${order.product_id}`} className='py-1 px-4 bg-custom-dback rounded-lg'>
                                View product
                            </Link>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders