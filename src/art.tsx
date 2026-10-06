// Ilustrasi vektor original — kartun "3D chunky" lewat gradien volume + bayangan bawah.
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export function Ship(props: P) {
  return (
    <svg viewBox="0 0 320 300" {...props}>
      <defs>
        <linearGradient id="hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff8aa3" />
          <stop offset=".5" stopColor="#ff6b8a" />
          <stop offset="1" stopColor="#c23a5a" />
        </linearGradient>
        <linearGradient id="sail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff8e8" />
          <stop offset="1" stopColor="#e8d3a8" />
        </linearGradient>
        <linearGradient id="mast" x1="0" x2="1">
          <stop offset="0" stopColor="#9a6a3c" />
          <stop offset="1" stopColor="#5e3c1e" />
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="282" rx="130" ry="10" fill="#0b1d33" opacity=".25" />
      <rect x="152" y="20" width="12" height="220" rx="5" fill="url(#mast)" />
      <path d="M170 34 C 250 70 262 150 244 210 L170 210 Z" fill="url(#sail)" stroke="#0b1d33" strokeWidth="5" strokeLinejoin="round" />
      <path d="M172 92 C 225 105 250 125 254 150 L172 150Z" fill="#ff6b8a" opacity=".85" />
      <path d="M172 170 C 222 172 245 182 248 196 L172 196Z" fill="#ff6b8a" opacity=".85" />
      <path d="M146 60 C 90 92 78 160 92 214 L146 214Z" fill="url(#sail)" stroke="#0b1d33" strokeWidth="5" strokeLinejoin="round" />
      <path d="M144 118 C 108 128 96 148 94 168 L144 168Z" fill="#ff6b8a" opacity=".85" />
      <path d="M164 20 l40 12 -40 12z" fill="#ffd93d" stroke="#0b1d33" strokeWidth="4" strokeLinejoin="round" />
      <path d="M22 222 H298 L262 274 Q160 292 58 274 Z" fill="url(#hull)" stroke="#0b1d33" strokeWidth="6" strokeLinejoin="round" />
      <path d="M40 236 H280" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity=".7" />
      <circle cx="100" cy="254" r="9" fill="#f5e6c8" stroke="#0b1d33" strokeWidth="4" />
      <circle cx="160" cy="257" r="9" fill="#f5e6c8" stroke="#0b1d33" strokeWidth="4" />
      <circle cx="220" cy="254" r="9" fill="#f5e6c8" stroke="#0b1d33" strokeWidth="4" />
      <path d="M58 270 Q160 286 262 270" stroke="#fff" strokeWidth="4" fill="none" opacity=".35" />
    </svg>
  );
}

