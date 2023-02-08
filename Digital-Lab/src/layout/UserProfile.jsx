import axios from 'axios';
import React from 'react'
import User from "../components/User";
import auth from "../helper/auth";

function UserProfile() {

    

  return (
    <div>
        <h1>User Profile</h1>
        <User />
    </div>
  )
}

export default UserProfile