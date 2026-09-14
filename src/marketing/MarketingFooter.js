import LogoMark from "./components/LogoMark";

const col = (title, items) => ({ title, items });

const columns = [
  col("Product", [
    ["Features", "#features"],
    ["Dashboard", "#preview"],
    ["Why GlassSarthi", "#why"],
    ["FAQ", "#faq"],
  ]),
  col("For teams", [
    ["Roles & permissions", "#features"],
    ["Audit trail", "#features"],
    ["Multi-tenant", "#why"],
  ]),
  col("Company", [
    ["About", "#top"],
    ["Contact", "mailto:contact@glasssarthi.com"],
    ["Email us", "mailto:contact@glasssarthi.com"],
  ]),
];

export default function MarketingFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--m-line)", padding: "56px 20px 32px", position: "relative" }}>
      <div className="m-wrap m-footer-cols" style={{ display: "grid", gap: 36, gridTemplateColumns: "1.4fr 1fr 1fr 1fr" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <LogoMark size={28} />
            <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.02em" }}>GlassSarthi</span>
          </div>
          <p style={{ margin: "16px 0 0", color: "var(--m-fg-mute)", lineHeight: 1.55, fontSize: 14, maxWidth: 320 }}>
            Inventory, cutting optimization, and billing — built for glass and mirror shops.
          </p>
          <div className="m-mono" style={{ marginTop: 24, fontSize: 12, color: "var(--m-fg-quiet)", letterSpacing: "0.05em" }}>
            MADE FOR INDIAN GLASS SHOPS
          </div>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <div className="m-mono" style={{ fontSize: 11, color: "var(--m-fg-quiet)", letterSpacing: "0.14em", marginBottom: 14 }}>
              {c.title.toUpperCase()}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {c.items.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{ color: "var(--m-fg-mute)", textDecoration: "none", fontSize: 14 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--m-fg)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--m-fg-mute)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="m-wrap"
        style={{
          marginTop: 40, paddingTop: 20, borderTop: "1px solid var(--m-line)",
        }}
      >
        <div className="m-mono" style={{ fontSize: 12, color: "var(--m-fg-quiet)" }}>© 2026 GlassSarthi. All rights reserved.</div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .m-footer-cols { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          footer { padding: 40px 20px 28px !important; }
        }
        @media (max-width: 560px) {
          .m-footer-cols { grid-template-columns: 1fr !important; gap: 20px !important; }
          footer { padding: 32px 16px 24px !important; }
        }
      `}</style>
    </footer>
  );
}
