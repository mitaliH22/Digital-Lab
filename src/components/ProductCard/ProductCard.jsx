import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../../context';
import { authContext } from '../../context/auth';
import "./Product.scss";

function ProductCard(props) {
  const auth = authContext();
    const addCart = () =>{
        axios
          .post("carts/add", {
            userId: auth.user.id,
            products: [
              {
                id: props.item.id,
                quantity: 1,
              },
            ],
          })
          .then((response) => {
            // console.log(props.item,"item")
            console.log(response.data,"crt");
          })
          .catch(function (error) {
            console.log(error);
          });
           
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
        {auth.user && <button onClick={addCart}>+</button>}
        <Link to={`/product/${props.item.id}`}>View</Link>
      </div>
    </div>
  );
}

export default ProductCard