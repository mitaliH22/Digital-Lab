import React,{useEffect} from 'react'
import { useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import "./Productsgrid.scss";

function Products(props) {
  
  return (
    <div className='container'>
      <h2>Products</h2>
      <div className="products-container">
        {props.product.slice(0, 3).map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Products