import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({
    Email: "",
    password: "",
  });

  const userHandle = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveToStorage = () => {
    localStorage.setItem("UserDetails", JSON.stringify(data));
    alert("saving");
  };

  const getItem = () => {
    const storedData = localStorage.getItem("UserDetails");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      alert(`name : ${parsedData.Email} password:${parsedData.password}`);
    } else {
      alert("no data on there");
    }
  };





  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>{isLogin ? "Login" : "Create Account"}</h1>

        <p>
          {isLogin
            ? "Welcome back to our store 🙏"
            : "Create your account to continue"}
        </p>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          type="email"
          name="Email"
          value={data.Email}
          onChange={userHandle}
          placeholder="Email Address"
        />

        <input
          type="password"
          name="password"
          value={data.password}
          placeholder="Password"
          onChange={userHandle}
        />

        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
          />
        )}

        <button className="auth-button" onClick={(e) => {e.preventDefault(); alert("clicked")}}>
          {isLogin ? "Login" : "Register"}
        </button>

        <button onClick={saveToStorage}>save</button>
        <button onClick={getItem}>get item</button>

        <p>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            className="switch-button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Register" : " Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;