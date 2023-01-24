import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./layout/Dashboard";
import Header from "./components/Header/Header";
import ProductPage from "./layout/ProductPage";

function App() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios.get("/products?limit=10").then(function (data) {
      console.log(data.data.products);
      setproduct(data.data.products);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard product={product} />}></Route>
      <Route
        path="/product/:id"
        element={<ProductPage />}
        product={product}
      ></Route>
    </Routes>
  );
}

export default App;
