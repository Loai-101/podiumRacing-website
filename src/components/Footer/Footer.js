import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="grid grid-3">
            <div>
              <h3>Podium Racing</h3>
              <p>
                Your premier destination for high-performance racing experiences.
              </p>
            </div>
            
            <div>
              <h4>Quick Links</h4>
              <div className="footer-links">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/coaches" className="footer-link">Coaches</Link>
                <Link to="/athletes" className="footer-link">Athletes</Link>
                <Link to="/about" className="footer-link">About Us</Link>
              </div>
            </div>
            
            <div>
              <h4>Contact Info</h4>
              <div>
                <p>
                  Email: 
                  <a className="contact-email" href="https://mail.google.com/mail/?view=cm&fs=1&to=pmiteam@pmi-me.net" target="_blank" rel="noopener noreferrer">
                    pmiteam@pmi-me.net
                  </a>
                </p>
                <p>Address: Road 4574, Block 745, Building 2486, Sanad 745</p>
                <p>Phone: 1367 6757</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>
              © 2024 Podium Racing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
