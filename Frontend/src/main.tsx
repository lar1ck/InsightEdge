import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Students from './contentDisplay/students'
import Teachers from './contentDisplay/Teachers'
import Products from './contentDisplay/products.tsx'
import EditProduct from './pages/Products/Editproduct.tsx'
import CreateProduct from './pages/Products/createProduct.tsx'
import Users from './contentDisplay/Users.tsx'
import App from './App.tsx'
import Login from './pages/LoginPage.tsx'
import CreateUser from './pages/Users/createUser.tsx'
import EditUser from './pages/Users/EditUser.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />} >
            <Route path='/students' element={<Students />} />
            <Route path='/teachers' element={<Teachers />} />
            <Route index element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
            <Route path="/product/new" element={<CreateProduct/>} />
            <Route path="/users" element={<Users />} />
            <Route path='/create/user' element={<CreateUser />}></Route>
            <Route path='/user/edit/:id' element={<EditUser />}></Route>
          </Route>
          <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>

)
