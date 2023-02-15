import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CollectionCard from '../components/CollectionCard/CollectionCard';
import Header from '../components/Header/Header'
import Layout from './Layout';

function CollectionPage(props) {
    const categories = new Set();

    props.product.forEach((item) => {
      categories.add(item.category);
    });

    const result = [];
    categories.forEach((category) => {
      const val = props.product.filter((item) => item.category === category);

      result.push({ count: val.length, category , product: val});
    });

    console.log(result,"result");
    
    const [cat , setCat] = useState([]);

    useEffect(()=>{
      axios.get("/products/categories").then(function(data){
        setCat(data.data);
        console.log(cat,"jiojoi");
      })
    },[])

  return (
    <Layout>
      <div>
        <div className="container">
          <h2>Collection Page</h2>
          {/* <div className="collection-wrapper">
          {result.map((item, index) => {
            return (
                <CollectionCard data={item} />
            );
          })}
        </div> */}
        </div>
        <div className="container">
          <div className="collection-wrapper">
            {cat.map((item, index) => {
              return <CollectionCard item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CollectionPage