import React from 'react'
import { Link } from "react-router-dom";
import "./Product.scss";

function ProductCard(props) {
    const addCart = () =>{
        alert("Item Added to cart")
    }
  return (
    <div className="productCard">
      <img src={props.item.thumbnail} alt="img" />
      <span className="product-top">
        <h3>{props.item.title}</h3>
        <h3>${props.item.price}</h3>
      </span>
      {/* <p className="product-description">{props.item.description}</p> */}
      <div className="product-btn-group">
        <button onClick={addCart}>+</button>
        <Link to={`/product/${props.item.id}`}>View</Link>
      </div>
    </div>
  );
}

export default ProductCard