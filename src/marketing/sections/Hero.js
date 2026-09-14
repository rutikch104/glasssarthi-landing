import CuttingPlanArt from "./CuttingPlanArt";
import { appPath } from "../../config";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="m-hero">
      <div className="m-wrap m-hero-grid">
        <div className="m-anim-fade">
          <h1
            id="hero-title"
            style={{
              fontSize: "var(--m-fs-display)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              margin: "0 0 0",
              color: "var(--m-fg)",
            }}
          >
            Every sheet<br />
            <span className="m-hero-line2">has a plan.</span>
          </h1>

          <p style={{ fontSize: "clamp(15px, 3.5vw, 18px)", lineHeight: 1.55, color: "var(--m-fg-mute)", margin: "20px 0 0", maxWidth: 500 }}>
            Track stock, cut sheets with the built-in optimizer, and issue GST invoices — from one system that speaks glass, not spreadsheets.
          </p>

          <div className="m-btn-row" style={{ marginTop: 28 }}>
            <a href={appPath("/register")} className="m-btn m-btn-primary">
              Start free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#cta" className="m-btn m-btn-ghost">Book a demo</a>
          </div>
        </div>

        <div className="m-hero-art" style={{ display: "grid", placeItems: "center" }}>
          <CuttingPlanArt />
        </div>
      </div>

      <style>{`
        .m-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .m-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .m-hero-art {
            display: grid !important;
            max-width: 400px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .m-hero-art { max-width: 320px !important; }
        }
      `}</style>
    </section>
  );
}
