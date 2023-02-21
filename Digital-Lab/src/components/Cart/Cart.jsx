import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context';
import { authContext } from '../../context/auth';
import Layout from '../../layout/Layout'
import './Cart.scss';
import CartProduct from './CartProduct';

function Cart() {
  const auth = authContext();
 const  [ cart , setCart ] = useState([]);
  const Navigate = useNavigate();


 useEffect(() =>{
  axios
    .get(`carts/user/${auth.user.id}`)
    .then(function (data) {
      setCart( data.data.carts[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
 },[])


 const cartCheckout = () => {
  Navigate("/checkout");
 }

  return (
    <div>
      <Layout>
        <div className="cart-container container">
          {/* <div className="empty-cart">
            <h3>No products added to cart</h3>
          </div> */}
          <div className="cart">
            <h2>Your Cart ( {cart?.products?.length} )</h2>
            <div className="cart-items">
              <div className="cart-items-heading table-row">
                <li>Item</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Total</li>
              </div>
              {cart?.products?.length > 0 &&
                cart?.products?.map((item, index) => {
                  return <CartProduct item={item} key={index} />;
                })}
              {}
            </div>
            <div className="cart-total">
              <button onClick={() => cartCheckout()}>Checkout - ${cart.total} </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Cart