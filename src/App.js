import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Coaches from './components/Coaches/Coaches';
import Athletes from './components/Athletes/Athletes';
import About from './components/About/About';
import Subscription from './components/Subscription/Subscription';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import { LanguageProvider } from './contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Analytics } from '@vercel/analytics/react';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coaches" element={<Coaches />} />
              <Route path="/athletes" element={<Athletes />} />
              <Route path="/about" element={<About />} />
              <Route path="/subscription" element={<Subscription />} />
            </Routes>
          </main>
          
          {/* Social Media Sidebar */}
          <div className="social-media-sidebar">
            <a href="https://www.instagram.com/podium_racing_me/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.facebook.com/PodiumRacingME" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@podium_racing_me" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaTiktok className="social-icon" />
            </a>
            <a href="https://wa.me/97313676757?text=Hello%20Podium%20Racing%20ME" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
          
          <Footer />
          <Analytics />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
