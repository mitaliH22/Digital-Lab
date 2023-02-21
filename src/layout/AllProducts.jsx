import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard';
import Layout from './Layout';

function AllProducts(props) {
  return (
    <Layout>
      <div>
        <div className="container">
          <center>
            <h1>All Products</h1>
          </center>
          <div className="products-container">
            {props.product.map((item) => {
              return <ProductCard item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllProducts