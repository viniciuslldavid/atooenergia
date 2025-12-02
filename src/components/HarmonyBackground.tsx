import React from 'react';

interface HarmonyBackgroundProps {
  variant?: 'primary' | 'secondary';
}

const HarmonyBackground: React.FC<HarmonyBackgroundProps> = ({ variant = 'primary' }) => {
  const primaryColors = ['#ffed00', '#ffe34d', '#ffd700'];
  const secondaryColors = ['#40959b', '#3a8b91', '#357d83'];

  const colors = variant === 'primary' ? primaryColors : secondaryColors;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id={`grad1-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: colors[0], stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: colors[1], stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: colors[2], stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id={`grad2-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: colors[2], stopOpacity: 0.08 }} />
            <stop offset="50%" style={{ stopColor: colors[0], stopOpacity: 0.12 }} />
            <stop offset="100%" style={{ stopColor: colors[1], stopOpacity: 0.08 }} />
          </linearGradient>
        </defs>

        <path
          fill={`url(#grad1-${variant})`}
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,149.3C672,139,768,117,864,112C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z
            "
          />
        </path>

        <path
          fill={`url(#grad2-${variant})`}
          d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,160L48,154.7C96,149,192,139,288,144C384,149,480,171,576,170.7C672,171,768,149,864,133.3C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z
            "
          />
        </path>
      </svg>

      <div className="absolute top-10 right-10 w-32 h-32 rounded-full blur-3xl opacity-10 animate-pulse"
           style={{ backgroundColor: colors[0], animationDuration: '4s' }} />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full blur-3xl opacity-10 animate-pulse"
           style={{ backgroundColor: colors[1], animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-36 h-36 rounded-full blur-3xl opacity-10 animate-pulse"
           style={{ backgroundColor: colors[2], animationDuration: '5s', animationDelay: '2s' }} />
    </div>
  );
};

export default HarmonyBackground;
