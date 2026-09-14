// Hero signature: a real cutting-plan diagram.
// A 1200x900mm sheet cut into an 800x600mm order piece;
// the remaining L-shape is split into two remnants that go back into stock.
// Dimensions are labeled in the same monospace used across the page.
export default function CuttingPlanArt() {
  const styleLabel = { fontFamily: "var(--m-mono)", fontSize: 11, fill: "#A9B3D1", letterSpacing: "0.02em" };
  const styleTag   = { fontFamily: "var(--m-mono)", fontSize: 10.5, letterSpacing: "0.02em" };

  return (
    <div
      className="m-anim-float"
      style={{ position: "relative", width: "100%", maxWidth: 560, margin: "0 auto" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: -40,
          background: "radial-gradient(60% 60% at 50% 50%, rgba(126,212,229,0.22), transparent 70%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />
      <svg
        viewBox="0 0 560 460"
        style={{ position: "relative", zIndex: 1, width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Sample cutting plan: a 1200 by 900 millimeter sheet cut into one 800 by 600 order piece and two remnants."
      >
        <defs>
          <linearGradient id="sheet-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(126,212,229,0.06)" />
            <stop offset="1" stopColor="rgba(79,93,255,0.06)" />
          </linearGradient>
          <linearGradient id="order-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(79,93,255,0.55)" />
            <stop offset="1" stopColor="rgba(79,93,255,0.28)" />
          </linearGradient>
          <linearGradient id="remnant-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(126,212,229,0.34)" />
            <stop offset="1" stopColor="rgba(126,212,229,0.14)" />
          </linearGradient>
          <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(126,212,229,0.18)" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Frame + dimension arrows for the whole sheet — 1200 x 900 mm */}
        <text x="280" y="16" textAnchor="middle" style={styleLabel}>1200 mm</text>
        <line x1="80" y1="26" x2="480" y2="26" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        <line x1="80" y1="22" x2="80" y2="30" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        <line x1="480" y1="22" x2="480" y2="30" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />

        <text x="30" y="220" textAnchor="middle" style={styleLabel} transform="rotate(-90 30 220)">900 mm</text>
        <line x1="46" y1="60" x2="46" y2="380" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        <line x1="42" y1="60" x2="50" y2="60" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        <line x1="42" y1="380" x2="50" y2="380" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />

        {/* The sheet */}
        <rect
          x="80" y="60" width="400" height="320" rx="6"
          fill="url(#sheet-fill)"
          stroke="rgba(255,255,255,0.24)"
          strokeWidth="1"
        />

        {/* Order piece — 800 x 600 mm, placed top-left */}
        <g style={{ animation: "m-fade-up 800ms cubic-bezier(0.2,0.65,0.3,1) 0.15s both" }}>
          <rect x="80" y="60" width="267" height="213" rx="4" fill="url(#order-fill)" stroke="rgba(108,121,255,0.6)" strokeWidth="1" />
          <text x="213.5" y="160" textAnchor="middle" fill="#F5F7FA" style={{ fontFamily: "var(--m-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.01em" }}>ORDER</text>
          <text x="213.5" y="178" textAnchor="middle" style={{ ...styleTag, fill: "rgba(245,247,250,0.85)" }}>800 × 600 mm</text>
        </g>

        {/* Remnant A — right column, 400 x 900 mm */}
        <g style={{ animation: "m-fade-up 800ms cubic-bezier(0.2,0.65,0.3,1) 0.35s both" }}>
          <rect x="347" y="60" width="133" height="320" rx="4" fill="url(#remnant-fill)" stroke="rgba(126,212,229,0.55)" strokeWidth="1" strokeDasharray="4 3" />
          <text x="413.5" y="215" textAnchor="middle" fill="#7ED4E5" style={{ fontFamily: "var(--m-sans)", fontSize: 11, fontWeight: 600 }}>REMNANT A</text>
          <text x="413.5" y="232" textAnchor="middle" style={{ ...styleTag, fill: "#7ED4E5" }}>400 × 900</text>
        </g>

        {/* Remnant B — bottom strip under the order, 800 x 300 mm */}
        <g style={{ animation: "m-fade-up 800ms cubic-bezier(0.2,0.65,0.3,1) 0.55s both" }}>
          <rect x="80" y="273" width="267" height="107" rx="4" fill="url(#remnant-fill)" stroke="rgba(126,212,229,0.55)" strokeWidth="1" strokeDasharray="4 3" />
          <text x="213.5" y="322" textAnchor="middle" fill="#7ED4E5" style={{ fontFamily: "var(--m-sans)", fontSize: 11, fontWeight: 600 }}>REMNANT B</text>
          <text x="213.5" y="339" textAnchor="middle" style={{ ...styleTag, fill: "#7ED4E5" }}>800 × 300</text>
        </g>

        {/* Cut lines — the guillotine sequence */}
        <line x1="347" y1="60" x2="347" y2="380" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
        <line x1="80"  y1="273" x2="347" y2="273" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />

        {/* Cut sequence badges */}
        <g>
          <circle cx="347" cy="60" r="10" fill="#050B1F" stroke="#7ED4E5" strokeWidth="1" />
          <text x="347" y="63.5" textAnchor="middle" fill="#7ED4E5" style={{ fontFamily: "var(--m-mono)", fontSize: 10, fontWeight: 600 }}>1</text>
          <circle cx="80" cy="273" r="10" fill="#050B1F" stroke="#7ED4E5" strokeWidth="1" />
          <text x="80" y="276.5" textAnchor="middle" fill="#7ED4E5" style={{ fontFamily: "var(--m-mono)", fontSize: 10, fontWeight: 600 }}>2</text>
        </g>

        {/* Summary strip below the sheet */}
        <g transform="translate(80, 402)">
          <rect x="0" y="0" width="400" height="42" rx="10" fill="url(#hatch)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="16" y="18" style={{ ...styleLabel, fill: "#6B7A9F", fontSize: 10 }}>YIELD</text>
          <text x="16" y="35" style={{ fontFamily: "var(--m-mono)", fontSize: 15, fill: "#37E3A5", fontWeight: 600 }}>94.4%</text>

          <text x="140" y="18" style={{ ...styleLabel, fill: "#6B7A9F", fontSize: 10 }}>REMNANTS</text>
          <text x="140" y="35" style={{ fontFamily: "var(--m-mono)", fontSize: 15, fill: "#F5F7FA", fontWeight: 500 }}>2 saved</text>

          <text x="252" y="18" style={{ ...styleLabel, fill: "#6B7A9F", fontSize: 10 }}>WASTE</text>
          <text x="252" y="35" style={{ fontFamily: "var(--m-mono)", fontSize: 15, fill: "#F5F7FA", fontWeight: 500 }}>60,000 mm²</text>
        </g>
      </svg>
    </div>
  );
}