export function Lighthouse(props: P) {
  return (
    <svg viewBox="0 0 260 420" {...props}>
      <defs>
        <linearGradient id="lh" x1="0" x2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".6" stopColor="#f5e6c8" />
          <stop offset="1" stopColor="#d9c49c" />
        </linearGradient>
        <linearGradient id="rock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a6fa8" />
          <stop offset="1" stopColor="#0b1d33" />
        </linearGradient>
        <radialGradient id="lamp">
          <stop offset="0" stopColor="#fff7c2" />
          <stop offset="1" stopColor="#ffd93d" />
        </radialGradient>
      </defs>
      <path d="M10 410 Q30 330 90 320 Q130 300 180 322 Q240 334 252 410Z" fill="url(#rock)" stroke="#0b1d33" strokeWidth="6" strokeLinejoin="round" />
      <path d="M40 360 Q70 340 100 350" stroke="#fff" strokeOpacity=".25" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M96 328 L112 110 H148 L164 328Z" fill="url(#lh)" stroke="#0b1d33" strokeWidth="6" strokeLinejoin="round" />
      <path d="M103 250 L157 250 L160 290 L100 290Z" fill="#ff6b8a" stroke="#0b1d33" strokeWidth="5" strokeLinejoin="round" />
      <path d="M108 170 L152 170 L154 206 L106 206Z" fill="#ff6b8a" stroke="#0b1d33" strokeWidth="5" strokeLinejoin="round" />
      <rect x="120" y="296" width="20" height="32" rx="9" fill="#1b4f9c" stroke="#0b1d33" strokeWidth="4" />
      <rect x="98" y="96" width="64" height="18" rx="6" fill="#1b4f9c" stroke="#0b1d33" strokeWidth="5" />
      <rect x="110" y="56" width="40" height="42" rx="8" fill="url(#lamp)" stroke="#0b1d33" strokeWidth="5" className="anim-glow" />
      <path d="M102 58 Q130 22 158 58Z" fill="#ff6b8a" stroke="#0b1d33" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="130" cy="28" r="6" fill="#ffd93d" stroke="#0b1d33" strokeWidth="4" />
    </svg>
  );
}

export function Cloud(props: P) {
  return (
    <svg viewBox="0 0 220 110" {...props}>
      <path d="M30 92 Q4 92 8 70 Q12 48 40 52 Q46 18 86 22 Q112 2 140 26 Q178 14 186 50 Q216 52 212 76 Q210 94 184 94Z" fill="#fff" />
      <path d="M30 92 H184 Q206 94 210 80 Q170 96 40 84 Q22 84 14 78 Q16 92 30 92Z" fill="#cfe9f8" />
    </svg>
  );
}

export function Gull(props: P) {
  return (
    <svg viewBox="0 0 60 24" {...props}>
      <path d="M2 18 Q15 2 30 16 Q45 2 58 18" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pin({ color = "#ffd93d", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 48 64" {...props}>
      <ellipse cx="24" cy="60" rx="10" ry="3" fill="#0b1d33" opacity=".3" />
      <path d="M24 58 C 10 40 4 30 4 22 A20 20 0 0 1 44 22 C44 30 38 40 24 58Z" fill={color} stroke="#0b1d33" strokeWidth="4" strokeLinejoin="round" />
      <circle cx="24" cy="22" r="7" fill="#fff" stroke="#0b1d33" strokeWidth="3.5" />
      <path d="M12 16 Q16 8 24 7" stroke="#fff" strokeOpacity=".6" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function CompassRose(props: P) {
  return (
    <svg viewBox="0 0 200 200" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="100" cy="100" r="92" />
        <circle cx="100" cy="100" r="84" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="40" />
      </g>
      <g fill="currentColor">
        <path d="M100 4 L112 88 L100 100 L88 88Z" />
        <path d="M100 196 L88 112 L100 100 L112 112Z" opacity=".55" />
        <path d="M196 100 L112 112 L100 100 L112 88Z" opacity=".55" />
        <path d="M4 100 L88 88 L100 100 L88 112Z" opacity=".55" />
        <path d="M100 100 L150 50 L118 106Z" opacity=".35" />
        <path d="M100 100 L50 150 L82 94Z" opacity=".35" />
        <path d="M100 100 L150 150 L94 118Z" opacity=".35" />
        <path d="M100 100 L50 50 L106 82Z" opacity=".35" />
      </g>
    </svg>
  );
}

export function AnchorLogo(props: P) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <circle cx="32" cy="32" r="29" fill="#0b1d33" stroke="#ffd93d" strokeWidth="3" />
      <circle cx="32" cy="32" r="23" fill="none" stroke="#ffd93d" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="1.5 4" />
      <g fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="17" r="4" />
        <path d="M32 21 V48 M23 28 H41 M18 38 Q20 48 32 48 Q44 48 46 38" />
      </g>
      <path d="M32 4 l3 6h-6z M32 60 l-3-6h6z M4 32 l6-3v6z M60 32 l-6 3v-6z" fill="#ff6b8a" />
    </svg>
  );
}

export function Chest({ open = false, ...props }: P & { open?: boolean }) {
  return (
    <svg viewBox="0 0 200 180" {...props}>
      <defs>
        <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c27a3e" />
          <stop offset="1" stopColor="#7a431b" />
        </linearGradient>
        <radialGradient id="treasure" cx=".5" cy="1" r=".9">
          <stop offset="0" stopColor="#fff7c2" />
          <stop offset=".5" stopColor="#ffd93d" stopOpacity=".7" />
          <stop offset="1" stopColor="#ffd93d" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="172" rx="80" ry="7" fill="#0b1d33" opacity=".3" />
      {open && <path d="M30 96 L0 0 H200 L170 96Z" fill="url(#treasure)" className="anim-glow" />}
      <rect x="22" y="92" width="156" height="76" rx="10" fill="url(#wood)" stroke="#0b1d33" strokeWidth="6" />
      <rect x="22" y="118" width="156" height="12" fill="#ffd93d" stroke="#0b1d33" strokeWidth="4" />
      <rect x="40" y="92" width="14" height="76" fill="#ffd93d" stroke="#0b1d33" strokeWidth="4" />
      <rect x="146" y="92" width="14" height="76" fill="#ffd93d" stroke="#0b1d33" strokeWidth="4" />
      {open ? (
        <>
          <path d="M22 92 Q30 40 100 38 Q170 40 178 92" fill="none" stroke="#0b1d33" strokeWidth="0" />
          <path d="M28 70 L22 20 Q100 -6 178 20 L172 70 Q100 52 28 70Z" fill="url(#wood)" stroke="#0b1d33" strokeWidth="6" strokeLinejoin="round" />
          <circle cx="70" cy="88" r="10" fill="#ffd93d" stroke="#0b1d33" strokeWidth="3" />
          <circle cx="96" cy="84" r="10" fill="#ffd93d" stroke="#0b1d33" strokeWidth="3" />
          <circle cx="124" cy="88" r="10" fill="#ffd93d" stroke="#0b1d33" strokeWidth="3" />
          <path d="M140 72 l8 12 l-8 12 l-8 -12z" fill="#2e9bd6" stroke="#0b1d33" strokeWidth="3" />
        </>
      ) : (
        <path d="M22 96 Q22 50 100 48 Q178 50 178 96Z" fill="url(#wood)" stroke="#0b1d33" strokeWidth="6" strokeLinejoin="round" />
      )}
      <rect x="88" y="104" width="24" height="30" rx="5" fill="#ffd93d" stroke="#0b1d33" strokeWidth="4" />
      <circle cx="100" cy="117" r="4" fill="#0b1d33" />
    </svg>
  );
}

export function Fish({ color = "#ffd93d", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 80 44" {...props}>
      <path d="M8 22 Q30 0 58 16 L76 4 L72 22 L76 40 L58 28 Q30 44 8 22Z" fill={color} stroke="#0b1d33" strokeWidth="3.5" strokeLinejoin="round" />
      <circle cx="22" cy="19" r="3.5" fill="#0b1d33" />
      <path d="M36 12 Q40 22 36 32" stroke="#0b1d33" strokeWidth="3" fill="none" opacity=".5" />
    </svg>
  );
}

export function Coral(props: P) {
  return (
    <svg viewBox="0 0 160 140" {...props}>
      <path d="M40 140 V90 Q40 70 26 58 M40 96 Q54 80 52 56 M40 110 Q22 104 14 86" stroke="#ff6b8a" strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M40 140 V90 Q40 70 26 58 M40 96 Q54 80 52 56" stroke="#ffa3b6" strokeWidth="5" strokeLinecap="round" fill="none" opacity=".6" />
      <path d="M112 140 Q110 100 124 70 M112 120 Q96 96 98 72 M118 104 Q140 96 146 80" stroke="#ffd93d" strokeWidth="12" strokeLinecap="round" fill="none" />
      <ellipse cx="80" cy="138" rx="78" ry="8" fill="#0b1d33" opacity=".35" />
    </svg>
  );
}

export function Bottle(props: P) {
  return (
    <svg viewBox="0 0 220 110" {...props}>
      <defs>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9fe0c8" stopOpacity=".95" />
          <stop offset="1" stopColor="#2e9bd6" stopOpacity=".8" />
        </linearGradient>
      </defs>
      <path d="M20 30 Q10 30 10 55 Q10 80 20 80 H130 Q150 80 160 68 H186 V42 H160 Q150 30 130 30Z" fill="url(#glass)" stroke="#0b1d33" strokeWidth="5" strokeLinejoin="round" />
      <rect x="184" y="38" width="22" height="34" rx="5" fill="#c27a3e" stroke="#0b1d33" strokeWidth="5" />
      <rect x="40" y="44" width="80" height="22" rx="11" fill="#f5e6c8" stroke="#0b1d33" strokeWidth="4" />
      <path d="M60 48 V62 M100 48 V62" stroke="#ff6b8a" strokeWidth="4" />
      <path d="M28 40 Q60 36 120 38" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".7" fill="none" />
    </svg>
  );
}

export function Campfire(props: P) {
  return (
    <svg viewBox="0 0 200 180" {...props}>
      <ellipse cx="100" cy="165" rx="90" ry="12" fill="#ffd93d" opacity=".25" />
      <g className="anim-flame">
        <path d="M100 20 Q140 80 128 120 Q120 150 100 150 Q80 150 72 120 Q60 80 100 20Z" fill="#ff6b8a" stroke="#0b1d33" strokeWidth="5" strokeLinejoin="round" />
        <path d="M100 66 Q122 100 114 126 Q108 142 100 142 Q92 142 86 126 Q78 100 100 66Z" fill="#ffd93d" />
      </g>
      <rect x="30" y="140" width="140" height="18" rx="9" fill="#9a6a3c" stroke="#0b1d33" strokeWidth="5" transform="rotate(-12 100 150)" />
      <rect x="30" y="140" width="140" height="18" rx="9" fill="#7a431b" stroke="#0b1d33" strokeWidth="5" transform="rotate(12 100 150)" />
    </svg>
  );
}

export function Lantern(props: P) {
  return (
    <svg viewBox="0 0 60 90" {...props}>
      <path d="M30 2 V12" stroke="#0b1d33" strokeWidth="4" />
      <path d="M20 14 Q30 4 40 14Z" fill="#1b4f9c" stroke="#0b1d33" strokeWidth="3.5" />
      <rect x="14" y="16" width="32" height="50" rx="10" fill="#ffd93d" stroke="#0b1d33" strokeWidth="4" className="anim-glow" />
      <path d="M30 26 Q38 40 30 54 Q22 40 30 26Z" fill="#ff6b8a" />
      <rect x="12" y="66" width="36" height="10" rx="4" fill="#1b4f9c" stroke="#0b1d33" strokeWidth="3.5" />
    </svg>
  );
}

export function Mountains(props: P) {
  return (
    <svg viewBox="0 0 1200 300" preserveAspectRatio="none" {...props}>
      <path d="M0 300 L0 200 L160 90 L260 170 L420 40 L560 160 L700 70 L860 180 L1000 60 L1200 190 L1200 300Z" fill="#1b4f9c" />
      <path d="M420 40 L470 85 L440 80 L420 100 L400 78 L380 84Z M1000 60 L1046 100 L1016 96 L1000 112 L984 92 L960 98Z" fill="#fff" opacity=".9" />
      <path d="M0 300 L0 250 L200 170 L340 230 L520 150 L700 240 L900 160 L1080 230 L1200 200 L1200 300Z" fill="#0b1d33" />
    </svg>
  );
}

export function Cairn(props: P) {
  return (
    <svg viewBox="0 0 60 70" {...props}>
      <ellipse cx="30" cy="62" rx="24" ry="7" fill="#9a8a72" stroke="#0b1d33" strokeWidth="3" />
      <ellipse cx="30" cy="48" rx="18" ry="7" fill="#c9b796" stroke="#0b1d33" strokeWidth="3" />
      <ellipse cx="30" cy="35" rx="13" ry="6" fill="#9a8a72" stroke="#0b1d33" strokeWidth="3" />
      <ellipse cx="30" cy="23" rx="8" ry="5" fill="#c9b796" stroke="#0b1d33" strokeWidth="3" />
      <path d="M30 18 V2 L44 8 L30 12" fill="#ff6b8a" stroke="#0b1d33" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function Signpost(props: P) {
  const boards = [
    { y: 30, t: "SNBT →", r: -6, c: "#2e9bd6" },
    { y: 74, t: "← SNBP", r: 5, c: "#ffd93d" },
    { y: 118, t: "MANDIRI →", r: -3, c: "#ff6b8a" },
    { y: 162, t: "← SWASTA", r: 6, c: "#f5e6c8" },
  ];
  return (
    <svg viewBox="0 0 260 260" {...props}>
      <rect x="120" y="16" width="20" height="240" rx="6" fill="#9a6a3c" stroke="#0b1d33" strokeWidth="5" />
      {boards.map((b) => (
        <g key={b.t} transform={`rotate(${b.r} 130 ${b.y + 16})`}>
          <path d={`M30 ${b.y} H220 L240 ${b.y + 16} L220 ${b.y + 32} H30 L14 ${b.y + 16}Z`} fill={b.c} stroke="#0b1d33" strokeWidth="5" strokeLinejoin="round" />
          <text x="128" y={b.y + 23} textAnchor="middle" fontFamily="Montserrat" fontWeight="900" fontSize="17" fill="#0b1d33">
            {b.t}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Observatory(props: P) {
  return (
    <svg viewBox="0 0 160 140" {...props}>
      <rect x="30" y="70" width="100" height="66" rx="6" fill="#f5e6c8" stroke="#0b1d33" strokeWidth="5" />
      <path d="M24 74 Q24 14 80 14 Q136 14 136 74Z" fill="#e6eef8" stroke="#0b1d33" strokeWidth="5" />
      <path d="M72 16 H88 V74 H72Z" fill="#0b1d33" />
      <rect x="84" y="20" width="44" height="12" rx="6" fill="#ffd93d" stroke="#0b1d33" strokeWidth="4" transform="rotate(-30 84 26)" />
      <rect x="66" y="100" width="28" height="36" rx="12" fill="#ff6b8a" stroke="#0b1d33" strokeWidth="4" />
    </svg>
  );
}

// Pengembara: siluet bertopi + ransel. mode "boat" = naik perahu kecil.
export function Wanderer({ mode, ...props }: P & { mode: "boat" | "walk" }) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      {mode === "boat" && <path d="M6 44 H58 L50 56 H14Z" fill="#ff6b8a" stroke="#0b1d33" strokeWidth="3.5" strokeLinejoin="round" />}
      <g transform={mode === "boat" ? "translate(0 -6)" : ""}>
        <rect x="34" y="22" width="12" height="16" rx="4" fill="#ffd93d" stroke="#0b1d33" strokeWidth="3" />
        <circle cx="30" cy="14" r="6" fill="#f5e6c8" stroke="#0b1d33" strokeWidth="3" />
        <path d="M20 12 H40 M24 12 Q24 4 30 4 Q36 4 36 12" fill="#1b4f9c" stroke="#0b1d33" strokeWidth="3" strokeLinejoin="round" />
        <path d="M24 22 H36 V40 H24Z" fill="#2e9bd6" stroke="#0b1d33" strokeWidth="3" strokeLinejoin="round" />
        {mode === "walk" && <path d="M26 40 L22 54 M34 40 L38 54" stroke="#0b1d33" strokeWidth="4" strokeLinecap="round" />}
        <path d="M18 24 L14 52" stroke="#9a6a3c" strokeWidth="3.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function WaveBand({ color, className = "", opacity = 1 }: { color: string; className?: string; opacity?: number }) {
  return (
    <div className={`pointer-events-none absolute left-0 w-[200%] ${className}`} style={{ animation: "wave-x 14s linear infinite", opacity }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-full w-1/2 float-left">
        <path d="M0 40 Q90 0 180 40 T360 40 T540 40 T720 40 T900 40 T1080 40 T1260 40 T1440 40 V80 H0Z" fill={color} />
      </svg>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-full w-1/2 float-left">
        <path d="M0 40 Q90 0 180 40 T360 40 T540 40 T720 40 T900 40 T1080 40 T1260 40 T1440 40 V80 H0Z" fill={color} />
      </svg>
    </div>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 30 Q30 4 60 22 T104 14" />
      <path d="M94 6 L106 14 L96 24" />
    </svg>
  );
}

export function KnotDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 40" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M0 20 H160 Q170 20 176 12 Q184 2 194 10 Q202 18 196 26 Q188 36 180 26 Q174 18 186 14 Q200 10 214 20 Q222 28 232 22 Q240 16 240 20 H400" />
    </svg>
  );
}
