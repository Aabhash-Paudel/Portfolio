"use client"

// Medieval-style SVG illustrations for the portfolio

export function CastleIllustration({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 180" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main castle body */}
      <rect x="40" y="80" width="120" height="100" fill="#8B7355" opacity="0.15" />
      <rect x="40" y="80" width="120" height="100" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      
      {/* Left tower */}
      <rect x="20" y="50" width="40" height="130" fill="#8B7355" opacity="0.12" />
      <rect x="20" y="50" width="40" height="130" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      
      {/* Left tower battlements */}
      <rect x="15" y="40" width="12" height="15" fill="#8B7355" opacity="0.15" />
      <rect x="34" y="40" width="12" height="15" fill="#8B7355" opacity="0.15" />
      <rect x="53" y="40" width="12" height="15" fill="#8B7355" opacity="0.15" />
      
      {/* Right tower */}
      <rect x="140" y="50" width="40" height="130" fill="#8B7355" opacity="0.12" />
      <rect x="140" y="50" width="40" height="130" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      
      {/* Right tower battlements */}
      <rect x="135" y="40" width="12" height="15" fill="#8B7355" opacity="0.15" />
      <rect x="154" y="40" width="12" height="15" fill="#8B7355" opacity="0.15" />
      <rect x="173" y="40" width="12" height="15" fill="#8B7355" opacity="0.15" />
      
      {/* Center battlements */}
      <rect x="50" y="70" width="10" height="15" fill="#8B7355" opacity="0.15" />
      <rect x="70" y="70" width="10" height="15" fill="#8B7355" opacity="0.15" />
      <rect x="90" y="70" width="10" height="15" fill="#8B7355" opacity="0.15" />
      <rect x="110" y="70" width="10" height="15" fill="#8B7355" opacity="0.15" />
      <rect x="130" y="70" width="10" height="15" fill="#8B7355" opacity="0.15" />
      
      {/* Main gate */}
      <path d="M80 180 L80 130 Q100 110 120 130 L120 180" fill="#8B7355" opacity="0.2" />
      <path d="M80 180 L80 130 Q100 110 120 130 L120 180" stroke="#8B7355" strokeWidth="1" opacity="0.4" />
      
      {/* Windows */}
      <rect x="50" y="100" width="15" height="20" fill="#8B7355" opacity="0.2" />
      <rect x="135" y="100" width="15" height="20" fill="#8B7355" opacity="0.2" />
      
      {/* Tower windows */}
      <rect x="32" y="70" width="12" height="16" fill="#8B7355" opacity="0.2" />
      <rect x="32" y="100" width="12" height="16" fill="#8B7355" opacity="0.2" />
      <rect x="152" y="70" width="12" height="16" fill="#8B7355" opacity="0.2" />
      <rect x="152" y="100" width="12" height="16" fill="#8B7355" opacity="0.2" />
      
      {/* Flags */}
      <line x1="40" y1="40" x2="40" y2="20" stroke="#8B7355" strokeWidth="1" opacity="0.4" />
      <path d="M40 20 L55 27 L40 34" fill="#6E3B3B" opacity="0.3" />
      <line x1="160" y1="40" x2="160" y2="20" stroke="#8B7355" strokeWidth="1" opacity="0.4" />
      <path d="M160 20 L175 27 L160 34" fill="#6E3B3B" opacity="0.3" />
    </svg>
  )
}

export function HorseIllustration({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg 
      viewBox="0 0 180 120" 
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="90" cy="70" rx="50" ry="30" fill="#8B7355" opacity="0.15" />
      <ellipse cx="90" cy="70" rx="50" ry="30" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      
      {/* Neck */}
      <path d="M130 55 Q145 30 140 15" stroke="#8B7355" strokeWidth="12" strokeLinecap="round" opacity="0.15" />
      <path d="M130 55 Q145 30 140 15" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      
      {/* Head */}
      <ellipse cx="145" cy="12" rx="18" ry="10" fill="#8B7355" opacity="0.15" transform="rotate(-20 145 12)" />
      <ellipse cx="145" cy="12" rx="18" ry="10" stroke="#8B7355" strokeWidth="1" opacity="0.3" transform="rotate(-20 145 12)" />
      
      {/* Ear */}
      <path d="M150 5 L155 -5 L160 5" stroke="#8B7355" strokeWidth="1" opacity="0.3" fill="#8B7355" fillOpacity="0.1" />
      
      {/* Eye */}
      <circle cx="155" cy="10" r="2" fill="#8B7355" opacity="0.3" />
      
      {/* Mane */}
      <path d="M130 55 Q125 40 130 30 Q128 35 135 25" stroke="#8B7355" strokeWidth="2" opacity="0.2" fill="none" />
      
      {/* Legs */}
      <line x1="60" y1="90" x2="55" y2="115" stroke="#8B7355" strokeWidth="6" strokeLinecap="round" opacity="0.15" />
      <line x1="75" y1="95" x2="70" y2="115" stroke="#8B7355" strokeWidth="6" strokeLinecap="round" opacity="0.15" />
      <line x1="105" y1="95" x2="100" y2="115" stroke="#8B7355" strokeWidth="6" strokeLinecap="round" opacity="0.15" />
      <line x1="120" y1="90" x2="115" y2="115" stroke="#8B7355" strokeWidth="6" strokeLinecap="round" opacity="0.15" />
      
      {/* Tail */}
      <path d="M40 65 Q25 70 20 85 Q30 80 25 95" stroke="#8B7355" strokeWidth="3" strokeLinecap="round" opacity="0.2" fill="none" />
      
      {/* Saddle */}
      <ellipse cx="90" cy="55" rx="25" ry="8" fill="#6E3B3B" opacity="0.1" />
    </svg>
  )
}

export function MedievalHouseIllustration({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 120 140" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main structure */}
      <rect x="20" y="60" width="80" height="80" fill="#8B7355" opacity="0.12" />
      <rect x="20" y="60" width="80" height="80" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      
      {/* Roof */}
      <path d="M10 60 L60 15 L110 60 Z" fill="#6E3B3B" opacity="0.1" />
      <path d="M10 60 L60 15 L110 60" stroke="#8B7355" strokeWidth="1" opacity="0.3" fill="none" />
      
      {/* Chimney */}
      <rect x="75" y="25" width="15" height="30" fill="#8B7355" opacity="0.15" />
      <rect x="73" y="20" width="19" height="8" fill="#8B7355" opacity="0.15" />
      
      {/* Door */}
      <path d="M45 140 L45 100 Q60 90 75 100 L75 140" fill="#8B7355" opacity="0.2" />
      <path d="M45 140 L45 100 Q60 90 75 100 L75 140" stroke="#8B7355" strokeWidth="1" opacity="0.4" />
      <circle cx="70" cy="120" r="2" fill="#B59A5A" opacity="0.4" />
      
      {/* Windows */}
      <rect x="30" y="75" width="18" height="22" fill="#8B7355" opacity="0.2" />
      <line x1="39" y1="75" x2="39" y2="97" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      <line x1="30" y1="86" x2="48" y2="86" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      
      <rect x="72" y="75" width="18" height="22" fill="#8B7355" opacity="0.2" />
      <line x1="81" y1="75" x2="81" y2="97" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      <line x1="72" y1="86" x2="90" y2="86" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      
      {/* Attic window */}
      <circle cx="60" cy="45" r="8" fill="#8B7355" opacity="0.2" />
      <line x1="60" y1="37" x2="60" y2="53" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      <line x1="52" y1="45" x2="68" y2="45" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      
      {/* Timber framing */}
      <line x1="20" y1="80" x2="100" y2="80" stroke="#8B7355" strokeWidth="2" opacity="0.15" />
      <line x1="60" y1="60" x2="60" y2="100" stroke="#8B7355" strokeWidth="2" opacity="0.15" />
    </svg>
  )
}

