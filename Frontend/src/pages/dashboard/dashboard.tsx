// import React from 'react'
import axios from 'axios'
import './dashboard.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface orderProps {
  _id: string,
  product_id: string,
  user_id: string,
  quantity: number,
  price: number,
  createdAt: string,
}

interface userNameMap {
  [key: string]: string;
}

interface userDetailsProps {
  name: string,
  image: string,
}

const Dashboard = () => {
  const [orders, setOrders] = useState<orderProps[]>([]);
  const [totalSales, setTotalSales] = useState(0);
  const [ordersAmount, setOrdersAmount] = useState(0);
  const [userNames, setUserNames] = useState<userNameMap>({} as userNameMap);
  const [userDet, setUserDet] = useState<userDetailsProps | null>()

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/orders');
        setOrders(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getOrders();

    const getTotalSales = async () => {
      try {
        const response = await axios.get('http://localhost:3000/totalSales');
        setTotalSales(response.data);

      } catch (err) {
        console.error(err);
      }
    };
    getTotalSales();

    const getOrdersAmount = async () => {
      try {
        const orderAm = await axios.get('http://localhost:3000/ordersAmount');
        setOrdersAmount(orderAm.data);
      } catch (err) {
        console.error(err);
      }
    };
    getOrdersAmount();
  }, []);

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
        console.error(err);
      }
    }
    if (orders.length > 0) {
      getUserNames()
    };
  },[orders]);

  useEffect(() => {
    const getUserDet = () => {
      try {
        const response = localStorage.getItem('user');
        if (response) {
          setUserDet(JSON.parse(response))
        }
      } catch (err) {
        console.error(err)
      }
    }
    getUserDet();
  }, [])

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  }

  if (!userDet) {
    return <div>loading...</div>
  }

  return (
    <div>
      {/* div 1  */}
      <div className='flex items-center justify-between'>
        <div className='flex p-2 items-center gap-x-3'>
          <div className='size-20 bg-custom-dback rounded-full'>
            {userDet.image && (
              <img src={userDet.image} className='rounded-full size-20' alt="your profile" />
            )}
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

      </div>
      {/* div 2 */}
      <div className='px-3 py-5 bg-gradient-to-r from-orange-400 via-red-300 to-purple-600 w-full h-[150px] mt-5 rounded-xl flex gapx-4'>
        <div className='w-[33%] bg-[var(--parent-bg)] flex gap-x-4 items-center font-semibold '>
          <div className='size-14 rounded-full img-prf1 '>

          </div>
          <div className='bg-[var(--parent-bg)]'>
            <p className='bg-[var(--parent-bg)]'>Monthly revenue</p>
            <p className='bg-[var(--parent-bg)] text-lg text-white font-bold'>RWF {formatNumber(totalSales)} <span className='ml-3 font-semibold bg-white text-blue-900 rounded-full p-1 text-sm'>+2.4%</span></p>
            <p className='bg-[var(--parent-bg)]'>Previous month <span className='bg-[var(--parent-bg)] text-white font-bold'>$1.7k</span></p>
          </div>
        </div>
        <div className='w-[33%] bg-[var(--parent-bg)] flex gap-x-4 items-center font-semibold'>
          <div className='size-14 rounded-full img-prf2 '>

          </div>
          <div className='bg-[var(--parent-bg)]'>
            <p className='bg-[var(--parent-bg)]'>Amount of Sales</p>
            <p className='bg-[var(--parent-bg)] text-lg text-white font-bold'>{formatNumber(ordersAmount)} <span className='ml-3 font-semibold bg-white text-blue-900 rounded-full p-1 text-sm'>+1.4%</span></p>
            <p className='bg-[var(--parent-bg)] '>Previous month <span className='bg-[var(--parent-bg)] text-white font-bold'>$3.1k</span></p>
          </div>
        </div>
        <div className='w-[33%] bg-[var(--parent-bg)] flex gap-x-4 items-center font-semibold'>
          <div className='size-14 rounded-full img-prf3 '>

          </div>
          <div className='bg-[var(--parent-bg)]'>
            <p className='bg-[var(--parent-bg)]'>Total Profit</p>
            <p className='bg-[var(--parent-bg)] text-lg text-white font-bold'>RWF {formatNumber(totalSales)} <span className='ml-3 font-semibold bg-white text-blue-900 rounded-full p-1 text-sm'>+4.3%</span></p>
            <p className='bg-[var(--parent-bg)]'>Previous year <span className='bg-[var(--parent-bg)] text-white font-bold'>$8.9k</span></p>
          </div>
        </div>
      </div>
      {/*Div 3*/}
      <div className='h-[180px] w-full border-2 border-custom-dback px-6 py-3 rounded-tl-2xl rounded-br-2xl mt-5 flex justify-between gap-3'>
        <div className='w-[50%] h-full  '>
          <h1 className='text-2xl font-semibold'>Total Sales & Cost</h1>
          <p className='text-sm text-neutral-500 font-semibold'>Last 60 days</p>
          <div className='mt-10 items-center '>
            <span className='text-purple-800 text-3xl font-bold items-center flex gap-2'> <h1>RWF {formatNumber(totalSales)}</h1><span className='bg-green-300 text-green-600 px-2 text-sm rounded-full'>+5.4%</span></span>
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

          {orders.length === 0 ? (
            <div className='text-center items-center h-10 font-semibold text-xl text-neutral-400 p-6 font-mono text-'>
              Looks like you're new, get some orders to get your insight
            </div>
          ) : (
            <>
              {orders.slice(0, 2).map((order) => (
                <div key={order._id} className='border-2 my-3 p-3 '>
                  <div className='mb-2'>
                    <span className='font-semibold'> UserId</span>: {order.user_id} <br />
                    <span className='font-semibold'> User name </span>: {userNames[order.user_id] || 'loading...'} <br />
                    <span className='font-semibold'> OrderId </span>: {order._id} <br />
                    <span className='font-semibold'> ProductId </span> : {order.product_id} <br />
                    <span className='font-semibold'> Quantity </span>: {order.quantity} <br />
                    <span className='font-semibold'> Price </span>: {formatNumber(order.price)} RWF<br />
                    <span className='font-semibold'> Placed on </span>: {new Date(order.createdAt).toLocaleDateString()} : {new Date(order.createdAt).toLocaleTimeString()} <br />
                  </div>
                  <Link to={`/order/${order.product_id}`} className='font-bold border border-indigo-900 py-1 px-3 rounded-xl'>view product</Link>
                </div>
              ))}
              <div>
                <Link to="/orders" className='px-2 py-1 bg-custom-dback font-semibold rounded-xl m-2'>More..</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard