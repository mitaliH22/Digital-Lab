import React from 'react'
import Header from '../components/Header/Header'
import ProductDesc from '../components/ProductPage/ProductDesc'
import Products from '../components/Productsgrid/Products'

function ProductPage(props) {
  return (
    <div>
      <Header />
      Product Page
      <ProductDesc data={props.product}/>
    </div>
  )
}

export default ProductPage