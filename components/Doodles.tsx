type DoodleProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function Sparkle({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M12 0c.7 7.2 4.8 11.3 12 12-7.2.7-11.3 4.8-12 12-.7-7.2-4.8-11.3-12-12C7.2 11.3 11.3 7.2 12 0Z" />
    </svg>
  );
}

export function Squiggle({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 16c9-12 16 8 25-2s16 7 25-3 16 8 25-2 16 6 36-2" />
    </svg>
  );
}

export function SmileArcs({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 22C12 9 27 8 38 18" />
      <path d="M82 18c11-10 26-9 34 4" />
    </svg>
  );
}

export function Crown({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 52 22 16l22 20L60 8l16 28 22-20 12 36" />
      <path d="M12 60h96" strokeLinecap="round" />
    </svg>
  );
}

export function CautionSign({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 138" className={className} aria-hidden="true">
      <path
        d="M16 130 48 18c2-7 12-7 14 0l32 112c2 6-3 8-8 8H24c-5 0-10-2-8-8Z"
        fill="#f6c945"
        stroke="#241e12"
        strokeWidth="4"
      />
      <path
        d="M33 116 55 34c1-4 6-4 7 0l22 82c1 4-2 5-5 5H38c-3 0-6-1-5-5Z"
        fill="#fbf9f3"
        stroke="#241e12"
        strokeWidth="3"
      />
      <path
        d="M56 63 73 104c1 3-1 4-3 4H44c-2 0-4-1-3-4l13-41c1-4 3-4 2 0Z"
        fill="#241e12"
      />
      <path
        d="M59 79v13M59 99v1"
        stroke="#f6c945"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M16 132h88" stroke="#241e12" strokeWidth="4" strokeLinecap="round" />
      <text
        x="59"
        y="27"
        textAnchor="middle"
        fill="#241e12"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fontWeight="700"
        letterSpacing="1.5"
      >
        CAUTION
      </text>
    </svg>
  );
}

export function Bomb({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path
        d="M63 27c-1-12 9-18 22-16"
        fill="none"
        stroke="#241e12"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="54" cy="69" r="37" fill="#241e12" />
      <ellipse cx="42" cy="55" rx="9" ry="6" fill="#4c463b" opacity=".8" />
      <path
        d="M83 13c1 5 4 8 9 9-5 1-8 4-9 9-1-5-4-8-9-9 5-1 8-4 9-9Z"
        fill="#f6c945"
      />
      <circle cx="52" cy="66" r="2.5" fill="#fbf9f3" opacity=".6" />
    </svg>
  );
}

export function Cone({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <ellipse cx="60" cy="105" rx="43" ry="9" fill="#c9542b" />
      <path
        d="M60 15c6 0 9 4 11 11l18 72H31l18-72c2-7 5-11 11-11Z"
        fill="#e56b3d"
        stroke="#241e12"
        strokeWidth="3.5"
      />
      <path d="M45 56h30l4 16H41l4-16Z" fill="#f7f4ed" />
      <path d="M37 82h46l3 12H34l3-12Z" fill="#f7f4ed" />
      <path
        d="M30 96h60c4 0 6 2 6 5s-2 5-6 5H30c-4 0-6-2-6-5s2-5 6-5Z"
        fill="#e56b3d"
        stroke="#241e12"
        strokeWidth="3"
      />
    </svg>
  );
}

export function ArrowDoodle({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 54c18-41 49-49 82-30" />
      <path d="M73 13c7 6 12 9 18 10-3 7-4 12-3 20" />
    </svg>
  );
}

export function Avatar({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 300 300" className={className} aria-hidden="true">
      <circle cx="150" cy="154" r="118" fill="#f6c945" />
      <circle cx="150" cy="154" r="118" fill="url(#avatarGlow)" opacity=".65" />
      <defs>
        <radialGradient id="avatarGlow" cx="40%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#fffdf6" />
          <stop offset="100%" stopColor="#f6c945" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path
        d="M58 143c0-58 38-92 92-92s92 34 92 92c0 16-5 28-14 34-4-26-16-39-32-45-23 10-69 10-92 0-16 6-28 19-32 45-9-6-14-18-14-34Z"
        fill="#241e12"
      />
      <ellipse cx="150" cy="151" rx="66" ry="72" fill="#bd8154" />
      <path
        d="M87 126c10-11 27-16 44-8 11 5 25 5 38 0 16-7 31-1 41 10 4 5 4 11 1 17-6-15-18-20-31-18-16 15-67 15-83 0-13-2-25 3-31 18-3-6-2-14 1-19Z"
        fill="#241e12"
      />
      <circle cx="124" cy="150" r="18" fill="none" stroke="#241e12" strokeWidth="5" />
      <circle cx="176" cy="150" r="18" fill="none" stroke="#241e12" strokeWidth="5" />
      <path d="M142 150h16" stroke="#241e12" strokeWidth="5" strokeLinecap="round" />
      <circle cx="124" cy="151" r="4.5" fill="#241e12" />
      <circle cx="176" cy="151" r="4.5" fill="#241e12" />
      <path
        d="M130 190c11 9 29 9 40 0"
        fill="none"
        stroke="#241e12"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <ellipse cx="104" cy="177" rx="11" ry="6" fill="#e58e6f" opacity=".55" />
      <ellipse cx="196" cy="177" rx="11" ry="6" fill="#e58e6f" opacity=".55" />
      <path
        d="M88 266c8-33 31-48 62-48s54 15 62 48"
        fill="#fbf9f3"
        stroke="#241e12"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M150 236c-6-7-18-3-18 6 0 8 11 15 18 20 7-5 18-12 18-20 0-9-12-13-18-6Z"
        fill="#241e12"
      />
    </svg>
  );
}
