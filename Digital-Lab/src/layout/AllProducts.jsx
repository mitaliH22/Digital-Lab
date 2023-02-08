import React from 'react'
import Header from '../components/Header/Header'
import ProductCard from '../components/ProductCard/ProductCard';

function AllProducts(props) {
  return (
    <div>
      <Header />
      <center>
        <h1>All Products</h1>
      </center>
      <div className="products-container">
        {props.product.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default AllProducts