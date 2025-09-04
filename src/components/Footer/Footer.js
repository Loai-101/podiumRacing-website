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
              <p className="text-yellow">
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
                <p className="text-yellow">
                  Email: 
                  <a className="contact-email" href="https://mail.google.com/mail/?view=cm&fs=1&to=pmiteam@pmi-me.net" target="_blank" rel="noopener noreferrer">
                    pmiteam@pmi-me.net
                  </a>
                </p>
                <p className="text-yellow">Address: Road 4574, Block 745, Building 2486, Sanad 745</p>
                <p className="text-yellow">Phone: 1367 6757</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="sponsor-wrap">
              <p className="sponsor-text">© 2025 Podium Racing. All rights reserved.</p>
              <a
                href="https://pmi-me.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-cta"
                aria-label="PMI website"
              >
                <span className="sponsor-cta-text">Developed and sponser by PMI</span>
                <img
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,q_auto,w_72/v1754304517/PMI_Circile_Red_od7mix.png"
                  alt="PMI Logo"
                  className="sponsor-logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
