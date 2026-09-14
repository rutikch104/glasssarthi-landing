import SectionHeading from "../components/SectionHeading";

const voices = [
  {
    quote: "We stopped losing 15% of every sheet to bad cutting. The optimizer plans the sheet in seconds and the leftovers show up on the rack the next morning.",
    name: "Rakesh M.",
    role: "Owner, Mumbai glass shop",
    initials: "RM",
  },
  {
    quote: "Staff never quoted the wrong price again. Pending goes to me, I approve, and the stock unlocks. That one thing paid for the tool.",
    name: "Anjali P.",
    role: "Owner, Ahmedabad mirror works",
    initials: "AP",
  },
  {
    quote: "The audit trail solved a customer dispute in three minutes. I used to spend an evening on that.",
    name: "Vikas J.",
    role: "Manager, Pune fabrication",
    initials: "VJ",
  },
];

function Avatar({ initials }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 40, height: 40, borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(126,212,229,0.3), rgba(79,93,255,0.35))",
        border: "1px solid rgba(255,255,255,0.14)",
        display: "grid", placeItems: "center",
        fontFamily: "var(--m-mono)", fontSize: 12, fontWeight: 600,
        color: "#F5F7FA",
      }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title">
      <div className="m-wrap">
        <SectionHeading
          title={<span id="testimonials-title">Words from the people who actually run shops.</span>}
        />

        <div
          className="m-quote-grid"
          style={{
            marginTop: 36,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {voices.map((v) => (
            <figure key={v.name} className="m-card m-quote-card" style={{ margin: 0, display: "flex", flexDirection: "column", gap: 16, position: "relative", overflow: "hidden" }}>
              <span
                aria-hidden="true"
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 1,
                  background: "linear-gradient(90deg, rgba(126,212,229,0.45), transparent 70%)",
                }}
              />
              <span aria-hidden="true" className="m-mono" style={{ color: "var(--m-glass-cyan)", fontSize: 28, lineHeight: 1, opacity: 0.7 }}>“</span>
              <blockquote style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--m-fg)" }}>
                {v.quote}
              </blockquote>
              <figcaption style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--m-line)" }}>
                <Avatar initials={v.initials} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{v.name}</div>
                  <div style={{ fontSize: 12, color: "var(--m-fg-quiet)" }}>{v.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .m-quote-card {
          background:
            linear-gradient(165deg, rgba(26, 40, 74, 0.7) 0%, rgba(14, 22, 48, 0.9) 100%);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.04) inset,
            0 10px 28px rgba(0, 0, 0, 0.28);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }
        .m-quote-card:hover {
          transform: translateY(-2px);
          border-color: rgba(126, 212, 229, 0.26);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.05) inset,
            0 16px 36px rgba(0, 0, 0, 0.42);
        }
        @media (max-width: 960px) { .m-quote-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .m-quote-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
