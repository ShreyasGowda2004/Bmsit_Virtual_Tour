import React, { useState } from 'react';
import { HomePage } from './components/HomePage.jsx';
import { VRScene } from './components/VRScene.jsx';

const App = () => {
  const [showTour, setShowTour] = useState(false);

  const startTour = () => {
    setShowTour(true);
  };

  const goBackToHome = () => {
    setShowTour(false);
  };

  return showTour ? (
    <VRScene onBackToHome={goBackToHome} />
  ) : (
    <HomePage onStartTour={startTour} />
  );
};

export default App; 