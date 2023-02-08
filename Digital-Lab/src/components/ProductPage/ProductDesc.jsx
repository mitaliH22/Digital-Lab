import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./ProductDesc.scss";

function ProductDesc(props) {
  const { id } = useParams();
  var product = props.singleProduct;
   
  useEffect(() => {
    props.getSingleProduct(id);
  }, []);
  return (
    <div className="product-desc">
      <div>
        <img src={product.thumbnail} alt="" />
        {/* <div className="product-images">
          <img src={product.images[2]} alt="firstimg" />
          <img src={product.images[3]} alt="secondimg" />
        </div> */}
      </div>
      <div className="product-data">
        <div className="product-content">
          <h1>{product.title}</h1>
          <p>${product.price}</p>
          <p>{product.description}</p>
        </div>
        <div className="product-btn-group">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDesc