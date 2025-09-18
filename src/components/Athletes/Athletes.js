import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations/translations';
import SEO from '../SEO/SEO';
import { getSEOConfig } from '../SEO/seoConfig';
import './Athletes.css';
import { FaBicycle } from 'react-icons/fa';

function Athletes() {
  const { language, isRTL } = useLanguage();
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const seoConfig = getSEOConfig('athletes', language);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Athlete data with all details
  const athletes = [
    {
      id: 1,
      name: getTranslation('athletes.athletes.seifeldeen.name', language),
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756808541/192A0268_tmwraw.jpg",
      modalImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756809010/IMG_2975_g7f4x2.jpg",
      category: getTranslation('athletes.athletes.seifeldeen.category', language),
      achievements: getTranslation('athletes.athletes.seifeldeen.achievements', language),
      personalBests: getTranslation('athletes.athletes.seifeldeen.personalBests', language),
      experience: getTranslation('athletes.athletes.seifeldeen.experience', language),
      specialties: getTranslation('athletes.athletes.seifeldeen.specialties', language),
      philosophy: getTranslation('athletes.athletes.seifeldeen.philosophy', language)
    },
    {
      id: 2,
      name: getTranslation('athletes.athletes.mohamed.name', language),
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756809241/9357_20230604_095901_287630864_original_pre7pd.jpg",
      modalImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756809350/9357_20230604_154030_287786663_original_yi6wht.jpg",
      category: getTranslation('athletes.athletes.mohamed.category', language),
      achievements: getTranslation('athletes.athletes.mohamed.achievements', language),
      personalBests: getTranslation('athletes.athletes.mohamed.personalBests', language),
      experience: getTranslation('athletes.athletes.mohamed.experience', language),
      specialties: getTranslation('athletes.athletes.mohamed.specialties', language),
      philosophy: getTranslation('athletes.athletes.mohamed.philosophy', language)
    },
    {
      id: 3,
      name: getTranslation('athletes.athletes.malik.name', language),
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756976841/WhatsApp_Image_2025-09-03_at_10.26.37_f0852a98_h3fz7z.jpg",
      modalImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756976998/WhatsApp_Image_2025-09-03_at_10.26.37_edfc61a6_gwjypd.jpg",
      category: getTranslation('athletes.athletes.malik.category', language),
      achievements: getTranslation('athletes.athletes.malik.achievements', language),
      personalBests: getTranslation('athletes.athletes.malik.personalBests', language),
      experience: getTranslation('athletes.athletes.malik.experience', language),
      specialties: getTranslation('athletes.athletes.malik.specialties', language),
      philosophy: getTranslation('athletes.athletes.malik.philosophy', language)
    }
  ];

  const openAthleteModal = (athlete) => {
    setSelectedAthlete(athlete);
    setIsModalOpen(true);
  };

  const closeAthleteModal = () => {
    setIsModalOpen(false);
    setSelectedAthlete(null);
  };

  return (
    <div className={`main-content ${isRTL ? 'rtl' : 'ltr'}`}>
      <SEO {...seoConfig} />
      <section className="hero athletes-hero">
        <div className="hero-background-image">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756884185/events_no_text_ejryow.webp" 
            alt="Athletes Hero Background" 
            className="hero-background-image-element"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="hero-title">{getTranslation('athletes.heroTitle', language)}</h1>
          <p className="hero-subtitle">
            {getTranslation('athletes.heroSubtitle', language)}
          </p>
        </div>
      </section>

      <section className="section athletes-content">
        <div className="container">
          <div className="athletes-grid">
            {athletes.map((athlete) => (
              <div key={athlete.id} className="athlete-card" onClick={() => openAthleteModal(athlete)}>
                <div className="athlete-image-container">
                  {athlete.image ? (
                    <img 
                      src={athlete.image}
                      alt={athlete.name}
                      loading="lazy"
                      decoding="async"
                      className="athlete-image"
                      srcSet={`${athlete.image}?w=300 300w, ${athlete.image}?w=600 600w, ${athlete.image}?w=900 900w`}
                      sizes="(max-width: 768px) 300px, 400px"
                    />
                  ) : (
                    <div className="athlete-image-placeholder">
                      Image
                    </div>
                  )}
                </div>
                <div className="athlete-info">
                  <h3 className="athlete-name">{athlete.name}</h3>
                  <p className="athlete-category">{athlete.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section athletes-intro">
        <div className="container">
          <div className="intro-content">
            <p className="intro-text">
              {getTranslation('athletes.introText1', language)}
            </p>
            <p className="intro-text">
              {getTranslation('athletes.introText2', language)}
            </p>
          </div>
          <p className="intro-tagline">{getTranslation('athletes.introTagline', language)}</p>
        </div>
      </section>

      <section className="section join-team-section">
        <div className="container">
          <div className="join-content">
            <h2 className="card-title">{getTranslation('athletes.joinOurTeam', language)}</h2>
            <p className="join-text">
              {getTranslation('athletes.joinText', language)}
            </p>
            <div className="join-benefits">
              <h3>{getTranslation('athletes.benefitsTitle', language)}</h3>
              <ul>
                <li>{getTranslation('athletes.benefit1', language)}</li>
                <li>{getTranslation('athletes.benefit2', language)}</li>
                <li>{getTranslation('athletes.benefit3', language)}</li>
                <li>{getTranslation('athletes.benefit4', language)}</li>
              </ul>
            </div>
            <div style={{textAlign: 'center'}}>
              <a 
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAY5ws_hUMVVMNjEySDJTMFlYU0ZBOU9BNTIxUEc2Sy4u&embed=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="join-button"
              >
                {getTranslation('athletes.applyToJoin', language)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Athlete Modal */}
      {isModalOpen && selectedAthlete && (
        <div className="athlete-modal-overlay" onClick={closeAthleteModal}>
          <div className="athlete-modal" onClick={(e) => e.stopPropagation()}>
            <button className="athlete-modal-close" onClick={closeAthleteModal}>×</button>
            <div className="athlete-modal-content">
              <div className="athlete-modal-image-container">
                {selectedAthlete.modalImage ? (
                  <img 
                    src={selectedAthlete.modalImage} 
                    alt={selectedAthlete.name}
                    className={`athlete-modal-image ${selectedAthlete.id === 3 ? 'malik-ali-image' : ''}`}
                  />
                ) : selectedAthlete.image ? (
                  <img 
                    src={selectedAthlete.image} 
                    alt={selectedAthlete.name}
                    className={`athlete-modal-image ${selectedAthlete.id === 3 ? 'malik-ali-image' : ''}`}
                  />
                ) : (
                  <div className="athlete-modal-image-placeholder">
                    Image
                  </div>
                )}
              </div>
              <div className="athlete-modal-info">
                <h2 className="athlete-modal-name">{selectedAthlete.name}</h2>
                <p className="athlete-modal-category">{selectedAthlete.category}</p>
                
                {selectedAthlete.achievements && (
                  <div className="athlete-modal-section">
                    <h4>{getTranslation('athletes.keyAchievements', language)}</h4>
                    <ul>
                      {selectedAthlete.achievements.map((item, index) => (
                        <li key={index}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedAthlete.personalBests && (
                  <div className="athlete-modal-section">
                    <h4>{getTranslation('athletes.personalBests', language)}</h4>
                    <ul>
                      {selectedAthlete.personalBests.map((item, index) => (
                        <li key={index}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedAthlete.experience && (
                  <div className="athlete-modal-section">
                    <h4>{getTranslation('athletes.experience', language)}</h4>
                    <ul>
                      {selectedAthlete.experience.map((item, index) => (
                        <li key={index}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedAthlete.specialties && (
                  <div className="athlete-modal-section">
                    <h4>{getTranslation('athletes.specialties', language)}</h4>
                    <ul>
                      {selectedAthlete.specialties.map((item, index) => (
                        <li key={index}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedAthlete.philosophy && (
                  <div className="athlete-modal-section">
                    <h4>{getTranslation('athletes.myPhilosophy', language)}</h4>
                    <p className="athlete-modal-description">{selectedAthlete.philosophy}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Athletes;
