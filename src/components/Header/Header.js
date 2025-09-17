import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations/translations';
import { FaGlobe } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const languageToggleRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageChange = (newLanguage) => {
    if (newLanguage !== language) {
      toggleLanguage();
    }
    setIsLanguageMenuOpen(false);
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageToggleRef.current && !languageToggleRef.current.contains(event.target)) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {getTranslation('nav.home', language)}
              </Link>
            </li>
            <li>
              <Link to="/coaches" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {getTranslation('nav.coaches', language)}
              </Link>
            </li>
            <li>
              <Link to="/athletes" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {getTranslation('nav.athletes', language)}
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {getTranslation('nav.about', language)}
              </Link>
            </li>
            
            {/* Mobile Language Toggle at Bottom of Menu */}
            <li className="mobile-menu-language-toggle">
              <div className="mobile-menu-language-section">
                <span className="mobile-menu-language-label">
                  {language === 'en' ? 'Language' : 'اللغة'}
                </span>
                <div className="mobile-menu-language-options">
                  <button 
                    className={`mobile-menu-language-btn ${language === 'en' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    EN
                  </button>
                  <button 
                    className={`mobile-menu-language-btn ${language === 'ar' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('ar')}
                  >
                    AR
                  </button>
                </div>
              </div>
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
            {getTranslation('nav.joinUs', language)}
          </a>
          
          {/* Language Toggle */}
          <div className="language-toggle" ref={languageToggleRef}>
            <button 
              className="language-toggle-btn" 
              onClick={toggleLanguageMenu}
              aria-label="Toggle Language"
            >
              <FaGlobe className="language-icon" />
              <span className="current-language">{language.toUpperCase()}</span>
            </button>
            
            {isLanguageMenuOpen && (
              <div className="language-dropdown">
                <button 
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  EN
                </button>
                <button 
                  className={`language-option ${language === 'ar' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('ar')}
                >
                  AR
                </button>
              </div>
            )}
          </div>
          
          
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
