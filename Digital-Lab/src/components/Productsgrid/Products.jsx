import React,{useEffect} from 'react'
import { useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import "./Productsgrid.scss";

function Products(props) {
  return (
    <div>
      <h2>Products</h2>
      <div className="products-container">
        {props.product.slice(0, 4).map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Products