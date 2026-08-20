import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo1.png';

const Navbar = () => {

    const [menu, setMenu] = useState("phone");

    return (
        <nav className="navbar">

            <div className="logo">
                <img src={logo} alt="SAJILO SHOPPING Logo" className="logo-img" />
                <h1>SAJILO SHOPPING</h1>
            </div>

            <div className="nav-links">

                <li onClick={() => setMenu("phone")}>
                    <a href="#phone">Phone</a>
                    {menu === "phone" ? <hr /> : null}
                </li>

                <li onClick={() => setMenu("laptop")}>
                    <a href="#laptop">Laptop</a>
                    {menu === "laptop" ? <hr /> : null}
                </li>

                <li onClick={() => setMenu("headphone")}>
                    <a href="#headphone">Headphone</a>
                    {menu === "headphone" ? <hr /> : null}
                </li>

                <li onClick={() => setMenu("camera")}>
                    <a href="#camera">Camera</a>
                    {menu === "camera" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("dashboard")}>
                    <a href="#dashboard">Dashboard</a>
                    {menu === "dashboard" ? <hr /> : null}
                </li>
                
            </div>

            <div className="nav-right">

                <Link to="/login" className="login-btn">
                    Login
                </Link>

                <div className="cart-container">
                    <span className="cart">🛒</span>
                    <div className="nav-cart-count">0</div>
                </div>
                

            </div>

        </nav>
    );
};

export default Navbar;