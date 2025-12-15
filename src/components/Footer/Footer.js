import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations/translations';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const { language, isRTL } = useLanguage();

  return (
    <footer className={`footer ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{getTranslation('footer.companyName', 'en')}</h3>
            <p className="footer-tagline">{getTranslation('footer.tagline', 'en')}</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">{getTranslation('footer.quickLinks', 'en')}</h4>
            <ul className="footer-links">
              <li><a href="/">{getTranslation('footer.home', 'en')}</a></li>
              <li><a href="/coaches">{getTranslation('footer.coaches', 'en')}</a></li>
              <li><a href="/athletes">{getTranslation('footer.athletes', 'en')}</a></li>
              <li><a href="/about">{getTranslation('footer.aboutUs', 'en')}</a></li>
            </ul>
          </div>
        </div>
        
        {/* Mobile Social Media Icons */}
        <div className="footer-social-media">
          <a href="https://www.instagram.com/podium_racing_me/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaInstagram className="footer-social-icon" />
          </a>
          <a href="https://www.facebook.com/PodiumRacingME" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaFacebook className="footer-social-icon" />
          </a>
          <a href="https://www.tiktok.com/@podium_racing_me" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaTiktok className="footer-social-icon" />
          </a>
          <a href="https://wa.me/97313676757?text=Hello%20Podium%20Racing%20ME" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaWhatsapp className="footer-social-icon" />
          </a>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">{getTranslation('footer.copyright', 'en')}</p>
          <p className="footer-developed">
            <a 
              href="https://it-solutions.pmi-me.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-pmi-link"
            >
              <img 
                src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_24,h_24,q_auto/v1754304517/PMI_Circile_Red_od7mix" 
                alt="PMI Logo" 
                className="pmi-logo"
                onError={(e) => {
                  console.log('PNG failed, trying JPG');
                  e.target.src = 'https://res.cloudinary.com/dvybb2xnc/image/upload/f_jpg,w_24,h_24,q_auto/v1754304517/PMI_Circile_Red_od7mix';
                  e.target.onError = () => {
                    console.log('JPG failed, trying SVG');
                    e.target.src = 'https://res.cloudinary.com/dvybb2xnc/image/upload/f_svg,w_24,h_24,q_auto/v1754304517/PMI_Circile_Red_od7mix';
                    e.target.onError = () => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'inline';
                    };
                  };
                }}
              />
              <span className="pmi-logo-text" style={{display: 'none'}}>PMI</span>
              {getTranslation('footer.developedBy', 'en')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
