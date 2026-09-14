// A tilted glass sheet with a highlight — echoes the product without a literal glass icon.
export default function LogoMark({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mm-face" x1="4" y1="6" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7ED4E5" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#4F5DFF" stopOpacity="0.9" />
          <stop offset="1" stopColor="#4F5DFF" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="mm-shine" x1="6" y1="6" x2="14" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M8 4 L28 8 L24 28 L4 24 Z"
        fill="url(#mm-face)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.75"
      />
      <path
        d="M8 4 L15 5.4 L11.5 26.4 L4 24 Z"
        fill="url(#mm-shine)"
      />
    </svg>
  );
}
