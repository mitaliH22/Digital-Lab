import React from 'react'
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/auth'
import { useCookies } from "react-cookie";

function RequiredAuth({children}) {
  const auth = authContext();
  // const [ cookies ] = useCookies("user");
  if (!auth.getUser()) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default RequiredAuth