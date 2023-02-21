import React, { useContext } from "react";
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function Layout(props) {
    return (
      <>
        <div className="content-wrap">
          <Header />
          <main>{props.children}</main>
        </div>
        <Footer />
      </>
    );
}

export default Layout