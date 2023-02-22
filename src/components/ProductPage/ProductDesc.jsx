import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import Quantity from '../Quantity/Quantity';
import "./ProductDesc.scss";
import MiniCart from "../MiniCart/MiniCart";
import { authContext } from '../../context/auth';

function ProductDesc(props) {
  const { id } = useParams();
  var product = props.singleProduct;
  const [ demo , setDemo ] = useState(false);
  const auth = authContext();
   
  useEffect(() => {
    props.getSingleProduct(id);
  }, []);

  const minicart = () =>{
    setDemo(!demo);
    console.log(product);
  }

  return (
    <>
      <div className="product-desc container">
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
            <span className="product-price">
              <pre>
                <i class="bi bi-percent"></i>
                {product.discountPercentage}
              </pre>
              <h3>${product.price}</h3>
            </span>
            <p>{product.description}</p>
          </div>
          {auth.user && <Quantity />}
          {auth.user && (
            <div className="product-btn-group">
              <button onClick={minicart}>Add to Cart</button>
              <button>Buy Now</button>
            </div>
          )}
        </div>
      </div>
      <MiniCart value={demo} product={product} />
    </>
  );
}

export default ProductDesc