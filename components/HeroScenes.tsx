type SceneProps = {
  className?: string;
};

function Trees() {
  const positions = [
    { x: 40, s: 1.1 },
    { x: 110, s: 0.8 },
    { x: 175, s: 1.3 },
    { x: 1060, s: 1.2 },
    { x: 1140, s: 0.9 },
    { x: 1210, s: 1.4 },
  ];
  return (
    <>
      {positions.map((p, i) => (
        <g key={i} transform={`translate(${p.x} 620) scale(${p.s})`} opacity="0.9">
          <polygon points="0,-190 -34,-90 34,-90" fill="#1c2417" />
          <polygon points="0,-150 -28,-60 28,-60" fill="#232c1c" />
          <polygon points="0,-105 -22,-20 22,-20" fill="#2a3421" />
          <rect x="-4" y="-20" width="8" height="24" fill="#1c2417" />
        </g>
      ))}
    </>
  );
}

export function SceneDusk({ className = "" }: SceneProps) {
  return (
    <svg
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyDusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e2b46" />
          <stop offset="38%" stopColor="#7a5548" />
          <stop offset="62%" stopColor="#d4a24c" />
          <stop offset="100%" stopColor="#efd9a8" />
        </linearGradient>
        <radialGradient id="sunGlowDusk" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff4d6" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fff4d6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="groundDusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3324" />
          <stop offset="100%" stopColor="#20200f" />
        </linearGradient>
        <linearGradient id="windowGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe3a3" />
          <stop offset="100%" stopColor="#ffb75e" />
        </linearGradient>
      </defs>

      <rect width="1280" height="720" fill="url(#skyDusk)" />
      <circle cx="640" cy="330" r="230" fill="url(#sunGlowDusk)" />
      <circle cx="640" cy="330" r="58" fill="#ffe9b8" />

      <polygon points="0,560 220,430 400,540 620,410 820,530 1020,440 1280,540 1280,720 0,720" fill="#463a2e" opacity="0.85" />
      <polygon points="0,600 260,500 520,590 780,480 1040,580 1280,510 1280,720 0,720" fill="#2c2419" />

      <rect x="0" y="600" width="1280" height="120" fill="url(#groundDusk)" />
      <Trees />

      {/* Modular home */}
      <g transform="translate(490 430)">
        <rect x="-6" y="60" width="312" height="140" rx="4" fill="#e8e2d4" />
        <rect x="-6" y="60" width="312" height="18" fill="#cfc6ae" />
        <polygon points="-24,60 150,-40 324,60" fill="#3d372c" />
        <rect x="128" y="-8" width="44" height="70" fill="#2a2620" />
        <rect x="18" y="96" width="58" height="58" rx="3" fill="url(#windowGlow)" opacity="0.95" />
        <rect x="212" y="96" width="58" height="58" rx="3" fill="url(#windowGlow)" opacity="0.85" />
        <rect x="126" y="118" width="46" height="86" fill="#5b4632" />
        <rect x="126" y="118" width="46" height="86" fill="none" stroke="#3d3123" strokeWidth="2" />
        <rect x="-30" y="196" width="360" height="10" fill="#20200f" opacity="0.4" />
      </g>

      <rect width="1280" height="720" fill="#1a1610" opacity="0.12" />
    </svg>
  );
}

export function SceneDawn({ className = "" }: SceneProps) {
  return (
    <svg
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyDawn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7fa6a3" />
          <stop offset="45%" stopColor="#c9dcc6" />
          <stop offset="75%" stopColor="#f2e6c8" />
          <stop offset="100%" stopColor="#f8efd9" />
        </linearGradient>
        <linearGradient id="waterDawn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ec3bd" />
          <stop offset="100%" stopColor="#587c74" />
        </linearGradient>
        <radialGradient id="sunGlowDawn" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8e6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff8e6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#skyDawn)" />
      <circle cx="960" cy="260" r="200" fill="url(#sunGlowDawn)" />
      <circle cx="960" cy="260" r="46" fill="#fff3d0" />

      <polygon points="0,470 300,380 620,460 900,360 1280,440 1280,720 0,720" fill="#4f6d63" opacity="0.55" />
      <rect x="0" y="500" width="1280" height="220" fill="url(#waterDawn)" />
      <rect x="0" y="500" width="1280" height="10" fill="#ffffff" opacity="0.35" />

      <g transform="translate(150 400)">
        <rect x="-6" y="60" width="300" height="128" rx="4" fill="#f5f1e6" />
        <rect x="-6" y="60" width="300" height="16" fill="#dcd5c1" />
        <polygon points="-22,60 144,-34 310,60" fill="#33513f" />
        <rect x="20" y="92" width="52" height="52" rx="3" fill="#a7c7d9" />
        <rect x="204" y="92" width="52" height="52" rx="3" fill="#a7c7d9" />
        <rect x="120" y="112" width="44" height="76" fill="#7a5b3c" />
        <rect x="-24" y="186" width="344" height="8" fill="#213127" opacity="0.35" />
      </g>

      <rect width="1280" height="720" fill="#eef2ea" opacity="0.06" />
    </svg>
  );
}

export function SceneMountain({ className = "" }: SceneProps) {
  return (
    <svg
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyMtn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a6d86" />
          <stop offset="45%" stopColor="#9db9b0" />
          <stop offset="80%" stopColor="#e8d9ad" />
          <stop offset="100%" stopColor="#f4e7c1" />
        </linearGradient>
        <radialGradient id="sunGlowMtn" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff6df" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#fff6df" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#skyMtn)" />
      <circle cx="300" cy="220" r="190" fill="url(#sunGlowMtn)" />
      <circle cx="300" cy="220" r="44" fill="#fff2cf" />

      <polygon points="0,380 220,120 420,340 560,60 760,360 960,180 1180,400 1280,320 1280,720 0,720" fill="#5c7368" opacity="0.9" />
      <polygon points="0,440 260,220 500,400 700,180 940,420 1160,260 1280,400 1280,720 0,720" fill="#37473e" />
      <polygon points="180,150 220,110 260,150" fill="#f3f1ea" opacity="0.9" />
      <polygon points="700,220 750,170 800,220" fill="#f3f1ea" opacity="0.9" />

      <rect x="0" y="560" width="1280" height="160" fill="#28382e" />
      <Trees />

      <g transform="translate(720 420)">
        <rect x="-6" y="60" width="300" height="134" rx="4" fill="#eee7d6" />
        <rect x="-6" y="60" width="300" height="17" fill="#d5cbb0" />
        <polygon points="-22,60 144,-36 310,60" fill="#2f2a22" />
        <rect x="18" y="94" width="54" height="54" rx="3" fill="#ffdf9e" />
        <rect x="206" y="94" width="54" height="54" rx="3" fill="#41627a" opacity="0.5" />
        <rect x="120" y="114" width="44" height="80" fill="#54402c" />
        <rect x="-26" y="192" width="352" height="9" fill="#1c1a12" opacity="0.35" />
      </g>

      <rect width="1280" height="720" fill="#111611" opacity="0.08" />
    </svg>
  );
}
