// import React from 'react'
import axios from 'axios'
import './dashboard.css'
import { useEffect, useState } from 'react'

// import Ml from '../../assets/ml.jpg'

interface orderProps {
  _id: string,
  product_id: string,
  quantity: number,
  price: number,
  createdAt: string,
}

const Dashboard = () => {
  const [orders, setOrders] = useState<orderProps[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get('http://localhost:3000/orders');
      setOrders(response.data);
    }
    getOrders();
  }, [])

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
        <div className='size-8 rounded-full bg-slate-300'>

        </div>
      </div>
      {/* div 2 */}
      <div className='px-4 py-5 bg-gradient-to-r from-orange-400 via-red-300 to-purple-600 w-full h-[150px] mt-9 rounded-xl flex gapx-4'>
        <div className='w-[33%] bg-[var(--parent-bg)] flex gap-x-4 items-center font-semibold'>
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
            <p className='bg-[var(--parent-bg)]'>Monthly Sales</p>
            <p className='bg-[var(--parent-bg)] text-xl text-white font-bold'>$6,750 <span className='ml-3 font-semibold bg-white text-blue-900 rounded-full p-1 text-sm'>+1.4%</span></p>
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
            <p className='text-purple-800 text-3xl font-bold items-center flex gap-2'> <h1>$956.82K</h1><span className='bg-green-300 text-green-600 px-2 text-sm rounded-full'>+5.4%</span></p>
          </div>
          <div className='flex items-center'>
            <span className=' text-green-400 px-2 font-bold rounded-full'>+5.4% </span>
            <p className='font-semibold text-neutral-600 text-sm'>vs prev 60 days</p>
          </div>
        </div>
        <div className='w-[50%] h-full bg-custom-dback'>

        </div>
      </div>

      {/*Div 4*/}
      <div className='mt-5'>
        <div>
          <h1 className='text-2xl font-bold text-neutral-800'>Orders History</h1>
        </div>
        <div className=''>
          {orders.map((order) => (
            <div key={order._id} className='border my-3'>
              order._id : {order._id} <br />
              product_id: {order.product_id} <br />
              quantity: {order.quantity} <br />
              price: {order.price} RWF<br />
              createdAt: {order.createdAt} <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard