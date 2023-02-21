import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header'
import ProductCard from "../components/ProductCard/ProductCard";
import Layout from './Layout';

function CategoryPage(props) {
  const params = useParams();
  const index = params.catName;
  const [categoryName , setcategoryName] = useState([]); 

  useEffect(()=>{
    axios.get(`/products/category/${index}`).then(function (data) {
    setcategoryName(data.data.products);
    });
  },[])
  

  return (
    <Layout>
      <div>
        <div className="cat-container container">
          {categoryName.map((item) => {
            return <ProductCard item={item} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default CategoryPage