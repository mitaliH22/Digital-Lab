import React , {useContext, useEffect , useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./UserProfile.scss";
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { authContext } from '../context/auth';
import { useCookies } from "react-cookie";


function UserProfile() {
    const Navigate = useNavigate();
    const auth = authContext();


  const logoutt = (e) =>{
    auth.logout();
    // userContext.dispatch({
    //   type: "LOGGED_OUT",
    //   payload: false,
    // });
    Navigate('/');
  }

    return (
      <Layout>
        <div>
          <div className="user-wrapper container">
            <span>
    
              <h2>Welcome Back </h2>
              <h3>My Profile</h3>
              <button onClick={(e) => logoutt(e)}>LogOut</button>
            </span>
            {/* <div className="user-data">
          <div className="user-data-container">
            <span>
              <label>First Name - </label>
              <p>{content.firstName}</p>
            </span>
            <span>
              <label>Last Name - </label>
              <p>{content.lastName}</p>
            </span>
            <span>
              <label>Email - </label>
              <p>{content.email}</p>
            </span>
            <span>
              <label>Gender - </label>
              <p>{content.gender}</p>
            </span>
          </div>
          <div className="user-img">
            <img src={content.image} alt="user" />
          </div>
    </div> */}
          </div>
        </div>
      </Layout>
    );
  }

export default UserProfile