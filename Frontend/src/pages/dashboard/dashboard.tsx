// import React from 'react'
import axios from 'axios'
import './dashboard.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";

interface orderProps {
  _id: string,
  product_id: string,
  quantity: number,
  price: number,
  createdAt: string,
}

interface userProps {
  name: string,
  email: string,
}

const Dashboard = () => {
  const [orders, setOrders] = useState<orderProps[]>([]);
  const [totalSales, setTotalSales] = useState(0);
  const [user, setUser] = useState<userProps | null>(null);
  const [ordersAmount, setOrdersAmount] = useState(0);

  useEffect(() => {
    const getOrders = async () => {
      try{
        const response = await axios.get('http://localhost:3000/orders');
        setOrders(response.data);
      }catch(err){
        console.error(err);
      }
    }
    getOrders();

    const getTotalSales = async () => {
      try{
        const storedUser = localStorage.getItem('user');
        const response = await axios.get('http://localhost:3000/totalSales');
        setTotalSales(response.data);
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }catch (err) {
        console.error(err);
      }
    };
    getTotalSales();

    const getOrdersAmount = async () => {
      try{
        const orderAm = await axios.get('http://localhost:3000/ordersAmount');
        setOrdersAmount(orderAm.data);
      }catch (err) {
        console.error(err);
      }
    };
    getOrdersAmount();
  }, [])

  if (!user) {
    return <div>Loading... user</div>
  }

  return (
    <div>
      {/* div 1  */}
      <div className='flex items-center justify-between'>
        <div className='flex p-2 items-center gap-x-3'>
          <div className='size-20 user-prf rounded-full'>

          </div>
          <div>
            <h1 className='font-semibold text-2xl '>
              Welcone To your Dashboard
            </h1>
            <p className='text-sm text-slate-600 font-semibold'>
              Have an in-depth look at all your metrics within your dashboard
            </p>
          </div>
        </div>
        <div className='w-fit h-fit rounded-full bg-slate-300 flex items-center p-1'>
        <IoSearchSharp className='bg-[var(--parent-bg)] text-2xl font-bold text-neutral-500'/>
        </div>
      </div>
      {/* div 2 */}
      <div className='px-4 py-5 bg-gradient-to-r from-orange-400 via-red-300 to-purple-600 w-full h-[150px] mt-5 rounded-xl flex gapx-4'>
        <div className='w-[33%] bg-[var(--parent-bg)] flex gap-x-4 items-center font-semibold '>
          <div className='size-14 rounded-full img-prf1 '>

          </div>
          <div className='bg-[var(--parent-bg)]'>
            <p className='bg-[var(--parent-bg)]'>Monthly revenue</p>
            <p className='bg-[var(--parent-bg)] text-xl text-white font-bold'>$3,500 <span className='ml-3 font-semibold bg-white text-blue-900 rounded-full p-1 text-sm'>+2.4%</span></p>
            <p className='bg-[var(--parent-bg)]'>Previous month <span className='bg-[var(--parent-bg)] text-white font-bold'>$1.7k</span></p>
          </div>
        </div>
        <div className='w-[33%] bg-[var(--parent-bg)] flex gap-x-4 items-center font-semibold'>
          <div className='size-14 rounded-full img-prf2 '>

          </div>
          <div className='bg-[var(--parent-bg)]'>
            <p className='bg-[var(--parent-bg)]'>Amount of Sales</p>
            <p className='bg-[var(--parent-bg)] text-xl text-white font-bold'>{ordersAmount} <span className='ml-3 font-semibold bg-white text-blue-900 rounded-full p-1 text-sm'>+1.4%</span></p>
            <p className='bg-[var(--parent-bg)] '>Previous month <span className='bg-[var(--parent-bg)] text-white font-bold'>$3.1k</span></p>
          </div>
        </div>
        <div className='w-[33%] bg-[var(--parent-bg)] flex gap-x-4 items-center font-semibold'>
          <div className='size-14 rounded-full img-prf3 '>

          </div>
          <div className='bg-[var(--parent-bg)]'>
            <p className='bg-[var(--parent-bg)]'>Total Profit</p>
            <p className='bg-[var(--parent-bg)] text-xl text-white font-bold'>$10,900 <span className='ml-3 font-semibold bg-white text-blue-900 rounded-full p-1 text-sm'>+4.3%</span></p>
            <p className='bg-[var(--parent-bg)]'>Previous year <span className='bg-[var(--parent-bg)] text-white font-bold'>$8.9k</span></p>
          </div>
        </div>
      </div>
      {/*Div 3*/}
      <div className='h-[180px] w-full border-2 border-custom-dback px-6 py-3 rounded-xl mt-5 flex justify-between gap-3'>
        <div className='w-[50%] h-full  '>
          <h1 className='text-2xl font-semibold'>Total Sales & Cost</h1>
          <p className='text-sm text-neutral-500 font-semibold'>Last 60 days</p>
          <div className='mt-10 items-center '>
            <span className='text-purple-800 text-3xl font-bold items-center flex gap-2'> <h1>RWF {totalSales}</h1><span className='bg-green-300 text-green-600 px-2 text-sm rounded-full'>+5.4%</span></span>
          </div>
          <div className='flex items-center'>
            <span className=' text-green-400 px-2 font-bold rounded-full'>+5.4% </span>
            <p className='font-semibold text-neutral-600 text-sm'>vs prev 60 days</p>
          </div>
        </div>
        <div className='w-[50%] h-full bg-customback'>

        </div>
      </div>

      {/*Div 4*/}
      <div className='mt-5'>
        <div>
          <h1 className='text-2xl font-bold text-neutral-800'>Orders History</h1>
        </div>
        <div className=''>
          {orders.map((order) => (
            <div key={order._id} className='border-2 my-3 p-3'>
              user : {user.name} <br />
              order._id : {order._id} <br />
              product_id: {order.product_id} <br />
              quantity: {order.quantity} <br />
              price: {order.price} RWF<br />
              createdAt: {new Date(order.createdAt).toLocaleDateString()} : {new Date(order.createdAt).toLocaleTimeString()} <br />
              <Link to={`/order/${order.product_id}`} className='font-bold border py-1 px-3 rounded-xl mt-1'>view product</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard