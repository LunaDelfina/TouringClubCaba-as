const BackgroundWaves = () => {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none z-0 pointer-events-none "
    >
      {[...Array(17)].map((_, i) => (
        <g key={i} transform={`translate(0 ${i * 12})`}>
          <path
            d="M-200,32 C-80,20 120,10 260,18 C400,26 560,44 720,48 C880,52 1040,34 1200,30 C1360,26 1520,38 1640,34"
            fill="none"
            stroke="#F3FEFF"
            strokeWidth="1"
            opacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,-18; 0,0"
              dur="6s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
            />
          </path>
        </g>
      ))}
    </svg>
  );
};

export default BackgroundWaves;