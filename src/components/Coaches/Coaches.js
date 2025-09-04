import React, { useState, useEffect, useRef } from 'react';
import './Coaches.css';
import { FaBicycle } from 'react-icons/fa';

function Coaches() {
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(false);
  const programsRef = useRef(null);

  // Coach data with all details
  const coaches = [
    {
      id: 1,
      name: "Seifeldeen Ismail",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152330_p96vpw.png",
      title: "Triathlon Coach & Professional Athlete",
      description: "I help triathletes of all levels reach their goals faster, stay injury-free, and enjoy the process. My coaching is built on smart training, not just hard work. My approach blends science, experience, and personalized planning because progress should be sustainable, not exhausting.",
      asCoach: [
        "Coached athletes to qualify for Ironman 70.3 World Championships",
        "Guided a leukemia survivor to complete 4x70.3 races and a full Ironman within two years",
        "Work with all levels, from beginners to elites"
      ],
      asAthlete: [
        "Ironman 70.3 World Championship qualifier",
        "Multiple Ironman 70.3 finishes",
        "National triathlon champion"
      ],
      achievements: [
        "10+ years of coaching experience",
        "Certified by USA Triathlon",
        "Sports science degree holder"
      ],
      expertise: [
        "Ironman training programs",
        "Injury prevention",
        "Performance optimization"
      ],
      coachingExperience: [
        "Head coach at Podium Racing ME",
        "Personal coach to elite athletes",
        "Group training programs"
      ],
      experience: [
        "15+ years in triathlon",
        "Former professional athlete",
        "International competition experience"
      ],
      certifications: [
        "USA Triathlon Level 2 Coach",
        "Sports Nutrition Specialist",
        "First Aid & CPR certified"
      ],
      philosophy: "My coaching philosophy centers around sustainable progress, injury prevention, and enjoying the journey. I believe in building strong foundations and gradually increasing intensity to achieve long term success."
    },
    {
      id: 2,
      name: "Taher Hesham",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152258_qepspb.png",
      title: "Elite Triathlon Coach & Former Professional Athlete",
      description: "Specializing in high-performance training and race strategy, I help athletes push their limits while maintaining peak physical condition. My approach combines cutting-edge training methods with proven racing techniques.",
      asCoach: [
        "Coached multiple Ironman finishers",
        "Specialist in race day strategy",
        "Expert in high-intensity training"
      ],
      asAthlete: [
        "Former professional triathlete",
        "Multiple Ironman finishes",
        "Regional champion"
      ],
      achievements: [
        "8+ years coaching experience",
        "Sports medicine background",
        "Performance analysis expert"
      ],
      expertise: [
        "High-intensity training",
        "Race strategy",
        "Performance testing"
      ],
      coachingExperience: [
        "Senior coach at Podium Racing ME",
        "Elite athlete development",
        "Competition preparation"
      ],
      experience: [
        "12+ years in triathlon",
        "Professional racing background",
        "International experience"
      ],
      certifications: [
        "Advanced coaching certification",
        "Sports medicine degree",
        "Performance analysis certified"
      ],
      philosophy: "I focus on maximizing performance through intelligent training, proper recovery, and strategic race planning. Every athlete has unique potential that we can unlock together."
    },
    {
      id: 3,
      name: "Rehab Hamdy",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152308_wstwqm.png",
      title: "Women's Triathlon Specialist & Endurance Coach",
      description: "Dedicated to empowering women in triathlon, I create supportive training environments that build confidence and strength. My programs focus on building endurance while maintaining balance in life.",
      asCoach: [
        "Women's triathlon specialist",
        "Beginner-friendly programs",
        "Endurance building expert"
      ],
      asAthlete: [
        "Ironman 70.3 finisher",
        "Women's age group champion",
        "Endurance event specialist"
      ],
      achievements: [
        "6+ years coaching experience",
        "Women's sports advocate",
        "Community building expert"
      ],
      expertise: [
        "Women's specific training",
        "Endurance development",
        "Work-life balance"
      ],
      coachingExperience: [
        "Women's program director",
        "Community coach",
        "Beginner mentor"
      ],
      experience: [
        "10+ years in triathlon",
        "Women's sports background",
        "Community leadership"
      ],
      certifications: [
        "Triathlon coaching certification",
        "Women's fitness specialist",
        "Community coaching certified"
      ],
      philosophy: "I believe in creating inclusive, supportive environments where women can discover their strength and achieve their triathlon goals while maintaining balance in all aspects of life."
    },
    {
      id: 4,
              name: "Saif Al-Islam",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756814471/Screenshot_2025-09-02_150057_ldlbwj.png",
      title: "Youth Development & Technical Skills Coach",
      description: "Passionate about developing the next generation of triathletes, I focus on building strong technical foundations and fostering a love for the sport. My programs emphasize skill development and gradual progression.",
      asCoach: [
        "Youth development specialist",
        "Technical skills coach",
        "Junior program director"
      ],
      asAthlete: [
        "Former junior champion",
        "Technical skills expert",
        "Multi-sport athlete"
      ],
      achievements: [
        "5+ years coaching experience",
        "Youth sports specialist",
        "Technical training expert"
      ],
      expertise: [
        "Youth development",
        "Technical skills",
        "Progressive training"
      ],
      coachingExperience: [
        "Junior program coach",
        "Technical skills instructor",
        "Youth mentor"
      ],
      experience: [
        "8+ years in triathlon",
        "Youth sports background",
        "Technical training focus"
      ],
      certifications: [
        "Youth coaching certification",
        "Technical skills instructor",
        "Child safety certified"
      ],
      philosophy: "I focus on building strong foundations through fun, engaging training that develops both physical skills and a lifelong love for triathlon. Every young athlete deserves to discover their potential."
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
    <div className="main-content">
      <section className="hero coaches-hero">
        <div className="hero-background">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756975044/Screenshot_2025-09-04_113709_yp8tkj.png" 
            alt="Podium Racing ME 2025 Team" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Our Coaches</h1>
            <p className="hero-subtitle">
              Meet our world-class coaching team dedicated to your triathlon success
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
                      className={`coach-image ${coach.name === 'Rehab Hamdy' ? 'offset-down no-white' : coach.name === 'Saif Al-Islam' ? 'offset-saif no-white' : ''}`}
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
          <h2 className="section-title">Coaching Programs</h2>
          <div className="grid grid-3">
            <div className={`program-card ${animatedCards ? 'animate' : ''}`}>
              <h3 className="program-title">Beginner Program</h3>
              <p className="program-description">
                Perfect for those new to racing. Learn fundamentals, safety protocols, 
                and basic racing techniques.
              </p>
              <ul className="program-features">
                <li><FaBicycle className="bike-icon" />Safety fundamentals</li>
                <li><FaBicycle className="bike-icon" />Basic racing techniques</li>
                <li><FaBicycle className="bike-icon" />Equipment familiarization</li>
                <li><FaBicycle className="bike-icon" />Track etiquette</li>
              </ul>
            </div>

            <div className={`program-card ${animatedCards ? 'animate' : ''}`}>
              <h3 className="program-title">Intermediate Program</h3>
              <p className="program-description">
                For experienced racers looking to improve skills and performance 
                on the track.
              </p>
              <ul className="program-features">
                <li><FaBicycle className="bike-icon" />Advanced techniques</li>
                <li><FaBicycle className="bike-icon" />Performance optimization</li>
                <li><FaBicycle className="bike-icon" />Strategy development</li>
                <li><FaBicycle className="bike-icon" />Competition preparation</li>
              </ul>
            </div>

            <div className={`program-card ${animatedCards ? 'animate' : ''}`}>
              <h3 className="program-title">Elite Program</h3>
              <p className="program-description">
                Intensive training for competitive racers aiming for professional 
                racing careers.
              </p>
              <ul className="program-features">
                <li><FaBicycle className="bike-icon" />Professional techniques</li>
                <li><FaBicycle className="bike-icon" />Mental conditioning</li>
                <li><FaBicycle className="bike-icon" />Advanced strategy</li>
                <li><FaBicycle className="bike-icon" />Career development</li>
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
                    className={`coach-modal-image ${selectedCoach.name === 'Rehab Hamdy' ? 'no-white offset-down' : selectedCoach.name === 'Saif Al-Islam' ? 'no-white offset-saif' : ''}`}
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
                    <h4>As a Coach:</h4>
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
                    <h4>As an Athlete:</h4>
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
                    <h4>Achievements:</h4>
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
                    <h4>Expertise:</h4>
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
                    <h4>Coaching Experience:</h4>
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
                    <h4>Experience:</h4>
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
                    <h4>Certifications:</h4>
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
