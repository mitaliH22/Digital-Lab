import React from "react";
import img from "../assets/login.webp"
import LoginForm from "../components/LoginForm/LoginForm";


function LogInPage(){

    return (
      <>
        <div className="login-container container">
          <LoginForm />
          <div className="login-img">
            <img src={img} alt="Login" />
          </div>
        </div>
      </>
    );
}

export default LogInPage;