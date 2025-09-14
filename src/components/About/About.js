import React from 'react';
import './About.css';

function About() {
  return (
    <div className="main-content">
      <section className="hero about-hero">
        <div className="hero-background">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756978986/Screenshot_2025-09-04_124254_ln9v82.png" 
            alt="About Podium Racing Middle East" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">About PRME</h1>
            <p className="hero-subtitle">
              Connecting athletes with expert coaches across the Middle East
            </p>
          </div>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-text-section">
            <h2 className="card-title">Our Story</h2>
            <p className="card-content">
              Podium Racing Team is an international professional triathlon team, featuring seven 
              Olympians including Leo Bergere (who took bronze in Paris), incredible young talent and raw 
              power to fire them to the Teams title.
            </p>
            <p className="card-content">
              Podium Racing Founder, John Anthony, said: "This international roster is composed of the best 
              athletes in our sport while also giving next generation athletes like Fanni Szalai and John Reed 
              the opportunity to compete at the highest level. With Tim Don's leadership, we're bullish about 
              this season."
            </p>
            <p className="card-content">
              From that, it came the idea to expand this work in the middle east but in a different way 
              fulfilling the need of the middle east sport industry.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">7</h3>
              <p className="stat-label">Olympians</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">International</h3>
              <p className="stat-label">Professional Team</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">Middle East</h3>
              <p className="stat-label">Expansion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section platform-section">
        <div className="container">
          <div className="platform-content">
            <h2 className="card-title">Our Platform</h2>
            <p className="card-content">
              Podium Racing Middle East is an online coaching platform that connects athletes to expert 
              coaches in the sports of <strong>SWIM, BIKE, RUN and Triathlon</strong>.
            </p>
            <p className="card-content">
              As it's one of the main challenges that facing the athletes in the middle east, 
              supporting the athletes by this idea is the main part of our mission.
            </p>
            <p className="card-content">
              Inspired by years of experience in the sport of triathlon of our team in Podium Racing Middle 
              East, we will have the most expert sports coaches that you can choose and be connected with to let 
              them guide you in your Sports journey.
            </p>
            <p className="card-content">
              As an age grouper or elite or even professional, we will keep expanding in the ME till we reach 
              a high level of support to all the athletes we can reach!!!
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="card-title">Contact Info</h2>
            <div className="contact-details">
              <p className="contact-item">
                <strong>Email:</strong> 
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@podium-racing.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-email"
                >
                  info@podium-racing.me
                </a>
              </p>
              <p className="contact-item">
                <strong>Address:</strong> Road 4574, Block 745, Building 2486, Sanad 745
              </p>
              <p className="contact-item">
                <strong>Phone:</strong> 1367 6757
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
