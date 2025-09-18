import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations/translations';
// import SEO from '../SEO/SEO';
// import { getSEOConfig } from '../SEO/seoConfig';
import './Coaches.css';
import { FaBicycle } from 'react-icons/fa';

function Coaches() {
  const { language, isRTL } = useLanguage();
  const [selectedCoach, setSelectedCoach] = useState(null);
  // const seoConfig = getSEOConfig('coaches', language);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(false);
  const programsRef = useRef(null);

  // Coach data with all details
  const coaches = [
    {
      id: 1,
      name: getTranslation('coaches.coaches.seifeldeen.name', language),
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152330_p96vpw.png",
      title: getTranslation('coaches.coaches.seifeldeen.title', language),
      description: getTranslation('coaches.coaches.seifeldeen.description', language),
      asCoach: getTranslation('coaches.coaches.seifeldeen.asCoach', language),
      asAthlete: getTranslation('coaches.coaches.seifeldeen.asAthlete', language),
      achievements: getTranslation('coaches.coaches.seifeldeen.achievements', language),
      expertise: getTranslation('coaches.coaches.seifeldeen.expertise', language),
      coachingExperience: getTranslation('coaches.coaches.seifeldeen.coachingExperience', language),
      experience: getTranslation('coaches.coaches.seifeldeen.experience', language),
      certifications: getTranslation('coaches.coaches.seifeldeen.certifications', language),
      philosophy: getTranslation('coaches.coaches.seifeldeen.philosophy', language)
    },
    {
      id: 2,
      name: getTranslation('coaches.coaches.taher.name', language),
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152258_qepspb.png",
      title: getTranslation('coaches.coaches.taher.title', language),
      description: getTranslation('coaches.coaches.taher.description', language),
      asCoach: getTranslation('coaches.coaches.taher.asCoach', language),
      asAthlete: getTranslation('coaches.coaches.taher.asAthlete', language),
      achievements: getTranslation('coaches.coaches.taher.achievements', language),
      expertise: getTranslation('coaches.coaches.taher.expertise', language),
      coachingExperience: getTranslation('coaches.coaches.taher.coachingExperience', language),
      experience: getTranslation('coaches.coaches.taher.experience', language),
      certifications: getTranslation('coaches.coaches.taher.certifications', language),
      philosophy: getTranslation('coaches.coaches.taher.philosophy', language)
    },
    {
      id: 3,
      name: getTranslation('coaches.coaches.rehab.name', language),
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152308_wstwqm.png",
      title: getTranslation('coaches.coaches.rehab.title', language),
      description: getTranslation('coaches.coaches.rehab.description', language),
      asCoach: getTranslation('coaches.coaches.rehab.asCoach', language),
      asAthlete: getTranslation('coaches.coaches.rehab.asAthlete', language),
      achievements: getTranslation('coaches.coaches.rehab.achievements', language),
      expertise: getTranslation('coaches.coaches.rehab.expertise', language),
      coachingExperience: getTranslation('coaches.coaches.rehab.coachingExperience', language),
      experience: getTranslation('coaches.coaches.rehab.experience', language),
      certifications: getTranslation('coaches.coaches.rehab.certifications', language),
      philosophy: getTranslation('coaches.coaches.rehab.philosophy', language)
    },
    {
      id: 4,
      name: getTranslation('coaches.coaches.saif.name', language),
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1758129767/IMG_6650_1_zeimch.jpg",
      title: getTranslation('coaches.coaches.saif.title', language),
      description: getTranslation('coaches.coaches.saif.description', language),
      asCoach: getTranslation('coaches.coaches.saif.asCoach', language),
      asAthlete: getTranslation('coaches.coaches.saif.asAthlete', language),
      achievements: getTranslation('coaches.coaches.saif.achievements', language),
      expertise: getTranslation('coaches.coaches.saif.expertise', language),
      coachingExperience: getTranslation('coaches.coaches.saif.coachingExperience', language),
      experience: getTranslation('coaches.coaches.saif.experience', language),
      certifications: getTranslation('coaches.coaches.saif.certifications', language),
      philosophy: getTranslation('coaches.coaches.saif.philosophy', language)
    }
  ];

  const openCoachModal = (coach) => {
    setSelectedCoach(coach);
    setIsModalOpen(true);
  };

  const closeCoachModal = () => {
    setIsModalOpen(false);
    setSelectedCoach(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (programsRef.current) {
        const rect = programsRef.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible && !animatedCards) {
          setAnimatedCards(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedCards]);

  return (
    <div className={`main-content ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* <SEO {...seoConfig} /> */}
      <section className="hero coaches-hero">
        <div className="hero-background">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1758128388/00_9_yde3rj.png" 
            alt="Podium Racing ME 2025 Team" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{getTranslation('coaches.heroTitle', language)}</h1>
            <p className="hero-subtitle">
              {getTranslation('coaches.heroSubtitle', language)}
            </p>
          </div>
        </div>
      </section>

      <section className="section coaches-content">
        <div className="container">
          <div className="coaches-grid">
            {coaches.map((coach) => (
              <div key={coach.id} className="coach-card" onClick={() => openCoachModal(coach)}>
                <div className="coach-image-container">
                  {coach.image ? (
                    <img 
                      src={coach.image} 
                      alt={coach.name}
                      className={`coach-image ${coach.id === 3 ? 'offset-down no-white' : coach.id === 4 ? 'offset-saif no-white' : ''}`}
                    />
                  ) : (
                    <div className="coach-image-placeholder">
                      Image
                    </div>
                  )}
                </div>
                <div className="coach-info">
                  <h3 className="coach-name">{coach.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section coaching-programs" ref={programsRef}>
        <div className="container">
          <h2 className="section-title">{getTranslation('coaches.coachingPrograms', language)}</h2>
          <div className="grid grid-3">
            <div className={`program-card ${animatedCards ? 'animate' : ''}`}>
              <h3 className="program-title">{getTranslation('coaches.beginnerProgram', language)}</h3>
              <p className="program-description">
                {getTranslation('coaches.beginnerDescription', language)}
              </p>
              <ul className="program-features">
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.safetyFundamentals', language)}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.basicRacingTechniques', language)}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.equipmentFamiliarization', language)}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.tipsForBetterTechnique', language)}</li>
              </ul>
            </div>

            <div className={`program-card ${animatedCards ? 'animate' : ''}`}>
              <h3 className="program-title">{getTranslation('coaches.intermediateProgram', language)}</h3>
              <p className="program-description">
                {getTranslation('coaches.intermediateDescription', language)}
              </p>
              <ul className="program-features">
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.advancedTechniques', language)}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.performanceOptimization', language)}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.strategyDevelopment', language)}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.competitionPreparation', language)}</li>
              </ul>
            </div>

            <div className={`program-card ${animatedCards ? 'animate' : ''}`}>
              <h3 className="program-title">{getTranslation('coaches.eliteProgram', language)}</h3>
              <p className="program-description">
                {getTranslation('coaches.eliteDescription', language)}
              </p>
              <ul className="program-features">
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.professionalTechniques', language)}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.mentalConditioning', language)}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.advancedStrategy', language)}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.careerDevelopment', language)}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Modal */}
      {isModalOpen && selectedCoach && (
        <div className="coach-modal-overlay" onClick={closeCoachModal}>
          <div className="coach-modal" onClick={(e) => e.stopPropagation()}>
            <button className="coach-modal-close" onClick={closeCoachModal}>×</button>
            <div className="coach-modal-content">
              <div className="coach-modal-image-container">
                {selectedCoach.image ? (
                  <img 
                    src={selectedCoach.image} 
                    alt={selectedCoach.name}
                    className={`coach-modal-image ${selectedCoach.id === 3 ? 'no-white offset-down' : selectedCoach.id === 4 ? 'no-white offset-saif' : ''}`}
                  />
                ) : (
                  <div className="coach-modal-image-placeholder">
                    Image
                  </div>
                )}
              </div>
              <div className="coach-modal-info">
                <h2 className="coach-modal-name">{selectedCoach.name}</h2>
                <p className="coach-modal-title">{selectedCoach.title}</p>
                <p className="coach-modal-description">{selectedCoach.description}</p>
                
                {selectedCoach.asCoach && (
                  <div className="coach-modal-section">
                    <h4>{getTranslation('coaches.asACoach', language)}</h4>
                    <ul>
                      {selectedCoach.asCoach.map((item, index) => (
                        <li key={index}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCoach.asAthlete && (
                  <div className="coach-modal-section">
                    <h4>{getTranslation('coaches.asAnAthlete', language)}</h4>
                    <ul>
                      {selectedCoach.asAthlete.map((item, index) => (
                        <li key={index}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCoach.achievements && (
                  <div className="coach-modal-section">
                    <h4>{getTranslation('coaches.achievements', language)}</h4>
                    <ul>
                      {selectedCoach.achievements.map((item, index) => (
                        <li key={index}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCoach.expertise && (
                  <div className="coach-modal-section">
                    <h4>{getTranslation('coaches.expertise', language)}</h4>
                    <ul>
                      {selectedCoach.expertise.map((item, index) => (
                        <li key={index}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCoach.coachingExperience && (
                  <div className="coach-modal-section">
                    <h4>{getTranslation('coaches.coachingExperience', language)}</h4>
                    <ul>
                      {selectedCoach.coachingExperience.map((item, index) => (
                        <li key={index}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCoach.experience && (
                  <div className="coach-modal-section">
                    <h4>{getTranslation('coaches.experience', language)}</h4>
                    <ul>
                      {selectedCoach.experience.map((item, index) => (
                        <li key={index}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCoach.certifications && (
                  <div className="coach-modal-section">
                    <h4>{getTranslation('coaches.certifications', language)}</h4>
                    <ul>
                      {selectedCoach.certifications.map((item, index) => (
                        <li key={index}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCoach.philosophy && (
                  <div className="coach-modal-section">
                    <h4>{getTranslation('coaches.myPhilosophy', language)}</h4>
                    <p className="coach-modal-description">{selectedCoach.philosophy}</p>
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

export default Coaches;
