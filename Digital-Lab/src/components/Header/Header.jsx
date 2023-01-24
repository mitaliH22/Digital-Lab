import React from 'react'
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "./logo.png";

function Header() {
  return (
    <nav className="header-container">
      <Link>
        <span className="logo-text">
          <img src={logo} alt="logo" className="header-logo" /> Digital-Lab
        </span>
      </Link>
      <div className="header-center">
        <Link>Products</Link>
        <Link>About us</Link>
      </div>
      <Link>LogIn</Link>
    </nav>
  );
}

export default Header