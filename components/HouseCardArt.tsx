type Props = {
  className?: string;
  sky: [string, string];
  siding: string;
  roof: string;
  door: string;
};

export default function HouseCardArt({ className = "", sky, siding, roof, door }: Props) {
  const gradId = `sky-${siding.replace("#", "")}`;
  return (
    <svg
      viewBox="0 0 480 320"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={sky[0]} />
          <stop offset="100%" stopColor={sky[1]} />
        </linearGradient>
      </defs>
      <rect width="480" height="320" fill={`url(#${gradId})`} />

      <polygon points="0,230 90,180 190,225 280,170 380,220 480,190 480,320 0,320" fill="#000000" opacity="0.08" />

      <g transform="translate(120 120)">
        <rect x="0" y="60" width="240" height="100" rx="3" fill={siding} />
        <rect x="0" y="60" width="240" height="14" fill="#000000" opacity="0.12" />
        <polygon points="-16,60 120,-20 256,60" fill={roof} />
        <rect x="100" y="8" width="34" height="52" fill="#2a2620" opacity="0.85" />
        <rect x="24" y="88" width="46" height="42" rx="2" fill="#fdf3d8" opacity="0.92" />
        <rect x="170" y="88" width="46" height="42" rx="2" fill="#fdf3d8" opacity="0.8" />
        <rect x="102" y="106" width="36" height="54" fill={door} />
        <rect x="-8" y="158" width="256" height="8" fill="#000000" opacity="0.18" />
      </g>
    </svg>
  );
}
