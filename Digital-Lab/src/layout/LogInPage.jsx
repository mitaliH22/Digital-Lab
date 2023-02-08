import React, { useEffect, useState } from "react";
import img from "../assets/login.webp"
import axios from "axios";
import LoginForm from "../components/LoginForm/LoginForm";

function LogInPage(){
    return (
      <div className="login-container container">
        <div className="login-img">
          <img src={img} alt="Login" />
        </div>
        <LoginForm />
      
      </div>
    );
}

export default LogInPage;