import React from 'react'
import { Navigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import "./Checkout.scss";


function Checkout() {
  var delivery = ".different-methods button";
  var payment = ".different-payment-methods button";

  $(delivery).on("click", function () {
    $(delivery).removeClass("active");
    $(this).addClass("active");
  });

  $(payment).on("click", function () {
    $(payment).removeClass("active");
    $(this).addClass("active");
  })

  const checkout = () =>{
    alert("Your order has been received!");
  }
  return (
    <Layout>
      <div className="container">
        <h1>Checkout</h1>
        <div className="checkout-wrapper">
          <div className="checkout-container">
            <div className="checkout-details">
              <h3>1. Contact Information </h3>
              <div className="contact-info">
                <span>
                  <i class="bi bi-person"></i>
                  <input type="text" placeholder="First Name" />
                </span>
                <span>
                  <i class="bi bi-people-fill"></i>
                  <input type="text" placeholder="Last Name" />
                </span>
              </div>
              <div className="contact-info">
                <span>
                  <i class="bi bi-123"></i>
                  <input type="text" placeholder="Phone Number" />
                </span>
                <span>
                  <i class="bi bi-envelope-at"></i>
                  <input type="email" placeholder="Email" />
                </span>
              </div>
            </div>
            <div className="checkout-delivery-details">
              <h3>Delivery Methods</h3>
              <div className="different-methods">
                <button>Same-day</button>
                <button>Express</button>
                <button>Normal</button>
                <input type="text" placeholder="Zip Code" />
              </div>
            </div>
            <div className="checkout-delivery-details">
              <h3>Paytm</h3>
              <div className="different-payment-methods">
                <button>CoD</button>
                <button>ApplePay</button>
                <button>GPay</button>
              </div>
            </div>
          </div>
          <div className="checkout-container">
            <h3 className="checkout-items">Total Items - 3</h3>
            <div className="checkout-total">
              <span>
                <p>SubTotal</p>
                <p>$581.00</p>
              </span>
              <span>
                <p>Discount</p>
                <p>-$100(15%)</p>
              </span>
              <span>
                <p>Delivery Services</p>
                <p>+$30</p>
              </span>
              <span className="checkout-final-total">
                <h4>Total</h4>
                <h3>$499.00</h3>
              </span>
              <button className="checkout-payment" onClick={checkout}>
                Pay <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout