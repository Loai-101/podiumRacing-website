import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // Add animation to cards within the section
          const cards = entry.target.querySelectorAll('.card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.animationDelay = `${index * 0.2}s`;
              card.classList.add('animate');
            }, index * 200);
          });
        }
      });
    }, observerOptions);

    // Observe all sections that need animation
    const sections = document.querySelectorAll('.vision-section, .mission-section, .services-section, .quote-section, .join-section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="main-content">
      <section className="hero home-hero">
        <div className="hero-background-video">
                      <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="hero-background-video-element"
            >
              <source src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1756031097/WhatsApp_Video_2025-08-24_at_13.24.28_e40ad13c_zltmdf.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="hero-title">
            PODIUM RACING <span className="middle-east-text">MIDDLE EAST</span>
          </h1>
          <p className="hero-subtitle">
            <span className="tagline-text">Join Our Tribe - We'll Take You from Try to Triathlete</span>
          </p>
          <div className="hero-buttons">
            <a href="#join" className="btn">Join Our Tribe</a>
            <a href="/coaches" className="btn btn-secondary">Meet Our Coaches</a>
          </div>
        </div>
      </section>

      <div className="moving-bar">
        <div className="moving-content">
          <span>Push Your Limits – Own Every Mile</span>
          <span>Train Hard – Shine Strong</span>
          <span>One Step Today – A Giant Leap Tomorrow</span>
          <span>From Sweat to Success – We've Got You</span>
          <span>Dream Big – Race Bigger</span>
          <span>Stronger Every Session – Closer Every Goal</span>
          <span>Rise. Ride. Run. Repeat.</span>
          <span>Turn Effort into Endurance</span>
          <span>Your Journey – Our Mission</span>
          <span>Built for Athletes – Driven by Passion</span>
          <span>Push Your Limits – Own Every Mile</span>
          <span>Train Hard – Shine Strong</span>
          <span>One Step Today – A Giant Leap Tomorrow</span>
          <span>From Sweat to Success – We've Got You</span>
          <span>Dream Big – Race Bigger</span>
          <span>Stronger Every Session – Closer Every Goal</span>
          <span>Rise. Ride. Run. Repeat.</span>
          <span>Turn Effort into Endurance</span>
          <span>Your Journey – Our Mission</span>
          <span>Built for Athletes – Driven by Passion</span>
        </div>
      </div>

      <section className="section vision-section">
        <div className="container">
          <h2 className="section-title">VISION</h2>
          <div className="card">
            <p className="card-content">
              At Podium Racing Middle East, our vision is to cultivate a team of high-performance athletes on 
              the level of - junior, amateur, elite and professional throughout the region. By integrating world
              class training methodologies from Podium Racing US, we strive to elevate the competitive 
              standard in the Middle East, preparing athletes to excel on the international stage.
            </p>
            <p className="card-content">
              Our commitment extends beyond performance—we aim to foster a culture of excellence, 
              sportsmanship, and knowledge-sharing, ensuring that every athlete not only reaches their peak 
              potential but also contributes to the growth and ethics of sports in the region.
            </p>
            <p className="card-content">
              <strong>Raising the bar. Shaping champions. Inspiring the future!</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="card">
            <p className="card-content">
              At Podium Racing Middle East, our mission is to bridge the gap between athletes and top-tier 
              coaches across the Middle East. Whether you're seeking guidance in multi-sport disciplines or 
              specialized training in swimming, cycling, or running, we connect you with the most qualified 
              coaches to elevate your performance.
            </p>
            <p className="card-content">
              By partnering with expert coaches who follow the highest standards in sports science and training 
              methodologies, we ensure that every athlete receives the tailored support they need to reach peak 
              performance.
            </p>
            <p className="card-content">
              Our goal is simple: to empower you to become a high-performance athlete!
            </p>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">Swim</h3>
              <p className="card-content">Master the art of swimming with expert coaching</p>
            </div>
            <div className="card">
              <h3 className="card-title">Bike</h3>
              <p className="card-content">Develop cycling skills and endurance</p>
            </div>
            <div className="card">
              <h3 className="card-title">Run</h3>
              <p className="card-content">Improve running technique and performance</p>
            </div>
            <div className="card">
              <h3 className="card-title">Triathlon</h3>
              <p className="card-content">Complete triathlon training and racing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <div className="container">
          <div className="card">
            <blockquote className="inspiration-quote">
              "Triathlon teaches us to challenge ourselves. It teaches us to push beyond where we thought we could go. 
              It helps us to find out what we are made of. This is what we do. This is what it's all about."
            </blockquote>
            <p className="quote-author">- Podium Racing Middle East</p>
          </div>
        </div>
      </section>

      <section className="section join-section" id="join">
        <div className="container">
          <h2 className="section-title">Join Our Tribe</h2>
          <div className="card">
            <p className="card-content">
              Ready to start your triathlon journey? Join Podium Racing Middle East and become part of a 
              community dedicated to excellence, performance, and continuous improvement.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
