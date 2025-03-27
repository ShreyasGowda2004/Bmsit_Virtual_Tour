import React, { useState, useEffect, useRef } from 'react';

// Create a style element to hold our CSS
const injectCSS = () => {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      overflow: hidden;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes float {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      25% {
        transform: translateY(-15px) rotate(2deg);
      }
      50% {
        transform: translateY(0px) rotate(0deg);
      }
      75% {
        transform: translateY(15px) rotate(-2deg);
      }
      100% {
        transform: translateY(0px) rotate(0deg);
      }
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
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
    
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    @keyframes floatParticle {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      50% {
        opacity: 0.8;
      }
      100% {
        transform: translateY(-100vh) translateX(var(--translate-x));
        opacity: 0;
      }
    }
    
    @keyframes gradientBackground {
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
    
    @keyframes glow {
      0% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      }
      50% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(227, 24, 55, 0.6);
      }
      100% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      }
    }
    
    .home-container {
      width: 100vw;
      height: 100vh;
      background: url('/assets/360-images/background.jpg');
      background-size: cover;
      background-position: center;
      position: relative;
      overflow: hidden;
    }
    
    .home-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
      z-index: 1;
    }
    
    .parallax-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    
    .content {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      padding: 0 20px;
      perspective: 1000px;
    }
    
    .logo-container {
      position: relative;
      width: 200px;
      height: 200px;
      margin-bottom: 2rem;
    }
    
    .logo {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;
    }
    
    .logo-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      animation: glow 3s infinite;
      z-index: -1;
    }
    
    .title-container {
      position: relative;
      perspective: 1000px;
    }
    
    .title {
      font-size: 3.5rem;
      text-align: center;
      margin-bottom: 1rem;
      animation: fadeIn 1s ease-out 0.3s backwards;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
      background: linear-gradient(90deg, #ffffff, #f0f0f0, #ffffff);
      background-size: 200% auto;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientBackground 3s ease infinite;
      transform-style: preserve-3d;
    }
    
    .subtitle {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 2rem;
      animation: fadeIn 1s ease-out 0.6s backwards;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
      max-width: 800px;
      position: relative;
      overflow: hidden;
    }
    
    .subtitle:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #ffffff, transparent);
      animation: slideInRight 2s infinite;
    }
    
    .button-container {
      position: relative;
      perspective: 1000px;
      margin: 2rem 0;
    }
    
    .start-button {
      padding: 1.2rem 3.5rem;
      font-size: 1.5rem;
      background: linear-gradient(45deg, #e31837, #ff3352);
      color: white;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: fadeIn 1s ease-out 0.9s backwards, pulse 2.5s infinite 2s;
      position: relative;
      overflow: hidden;
      z-index: 1;
      box-shadow: 0 5px 15px rgba(227, 24, 55, 0.4);
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    
    .start-button:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
      transform: rotate(45deg);
      transition: all 0.5s ease;
      opacity: 0;
      z-index: -1;
    }
    
    .start-button:hover {
      transform: scale(1.1) translateY(-5px);
      background: linear-gradient(45deg, #ff1f41, #ff4d68);
      box-shadow: 0 10px 25px rgba(227, 24, 55, 0.6);
    }
    
    .start-button:hover:before {
      opacity: 1;
      animation: rotate 3s linear infinite;
    }
    
    .explore-text {
      position: absolute;
      bottom: 2rem;
      font-size: 1.2rem;
      opacity: 0.8;
      animation: fadeIn 1s ease-out 1.2s backwards;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    }
    
    .compass {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 80px;
      height: 80px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 1s ease-out 1.5s backwards, pulse 5s infinite;
      backdrop-filter: blur(5px);
      border: 2px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }
    
    .compass:hover {
      transform: scale(1.1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
    
    .compass::after {
      content: '';
      width: 50px;
      height: 50px;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 2L8 11h8l-4-9zm0 20l4-9H8l4 9z"/></svg>');
      background-size: contain;
      animation: rotate 15s linear infinite;
    }
    
    .direction-indicator {
      padding: 1rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: absolute;
      font-weight: bold;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .direction-indicator:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }
    
    .direction-right {
      top: 50%;
      right: 2rem;
      transform: translateY(-50%);
      animation: slideInRight 0.8s ease-out 1.6s backwards;
    }
    
    .direction-left {
      top: 50%;
      left: 2rem;
      transform: translateY(-50%);
      animation: slideInLeft 0.8s ease-out 1.6s backwards;
    }
    
    .direction-bottom {
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      animation: fadeIn 0.8s ease-out 1.8s backwards;
    }
    
    .direction-top {
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
      animation: fadeIn 0.8s ease-out 1.7s backwards;
    }
    
    .loading-dots {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
    }
    
    .dot {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: 0 5px;
      border-radius: 50%;
      background-color: white;
      animation: fadeIn 0.6s infinite alternate;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
    }
    
    .dot:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    .dot:nth-child(3) {
      animation-delay: 0.4s;
    }
    
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
    
    @keyframes pulse3D {
      0% {
        transform: scale3d(1, 1, 1);
      }
      50% {
        transform: scale3d(1.1, 1.1, 1.1);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
    }
    
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 1s ease, visibility 1s ease;
      perspective: 1000px;
    }
    
    .overlay.hidden {
      opacity: 0;
      visibility: hidden;
    }

    .vr-loader-container {
      perspective: 800px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    
    .vr-loader {
      width: 120px;
      height: 120px;
      position: relative;
      transform-style: preserve-3d;
      animation: spin3D 4s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
    
    .vr-loader-cube {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid white;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(227, 24, 55, 0.3);
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
      animation: pulse3D 2s infinite ease-in-out;
      backdrop-filter: blur(5px);
    }
    
    .vr-loader-cube:nth-child(1) {
      transform: rotateX(90deg) translateZ(60px);
    }
    
    .vr-loader-cube:nth-child(2) {
      transform: rotateX(-90deg) translateZ(60px);
    }
    
    .vr-loader-cube:nth-child(3) {
      transform: rotateY(90deg) translateZ(60px);
    }
    
    .vr-loader-cube:nth-child(4) {
      transform: rotateY(-90deg) translateZ(60px);
    }
    
    .vr-loader-cube:nth-child(5) {
      transform: translateZ(60px);
    }
    
    .vr-loader-cube:nth-child(6) {
      transform: translateZ(-60px) rotateY(180deg);
    }
    
    .vr-loader-text {
      margin-top: 20px;
      font-size: 24px;
      color: white;
      text-transform: uppercase;
      letter-spacing: 3px;
      position: relative;
      animation: pulse 2s infinite;
    }
    
    .vr-loader-progress {
      width: 200px;
      height: 4px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      overflow: hidden;
      position: relative;
    }
    
    .vr-loader-progress-bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #e31837, #ff3352);
      animation: progressAnimation 2s linear forwards;
    }
    
    @keyframes progressAnimation {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }

    .explore-button {
      position: absolute;
      right: 30px;
      top: 30px;
      padding: 12px 24px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 30px;
      backdrop-filter: blur(10px);
      font-size: 18px;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: fadeIn 1s ease-out 1.7s backwards;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      font-weight: bold;
    }
    
    .explore-button:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.05) translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .info-badge {
      position: absolute;
      left: 30px;
      top: 120px;
      background: rgba(25, 118, 210, 0.8);
      color: white;
      padding: 10px 20px;
      border-radius: 20px;
      font-size: 14px;
      animation: fadeIn 1s ease-out 2s backwards;
      backdrop-filter: blur(10px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      font-weight: bold;
    }
    
    .info-badge:before {
      content: '💻';
      margin-right: 8px;
      font-size: 16px;
    }
    
    .particle {
      position: absolute;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      pointer-events: none;
      animation: floatParticle 10s linear infinite;
    }
    
    .social-links {
      position: absolute;
      bottom: 30px;
      right: 30px;
      display: flex;
      gap: 15px;
      animation: fadeIn 1s ease-out 2.1s backwards;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 50%;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .social-link:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.2);
    }
    
    .card-3d {
      position: absolute;
      width: 150px;
      height: 150px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      transform-style: preserve-3d;
      animation: float 15s infinite linear;
      border: 1px solid rgba(255, 255, 255, 0.1);
      opacity: 0.7;
    }
    
    .card-1 {
      top: 15%;
      left: 10%;
      animation-delay: 0s;
    }
    
    .card-2 {
      bottom: 15%;
      right: 10%;
      animation-delay: -5s;
    }
    
    .card-3 {
      top: 60%;
      left: 15%;
      animation-delay: -10s;
    }
    
    @media (max-width: 768px) {
      .title {
        font-size: 2.5rem;
      }
      
      .subtitle {
        font-size: 1.2rem;
      }
      
      .logo-container {
        width: 150px;
        height: 150px;
      }
      
      .direction-indicator {
        padding: 0.7rem;
        font-size: 0.9rem;
      }
      
      .card-3d {
        display: none;
      }
    }
  `;
  document.head.appendChild(styleElement);
};

export const HomePage = ({ onStartTour }) => {
  const [particles, setParticles] = useState([]);
  const homeContainerRef = useRef(null);
  const logoRef = useRef(null);
  
  useEffect(() => {
    // Inject CSS
    injectCSS();
    
    // Generate random particles
    const particlesCount = 20;
    const newParticles = [];
    
    for (let i = 0; i < particlesCount; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 6 + 2, // 2-8px
        left: Math.random() * 100, // 0-100%
        animationDuration: Math.random() * 10 + 10, // 10-20s
        delay: Math.random() * 5, // 0-5s
        translateX: (Math.random() - 0.5) * 200 // -100px to 100px
      });
    }
    
    setParticles(newParticles);
  }, []);
  
  // 3D tilt effect
  const handleMouseMove = (e) => {
    if (!homeContainerRef.current || !logoRef.current) return;
    
    const container = homeContainerRef.current;
    const logo = logoRef.current;
    
    // Calculate tilt amounts
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Tilt the logo (subtle effect)
    const tiltX = (y - 0.5) * 15; // -7.5 to 7.5 degrees
    const tiltY = (0.5 - x) * 15; // -7.5 to 7.5 degrees
    
    logo.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };
  
  const resetTilt = () => {
    if (!logoRef.current) return;
    logoRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <>
      <div 
        className="home-container" 
        ref={homeContainerRef} 
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        {/* Background particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              bottom: '-10px',
              animationDuration: `${particle.animationDuration}s`,
              animationDelay: `${particle.delay}s`,
              '--translate-x': `${particle.translateX}px`,
            }}
          />
        ))}
        
        <div className="content">
          <div className="logo-container">
            <div className="logo-glow"></div>
            <img 
              ref={logoRef} 
              className="logo" 
              src="/assets/360-images/logo.png" 
              alt="BMSIT Logo" 
            />
          </div>
          
          <div className="title-container">
            <h1 className="title">Welcome to BMSIT Campus Tour</h1>
          </div>
          
          <p className="subtitle">
            Experience our campus in immersive 360° through this interactive virtual tour.
          </p>
          
          <div className="button-container">
            <button className="start-button" onClick={onStartTour}>Start Tour</button>
          </div>
          
          <div className="social-links">
            <a className="social-link" href="https://www.youtube.com/@bmsitmedia8115" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a className="social-link" href="https://www.instagram.com/bmsitm_bengaluru/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a className="social-link" href="https://bmsit.ac.in/" target="_blank" rel="noopener noreferrer" aria-label="Official Website">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/>
              </svg>
            </a>
            <a className="social-link" href="https://www.linkedin.com/school/bms-institute-of-technology-and-management/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}; 