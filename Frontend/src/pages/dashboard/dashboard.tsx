import React from 'react'
import './dashboard.css'
// import Ml from '../../assets/ml.jpg'

const Dashboard = () => {
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
        <div className='h-5 w-5 rounded-full bg-slate-300'>

        </div>
      </div>
      {/* div 2 */}
      <div className='px-4 py-5 bg-gradient-to-r from-orange-400 via-red-300 to-purple-600 w-full h-[150px] mt-9 rounded-xl flex gapx-4'>
        <div className='w-[33%] bg-[var(--parent-bg)] flex gap-x-4 items-center font-semibold'>
          <div className='size-14 rounded-full img-prf1 '>

          </div>
          <div className='bg-[var(--parent-bg)]'>
            <p className='bg-[var(--parent-bg)]'>Monthly revenue</p>
            <p className='bg-[var(--parent-bg)]'>$3,500 <span className='ml-3 bg-white text-blue-950 rounded-full p-1 text-sm'>+2.4%</span></p>
            <p className='bg-[var(--parent-bg)]'>Previous month <span className='bg-[var(--parent-bg)] text-white font-bold'>$1.7k</span></p>
          </div>
        </div>
        <div className='w-[33%] bg-[var(--parent-bg)] flex gap-x-4 items-center font-semibold'>
          <div className='size-14 rounded-full img-prf2 '>

          </div>
          <div className='bg-[var(--parent-bg)]'>
            <p className='bg-[var(--parent-bg)]'>Monthly Sales</p>
            <p className='bg-[var(--parent-bg)]'>$6,750 <span className='ml-3 bg-white text-blue-950 rounded-full p-1 text-sm'>+2.4%</span></p>
            <p className='bg-[var(--parent-bg)]'>Previous month <span className='bg-[var(--parent-bg)] text-white font-bold'>$3.1k</span></p>
          </div>
        </div>
        <div className='w-[33%] bg-[var(--parent-bg)] flex gap-x-4 items-center font-semibold'>
          <div className='size-14 rounded-full img-prf3 '>

          </div>
          <div className='bg-[var(--parent-bg)]'>
            <p className='bg-[var(--parent-bg)]'>Total Profit</p>
            <p className='bg-[var(--parent-bg)]'>$10,900 <span className='ml-3 bg-white text-blue-950 rounded-full p-1 text-sm'>+2.4%</span></p>
            <p className='bg-[var(--parent-bg)]'>Previous year <span className='bg-[var(--parent-bg)] text-white font-bold'>$8.9k</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard