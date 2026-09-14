import SectionHeading from "../components/SectionHeading";

const cells = [
  { big: "−80%",    caption: "Time on manual billing",    context: "Draft → confirm → invoice in one click.", accent: "#7ED4E5" },
  { big: "+15%",    caption: "Yield from optimized cuts", context: "Remnants go straight back to stock.", accent: "#37E3A5" },
  { big: "0",       caption: "Pricing surprises",         context: "Owner approves every new glass type.", accent: "#7ED4E5" },
  { big: "Instant", caption: "PDF quotes & invoices",     context: "Tax invoice + delivery challan built in.", accent: "#818CF8" },
  { big: "40+",     caption: "Granular permissions",      context: "Scope staff by module and action.", accent: "#7ED4E5" },
  { big: "Every",   caption: "Change is auditable",       context: "Actor, action, and shop scope, always.", accent: "#37E3A5" },
];

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-title">
      <div className="m-wrap">
        <SectionHeading
          title={<span id="benefits-title">Numbers that show up on the balance sheet.</span>}
        />

        <div
          className="m-benefits-grid"
          style={{
            marginTop: 36,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--m-line)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0,0,0,0.28)",
          }}
        >
          {cells.map((c) => (
            <div
              key={c.caption}
              className="m-benefit-cell"
              style={{
                background: "linear-gradient(165deg, rgba(14,22,48,0.95) 0%, rgba(8,14,32,0.98) 100%)",
                position: "relative",
              }}
            >
              <div
                className="m-mono"
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.02em",
                  color: c.accent, lineHeight: 1,
                }}
              >
                {c.big}
              </div>
              <div style={{ marginTop: 12, fontSize: 15, color: "var(--m-fg)", fontWeight: 500 }}>{c.caption}</div>
              <div style={{ marginTop: 6, fontSize: 13, color: "var(--m-fg-mute)", lineHeight: 1.5 }}>{c.context}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .m-benefit-cell {
          transition: background 200ms ease;
        }
        .m-benefit-cell:hover {
          background: linear-gradient(165deg, rgba(22, 34, 64, 0.98) 0%, rgba(12, 20, 42, 1) 100%) !important;
        }
        @media (max-width: 960px) { .m-benefits-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .m-benefits-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
