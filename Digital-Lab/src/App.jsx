import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./layout/Dashboard";
import Header from "./components/Header/Header";
import ProductPage from "./layout/ProductPage";
import AllProducts from "./layout/AllProducts";
import CollectionPage from "./layout/CollectionPage";
import CategoryPage from "./layout/CategoryPage";
import LogInPage from "./layout/LogInPage";

function App() {
  const [product, setproduct] = useState([]);
  const [singleProduct , setsingleProduct] = useState([]);
  useEffect(() => {
    axios.get("/products?limit=20").then(function (data) {
      setproduct(data.data.products);
    });
  }, []);

  const getSingleProduct = (pid) =>{
    axios.get(`/products?id=${pid}`).then(function (data) {
      setsingleProduct(data.data.products[pid-1])
    })
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard product={product} />}></Route>
      <Route
        path="/product/:id"
        element={
          <ProductPage
            product={product}
            getSingleProduct={getSingleProduct}
            singleProduct={singleProduct}
          />
        }
      ></Route>
      <Route path="/products" element={<AllProducts product={product} />} />
      <Route
        path="/collection"
        element={<CollectionPage product={product} />}
      />
      <Route
        path="/collection/:catName"
        element={<CategoryPage />}
      />
      <Route path="/login" element={<LogInPage />}/>
    </Routes>
  );
}

export default App;