export function TreeIllustration({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 80 120" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trunk */}
      <rect x="32" y="70" width="16" height="50" fill="#8B7355" opacity="0.2" />
      <rect x="32" y="70" width="16" height="50" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      
      {/* Foliage layers */}
      <ellipse cx="40" cy="55" rx="35" ry="25" fill="#7A8F7A" opacity="0.1" />
      <ellipse cx="40" cy="40" rx="30" ry="22" fill="#7A8F7A" opacity="0.12" />
      <ellipse cx="40" cy="28" rx="22" ry="18" fill="#7A8F7A" opacity="0.14" />
      <ellipse cx="40" cy="18" rx="14" ry="12" fill="#7A8F7A" opacity="0.15" />
      
      {/* Outline */}
      <path d="M5 60 Q10 45 20 40 Q15 30 25 22 Q22 15 35 10 Q40 5 45 10 Q58 15 55 22 Q65 30 60 40 Q70 45 75 60" 
            stroke="#7A8F7A" strokeWidth="1" opacity="0.3" fill="none" />
    </svg>
  )
}

export function ScrollIllustration({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 80" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main scroll body */}
      <rect x="15" y="15" width="70" height="50" fill="#F4EFE6" opacity="0.8" />
      <rect x="15" y="15" width="70" height="50" stroke="#B59A5A" strokeWidth="1" opacity="0.5" />
      
      {/* Top roll */}
      <ellipse cx="50" cy="15" rx="40" ry="8" fill="#ECE6DA" opacity="0.9" />
      <ellipse cx="50" cy="15" rx="40" ry="8" stroke="#B59A5A" strokeWidth="1" opacity="0.5" />
      <ellipse cx="50" cy="15" rx="38" ry="5" fill="#F4EFE6" opacity="0.5" />
      
      {/* Bottom roll */}
      <ellipse cx="50" cy="65" rx="40" ry="8" fill="#ECE6DA" opacity="0.9" />
      <ellipse cx="50" cy="65" rx="40" ry="8" stroke="#B59A5A" strokeWidth="1" opacity="0.5" />
      <ellipse cx="50" cy="65" rx="38" ry="5" fill="#F4EFE6" opacity="0.5" />
      
      {/* Text lines */}
      <line x1="25" y1="28" x2="75" y2="28" stroke="#8B7355" strokeWidth="1" opacity="0.2" />
      <line x1="25" y1="36" x2="70" y2="36" stroke="#8B7355" strokeWidth="1" opacity="0.2" />
      <line x1="25" y1="44" x2="75" y2="44" stroke="#8B7355" strokeWidth="1" opacity="0.2" />
      <line x1="25" y1="52" x2="60" y2="52" stroke="#8B7355" strokeWidth="1" opacity="0.2" />
      
      {/* Wax seal */}
      <circle cx="75" cy="55" r="8" fill="#6E3B3B" opacity="0.3" />
      <circle cx="75" cy="55" r="5" fill="#6E3B3B" opacity="0.2" />
    </svg>
  )
}

export function ShieldIllustration({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 80 100" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield shape */}
      <path 
        d="M40 5 L75 15 L75 50 Q75 85 40 95 Q5 85 5 50 L5 15 Z" 
        fill="#8B7355" 
        opacity="0.1"
      />
      <path 
        d="M40 5 L75 15 L75 50 Q75 85 40 95 Q5 85 5 50 L5 15 Z" 
        stroke="#B59A5A" 
        strokeWidth="2" 
        opacity="0.4"
      />
      
      {/* Inner shield */}
      <path 
        d="M40 15 L65 22 L65 48 Q65 75 40 83 Q15 75 15 48 L15 22 Z" 
        stroke="#B59A5A" 
        strokeWidth="1" 
        opacity="0.3"
        fill="none"
      />
      
      {/* Cross emblem */}
      <line x1="40" y1="30" x2="40" y2="70" stroke="#6E3B3B" strokeWidth="8" opacity="0.15" />
      <line x1="25" y1="45" x2="55" y2="45" stroke="#6E3B3B" strokeWidth="8" opacity="0.15" />
      
      {/* Decorative corners */}
      <circle cx="20" cy="25" r="3" fill="#B59A5A" opacity="0.2" />
      <circle cx="60" cy="25" r="3" fill="#B59A5A" opacity="0.2" />
    </svg>
  )
}

