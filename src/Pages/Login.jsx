import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Temporary login
        console.log('Login:', email, password);

        // After login
        navigate('/dashboard');
    };

    return (
        <div className="auth-page">

            <div className="auth-container">

                <h1>Welcome Back</h1>

                <p className="auth-subtitle">
                    Login to your Sajilo Shopping account
                </p>

                <form onSubmit={handleLogin}>

                    <div className="form-group">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="forgot-password">
                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="auth-button"
                    >
                        Log In
                    </button>

                </form>

                <p className="auth-switch">
                    Don't have an account?

                    <Link to="/signup">
                        Sign Up
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Login;