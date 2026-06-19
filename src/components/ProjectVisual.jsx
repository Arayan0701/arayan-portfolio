// Abstract placeholder visuals for each project, styled by project color.
// Swap the <img> in ProjectCard / ProjectModal for real screenshots when available.

function isImagePath(value) {
  return typeof value === 'string' && /(^\/|\.(jpg|jpeg|png|webp|svg|gif|avif))$/i.test(value)
}

export default function ProjectVisual({ id, color = '#F59E0B' }) {
  if (isImagePath(id)) {
    return <img src={id} alt="Project preview" className="w-full h-full object-cover" />
  }

  const common = { viewBox: '0 0 400 300', className: 'w-full h-full' }

  switch (id) {
    case 'mitraride':
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="#0F172A" />
          <rect width="400" height="300" fill="url(#g1)" />
          <rect x="140" y="40" width="120" height="220" rx="22" fill="#020617" stroke="#ffffff20" />
          <rect x="155" y="65" width="90" height="150" rx="10" fill="#0F172A" />
          <rect x="170" y="80" width="60" height="60" rx="6" fill={color} opacity="0.85" />
          <circle cx="200" cy="110" r="14" fill="#020617" />
          <rect x="170" y="150" width="60" height="8" rx="4" fill="#ffffff30" />
          <rect x="170" y="165" width="40" height="8" rx="4" fill="#ffffff20" />
          <rect x="170" y="190" width="60" height="18" rx="9" fill={color} />
        </svg>
      )
    case 'shreeom':
      return (
        <svg {...common}>
          <rect width="400" height="300" fill="#0F172A" />
          <rect x="30" y="30" width="340" height="40" rx="8" fill="#020617" />
          <circle cx="50" cy="50" r="6" fill={color} />
          <rect x="70" y="44" width="80" height="12" rx="6" fill="#ffffff30" />
          <rect x="270" y="40" width="90" height="20" rx="10" fill={color} opacity="0.8" />
          <rect x="30" y="90" width="160" height="160" rx="10" fill="#020617" />
          <rect x="50" y="110" width="120" height="80" rx="6" fill={color} opacity="0.3" />
          <rect x="50" y="200" width="120" height="10" rx="5" fill="#ffffff30" />
          <rect x="50" y="218" width="80" height="8" rx="4" fill="#ffffff20" />
          <rect x="210" y="90" width="160" height="75" rx="10" fill="#020617" />
          <rect x="210" y="175" width="160" height="75" rx="10" fill="#020617" />
          <rect x="230" y="110" width="60" height="35" rx="6" fill="#38BDF8" opacity="0.4" />
          <rect x="230" y="195" width="60" height="35" rx="6" fill={color} opacity="0.4" />
        </svg>
      )
    case 'social':
      return (
        <svg {...common}>
          <rect width="400" height="300" fill="#0F172A" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${40 + i * 115}, 50)`}>
              <rect width="100" height="100" rx="14" fill="#020617" />
              <rect width="100" height="100" rx="14" fill={color} opacity={0.15 + i * 0.1} />
              <circle cx="20" cy="20" r="8" fill="#ffffff40" />
              <rect x="35" y="16" width="40" height="8" rx="4" fill="#ffffff30" />
              <rect x="10" y="40" width="80" height="45" rx="8" fill="#ffffff10" />
            </g>
          ))}
          <rect x="40" y="180" width="320" height="70" rx="14" fill="#020617" />
          <rect x="60" y="200" width="180" height="10" rx="5" fill="#ffffff30" />
          <rect x="60" y="220" width="120" height="8" rx="4" fill="#ffffff15" />
          <circle cx="330" cy="215" r="16" fill={color} opacity="0.8" />
        </svg>
      )
    case 'branding':
      return (
        <svg {...common}>
          <rect width="400" height="300" fill="#0F172A" />
          <circle cx="120" cy="130" r="55" fill="none" stroke={color} strokeWidth="3" opacity="0.7" />
          <polygon points="120,90 155,150 85,150" fill={color} opacity="0.5" />
          <rect x="220" y="80" width="140" height="22" rx="4" fill="#ffffff25" />
          <rect x="220" y="115" width="100" height="22" rx="4" fill="#ffffff15" />
          <rect x="60" y="220" width="50" height="16" rx="8" fill={color} />
          <rect x="120" y="220" width="50" height="16" rx="8" fill="#38BDF8" />
          <rect x="180" y="220" width="50" height="16" rx="8" fill="#ffffff20" />
        </svg>
      )
    case 'posters':
      return (
        <svg {...common}>
          <rect width="400" height="300" fill="#0F172A" />
          <rect x="50" y="30" width="120" height="240" rx="6" fill="#020617" />
          <rect x="65" y="50" width="90" height="90" rx="4" fill={color} opacity="0.6" />
          <rect x="65" y="155" width="90" height="10" rx="5" fill="#ffffff40" />
          <rect x="65" y="175" width="60" height="8" rx="4" fill="#ffffff20" />
          <rect x="65" y="230" width="90" height="20" rx="4" fill={color} />
          <rect x="200" y="60" width="150" height="200" rx="6" fill="#020617" transform="rotate(6 275 160)" />
          <rect x="215" y="80" width="120" height="70" rx="4" fill="#38BDF8" opacity="0.5" transform="rotate(6 275 160)" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <rect width="400" height="300" fill="#0F172A" />
          <circle cx="200" cy="150" r="60" fill={color} opacity="0.4" />
        </svg>
      )
  }
}
