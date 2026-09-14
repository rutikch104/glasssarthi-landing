export default function FeatureCard({ icon, title, body, meta, step }) {
  return (
    <article className="m-feature-stack">
      {/* Soft floor glow — depth without clutter */}
      <span className="m-feature-glow" aria-hidden="true" />

      {/* Background plates — shelf stack behind the focused front card */}
      <span className="m-feature-plate m-feature-plate--back" aria-hidden="true" />
      <span className="m-feature-plate m-feature-plate--mid" aria-hidden="true" />

      <div
        className="m-card m-feature-card"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          height: "100%",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <span
          aria-hidden="true"
          className="m-feature-wash"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 72,
            background: "linear-gradient(180deg, rgba(126,212,229,0.09), transparent)",
            pointerEvents: "none",
          }}
        />
        <span
          aria-hidden="true"
          className="m-feature-rim"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: "linear-gradient(90deg, rgba(126,212,229,0.7), rgba(79,93,255,0.25) 42%, transparent 78%)",
          }}
        />
        <span
          aria-hidden="true"
          className="m-feature-sheen"
        />

        {step && (
          <span
            className="m-mono m-feature-step"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              minWidth: 30,
              height: 26,
              padding: "0 9px",
              borderRadius: 8,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "var(--m-glass-cyan)",
              background: "rgba(126, 212, 229, 0.1)",
              border: "1px solid rgba(126, 212, 229, 0.28)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {step}
          </span>
        )}

        <div
          aria-hidden="true"
          className="m-feature-icon"
          style={{
            width: 42,
            height: 42,
            borderRadius: 11,
            display: "grid",
            placeItems: "center",
            background: "linear-gradient(145deg, rgba(126,212,229,0.2), rgba(79,93,255,0.14))",
            border: "1px solid rgba(126,212,229,0.32)",
            color: "#F5F7FA",
            flexShrink: 0,
            boxShadow: "0 4px 14px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {icon}
        </div>

        <h3
          style={{
            margin: 0,
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: "-0.015em",
            paddingRight: step ? 40 : 0,
            lineHeight: 1.25,
          }}
        >
          {title}
        </h3>
        <p style={{ margin: 0, color: "var(--m-fg-mute)", lineHeight: 1.55, fontSize: 14.5 }}>{body}</p>
        {meta && (
          <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--m-line)" }}>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-fg-quiet)", letterSpacing: "0.02em" }}>{meta}</span>
          </div>
        )}
      </div>
    </article>
  );
}
