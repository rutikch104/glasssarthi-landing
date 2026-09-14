import SectionHeading from "../components/SectionHeading";

const reasons = [
  {
    tag: "01 · MATERIAL",
    title: "Built for glass, not adapted for it.",
    body: "Thicknesses, unit conversions between MM / inch / feet, and remnants are first-class in the data model. You never have to fake a SKU to fit a spreadsheet.",
  },
  {
    tag: "02 · CONTROL",
    title: "Enterprise controls that real teams use.",
    body: "40+ scoped permissions per user. Staff can add stock but not change prices. Owners approve, and pending inventory flips to APPROVED automatically.",
  },
  {
    tag: "03 · ISOLATION",
    title: "Own your data.",
    body: "Every row is scoped by shop from the moment it's created. No shared tables, no cross-tenant queries — verified in the audit log for every request.",
  },
  {
    tag: "04 · GROWTH",
    title: "API-first, so tomorrow is a rename.",
    body: "Optimization, audit, and stock endpoints are documented and consistent. Integrating an ERP or tax filing later is glue, not a rewrite.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" aria-labelledby="why-title">
      <div className="m-wrap">
        <SectionHeading
          title={<span id="why-title">Four reasons this doesn't feel like software you rent.</span>}
        />

        <div
          className="m-why-grid"
          style={{
            marginTop: 36,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          {reasons.map((r) => (
            <article
              key={r.tag}
              className="m-card m-why-card"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 56,
                  background: "linear-gradient(180deg, rgba(126,212,229,0.06), transparent)",
                  pointerEvents: "none",
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  position: "absolute", top: 0, left: 24, width: 40, height: 2,
                  background: "var(--m-glass-cyan)",
                  boxShadow: "0 0 12px rgba(126,212,229,0.45)",
                }}
              />
              <div className="m-mono" style={{ fontSize: 11, color: "var(--m-glass-cyan)", letterSpacing: "0.14em", fontWeight: 600 }}>
                {r.tag}
              </div>
              <h3 style={{ margin: "16px 0 12px", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{r.title}</h3>
              <p style={{ margin: 0, color: "var(--m-fg-mute)", lineHeight: 1.6, fontSize: 15 }}>{r.body}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .m-why-card {
          background:
            linear-gradient(165deg, rgba(26, 40, 74, 0.72) 0%, rgba(14, 22, 48, 0.9) 100%);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.04) inset,
            0 10px 28px rgba(0, 0, 0, 0.3);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }
        .m-why-card:hover {
          transform: translateY(-2px);
          border-color: rgba(126, 212, 229, 0.28);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.05) inset,
            0 16px 36px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(126, 212, 229, 0.08);
        }
        @media (max-width: 800px) { .m-why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
