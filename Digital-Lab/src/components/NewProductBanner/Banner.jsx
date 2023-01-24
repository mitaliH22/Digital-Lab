import React from 'react'
import img from "./dashimg.webp";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-context">
        <button>Coming Soon</button>
        <h2>all-in-one e-commerce store</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
      </div>
      <div className="banner-img">
        <img src={img} alt="banner-img" />
      </div>
    </div>
  );
}

export default Banner