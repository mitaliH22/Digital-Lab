import React from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'
import ProductDesc from '../components/ProductPage/ProductDesc'
import Products from '../components/Productsgrid/Products'
import Layout from "./Layout"
function ProductPage(props) {
 
  return (
      <Layout>
        <ProductDesc
          data={props.product}
          getSingleProduct={props.getSingleProduct}
          singleProduct={props.singleProduct}
        />
      </Layout>
  );
}

export default ProductPage