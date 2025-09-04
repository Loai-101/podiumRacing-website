import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="logo-container">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1753552171/ChatGPT_Image_Jul_26_2025_08_41_01_PM_svtphh.png" 
            alt="Podium Racing Logo" 
            className="loading-logo"
          />
        </div>
        <div className="loading-text">
          <span className="podium-racing">PODIUM RACING</span>
          <span className="middle-east">MIDDLE EAST</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
