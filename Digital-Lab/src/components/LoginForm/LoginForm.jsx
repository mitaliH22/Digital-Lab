import React, { useState } from 'react';
import axios from "axios";
import "./LoginForm.scss";

function LoginForm() {
    const [username , setUsername] =useState("");
    const [password , setPassword] =useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios
          .post("auth/login", {
            username,
            password,
          })
          .then(function (response) {
            console.log(response.data, "Success");
          })
          .catch(function (error) {
            console.log("Error");
          });
    }
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="login-form-text">
          <h1>Welcome Back</h1>
          <h3>Please enter your details</h3>
        </div>
        <div className="login-form-details">
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm