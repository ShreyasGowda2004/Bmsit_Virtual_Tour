import React, { useState, useEffect, useRef } from 'react';
// Import A-Frame once at the component level
import 'aframe';
// Import A-Frame React components after A-Frame is loaded
import { Scene, Entity } from 'aframe-react';

// Register components
if (typeof AFRAME !== 'undefined') {
  // Simple mouse drag component for desktop
  AFRAME.registerComponent('simple-mouse-drag-control', {
    init: function () {
      this.ifMouseDown = false;
      this.x_cord = 0;
      this.y_cord = 0;
      this.imageContainer = this.el;
      this.lastInteractionTime = Date.now();
      this.isAutoRotating = false;
      this.autoRotationSpeed = 0.1;

      this.onMouseDown = this.onMouseDown.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
      this.checkInactivity = this.checkInactivity.bind(this);
      
      document.addEventListener('mousedown', this.onMouseDown);
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
      
      // Start inactivity timer
      this.checkInactivityInterval = setInterval(this.checkInactivity, 1000);
    },
    
    onMouseDown: function (event) {
      this.ifMouseDown = true;
      this.x_cord = event.clientX;
      this.y_cord = event.clientY;
      this.updateLastInteractionTime();
    },
    
    onMouseMove: function (event) {
      this.updateLastInteractionTime();
      
      if (this.isAutoRotating) {
        this.stopAutoRotation();
      }
      
      if (this.ifMouseDown) {
        const tempX = event.clientX - this.x_cord;
        
        if (this.imageContainer) {
          const rotation = this.imageContainer.getAttribute('rotation');
          this.imageContainer.setAttribute('rotation', {
            x: rotation.x,
            y: rotation.y + (tempX * 0.2),
            z: rotation.z
          });
        }
        
        this.x_cord = event.clientX;
        this.y_cord = event.clientY;
      }
    },
    
    onMouseUp: function () {
      this.ifMouseDown = false;
      this.updateLastInteractionTime();
    },

    updateLastInteractionTime: function() {
      this.lastInteractionTime = Date.now();
    },
    
    checkInactivity: function() {
      const currentTime = Date.now();
      const inactiveTime = currentTime - this.lastInteractionTime;
      
      // If inactive for 5 seconds and not already auto-rotating
      if (inactiveTime > 5000 && !this.isAutoRotating) {
        this.startAutoRotation();
      }
    },
    
    startAutoRotation: function() {
      this.isAutoRotating = true;
      this.autoRotateInterval = setInterval(() => {
        if (this.imageContainer) {
          const rotation = this.imageContainer.getAttribute('rotation');
          this.imageContainer.setAttribute('rotation', {
            x: rotation.x,
            y: rotation.y + this.autoRotationSpeed,
            z: rotation.z
          });
        }
      }, 16); // 60fps
    },
    
    stopAutoRotation: function() {
      this.isAutoRotating = false;
      if (this.autoRotateInterval) {
        clearInterval(this.autoRotateInterval);
      }
    },
    
    remove: function() {
      // Clean up when component is removed
      if (this.autoRotateInterval) {
        clearInterval(this.autoRotateInterval);
      }
      if (this.checkInactivityInterval) {
        clearInterval(this.checkInactivityInterval);
      }
      document.removeEventListener('mousedown', this.onMouseDown);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  });
}

// Update the loading animation styles with more professional effects
const injectVRLoadingCSS = () => {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    @keyframes spin3D {
      0% {
        transform: rotateY(0deg) rotateX(0deg);
      }
      50% {
        transform: rotateY(180deg) rotateX(30deg);
      }
      100% {
        transform: rotateY(360deg) rotateX(0deg);
      }
    }
    
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-15px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
      }
      70% {
        transform: scale(1.05);
        box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.2);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      }
    }
    
    @keyframes glowText {
      0% {
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      }
      50% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(0, 153, 255, 0.6);
      }
      100% {
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      }
    }
    
    @keyframes particleFloat {
      0% {
        transform: translateY(0) translateX(0) scale(1);
        opacity: 0;
      }
      20% {
        opacity: 0.8;
        transform: translateY(-20px) translateX(var(--x-offset)) scale(1.2);
      }
      100% {
        transform: translateY(-120px) translateX(calc(var(--x-offset) * 3)) scale(0.5);
        opacity: 0;
      }
    }
    
    @keyframes progressGlow {
      0% {
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      }
      50% {
        box-shadow: 0 0 15px rgba(0, 123, 255, 0.8), 0 0 20px rgba(0, 153, 255, 0.6);
      }
      100% {
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      }
    }
    
    @keyframes gradientFlow {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    
    .loading-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #000000, #121212, #000000);
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1200px;
      overflow: hidden;
    }
    
    .vr-loading-scene {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      perspective: 1000px;
      position: relative;
      z-index: 2;
    }
    
    .vr-panorama-loader {
      width: 200px;
      height: 120px;
      position: relative;
      transform-style: preserve-3d;
      animation: spin3D 12s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
      margin-bottom: 20px;
    }
    
    .vr-panorama-face {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      box-shadow: 0 0 25px rgba(0, 153, 255, 0.3);
      background-size: cover;
      background-position: center;
      opacity: 0.85;
      backdrop-filter: blur(2px);
    }
    
    .vr-panorama-face:nth-child(1) {
      transform: rotateY(0deg) translateZ(60px);
      background: linear-gradient(45deg, #0078ff, #00c6ff);
    }
    
    .vr-panorama-face:nth-child(2) {
      transform: rotateY(90deg) translateZ(60px);
      background: linear-gradient(45deg, #e31837, #ff3352);
    }
    
    .vr-panorama-face:nth-child(3) {
      transform: rotateY(180deg) translateZ(60px);
      background: linear-gradient(45deg, #0078ff, #00c6ff);
    }
    
    .vr-panorama-face:nth-child(4) {
      transform: rotateY(270deg) translateZ(60px);
      background: linear-gradient(45deg, #e31837, #ff3352);
    }
    
    .vr-panorama-face:nth-child(5) {
      transform: rotateX(90deg) translateZ(60px);
      background: linear-gradient(45deg, #2b2b2b, #3f3f3f);
    }
    
    .vr-panorama-face:nth-child(6) {
      transform: rotateX(-90deg) translateZ(60px);
      background: linear-gradient(45deg, #2b2b2b, #3f3f3f);
    }
    
    .vr-loading-text {
      font-size: 28px;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      letter-spacing: 4px;
      text-align: center;
      animation: glowText 2s infinite;
      margin-bottom: 0;
    }
    
    .vr-loading-subtitle {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 8px;
      margin-bottom: 30px;
    }
    
    .vr-progress-container {
      width: 300px;
      margin-top: 10px;
      position: relative;
    }
    
    .vr-progress-bar {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      animation: progressGlow 2s infinite;
    }
    
    .vr-progress-fill {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #0078ff, #00c6ff, #0078ff);
      background-size: 200% auto;
      animation: gradientFlow 2s ease infinite;
      border-radius: 6px;
    }
    
    .vr-progress-text {
      position: absolute;
      right: 0;
      top: -25px;
      color: white;
      font-size: 14px;
      font-weight: bold;
    }
    
    .vr-loading-tips {
      margin-top: 40px;
      max-width: 600px;
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
      background: rgba(0, 0, 0, 0.3);
      padding: 15px 20px;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
    }
    
    .vr-loading-particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .vr-particle {
      position: absolute;
      bottom: 0;
      background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
      border-radius: 50%;
      animation: particleFloat 10s ease-out infinite;
    }
    
    .vr-headset-icon {
      width: 60px;
      height: 60px;
      opacity: 0.7;
      margin-top: 30px;
      animation: float 3s ease-in-out infinite;
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
    }
  `;
  document.head.appendChild(styleElement);
};

// Simplified location data
const createSimpleLocationData = () => {
  const data = {};
  for (let i = 1; i <= 16; i++) {
    data[i] = {
      name: `Location ${i}`,
      description: `This is location ${i} of the BMSIT campus tour.`
    };
  }
  return data;
};

const locationData = createSimpleLocationData();

// Custom Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("VR scene error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Something went wrong with the VR scene.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <button onClick={() => this.props.onBackToHome()}>Go Back Home</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export const VRScene = ({ onBackToHome }) => {
  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingTip, setLoadingTip] = useState('');
  const [error, setError] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showNavigationPanel, setShowNavigationPanel] = useState(false);
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [currentInfo, setCurrentInfo] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Reference to the iframe
  const iframeRef = useRef(null);

  // External panorama URL from Panoraven
  const panoramaUrl = "https://panoraven.com/en/embed/jYfYXbfXoD";

  // Simple fullscreen effect
  useEffect(() => {
    // Add viewport meta tag to ensure proper mobile display
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.getElementsByTagName('head')[0].appendChild(meta);
    
    // Listen for fullscreen change
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Function to handle fullscreen changes
  const handleFullscreenChange = () => {
    setIsFullscreen(
      document.fullscreenElement || 
      document.webkitFullscreenElement
    );
  };

  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    try {
      if (!isFullscreen) {
        // Enter fullscreen
        const container = document.querySelector('.vr-container');
        if (container) {
          if (container.requestFullscreen) {
            container.requestFullscreen();
          } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
          }
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.error("Error toggling fullscreen:", err);
    }
  };

  // Load the panorama
  useEffect(() => {
    // Inject the CSS for loading animation
    injectVRLoadingCSS();
    
    // Loading tips for VR experience
    const tips = [
      "Drag your mouse to look around in 360 degrees",
      "For best experience, view in fullscreen mode",
      "Move closer to objects for more detail",
      "The tour works on mobile devices too - just tilt and move your phone",
      "Loading high resolution panoramas for immersive experience..."
    ];
    
    setLoadingTip(tips[Math.floor(Math.random() * tips.length)]);
    
    try {
      setIsLoading(true);
      
      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          const newProgress = prev + Math.random() * 10;
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return newProgress;
        });
      }, 200);
      
      // Simulate loading completion
      setTimeout(() => {
        clearInterval(progressInterval);
        setLoadingProgress(100);
        setIsLoading(false);
        setError(null);
      }, 3500);
      
      return () => {
        clearInterval(progressInterval);
      };
    } catch (err) {
      console.error("Panorama loading error:", err);
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  const toggleNavigationPanel = () => {
    setShowNavigationPanel(!showNavigationPanel);
    if (showInfoPanel) setShowInfoPanel(false);
  };

  const showInfo = (info) => {
    setCurrentInfo(info);
    setShowInfoPanel(true);
    if (showNavigationPanel) setShowNavigationPanel(false);
  };

  if (isLoading) {
    // Generate particles for the loading screen
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 10 + 5;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const xOffset = (Math.random() - 0.5) * 100;
      
      particles.push(
        <div 
          key={i}
          className="vr-particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            animationDuration: `${10 + Math.random() * 10}s`,
            animationDelay: `${delay}s`,
            '--x-offset': `${xOffset}px`
          }}
        />
      );
    }
    
    return (
      <div className="loading-container">
        <div className="vr-loading-particles">
          {particles}
        </div>
        
        <div className="vr-loading-scene">
          <div className="vr-panorama-loader">
            <div className="vr-panorama-face"></div>
            <div className="vr-panorama-face"></div>
            <div className="vr-panorama-face"></div>
            <div className="vr-panorama-face"></div>
            <div className="vr-panorama-face"></div>
            <div className="vr-panorama-face"></div>
          </div>
          
          <div className="vr-loading-text">VR Experience</div>
          <div className="vr-loading-subtitle">Preparing Immersive Tour</div>
          
          <div className="vr-progress-container">
            <div className="vr-progress-text">{Math.round(loadingProgress)}%</div>
            <div className="vr-progress-bar">
              <div 
                className="vr-progress-fill"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="vr-loading-tips">{loadingTip}</div>
          
          <svg className="vr-headset-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
            <path d="M22.5 9.5l-1.2-6.6c-.2-1-1-1.9-2-1.9H4.7c-1 0-1.8.8-2 1.9L1.5 9.5c-.3 1.8.7 3.5 2.3 4.3v3.7c0 .8.7 1.5 1.5 1.5h1.5c.8 0 1.5-.7 1.5-1.5V16h8v1.5c0 .8.7 1.5 1.5 1.5H19c.8 0 1.5-.7 1.5-1.5v-3.7c1.6-.8 2.6-2.5 2.3-4.3zM4 10.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5S4 11.3 4 10.5zM18 12c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
          </svg>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error loading VR scene</h2>
        <p>{error}</p>
        <button onClick={onBackToHome}>Go Back Home</button>
      </div>
    );
  }

  // Render using iframe for external panorama with fullscreen button
  return (
    <ErrorBoundary onBackToHome={onBackToHome}>
      <div className="vr-container" style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'relative', 
        overflow: 'hidden'
      }}>
        {/* Single iframe for panorama */}
        <iframe 
          ref={iframeRef}
          width="100%" 
          height="100%" 
          id="panorama-iframe"
          allowFullScreen={true} 
          allow="accelerometer; autoplay; camera; gyroscope; magnetometer; microphone; fullscreen" 
          style={{ 
            border: '0 none', 
            borderRadius: '8px', 
            boxShadow: '0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11)',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} 
          src={panoramaUrl}
        />
        
        {/* Control Buttons Container */}
        <div className="controls" style={{
          position: 'absolute',
          bottom: '20px',
          left: '0',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          zIndex: 1000,
          padding: '0 10px',
          flexWrap: 'wrap'
        }}>
          {/* Home Button */}
          <button 
            onClick={onBackToHome}
            style={{
              padding: '12px 20px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 'bold',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              margin: '5px',
              minWidth: '100px',
              justifyContent: 'center'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Home
          </button>
          
          {/* Fullscreen Button */}
          <button 
            onClick={toggleFullscreen}
            style={{
              padding: '12px 20px',
              backgroundColor: isFullscreen ? 'rgba(0, 153, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 'bold',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              margin: '5px',
              minWidth: '100px',
              justifyContent: 'center'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isFullscreen ? (
                // Exit fullscreen icon
                <path d="M9 9H4V4M20 4V9H15M15 20H20V15M4 15V20H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                // Enter fullscreen icon
                <path d="M4 9H9V4M15 4V9H20M20 15H15V20M9 20V15H4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
}; 