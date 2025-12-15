import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations/translations';
// import SEO from '../SEO/SEO';
// import { getSEOConfig } from '../SEO/seoConfig';
import './About.css';

function About() {
  const { language: contextLanguage, isRTL: contextIsRTL } = useLanguage();
  const language = contextLanguage;
  const isRTL = contextIsRTL;
  // const seoConfig = getSEOConfig('about', language);

  return (
    <div className={`main-content ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* <SEO {...seoConfig} /> */}
      <section className="hero about-hero">
        <div className="hero-background">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1758128388/00_4_lxpotu.png" 
            alt="About Podium Racing Middle East" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{getTranslation('about.heroTitle', 'en')}</h1>
            <p className="hero-subtitle">
              {getTranslation('about.heroSubtitle', language)}
            </p>
          </div>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-text-section">
            <h2 className="card-title">{getTranslation('about.ourStory', language)}</h2>
            <p className="card-content">
              {getTranslation('about.ourStoryContent1', language)}
            </p>
            <p className="card-content">
              {getTranslation('about.ourStoryContent2', language)}
            </p>
            <p className="card-content">
              {getTranslation('about.ourStoryContent3', language)}
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">7</h3>
              <p className="stat-label">{getTranslation('about.olympians', 'en')}</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">{getTranslation('about.international', 'en')}</h3>
              <p className="stat-label">{getTranslation('about.professionalTeam', 'en')}</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">{getTranslation('about.middleEast', 'en')}</h3>
              <p className="stat-label">{getTranslation('about.expansion', 'en')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section platform-section">
        <div className="container">
          <div className="platform-content">
            <h2 className="card-title">{getTranslation('about.ourPlatform', language)}</h2>
            <p className="card-content">
              {getTranslation('about.platformContent1', language)}
            </p>
            <p className="card-content">
              {getTranslation('about.platformContent2', language)}
            </p>
            <p className="card-content">
              {getTranslation('about.platformContent3', language)}
            </p>
            <p className="card-content">
              {getTranslation('about.platformContent4', language)}
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="card-title">{getTranslation('about.contactInfo', 'en')}</h2>
            <div className="contact-details">
              <p className="contact-item">
                <strong>{getTranslation('about.email', 'en')}</strong> 
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=podiumracing-me@pmigroup.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-email"
                >
                  podiumracing-me@pmigroup.me
                </a>
              </p>
              <p className="contact-item">
                <strong>{getTranslation('about.address', 'en')}</strong> Road 4574, Block 745, Building 2486, Sanad 745
              </p>
              <p className="contact-item">
                <strong>{getTranslation('about.phone', 'en')}</strong> <span className="phone-number">00973 1367 6757</span>
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
