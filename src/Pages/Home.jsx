import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Sajilo Shopping</h1>

                    <p>
                        Find the latest phones, laptops, headphones,
                        cameras and more at great prices.
                    </p>

                    <Link to="/products" className="shop-now-btn">
                        Shop Now
                    </Link>
                </div>

                <div className="hero-image">
                    <div className="hero-product">🛍️</div>
                </div>
            </section>

            {/* Categories */}
            <section className="categories">
                <h2>Shop by Category</h2>

                <div className="category-container">

                    <Link to="/phone" className="category-card">
                        <div className="category-icon">📱</div>
                        <h3>Phones</h3>
                        <p>Latest smartphones</p>
                    </Link>

                    <Link to="/laptop" className="category-card">
                        <div className="category-icon">💻</div>
                        <h3>Laptops</h3>
                        <p>Powerful laptops</p>
                    </Link>

                    <Link to="/headphone" className="category-card">
                        <div className="category-icon">🎧</div>
                        <h3>Headphones</h3>
                        <p>Premium sound</p>
                    </Link>

                    <Link to="/camera" className="category-card">
                        <div className="category-icon">📷</div>
                        <h3>Cameras</h3>
                        <p>Capture every moment</p>
                    </Link>

                </div>
            </section>

            {/* Why Choose Us */}
            <section className="features">
                <h2>Why Shop With Us?</h2>

                <div className="feature-container">

                    <div className="feature">
                        <span>🚚</span>
                        <h3>Fast Delivery</h3>
                        <p>Quick and reliable delivery.</p>
                    </div>

                    <div className="feature">
                        <span>🔒</span>
                        <h3>Secure Payment</h3>
                        <p>Your payment information is protected.</p>
                    </div>

                    <div className="feature">
                        <span>⭐</span>
                        <h3>Quality Products</h3>
                        <p>We offer quality products at great prices.</p>
                    </div>

                    <div className="feature">
                        <span>💬</span>
                        <h3>Customer Support</h3>
                        <p>We're here whenever you need help.</p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;