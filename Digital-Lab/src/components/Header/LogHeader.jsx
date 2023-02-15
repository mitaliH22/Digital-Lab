import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "./logo.png";

function LogHeader() {
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
        <Link>Cart</Link>
        <Link>My Orders</Link>
        <Link to="/users">My Profile</Link>
      </div>
    </nav>
  );
}

export default LogHeader;
