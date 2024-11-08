import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    currency: 'RW',
    stock: 0,
    brand: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        const baseString = reader.result as string;
        setFormData((prev) => ({...prev, image: baseString}));
      }
      reader.readAsDataURL(file);
    }
  }

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(" http://localhost:3000/product", formData);
      console.log('Product created successfully', res);
      setFormData({
        name: '',
        description: '',
        price: 0,
        category: '',
        currency: 'RW',
        stock: 0,
        brand: '',
        image: '',
      });

      navigate('/products')
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=''>
      <h1 className='text-3xl font-semibold my-4'>Create new porduct</h1>
      <form onSubmit={handleSubmit} className=''>
        <div className='space-y-4'>
          <div className='flex gap-5'>
            <div className='w-full'>
              <label className=" block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div className='w-[80%]'>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="file"
                // name="image"
                // value={formData.image}
                onChange={handleImageChange}
                className="mt-1 block w-full border border-gray-300 outline-none rounded-md p-2 "
                required
              />
            </div>

          </div>
          <div className='text-right'>
            <button
              type="submit"
              className="px-2 bg-custom-ddback text-white py-2 rounded-md hover:bg-custom-ddback transition duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct