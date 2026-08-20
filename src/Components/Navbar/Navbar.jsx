import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo1.png';

const Navbar = () => {
    const location = useLocation();
    const [menu, setMenu] = useState(location.pathname);
    const [search, setSearch] = useState('');

    const handleMenu = (path) => {
        setMenu(path);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (search.trim()) {
            console.log('Searching for:', search);
        }
    };

    return (
        <nav className="navbar">

            {/* Logo */}
            <Link to="/" className="logo">
                <img
                    src={logo}
                    alt="SAJILO SHOPPING Logo"
                    className="logo-img"
                />
                <h1>SAJILO SHOPPING</h1>
            </Link>

            {/* Navigation Links */}
            <div className="nav-links">

                {/* Home */}
                <li onClick={() => handleMenu("/")}>
                    <Link
                        to="/"
                        className={menu === "/" ? "active" : ""}
                    >
                        Home
                    </Link>

                    {menu === "/" && <hr />}
                </li>

                {/* Product List */}
                <li onClick={() => handleMenu("/products")}>
                    <Link
                        to="/products"
                        className={menu === "/products" ? "active" : ""}
                    >
                        Product List
                    </Link>

                    {menu === "/products" && <hr />}
                </li>

                {/* About */}
                <li onClick={() => handleMenu("/about")}>
                    <Link
                        to="/about"
                        className={menu === "/about" ? "active" : ""}
                    >
                        About
                    </Link>

                    {menu === "/about" && <hr />}
                </li>

                {/* Contact */}
                <li onClick={() => handleMenu("/contact")}>
                    <Link
                        to="/contact"
                        className={menu === "/contact" ? "active" : ""}
                    >
                        Contact
                    </Link>

                    {menu === "/contact" && <hr />}
                </li>

                {/* Dashboard */}
                <li onClick={() => handleMenu("/dashboard")}>
                    <Link
                        to="/dashboard"
                        className={menu === "/dashboard" ? "active" : ""}
                    >
                        Dashboard
                    </Link>

                    {menu === "/dashboard" && <hr />}
                </li>

            </div>

            {/* Right Side */}
            <div className="nav-right">

                {/* Search */}
                <form
                    className="search-box"
                    onSubmit={handleSearch}
                >
                    <input
                        type="text"
                        placeholder="Iphone15"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button type="submit">
                        🔍
                    </button>
                </form>

                {/* Login */}
                <Link
                    to="/login"
                    className="login-btn"
                >
                    Log in
                </Link>

                {/* Sign Up */}
                <Link
                    to="/signup"
                    className="signup-btn"
                >
                    Sign up
                </Link>

                {/* Cart */}
                <Link
                    to="/cart"
                    className="cart-container"
                >
                    <span className="cart">🛒</span>

                    <div className="nav-cart-count">
                        0
                    </div>
                </Link>

            </div>

        </nav>
    );
};

export default Navbar;