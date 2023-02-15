import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./LoginForm.scss";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context";

function LoginForm(props) {

  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [authentication, setAuthentication] = useState(
    localStorage.getItem("authenticated") || false
    );
    const Navigate = useNavigate();

    const userContext = useContext(UserContext);

    const handleSubmit = (e,dispatch) => {
      e.preventDefault();
      axios
        .post("auth/login", {
          username,
          password,
        })
        .then(function (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("authenticated", true);
          toast.success("You have successfully logged in!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          userContext.dispatch({
            type: "LOGGED_IN",
            payload: true,
          });
          setTimeout(() => {
            Navigate("/users");
          }, 1500);
        })
        .catch(function (error) {
          toast.error("Please Enter Correct Details !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    };

   
    useEffect(() =>{
      if(authentication){
        Navigate("/users");
      }else{
        console.log("Not Authenticated");
      }
    },[authentication])

  return (
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="login-form-text">
                <h1>Welcome Back </h1>
                <h3>Please enter your details</h3>
              </div>
              <div className="login-form-details">
                <input
                  type="text"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
                <ToastContainer />
              </div>
            </form>
          </div>
  );
}

export default LoginForm