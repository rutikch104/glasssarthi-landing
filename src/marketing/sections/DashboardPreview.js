import SectionHeading from "../components/SectionHeading";

// SVG-only mockup of the app dashboard. Matches the real palette + type set
// so what a visitor sees here is honest — not a stock illustration.
function DashboardMock() {
  const stat = (x, label, value, trend, tone = "cyan") => (
    <g transform={`translate(${x}, 0)`}>
      <rect x="0" y="0" width="150" height="76" rx="10" fill="rgba(17,27,53,0.9)" stroke="rgba(255,255,255,0.08)" />
      <text x="14" y="22" fontFamily="var(--m-mono)" fontSize="9" fill="#6B7A9F" letterSpacing="1.5">{label}</text>
      <text x="14" y="48" fontFamily="var(--m-mono)" fontSize="22" fontWeight="600" fill="#F5F7FA">{value}</text>
      <text x="14" y="66" fontFamily="var(--m-mono)" fontSize="10" fill={tone === "mint" ? "#37E3A5" : "#7ED4E5"}>{trend}</text>
    </g>
  );

  // Simple bar chart data
  const bars = [24, 42, 31, 55, 48, 62, 71, 58, 66, 72, 60, 78];

  return (
    <div style={{ position: "relative" }}>
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: -20,
          background: "radial-gradient(50% 60% at 50% 50%, rgba(79,93,255,0.20), transparent 70%)",
          filter: "blur(24px)", zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative", zIndex: 1,
          border: "1px solid var(--m-line-hi)",
          borderRadius: 18,
          overflow: "hidden",
          background: "linear-gradient(180deg, rgba(11,25,56,0.9), rgba(5,11,31,0.9))",
          boxShadow: "0 40px 100px rgba(0,0,0,0.55)",
        }}
      >
        {/* Faux window chrome */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "12px 16px",
            borderBottom: "1px solid var(--m-line)",
            background: "rgba(3,8,20,0.7)",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF6B81", opacity: 0.7 }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFB95E", opacity: 0.7 }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#37E3A5", opacity: 0.7 }} />
          <span className="m-mono" style={{ marginLeft: 12, fontSize: 11, color: "var(--m-fg-quiet)" }}>
            glassshop.app / dashboard
          </span>
        </div>

        <svg viewBox="0 0 720 440" style={{ display: "block", width: "100%", height: "auto" }} aria-hidden="true">
          {/* Sidebar */}
          <rect x="0" y="0" width="140" height="440" fill="rgba(3,8,20,0.9)" />
          {[["Dashboard", true], ["Stock", false], ["Optimize", false], ["Quotes", false], ["Invoices", false], ["Audit", false]].map(([label, active], i) => (
            <g key={label} transform={`translate(0, ${18 + i * 40})`}>
              {active && <rect x="12" y="0" width="116" height="30" rx="8" fill="rgba(79,93,255,0.16)" stroke="rgba(79,93,255,0.35)" strokeWidth="0.75" />}
              <circle cx="26" cy="15" r="3" fill={active ? "#7ED4E5" : "#3E4A6D"} />
              <text x="40" y="19" fontFamily="var(--m-sans)" fontSize="12" fill={active ? "#F5F7FA" : "#7180A6"} fontWeight={active ? 600 : 400}>{label}</text>
            </g>
          ))}

          {/* Main content */}
          <g transform="translate(160, 24)">
            <text fontFamily="var(--m-sans)" fontSize="16" fontWeight="700" fill="#F5F7FA" x="0" y="16">Dashboard</text>
            <text fontFamily="var(--m-mono)" fontSize="10" fill="#6B7A9F" x="0" y="32" letterSpacing="1.5">TODAY · 03:14 IST</text>

            {/* Stat row */}
            <g transform="translate(0, 48)">
              {stat(0,   "TOTAL STOCK",    "1,284", "▲ 12.4% vs last mo")}
              {stat(165, "LOW ALERTS",     "6",     "▼ 3 since Mon", "mint")}
              {stat(330, "PENDING PRICES", "2",     "→ owner action")}
            </g>

            {/* Chart card */}
            <g transform="translate(0, 148)">
              <rect x="0" y="0" width="315" height="220" rx="10" fill="rgba(17,27,53,0.9)" stroke="rgba(255,255,255,0.08)" />
              <text x="16" y="22" fontFamily="var(--m-mono)" fontSize="9" fill="#6B7A9F" letterSpacing="1.5">SALES · 12 MO</text>
              <text x="16" y="42" fontFamily="var(--m-mono)" fontSize="18" fontWeight="600" fill="#F5F7FA">₹ 14.8L</text>

              {/* Bars */}
              {bars.map((h, i) => (
                <rect
                  key={i}
                  x={16 + i * 24}
                  y={200 - h * 2}
                  width="14"
                  height={h * 2}
                  rx="2"
                  fill={i === bars.length - 1 ? "#4F5DFF" : "rgba(126,212,229,0.35)"}
                />
              ))}
              <line x1="16" y1="200" x2="300" y2="200" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            </g>

            {/* Recent orders */}
            <g transform="translate(335, 148)">
              <rect x="0" y="0" width="210" height="220" rx="10" fill="rgba(17,27,53,0.9)" stroke="rgba(255,255,255,0.08)" />
              <text x="16" y="22" fontFamily="var(--m-mono)" fontSize="9" fill="#6B7A9F" letterSpacing="1.5">RECENT ORDERS</text>
              {[
                { id: "2481", g: "Mirror 6mm",  st: "APPROVED",  tone: "#37E3A5" },
                { id: "2480", g: "Clear 5mm",   st: "DRAFT",     tone: "#7ED4E5" },
                { id: "2479", g: "Tinted 8mm",  st: "PENDING",   tone: "#FFB95E" },
                { id: "2478", g: "Reflect 4mm", st: "INVOICED",  tone: "#F5F7FA" },
              ].map((r, i) => (
                <g key={r.id} transform={`translate(0, ${44 + i * 42})`}>
                  <text x="16" y="16" fontFamily="var(--m-mono)" fontSize="11" fill="#F5F7FA">#{r.id}</text>
                  <text x="60" y="16" fontFamily="var(--m-sans)" fontSize="11" fill="#A9B3D1">{r.g}</text>
                  <rect x="140" y="4" width="60" height="18" rx="9" fill="rgba(255,255,255,0.04)" stroke={r.tone} strokeWidth="0.6" />
                  <text x="170" y="16" textAnchor="middle" fontFamily="var(--m-mono)" fontSize="9" fill={r.tone} letterSpacing="0.5">{r.st}</text>
                </g>
              ))}
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section id="preview" aria-labelledby="preview-title">
      <div className="m-wrap">
        <SectionHeading
          title={<span id="preview-title">A control room that mirrors the shop floor.</span>}
          subtitle="Live stock, pending price approvals, low-alerts, and today's sales — one view, updated on every mutation."
        />
        <div style={{ marginTop: 48 }}>
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
