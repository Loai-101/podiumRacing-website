import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation, translations } from '../../translations/translations';
// import SEO from '../SEO/SEO';
// import { getSEOConfig } from '../SEO/seoConfig';
import './Coaches.css';
import { FaBicycle } from 'react-icons/fa';

function Coaches() {
  const { language: contextLanguage, isRTL: contextIsRTL } = useLanguage();
  const language = contextLanguage;
  const isRTL = contextIsRTL;
  const [selectedCoach, setSelectedCoach] = useState(null);
  // const seoConfig = getSEOConfig('coaches', language);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(false);
  const programsRef = useRef(null);

  // Get coach data based on language
  const getCoachData = () => {
    const coachData = translations[language]?.coaches?.coaches || {};
    // Always get English data for Seifeldeen's structured sections to keep them in English
    const englishCoachData = translations['en']?.coaches?.coaches || {};
    const seifeldeen = coachData.seifeldeen || {};
    const seifeldeenEnglish = englishCoachData.seifeldeen || {};
    const taher = coachData.taher || {};
    const rehab = coachData.rehab || {};
    const saif = coachData.saif || {};
    
    return [
    {
      id: 1,
      name: seifeldeen?.name || "Seifeldeen Ismail",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152330_p96vpw.png",
      title: seifeldeen?.title || "Triathlon Coach & Professional Athlete",
      description: seifeldeen?.description || "I help triathletes of all levels reach their goals faster, stay injury-free, and enjoy the process. My coaching is built on smart training, not just hard work. My approach blends science, experience, and personalized planning—because progress should be sustainable, not exhausting.",
      // Always use English content for these sections
      asCoach: seifeldeenEnglish?.asCoach || [
        "Coached athletes to qualify for Ironman 70.3 World Championships.",
        "Guided a leukemia survivor to complete 4×70.3 races and a full Ironman within two years—with new personal bests in all disciplines",
        "Work with all levels, from beginners to elites (including Olympian pentathlete Malak Ismail, 2028 LA medalist hopeful)."
      ],
      asAthlete: seifeldeenEnglish?.asAthlete || [
        "2024 Elite African Games (4th place)",
        "2024 Elite Asian Triathlon Cup Champion",
        "2022 Elite Arab Triathlon Champion",
        "World Triathlon Ranking (Best): #85, African Triathlon Ranking (Best): #2",
        "2x Ironman 70.3 Age-Group Podiums"
      ],
      achievements: [
        "Elite international competition experience",
        "Multiple championship titles",
        "Top world and continental rankings"
      ],
      expertise: [
        "Smart training methodologies",
        "Injury prevention and health-first approach",
        "Personalized planning and data-informed coaching"
      ],
      coachingExperience: [
        "Head coach at Podium Racing ME",
        "Personal coach to elite athletes including Olympians",
        "Group training programs for all levels"
      ],
      experience: [
        "Elite international triathlon competitor",
        "Multiple championship titles",
        "World-class ranking achievements"
      ],
      // Always use English content for certifications
      certifications: seifeldeenEnglish?.certifications || [
        "USA Triathlon Level I & Long Course Certified",
        "TrainingPeaks Level 1",
        "Basic Life Support & First Aid"
      ],
      philosophy: seifeldeenEnglish?.philosophy || seifeldeen?.philosophy || "Data-informed, not data-dependent – Use data wisely but trust your feel. Health first – No shortcuts that risk long-term well-being. Your goal, your plan – No generic programs. Let's make your next finish line your best one."
    },
    {
      id: 2,
      name: taher?.name || "Taher Hesham",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152258_qepspb.png",
      title: taher?.title || "Triathlon Coach",
      description: taher?.description || "Taher Hesham – Triathlon Coach\n\nTaher Hesham is a highly skilled triathlon and fitness coach with extensive experience training children, adults, and professional athletes. Since 2020, he has coached at The Trimachine and Fitzone Egypt, guiding athletes to achieve their performance goals through structured training programs, injury prevention strategies, and race preparation.\n\nA former elite triathlete, Taher is a 20-time National Champion, 2-time Arab Champion, and led his team to 1st place in the Army Championship. His firsthand experience at the highest levels of competition allows him to mentor athletes with expert knowledge of swim, bike, and run performance, endurance training, and race strategies.\n\nCertified through TrainingPeaks and university-level sports science programs, he combines evidence-based coaching with a passion for athlete development. At the academy, he plays a key role in building a strong endurance training culture, helping athletes of all levels unlock their full potential.",
      asCoach: [
        "Coached at The Trimachine and Fitzone Egypt since 2020",
        "Guides athletes through structured training programs",
        "Expert in injury prevention strategies and race preparation"
      ],
      asAthlete: [
        "20-time National Champion",
        "2-time Arab Champion",
        "Led team to 1st place in Army Championship"
      ],
      achievements: [
        "Former elite triathlete with firsthand competition experience",
        "Expert knowledge of swim, bike, and run performance",
        "Specialist in endurance training and race strategies"
      ],
      expertise: [
        "Structured training programs",
        "Injury prevention strategies",
        "Race preparation and endurance training"
      ],
      coachingExperience: [
        "Coaching experience since 2020",
        "Training children, adults, and professional athletes",
        "Building strong endurance training culture"
      ],
      experience: [
        "Former elite triathlete",
        "20-time National Champion",
        "2-time Arab Champion"
      ],
      certifications: [
        "Certified through TrainingPeaks",
        "University-level sports science programs",
        "Evidence-based coaching approach"
      ],
      philosophy: taher?.philosophy || "Combining evidence-based coaching with a passion for athlete development, I play a key role in building a strong endurance training culture, helping athletes of all levels unlock their full potential."
    },
    {
      id: 3,
      name: rehab?.name || "Rehab Hamdy",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1765964719/Screenshot_2025-12-17_124029_n8mb0j.png",
      title: rehab?.title || "Triathlon Coach",
      description: rehab?.description || "Rehab Hamdy is a dedicated triathlon coach and former elite triathlete with extensive experience in both competitive racing and athlete development.\n\nHer journey in endurance sports began as a national-level swimmer, later transitioning into triathlon, where she made history as the first Arab woman to qualify for the Youth Olympic Games (2014). She went on to earn multiple podium finishes at the African Games, WTS Grand Final, and African Triathlon Championships.\n\nAs a coach, Rehab brings a wealth of knowledge in swimming, cycling, and running performance training. She has worked with athletes of all levels, from beginners to elite competitors, focusing on technique, endurance, and competition preparation. She has served as a triathlon coach at Stamina Tri Team, Apollo Sports, and AQUATICS Swimming Academy, mentoring age-group and professional athletes alike.\n\nIn 2023, Rehab founded Root Multisport Academy, where she leads a team of triathletes through structured training programs designed to optimize performance for Ironman, national, and international events. She specializes in long-course triathlon coaching, having earned her USAT Level 1 and Training Peaks Level 2 certifications.\n\nWith expertise in individualized training plans, strategic performance profiling, and athlete race preparation, Rehab is committed to helping athletes reach their full potential. Her passion, leadership, and first-hand competitive experience make her an integral part of the academy's coaching team, inspiring the next generation of endurance athletes.",
      asCoach: [
        "Founded Root Multisport Academy in 2023",
        "Coached at Stamina Tri Team, Apollo Sports, and AQUATICS Swimming Academy",
        "Works with athletes of all levels, from beginners to elite competitors",
        "Specializes in long-course triathlon coaching for Ironman, national, and international events"
      ],
      asAthlete: [
        "First Arab woman to qualify for the Youth Olympic Games (2014)",
        "Multiple podium finishes at African Games",
        "Podium finishes at WTS Grand Final",
        "African Triathlon Championships podium finisher",
        "Former national-level swimmer"
      ],
      achievements: [
        "Historic achievement as first Arab woman Youth Olympic Games qualifier",
        "Multiple international podium finishes",
        "Successful transition from swimming to triathlon",
        "Academy founder and team leader"
      ],
      expertise: [
        "Swimming, cycling, and running performance training",
        "Individualized training plans",
        "Strategic performance profiling",
        "Athlete race preparation"
      ],
      coachingExperience: [
        "Founded and leads Root Multisport Academy",
        "Coached at multiple prestigious organizations",
        "Mentored age-group and professional athletes",
        "Structured training programs for international events"
      ],
      experience: [
        "Former elite triathlete with international competition experience",
        "National-level swimming background",
        "Multiple championship podium finishes",
        "Academy leadership and team development"
      ],
      certifications: [
        "USAT Level 1 Certified",
        "Training Peaks Level 2 Certified",
        "Long-course triathlon coaching specialist"
      ],
      philosophy: rehab?.philosophy || "With expertise in individualized training plans, strategic performance profiling, and athlete race preparation, Rehab is committed to helping athletes reach their full potential. Her passion, leadership, and first-hand competitive experience make her an integral part of the academy's coaching team, inspiring the next generation of endurance athletes."
    },
    {
      id: 4,
      name: saif?.name || "Saif Al-Islam Al-Hammami",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1758129767/IMG_6650_1_zeimch.jpg",
      title: saif?.title || "Certified Triathlon Coach",
      description: saif?.description || "Saif Al-Islam Al-Hammami – Certified Triathlon Coach\n\nSaif Al-Islam Al-Hammami is a triathlon coach with strong academic and professional qualifications in sports science. He holds an International Triathlon Coaching Certificate from South Korea, in addition to a specialized certification in athletics, physical preparation, and fitness coach.\n\nWith extensive experience in coaching and officiating, Saif has served as an athletics coach for the Military Sports Association, achieving multiple national medals. He is also an international triathlon referee and currently works as a coach for the Tunisian National Triathlon Team.",
      asCoach: [
        "Coach for the Tunisian National Triathlon Team",
        "Athletics coach for the Military Sports Association",
        "International triathlon referee",
        "Extensive experience in coaching and officiating"
      ],
      asAthlete: [
        "Multiple national medals in athletics",
        "Strong background in sports science",
        "Professional qualifications in athletics and physical preparation"
      ],
      achievements: [
        "International Triathlon Coaching Certificate from South Korea",
        "Multiple national medals as athletics coach",
        "International triathlon referee status",
        "Current coach for Tunisian National Triathlon Team"
      ],
      expertise: [
        "Sports science and academic qualifications",
        "Athletics coaching and physical preparation",
        "International triathlon officiating",
        "National team coaching"
      ],
      coachingExperience: [
        "Current coach for Tunisian National Triathlon Team",
        "Athletics coach for Military Sports Association",
        "International triathlon referee",
        "Extensive coaching and officiating experience"
      ],
      experience: [
        "Strong academic and professional sports science background",
        "Multiple national medals in athletics coaching",
        "International triathlon officiating experience",
        "National team coaching experience"
      ],
      certifications: [
        "International Triathlon Coaching Certificate from South Korea",
        "Specialized certification in athletics, physical preparation, and fitness coach",
        "International triathlon referee certification"
      ],
      philosophy: saif?.philosophy || "With strong academic and professional qualifications in sports science, Saif brings extensive experience in coaching and officiating to help athletes achieve their goals through evidence-based training methods and international standards."
    }
  ];
  };

  const coaches = getCoachData();

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
            <h1 className="hero-title">{getTranslation('coaches.heroTitle', 'en')}</h1>
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
                  <p className="coach-title">{coach.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section coaching-programs" ref={programsRef}>
        <div className="container">
          <h2 className="section-title">{getTranslation('coaches.coachingPrograms', 'en')}</h2>
          <div className="grid grid-3">
            <div className={`program-card ${animatedCards ? 'animate' : ''}`}>
              <h3 className="program-title">{getTranslation('coaches.beginnerProgram', 'en')}</h3>
              <p className="program-description">
                {getTranslation('coaches.beginnerDescription', 'en')}
              </p>
              <ul className="program-features">
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.safetyFundamentals', 'en')}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.basicRacingTechniques', 'en')}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.equipmentFamiliarization', 'en')}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.tipsForBetterTechnique', 'en')}</li>
              </ul>
            </div>

            <div className={`program-card ${animatedCards ? 'animate' : ''}`}>
              <h3 className="program-title">{getTranslation('coaches.intermediateProgram', 'en')}</h3>
              <p className="program-description">
                {getTranslation('coaches.intermediateDescription', 'en')}
              </p>
              <ul className="program-features">
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.advancedTechniques', 'en')}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.performanceOptimization', 'en')}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.strategyDevelopment', 'en')}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.competitionPreparation', 'en')}</li>
              </ul>
            </div>

            <div className={`program-card ${animatedCards ? 'animate' : ''}`}>
              <h3 className="program-title">{getTranslation('coaches.eliteProgram', 'en')}</h3>
              <p className="program-description">
                {getTranslation('coaches.eliteDescription', 'en')}
              </p>
              <ul className="program-features">
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.professionalTechniques', 'en')}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.mentalConditioning', 'en')}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.advancedStrategy', 'en')}</li>
                <li><FaBicycle className="bike-icon" />{getTranslation('coaches.careerDevelopment', 'en')}</li>
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
                
                {selectedCoach.asCoach && selectedCoach.asCoach.length > 0 && (
                  <div className="coach-modal-section" style={{ direction: 'ltr', textAlign: 'left' }}>
                    <h4 style={{ direction: 'ltr', textAlign: 'left' }}>As a Coach:</h4>
                    <ul style={{ direction: 'ltr', textAlign: 'left' }}>
                      {selectedCoach.asCoach.map((item, index) => (
                        <li key={index} style={{ direction: 'ltr', textAlign: 'left' }}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCoach.asAthlete && selectedCoach.asAthlete.length > 0 && (
                  <div className="coach-modal-section" style={{ direction: 'ltr', textAlign: 'left' }}>
                    <h4 style={{ direction: 'ltr', textAlign: 'left' }}>As an Athlete:</h4>
                    <ul style={{ direction: 'ltr', textAlign: 'left' }}>
                      {selectedCoach.asAthlete.map((item, index) => (
                        <li key={index} style={{ direction: 'ltr', textAlign: 'left' }}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCoach.id !== 1 && selectedCoach.id !== 2 && selectedCoach.id !== 3 && selectedCoach.id !== 4 && selectedCoach.achievements && (
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

                {selectedCoach.id !== 1 && selectedCoach.id !== 2 && selectedCoach.id !== 3 && selectedCoach.id !== 4 && selectedCoach.expertise && (
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

                {selectedCoach.id !== 1 && selectedCoach.id !== 2 && selectedCoach.id !== 3 && selectedCoach.id !== 4 && selectedCoach.coachingExperience && (
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

                {selectedCoach.id !== 1 && selectedCoach.id !== 2 && selectedCoach.id !== 3 && selectedCoach.id !== 4 && selectedCoach.experience && (
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

                {selectedCoach.certifications && selectedCoach.certifications.length > 0 && (
                  <div className="coach-modal-section" style={{ direction: 'ltr', textAlign: 'left' }}>
                    <h4 style={{ direction: 'ltr', textAlign: 'left' }}>Certifications & Expertise:</h4>
                    <ul style={{ direction: 'ltr', textAlign: 'left' }}>
                      {selectedCoach.certifications.map((item, index) => (
                        <li key={index} style={{ direction: 'ltr', textAlign: 'left' }}>
                          <FaBicycle className="bike-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCoach.philosophy && (
                  <div className="coach-modal-section">
                    <h4>My Philosophy:</h4>
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
