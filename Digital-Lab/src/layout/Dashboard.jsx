import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/NewProductBanner/Banner'
import Products from '../components/Productsgrid/Products'

function Dashboard(props) {
  return (
    <div className="dashboard-wrapper">
        <Header />
        <Banner />
        <Products product={props.product}/>
    </div>
  )
}

export default Dashboard