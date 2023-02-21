import React from 'react'
import "./MiniCart.scss";
import Quantity from "../Quantity/Quantity";

function MiniCart(props) {
    var product = props.product;
    {if(props.value){
        return (
          <div className="mini-cart">
            <h3>cart</h3>
            <div className="mini-cart-product">
              <h4>
                {product.brand} | {product.title}
              </h4>
              <span className='mini-cart-pricing'>
                <p>$ {product.price}</p>
                <Quantity />
              </span>
            </div>
            <div className="mini-cart-checkout">
                <p>Shipping and taxes calculated at checkout</p>
                <button>Checkout</button>
            </div>
          </div>
        );
    }}
}

export default MiniCart