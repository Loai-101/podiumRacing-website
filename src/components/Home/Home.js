import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations/translations';
import './Home.css';

function Home() {
  const { language, isRTL } = useLanguage();
  const heroVideoRef = useRef(null);
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

  // Ensure hero background video resumes on return to tab/app (mobile Safari/Chrome)
  useEffect(() => {
    const videoEl = heroVideoRef.current;
    if (!videoEl) return;

    const tryPlay = () => {
      if (videoEl.paused) {
        const p = videoEl.play();
        if (p && typeof p.then === 'function') {
          p.catch(() => {});
        }
      }
    };

    // Initial attempt
    tryPlay();

    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    const onPageShow = () => tryPlay();
    const onFocus = () => tryPlay();
    const onSuspend = () => tryPlay();
    const onPause = () => setTimeout(tryPlay, 300);

    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pageshow', onPageShow);
    window.addEventListener('focus', onFocus);
    videoEl.addEventListener('suspend', onSuspend);
    videoEl.addEventListener('pause', onPause);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener('focus', onFocus);
      if (videoEl) {
        videoEl.removeEventListener('suspend', onSuspend);
        videoEl.removeEventListener('pause', onPause);
      }
    };
  }, []);

  return (
    <div className={`main-content ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="hero home-hero">
        <div className="hero-background-video">
                      <video 
              autoPlay 
              muted 
              loop 
              playsInline
              preload="auto"
              ref={heroVideoRef}
              className="hero-background-video-element"
            >
              <source src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1756031097/WhatsApp_Video_2025-08-24_at_13.24.28_e40ad13c_zltmdf.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="hero-title">
            {getTranslation('home.heroTitle', language)}
          </h1>
          <p className="hero-subtitle">
            <span className="tagline-text">{getTranslation('home.heroSubtitle', language)}</span>
          </p>
          <div className="hero-buttons">
            <a 
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAY5ws_hUMVVMNjEySDJTMFlYU0ZBOU9BNTIxUEc2Sy4u&embed=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              {getTranslation('home.joinOurTribe', language)}
            </a>
            <a href="/coaches" className="btn btn-secondary">{getTranslation('home.meetOurCoaches', language)}</a>
          </div>
        </div>
      </section>

      <div className="moving-bar">
        <div className="moving-content">
          {getTranslation('home.movingBar', language).map((text, index) => (
            <span key={index}>{text}</span>
          ))}
          {getTranslation('home.movingBar', language).map((text, index) => (
            <span key={`repeat-1-${index}`}>{text}</span>
          ))}
          {getTranslation('home.movingBar', language).map((text, index) => (
            <span key={`repeat-2-${index}`}>{text}</span>
          ))}
          {getTranslation('home.movingBar', language).map((text, index) => (
            <span key={`repeat-3-${index}`}>{text}</span>
          ))}
        </div>
      </div>

      <section className="section vision-section">
        <div className="container">
          <h2 className="section-title">{getTranslation('home.vision', language)}</h2>
          <div className="card">
            <p className="card-content">
              {getTranslation('home.visionContent1', language)}
            </p>
            <p className="card-content">
              {getTranslation('home.visionContent2', language)}
            </p>
            <p className="card-content">
              <strong>{getTranslation('home.visionContent3', language)}</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <h2 className="section-title">{getTranslation('home.mission', language)}</h2>
          <div className="card">
            <p className="card-content">
              {getTranslation('home.missionContent1', language)}
            </p>
            <p className="card-content">
              {getTranslation('home.missionContent2', language)}
            </p>
            <p className="card-content">
              {getTranslation('home.missionContent3', language)}
            </p>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">{getTranslation('home.whatWeOffer', language)}</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">{getTranslation('home.swim', language)}</h3>
              <p className="card-content">{getTranslation('home.swimDesc', language)}</p>
            </div>
            <div className="card">
              <h3 className="card-title">{getTranslation('home.bike', language)}</h3>
              <p className="card-content">{getTranslation('home.bikeDesc', language)}</p>
            </div>
            <div className="card">
              <h3 className="card-title">{getTranslation('home.run', language)}</h3>
              <p className="card-content">{getTranslation('home.runDesc', language)}</p>
            </div>
            <div className="card">
              <h3 className="card-title">{getTranslation('home.triathlon', language)}</h3>
              <p className="card-content">{getTranslation('home.triathlonDesc', language)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <div className="container">
          <div className="card">
            <blockquote className="inspiration-quote">
              "{getTranslation('home.quote', language)}"
            </blockquote>
            <p className="quote-author">- {getTranslation('home.quoteAuthor', language)}</p>
          </div>
        </div>
      </section>

      <section className="section join-section" id="join">
        <div className="container">
          <h2 className="section-title">{getTranslation('home.joinOurTribeTitle', language)}</h2>
          <div className="card">
            <p className="card-content">
              {getTranslation('home.joinContent', language)}
            </p>
            <div className="join-actions">
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAY5ws_hUMVVMNjEySDJTMFlYU0ZBOU9BNTIxUEc2Sy4u&embed=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-apply"
              >
                {getTranslation('home.applyToJoin', language)}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
