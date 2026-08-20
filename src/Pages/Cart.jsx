import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'iPhone 15',
            price: 999,
            quantity: 1,
            emoji: '📱'
        },
        {
            id: 2,
            name: 'Sony Headphones',
            price: 299,
            quantity: 1,
            emoji: '🎧'
        }
    ]);

    const increaseQuantity = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(
            cartItems
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeItem = (id) => {
        setCartItems(
            cartItems.filter((item) => item.id !== id)
        );
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const delivery = cartItems.length > 0 ? 10 : 0;

    const total = subtotal + delivery;

    return (
        <div className="cart-page">

            <h1>Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <div className="empty-cart-icon">🛒</div>

                    <h2>Your cart is empty</h2>

                    <p>
                        You haven't added any products to your cart yet.
                    </p>

                    <Link to="/products" className="shop-button">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="cart-content">

                    {/* Cart Items */}
                    <div className="cart-items">

                        {cartItems.map((item) => (
                            <div
                                className="cart-item"
                                key={item.id}
                            >

                                <div className="cart-item-image">
                                    {item.emoji}
                                </div>

                                <div className="cart-item-details">
                                    <h2>{item.name}</h2>

                                    <p>
                                        ${item.price}
                                    </p>
                                </div>

                                <div className="quantity">

                                    <button
                                        onClick={() =>
                                            decreaseQuantity(item.id)
                                        }
                                    >
                                        −
                                    </button>

                                    <span>
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            increaseQuantity(item.id)
                                        }
                                    >
                                        +
                                    </button>

                                </div>

                                <div className="item-total">
                                    $
                                    {(
                                        item.price *
                                        item.quantity
                                    ).toFixed(2)}
                                </div>

                                <button
                                    className="remove-button"
                                    onClick={() =>
                                        removeItem(item.id)
                                    }
                                >
                                    Remove
                                </button>

                            </div>
                        ))}

                    </div>

                    {/* Order Summary */}
                    <div className="cart-summary">

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery</span>
                            <span>${delivery.toFixed(2)}</span>
                        </div>

                        <hr />

                        <div className="summary-total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <button className="checkout-button">
                            Proceed to Checkout
                        </button>

                        <Link
                            to="/products"
                            className="continue-shopping"
                        >
                            Continue Shopping
                        </Link>

                    </div>

                </div>
            )}

        </div>
    );
};

export default Cart;