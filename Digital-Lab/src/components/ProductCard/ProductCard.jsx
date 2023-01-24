import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Product.scss";

function ProductCard(props) {

    const navigate = useNavigate();
    const addCart = () =>{
        alert("Item Added to cart")
    }
    const landingPage = () =>{
        navigate("product")
    }
  return (
    <div className="productCard">
      <img src={props.item.thumbnail} alt="img" />
      <span className="product-top">
        <p>{props.item.title}</p>
        <h3>${props.item.price}</h3>
      </span>
      <p className="product-description">{props.item.description}</p>
      <div className="product-btn-group">
        <button onClick={addCart}>+</button>
        <Link to={`/product/${props.item.id}`}>View</Link>
      </div>
    </div>
  );
}

export default ProductCard