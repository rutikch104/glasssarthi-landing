export default function FinalCTA() {
  return (
    <section id="cta" aria-labelledby="cta-title">
      <div className="m-wrap">
        <div
          className="m-cta-panel"
          style={{
            position: "relative",
            borderRadius: 24,
            background:
              "linear-gradient(180deg, rgba(11,25,56,0.9), rgba(3,8,20,0.9)), radial-gradient(60% 60% at 50% 0%, rgba(79,93,255,0.28), transparent 70%)",
            border: "1px solid var(--m-line-hi)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 0 60px rgba(79,93,255,0.08)",
            overflow: "hidden",
          }}
        >
          <span
            aria-hidden="true"
            style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 120, height: 2, background: "var(--m-glass-cyan)" }}
          />

          <h2
            id="cta-title"
            style={{
              margin: "0 auto",
              maxWidth: 720,
              fontSize: "clamp(30px, 4vw, 52px)",
              lineHeight: 1.08, letterSpacing: "-0.03em", fontWeight: 800,
              textAlign: "center",
            }}
          >
            Stop counting sheets by hand.
          </h2>
          <p style={{ margin: "16px auto 0", maxWidth: 560, textAlign: "center", color: "var(--m-fg-mute)", fontSize: 16, lineHeight: 1.55 }}>
            Register your shop in under a minute. Add stock, run a cutting plan, and issue a GST invoice today.
          </p>
          {/* Start free / signup hidden for now — Nestify soft launch */}
          <div className="m-btn-row m-cta-actions" style={{ marginTop: 28 }}>
            <a href="mailto:contact@glasssarthi.com" className="m-btn m-btn-ghost">Contact us</a>
          </div>

          <div className="m-mono m-cta-note" style={{ marginTop: 28, fontSize: 11, color: "var(--m-fg-quiet)", letterSpacing: "0.14em", textAlign: "center" }}>
            NO CREDIT CARD · SET UP IN MINUTES
          </div>
        </div>
      </div>
    </section>
  );
}
