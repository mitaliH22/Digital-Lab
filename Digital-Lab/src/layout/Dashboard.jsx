import React from 'react'
import Content from '../components/Content/Content'
import Banner from '../components/NewProductBanner/Banner'
import Products from '../components/Productsgrid/Products'
import Tabs from '../components/Tabs/Tabs'
import Video from '../components/Video/Video'
import Layout from './Layout'


function Dashboard(props) {
  
  return (
    <Layout>
      <div className="dashboard-wrapper">
        <Banner />
        <Products product={props.product} />
        <Content />
        <Video />
        {/* <Tabs /> */}
      </div>
    </Layout>
  );
}

export default Dashboard