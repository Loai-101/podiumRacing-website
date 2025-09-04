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
                <p>Email: info@podiumracing.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Racing Lane, Speed City</p>
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
