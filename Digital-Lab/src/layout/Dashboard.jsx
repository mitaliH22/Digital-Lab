import React from 'react'
import Content from '../components/Content/Content'
import Banner from '../components/NewProductBanner/Banner'
import Products from '../components/Productsgrid/Products'
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
        </div>
      </Layout>
  );
}

export default Dashboard