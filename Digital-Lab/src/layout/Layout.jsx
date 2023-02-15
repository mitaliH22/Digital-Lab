import React, { useContext } from "react";
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import LogHeader from '../components/Header/LogHeader';
import {UserContext} from '../context'
function Layout(props) {

  const userContext = useContext(UserContext);
    return (
      <>
        {userContext.state.authorization ? <LogHeader /> : <Header />}
        <main>{props.children}</main>
        <Footer />
      </>
    );
}

export default Layout