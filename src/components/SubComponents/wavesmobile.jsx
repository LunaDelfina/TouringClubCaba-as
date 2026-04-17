const WavesMobile = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none md:hidden">
      <svg
        viewBox="0 0 390 80"
        preserveAspectRatio="none"
        className="w-full h-[25dvh]"
      >
        <defs>
          <linearGradient id="waveGradientMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F3FEFE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F3FEFE" stopOpacity="1" />
          </linearGradient>
        </defs>

        <path fill="#F3FEFE" fillOpacity="0.4">
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            values="
              M0,40 C80,20 160,60 240,40 C310,22 360,50 390,35 L390,80 L0,80 Z;
              M0,50 C80,65 160,25 240,50 C310,68 360,30 390,50 L390,80 L0,80 Z;
              M0,40 C80,20 160,60 240,40 C310,22 360,50 390,35 L390,80 L0,80 Z
            "
          />
        </path>

        <path fill="#F3FEFE" fillOpacity="0.6">
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            values="
              M0,55 C100,35 200,70 300,50 C350,38 380,60 390,52 L390,80 L0,80 Z;
              M0,45 C100,65 200,35 300,58 C350,68 380,42 390,48 L390,80 L0,80 Z;
              M0,55 C100,35 200,70 300,50 C350,38 380,60 390,52 L390,80 L0,80 Z
            "
          />
        </path>

        <path fill="url(#waveGradientMobile)">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            values="
              M0,62 C80,48 180,72 280,58 C340,48 375,65 390,60 L390,80 L0,80 Z;
              M0,58 C80,70 180,48 280,65 C340,72 375,52 390,62 L390,80 L0,80 Z;
              M0,62 C80,48 180,72 280,58 C340,48 375,65 390,60 L390,80 L0,80 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default WavesMobile;