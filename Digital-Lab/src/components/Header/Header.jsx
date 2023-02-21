import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { authContext } from '../../context/auth';
import "./Header.scss";
import logo from "./logo.png";

function Header() {
  const auth = authContext();

  const logOut = () =>{
    if(confirm("Are you sure you want to log out")){
       auth.logout(); 
    }else{
      console.log("hi")
    }
  }
  return (
    <nav className="header-container container">
      <Link to="/">
        <span className="logo-text">
          <img src={logo} alt="logo" className="header-logo" /> Digital-Lab
        </span>
      </Link>
      <div className="header-center">
        <Link to="/products">Products</Link>
        <Link to="/collection">Collection</Link>
      </div>
      <div className="header-center">
        {!auth.getUser() ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/users">My Profile</Link>
        )}
        {auth.getUser() && <Link to="/cart">My Cart</Link>}
        {auth.getUser() && (
          <Link>
            {" "}
            <button className="logout" onClick={logOut}>
              LogOut
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header