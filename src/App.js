import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import ProductsList from './Pages/ProductsList'; 
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup.js'; 
import Dashboard from "./Pages/Dashboard.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/phone' element={<ProductsList List="phone" />} />
          <Route path='/laptop' element={<ProductsList List="laptop" />} />
          <Route path='/headphone' element={<ProductsList List="headphone" />} />
          <Route path='/camera' element={<ProductsList List="camera" />} />

          <Route path='/product' element={<Products />}>
            <Route path=':productId' element={<Products />} />
          </Route>

          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;