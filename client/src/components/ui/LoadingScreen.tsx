
import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [dots, setDots] = useState("");

  const loadingTexts = [
    "Initializing sustainable future",
    "Loading eco-friendly solutions", 
    "Connecting communities",
    "Preparing green innovations",
    "Building better tomorrow"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Larger floating elements */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full float-animation"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-bg flex items-center justify-center mb-4 pulse-glow">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold gradient-text mb-2">Raghukul Aryawart</h1>
          <p className="text-blue-400 text-sm">India's Green Identity</p>
        </div>

        {/* Loading text */}
        <div className="mb-8">
          <p className="text-white text-lg font-medium mb-2">
            {loadingTexts[currentText]}{dots}
          </p>
          <p className="text-white/60 text-sm">Please wait while we prepare your experience</p>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-bg transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm mt-2">{Math.round(progress)}%</p>
        </div>

        {/* Loading animation */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
