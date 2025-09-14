import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/" className="logo">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1753552171/ChatGPT_Image_Jul_26_2025_08_41_01_PM_svtphh.png" 
              alt="Podium Racing ME Logo" 
              className="logo-image"
            />
            <span className="logo-text">Podium Racing ME</span>
          </Link>
        </div>
        
        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <li>
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/coaches" className="nav-link" onClick={() => setIsMenuOpen(false)}>Coaches</Link>
            </li>
            <li>
              <Link to="/athletes" className="nav-link" onClick={() => setIsMenuOpen(false)}>Athletes</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a 
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAY5ws_hUMVVMNjEySDJTMFlYU0ZBOU9BNTIxUEc2Sy4u&embed=true" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
          >
            Join Us
          </a>
          <button className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
