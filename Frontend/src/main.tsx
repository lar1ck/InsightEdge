import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Students from './contentDisplay/students'
import Teachers from './contentDisplay/Teachers'
import Products from './contentDisplay/products.tsx'
import App from './App.tsx'
import Login from './pages/LoginPage.tsx'
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
          </Route>
          <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>

)
