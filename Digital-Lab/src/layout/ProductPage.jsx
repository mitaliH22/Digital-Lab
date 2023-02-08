import React from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'
import ProductDesc from '../components/ProductPage/ProductDesc'
import Products from '../components/Productsgrid/Products'

function ProductPage(props) {
 
  return (
    <div>
      <Header />
      <ProductDesc
        data={props.product}
        getSingleProduct={props.getSingleProduct}
        singleProduct={props.singleProduct}
      />      
    </div>
  );
}

export default ProductPage