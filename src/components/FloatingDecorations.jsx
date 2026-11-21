import React from 'react';

export default function FloatingDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-10" aria-hidden="true">
      
      {/* Balloon 1: Top Left Coral */}
      <div className="absolute -top-6 left-[6%] sm:left-[10%] animate-float opacity-85 hidden sm:block">
        <svg width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="30" cy="35" rx="26" ry="32" fill="#FF8A8A" />
          <ellipse cx="22" cy="24" rx="7" ry="12" fill="#FFAAAA" fillOpacity="0.6" />
          <path d="M26 66 L34 66 L30 72 Z" fill="#E05B5B" />
          <path d="M30 72 Q36 80 28 88" stroke="#485E86" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Balloon 2: Top Right Sky Blue */}
      <div className="absolute top-12 right-[8%] sm:right-[12%] animate-float-slow opacity-80 hidden md:block">
        <svg width="55" height="85" viewBox="0 0 55 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="27" cy="32" rx="24" ry="29" fill="#A9DDF5" />
          <ellipse cx="20" cy="22" rx="6" ry="10" fill="#E8F6FD" fillOpacity="0.7" />
          <path d="M24 60 L30 60 L27 66 Z" fill="#7AC6EE" />
          <path d="M27 66 Q20 74 28 82" stroke="#485E86" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Alphabet Block 'A': Floating Left */}
      <div className="absolute top-[38%] left-[2%] sm:left-[4%] animate-float-reverse opacity-90">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-sunshine to-sunshine-500 rounded-2xl shadow-playful border-2 border-white flex items-center justify-center -rotate-6">
          <span className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">A</span>
        </div>
      </div>

      {/* Alphabet Block 'B': Floating Right */}
      <div className="absolute top-[48%] right-[3%] sm:right-[5%] animate-float opacity-90">
        <div className="w-11 h-11 sm:w-13 sm:h-13 bg-gradient-to-br from-peach to-coral rounded-2xl shadow-playful border-2 border-white flex items-center justify-center rotate-12">
          <span className="font-heading font-extrabold text-2xl text-white">B</span>
        </div>
      </div>

      {/* Alphabet Block 'C': Floating Bottom Left */}
      <div className="absolute bottom-[18%] left-[8%] animate-float-slow opacity-90 hidden lg:block">
        <div className="w-12 h-12 bg-gradient-to-br from-mint to-mint-500 rounded-2xl shadow-playful border-2 border-white flex items-center justify-center rotate-6">
          <span className="font-heading font-extrabold text-2xl text-navy">C</span>
        </div>
      </div>

      {/* Fluffy Cloud 1: Top Center */}
      <div className="absolute top-4 left-[35%] animate-float-slow opacity-60 hidden sm:block">
        <svg width="80" height="45" viewBox="0 0 80 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 35 C10 35 5 28 8 20 C10 12 20 10 25 15 C30 5 45 4 52 12 C60 6 72 10 74 20 C82 23 80 35 70 35 Z" fill="#FFFFFF" fillOpacity="0.9" />
        </svg>
      </div>

      {/* Cute Butterfly: Floating Mid-Right */}
      <div className="absolute top-[28%] right-[18%] animate-wiggle opacity-85 hidden md:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wings */}
          <ellipse cx="14" cy="15" rx="10" ry="12" fill="#DCCBFA" />
          <ellipse cx="26" cy="15" rx="10" ry="12" fill="#DCCBFA" />
          <ellipse cx="15" cy="26" rx="7" ry="8" fill="#FFC9AE" />
          <ellipse cx="25" cy="26" rx="7" ry="8" fill="#FFC9AE" />
          {/* Body */}
          <rect x="18" y="10" width="4" height="20" rx="2" fill="#263653" />
          <circle cx="20" cy="8" r="3" fill="#263653" />
        </svg>
      </div>

      {/* Colourful Pencil: Floating Bottom Right */}
      <div className="absolute bottom-[22%] right-[12%] animate-float opacity-80 hidden lg:block">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
          <polygon points="25,5 20,18 30,18" fill="#FFC9AE" />
          <polygon points="25,5 23,10 27,10" fill="#263653" />
          <rect x="20" y="18" width="10" height="24" fill="#FFD66B" />
          <rect x="20" y="42" width="10" height="4" fill="#BDCBE1" />
          <rect x="20" y="46" width="10" height="6" rx="2" fill="#FF8A8A" />
        </svg>
      </div>

      {/* Sparkles and Stars */}
      <div className="absolute top-20 left-[22%] animate-pulse-gentle opacity-70">
        <span className="text-xl">⭐</span>
      </div>
      <div className="absolute top-[60%] left-[16%] animate-pulse-gentle opacity-70 hidden sm:block">
        <span className="text-lg">✨</span>
      </div>
      <div className="absolute top-[18%] right-[28%] animate-pulse-gentle opacity-75 hidden sm:block">
        <span className="text-2xl">🌟</span>
      </div>
      <div className="absolute bottom-[30%] right-[22%] animate-pulse-gentle opacity-70">
        <span className="text-xl">🌸</span>
      </div>

    </div>
  );
}
