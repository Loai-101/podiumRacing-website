import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaWpforms } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="grid grid-2">
            <div>
              <h3>Podium Racing Middle East</h3>
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
              {/* Mobile-only social icons under pages */}
              <div className="footer-social mobile-only">
                <a href="https://www.instagram.com/podium_racing_me/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/PodiumRacingME" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://www.tiktok.com/@podium_racing_me" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="TikTok">
                  <FaTiktok />
                </a>
                <a href="https://wa.me/97313676757?text=Hello%20Podium%20Racing%20ME" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAY5ws_hUMVVMNjEySDJTMFlYU0ZBOU9BNTIxUEc2Sy4u&embed=true" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Registration Form">
                  <FaWpforms />
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="sponsor-wrap">
              <p className="sponsor-text">© 2025 Podium Racing Middle East. All rights reserved.</p>
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
