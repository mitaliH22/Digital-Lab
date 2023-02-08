import React from 'react'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Banner from '../components/NewProductBanner/Banner'
import Products from '../components/Productsgrid/Products'
import Video from '../components/Video/Video'

function Dashboard(props) {
  return (
    <div className="dashboard-wrapper">
        <Header />
        <Banner />
        <Products product={props.product}/>
        <Content />
        <Video />
        <Footer />
    </div>
  )
}

export default Dashboard