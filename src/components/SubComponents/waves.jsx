const Waves = () => {
  const contenido = (
    <>
      <defs>
        <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="35%" stopColor="#F3FEFE" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F3FEFE" stopOpacity="1" />
        </linearGradient>
      </defs>

      <path fill="#F3FEFE" fillOpacity="0.35">
        <animate
          attributeName="d"
          dur="12s"
          repeatCount="indefinite"
          values="
            M0,200 C240,360 480,80 720,190 960,230 1200,380 1440,250 L1440,320 L0,320 Z;
            M0,180 C240,100 480,340 720,210 960,120 1200,300 1440,190 L1440,320 L0,320 Z;
            M0,200 C240,360 480,80 720,190 960,230 1200,380 1440,250 L1440,320 L0,320 Z
          "
        />
      </path>

      <path fill="#F3FEFE" fillOpacity="0.5">
        <animate
          attributeName="d"
          dur="8s"
          repeatCount="indefinite"
          values="
            M0,240 C300,360 600,120 900,230 1200,300 1440,380 1440,300 L1440,320 L0,320 Z;
            M0,260 C300,140 600,360 900,260 1200,160 1440,300 1440,260 L1440,320 L0,320 Z;
            M0,240 C300,360 600,120 900,230 1200,300 1440,380 1440,300 L1440,320 L0,320 Z
          "
        />
      </path>

      <path fill="#F3FEFE" fillOpacity="0.35">
        <animate
          attributeName="d"
          dur="14s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          values="
            M0,200 C240,360 480,80 720,190 960,230 1200,380 1440,250 L1440,320 L0,320 Z;
            M0,180 C240,100 480,340 720,210 960,120 1200,300 1440,190 L1440,320 L0,320 Z;
            M0,200 C240,360 480,80 720,190 960,230 1200,380 1440,250 L1440,320 L0,320 Z
          "
        />
      </path>

      <path fill="#F3FEFE" fillOpacity="0.5">
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          values="
            M0,240 C300,360 600,120 900,230 1200,300 1440,380 1440,300 L1440,320 L0,320 Z;
            M0,260 C300,140 600,360 900,260 1200,160 1440,300 1440,260 L1440,320 L0,320 Z;
            M0,240 C300,360 600,120 900,230 1200,300 1440,380 1440,300 L1440,320 L0,320 Z
          "
        />
      </path>

      <path fill="url(#waveGradient)">
        <animate
          attributeName="d"
          dur="16s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          values="
            M0,260 C360,200 720,380 1080,260 1320,180 1440,360 1440,320 L1440,320 L0,320 Z;
            M0,280 C360,380 720,140 1080,300 1320,360 1440,220 1440,260 L1440,320 L0,320 Z;
            M0,260 C360,200 720,380 1080,260 1320,180 1440,360 1440,320 L1440,320 L0,320 Z
          "
        />
      </path>
    </>
  );

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">

      

      {/* Desktop */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-[50dvh] hidden md:block"
      >
        {contenido}
      </svg>

    </div>
  );
};

export default Waves;