export function SwordIllustration({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 30 120" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blade */}
      <path d="M15 5 L20 75 L15 80 L10 75 Z" fill="#D4CFC4" opacity="0.3" />
      <path d="M15 5 L20 75 L15 80 L10 75 Z" stroke="#8B7355" strokeWidth="1" opacity="0.4" />
      
      {/* Fuller (groove) */}
      <line x1="15" y1="15" x2="15" y2="70" stroke="#8B7355" strokeWidth="1" opacity="0.2" />
      
      {/* Crossguard */}
      <rect x="3" y="78" width="24" height="6" fill="#B59A5A" opacity="0.3" rx="1" />
      <rect x="3" y="78" width="24" height="6" stroke="#8B7355" strokeWidth="1" opacity="0.4" rx="1" />
      
      {/* Handle */}
      <rect x="11" y="84" width="8" height="25" fill="#8B7355" opacity="0.25" />
      <rect x="11" y="84" width="8" height="25" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      
      {/* Handle wrapping */}
      <line x1="11" y1="89" x2="19" y2="89" stroke="#6E3B3B" strokeWidth="1" opacity="0.2" />
      <line x1="11" y1="94" x2="19" y2="94" stroke="#6E3B3B" strokeWidth="1" opacity="0.2" />
      <line x1="11" y1="99" x2="19" y2="99" stroke="#6E3B3B" strokeWidth="1" opacity="0.2" />
      <line x1="11" y1="104" x2="19" y2="104" stroke="#6E3B3B" strokeWidth="1" opacity="0.2" />
      
      {/* Pommel */}
      <circle cx="15" cy="113" r="5" fill="#B59A5A" opacity="0.3" />
      <circle cx="15" cy="113" r="5" stroke="#8B7355" strokeWidth="1" opacity="0.4" />
      <circle cx="15" cy="113" r="2" fill="#6E3B3B" opacity="0.2" />
    </svg>
  )
}

export function QuillIllustration({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 60 100" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Feather */}
      <path 
        d="M30 5 Q50 20 48 50 Q45 70 35 85 L30 95 L25 85 Q15 70 12 50 Q10 20 30 5" 
        fill="#F4EFE6" 
        opacity="0.8"
      />
      <path 
        d="M30 5 Q50 20 48 50 Q45 70 35 85 L30 95 L25 85 Q15 70 12 50 Q10 20 30 5" 
        stroke="#8B7355" 
        strokeWidth="1" 
        opacity="0.3"
      />
      
      {/* Quill (central shaft) */}
      <line x1="30" y1="20" x2="30" y2="95" stroke="#B59A5A" strokeWidth="2" opacity="0.5" />
      
      {/* Feather barbs (left) */}
      <path d="M30 25 Q20 28 15 35" stroke="#8B7355" strokeWidth="0.5" opacity="0.2" />
      <path d="M30 35 Q18 40 14 50" stroke="#8B7355" strokeWidth="0.5" opacity="0.2" />
      <path d="M30 45 Q20 52 18 62" stroke="#8B7355" strokeWidth="0.5" opacity="0.2" />
      <path d="M30 55 Q22 62 22 72" stroke="#8B7355" strokeWidth="0.5" opacity="0.2" />
      
      {/* Feather barbs (right) */}
      <path d="M30 25 Q40 28 45 35" stroke="#8B7355" strokeWidth="0.5" opacity="0.2" />
      <path d="M30 35 Q42 40 46 50" stroke="#8B7355" strokeWidth="0.5" opacity="0.2" />
      <path d="M30 45 Q40 52 42 62" stroke="#8B7355" strokeWidth="0.5" opacity="0.2" />
      <path d="M30 55 Q38 62 38 72" stroke="#8B7355" strokeWidth="0.5" opacity="0.2" />
      
      {/* Nib */}
      <path d="M28 95 L30 100 L32 95" fill="#8B7355" opacity="0.4" />
    </svg>
  )
}
