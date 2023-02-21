import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./LoginForm.scss";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context";
import { useCookies } from "react-cookie";
import { authContext } from "../../context/auth";

function LoginForm() {
  const [cookies , setCookie] = useCookies(['user']);

  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

    const Navigate = useNavigate();

    const auth = authContext();

    const handleSubmit = (e) => {
      e.preventDefault();
      
      axios
        .post("auth/login", {
          username,
          password,
        })
        // .then(function (response) {
        //   userContext.dispatch({
        //     type: "LOGGED_IN",
        //     payload: true,
        //     user: response.data,
        //   });
        //   setCookie("user",response.data,{path: "/"});
        //   toast.success("You have successfully logged in!", {
        //     position: toast.POSITION.TOP_RIGHT,
        //   });
        //   setTimeout(() => {
        //     Navigate("/users");
        //   }, 1500);
        // })
        .then(function(response){
          auth.setUser(response.data);
          setCookie("user",response.data,{path: "/"});
          toast.success("You have successfully logged in!", {
              position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
              Navigate("/users");
          }, 1500);
          })
        .catch(function (error) {
          console.log(error);
          toast.error("Please Enter Correct Details !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    };

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