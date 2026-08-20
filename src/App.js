import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home';
import ProductsList from './Pages/ProductsList';
import Products from './Pages/Products';
import Cart from './Pages/Cart';

import Login from './Pages/Login';
import Signup from './Pages/Signup';

import Dashboard from './Pages/Dashboard.jsx';

import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Product List */}
        <Route
          path="/products"
          element={<ProductsList />}
        />

        {/* Product Categories */}
        <Route
          path="/phone"
          element={<ProductsList List="phone" />}
        />

        <Route
          path="/laptop"
          element={<ProductsList List="laptop" />}
        />

        <Route
          path="/headphone"
          element={<ProductsList List="headphone" />}
        />

        <Route
          path="/camera"
          element={<ProductsList List="camera" />}
        />

        {/* Individual Product */}
        <Route
          path="/product/:productId"
          element={<Products />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Sign Up */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;