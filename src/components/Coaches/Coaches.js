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
      description: "I help triathletes of all levels reach their goals faster, stay injury-free, and enjoy the process. My coaching is built on smart training, not just hard work. My approach blends science, experience, and personalized planning—because progress should be sustainable, not exhausting.",
      asCoach: [
        "Coached athletes to qualify for Ironman 70.3 World Championships",
        "Guided a leukemia survivor to complete 4×70.3 races and a full Ironman within two years—with new personal bests in all disciplines",
        "Work with all levels, from beginners to elites (including Olympian pentathlete Malak Ismail, 2028 LA medalist hopeful)"
      ],
      asAthlete: [
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
      certifications: [
        "USA Triathlon Level I & Long Course Certified",
        "TrainingPeaks Level 1",
        "Basic Life Support & First Aid"
      ],
      philosophy: "Data-informed, not data-dependent – Use data wisely but trust your feel. Health first – No shortcuts that risk long-term well-being. Your goal, your plan – No generic programs. Let's make your next finish line your best one."
    },
    {
      id: 2,
      name: "Taher Hesham",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152258_qepspb.png",
      title: "Triathlon Coach",
      description: "Taher Hesham is a highly skilled triathlon and fitness coach with extensive experience training children, adults, and professional athletes. Since 2020, he has coached at The Trimachine and Fitzone Egypt, guiding athletes to achieve their performance goals through structured training programs, injury prevention strategies, and race preparation.",
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
      philosophy: "Combining evidence-based coaching with a passion for athlete development, I play a key role in building a strong endurance training culture, helping athletes of all levels unlock their full potential."
    },
    {
      id: 3,
      name: "Rehab Hamdy",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756988645/Screenshot_2025-09-04_152308_wstwqm.png",
      title: "Triathlon Coach",
      description: "Rehab Hamdy is a dedicated triathlon coach and former elite triathlete with extensive experience in both competitive racing and athlete development. Her journey in endurance sports began as a national-level swimmer, later transitioning into triathlon, where she made history as the first Arab woman to qualify for the Youth Olympic Games (2014). She went on to earn multiple podium finishes at the African Games, WTS Grand Final, and African Triathlon Championships.",
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
      philosophy: "With expertise in individualized training plans, strategic performance profiling, and athlete race preparation, Rehab is committed to helping athletes reach their full potential. Her passion, leadership, and first-hand competitive experience make her an integral part of the academy's coaching team, inspiring the next generation of endurance athletes."
    },
    {
      id: 4,
      name: "Saif Al-Islam",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756814471/Screenshot_2025-09-02_150057_ldlbwj.png",
      title: "Triathlon Coach",
      description: "Saif Al-Islam Al-Hammami is a triathlon coach with strong academic and professional qualifications in sports science. He holds an International Triathlon Coaching Certificate from South Korea, in addition to a specialized certification in athletics, physical preparation, and fitness coach.",
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
      philosophy: "With strong academic and professional qualifications in sports science, Saif brings extensive experience in coaching and officiating to help athletes achieve their goals through evidence-based training methods and international standards."
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
                <li><FaBicycle className="bike-icon" />Tips for a better technique</li>
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
