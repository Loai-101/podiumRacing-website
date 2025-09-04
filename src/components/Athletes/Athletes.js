import React, { useState } from 'react';
import './Athletes.css';
import { FaBicycle } from 'react-icons/fa';

function Athletes() {
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Athlete data with all details
  const athletes = [
    {
      id: 1,
      name: "SEIFELDEEN ISMAIL",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756808541/192A0268_tmwraw.jpg",
      modalImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756809010/IMG_2975_g7f4x2.jpg",
      category: "Professional Triathlete",
      achievements: [
        "2x70.3 AG podiums",
        "2022 Arab Champion",
        "2024 Asia Elite Cup Champion"
      ],
      personalBests: [
        "Ironman 70.3: Multiple podiums",
        "Olympic Distance: Regional champion",
        "Sprint Distance: National record holder"
      ],
      experience: [
        "10+ years in triathlon",
        "International competition experience",
        "Professional racing background"
      ],
      specialties: [
        "Ironman 70.3 racing",
        "Olympic distance optimization",
        "High-intensity training"
      ],
      philosophy: "I believe in pushing boundaries and showing that Middle Eastern athletes can compete at the highest levels internationally. My approach combines strategic training with mental toughness."
    },
    {
      id: 2,
      name: "MOHAMED HAMADA",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756809241/9357_20230604_095901_287630864_original_pre7pd.jpg",
      modalImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756809350/9357_20230604_154030_287786663_original_yi6wht.jpg",
      category: "Age-Group Triathlete",
      achievements: [
        "Multiple Ironman finisher",
        "Age group podium finisher",
        "Regional champion"
      ],
      personalBests: [
        "Ironman 140.6: 9h:11m",
        "Ironman 70.3: 4h:12m",
        "Olympic: 2h:04m"
      ],
      experience: [
        "8+ years in triathlon",
        "Multiple Ironman finishes",
        "Consistent age group performance"
      ],
      specialties: [
        "Long distance racing",
        "Endurance building",
        "Age group optimization"
      ],
      philosophy: "My focus is on consistent improvement and enjoying the journey. I believe in building endurance gradually and maintaining balance between training and life."
    },
    {
      id: 3,
      name: "MALIK ALI",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756976841/WhatsApp_Image_2025-09-03_at_10.26.37_f0852a98_h3fz7z.jpg",
      modalImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756976998/WhatsApp_Image_2025-09-03_at_10.26.37_edfc61a6_gwjypd.jpg",
      category: "Age-Group Triathlete",
      achievements: [
        "Multiple race finisher",
        "Consistent performer",
        "Community leader"
      ],
      personalBests: [
        "Ironman 70.3: Multiple finishes",
        "Multisport events: 40+ races",
        "Marathons: 50+ finishes"
      ],
      experience: [
        "12+ years in endurance sports",
        "Multisport racing specialist",
        "Community event organizer"
      ],
      specialties: [
        "Multisport racing",
        "Community building",
        "Event organization"
      ],
      philosophy: "I believe in the power of community and consistent participation. My approach focuses on building lasting relationships through shared athletic experiences."
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
    <div className="main-content">
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
          <h1 className="hero-title">Our Athletes</h1>
          <p className="hero-subtitle">
            Meet the talented triathletes who represent Podium Racing Middle East excellence
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
                      className="athlete-image"
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
              At Podium Racing Middle East (PRME), we welcome both Age Group and Elite athletes to 
              be part of our growing team. As a member, you will officially represent PRME, gaining 
              access to expert coaching, exclusive opportunities, and a driven community that fosters 
              excellence.
            </p>
            <p className="intro-text">
              Our mission is to build a strong team of high-performing athletes, continuously pushing 
              limits and reaching new milestones. Be part of something bigger—elevate your athletic 
              journey with PRME!
            </p>
          </div>
          <p className="intro-tagline">Raising the bar. Shaping champions. Inspiring the future!</p>
        </div>
      </section>

      <section className="section join-team-section">
        <div className="container">
          <div className="join-content">
            <h2 className="card-title">Join Our Team</h2>
            <p className="join-text">
              Ready to elevate your triathlon journey? Join Podium Racing Middle East and become part 
              of a community dedicated to excellence, performance, and continuous improvement.
            </p>
            <div className="join-benefits">
              <h3>Benefits of Joining PRME:</h3>
              <ul>
                <li>Access to world-class coaching</li>
                <li>Exclusive training opportunities</li>
                <li>Community of driven athletes</li>
                <li>Professional development support</li>
              </ul>
            </div>
            <div style={{textAlign: 'center'}}>
              <button className="join-button">Apply to Join PRME</button>
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
                    className="athlete-modal-image"
                  />
                ) : selectedAthlete.image ? (
                  <img 
                    src={selectedAthlete.image} 
                    alt={selectedAthlete.name}
                    className="athlete-modal-image"
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
                    <h4>Key Achievements:</h4>
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
                    <h4>Personal Bests:</h4>
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
                    <h4>Experience:</h4>
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
                    <h4>Specialties:</h4>
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
                    <h4>My Philosophy:</h4>
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
