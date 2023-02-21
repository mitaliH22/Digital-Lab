import React from 'react'
import "./Cart.scss";

function CartProduct(props) {

  return (
    <div className="table-row">
      <li>{props.item.title}</li>
      <li>$ {props.item.price}</li>
      <li className="counter">
        <button>-</button>
        <input type="number" value={props.item.quantity} />
        <button>+</button>
      </li>
      <li>$ {props.item.total}</li>
    </div>
  );
}

export default CartProduct