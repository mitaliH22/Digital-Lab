import React, { useState,useEffect } from 'react'
import axios from 'axios';

function ProductDesc(props) {
    const [data , setdata] = useState([]);
    const fetchProduct = () =>{
        axios.get(`/products?id=${props.id}`).then((res)=>{
            
        })
    };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
        ProductDesc
    </div>
  )
}

export default ProductDesc