import React from 'react'
import "./Footer.scss";

function Footer() {
  return (
    <div>
      <footer className="container">
        <div className="footer-container-left">
          <div className="footer-bottom">
            <ul>
              <li>
                <b>Resources</b>
              </li>
              <li>Why Digital-Lab?</li>
              <li>Customer Services</li>
              <li>Blog</li>
              <li>Guides</li>
            </ul>
            <ul>
              <li>
                <b>Company</b>
              </li>
              <li>About us</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
            <ul>
              <li>
                <b>Socials</b>
              </li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div class="footer-right">
          <p>Demo</p>
          <h2>Request a Demo</h2>
          <input type="text" placeholder="Enter your email" />
        </div>
      </footer>
    </div>
  );
}

export default Footer