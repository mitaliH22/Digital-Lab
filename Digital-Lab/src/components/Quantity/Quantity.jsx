import React, { useState } from 'react'
import './Quantity.scss';

function Quantity() {
  let [quantity , setQuantity] = useState(1);

  const increment = () =>{
    setQuantity(quantity++);
  }

  const decrement = () =>{
    setQuantity(quantity--);
  }

  return (
    <div class="quantity-wrapper">
      <button onClick={decrement} className="decrement">-</button>
      <input type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
      <button onClick={increment} className="increment">+</button>
    </div>
  );
}

export default Quantity