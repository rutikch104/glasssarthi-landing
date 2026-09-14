import SectionHeading from "../components/SectionHeading";

const cells = [
  {
    k: "MM · INCH · FEET",
    v: "unit-safe",
    accent: "cyan",
    art: (
      <svg viewBox="0 0 64 40" width="64" height="40" aria-hidden="true" fill="none">
        <rect x="4" y="14" width="56" height="12" rx="3" fill="rgba(126,212,229,0.08)" stroke="rgba(126,212,229,0.45)" strokeWidth="1" />
        {[8, 16, 24, 32, 40, 48, 56].map((x) => (
          <line key={x} x1={x} y1="14" x2={x} y2={x % 16 === 0 ? 22 : 19} stroke="rgba(126,212,229,0.7)" strokeWidth="1" />
        ))}
        <text x="10" y="11" fill="#7ED4E5" style={{ fontFamily: "var(--m-mono)", fontSize: 7, letterSpacing: "0.04em" }}>MM</text>
        <text x="28" y="11" fill="#A9B3D1" style={{ fontFamily: "var(--m-mono)", fontSize: 7 }}>IN</text>
        <text x="46" y="11" fill="#A9B3D1" style={{ fontFamily: "var(--m-mono)", fontSize: 7 }}>FT</text>
        <path d="M8 32h48" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    k: "Guillotine",
    v: "cutting plan",
    accent: "indigo",
    art: (
      <svg viewBox="0 0 64 40" width="64" height="40" aria-hidden="true" fill="none">
        <rect x="8" y="6" width="48" height="28" rx="3" fill="rgba(79,93,255,0.08)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <rect x="8" y="6" width="28" height="16" rx="2" fill="rgba(79,93,255,0.42)" stroke="rgba(108,121,255,0.7)" strokeWidth="1" />
        <rect x="36" y="6" width="20" height="28" rx="2" fill="rgba(126,212,229,0.16)" stroke="rgba(126,212,229,0.45)" strokeWidth="1" strokeDasharray="3 2" />
        <rect x="8" y="22" width="28" height="12" rx="2" fill="rgba(126,212,229,0.12)" stroke="rgba(126,212,229,0.35)" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="36" y1="6" x2="36" y2="34" stroke="rgba(245,247,250,0.35)" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="8" y1="22" x2="36" y2="22" stroke="rgba(245,247,250,0.35)" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    k: "Remnants",
    v: "back to stock",
    accent: "mint",
    art: (
      <svg viewBox="0 0 64 40" width="64" height="40" aria-hidden="true" fill="none">
        <rect x="6" y="8" width="22" height="24" rx="2.5" fill="rgba(55,227,165,0.1)" stroke="rgba(55,227,165,0.45)" strokeWidth="1" />
        <rect x="32" y="8" width="14" height="14" rx="2" fill="rgba(126,212,229,0.14)" stroke="rgba(126,212,229,0.5)" strokeWidth="1" strokeDasharray="3 2" />
        <rect x="48" y="8" width="10" height="24" rx="2" fill="rgba(126,212,229,0.1)" stroke="rgba(126,212,229,0.4)" strokeWidth="1" strokeDasharray="3 2" />
        <path d="M17 20c0 0 6 2 10 6" stroke="#37E3A5" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        <path d="M24 24l3 3-4 0" stroke="#37E3A5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        <circle cx="17" cy="28" r="1.4" fill="#37E3A5" opacity="0.85" />
      </svg>
    ),
  },
  {
    k: "Multi-tenant",
    v: "shop-scoped",
    accent: "amber",
    art: (
      <svg viewBox="0 0 64 40" width="64" height="40" aria-hidden="true" fill="none">
        <rect x="6" y="14" width="18" height="18" rx="2.5" fill="rgba(255,185,94,0.1)" stroke="rgba(255,185,94,0.5)" strokeWidth="1" />
        <rect x="23" y="10" width="18" height="22" rx="2.5" fill="rgba(79,93,255,0.18)" stroke="rgba(108,121,255,0.55)" strokeWidth="1" />
        <rect x="40" y="16" width="18" height="16" rx="2.5" fill="rgba(126,212,229,0.1)" stroke="rgba(126,212,229,0.45)" strokeWidth="1" />
        <path d="M12 22h6M12 26h4" stroke="rgba(255,185,94,0.7)" strokeWidth="1" strokeLinecap="round" />
        <path d="M29 18h6M29 22h5M29 26h4" stroke="rgba(168,176,255,0.85)" strokeWidth="1" strokeLinecap="round" />
        <path d="M46 22h6M46 26h4" stroke="rgba(126,212,229,0.7)" strokeWidth="1" strokeLinecap="round" />
        <circle cx="32" cy="8" r="2" fill="#6C79FF" opacity="0.9" />
      </svg>
    ),
  },
];

const accentMap = {
  cyan: {
    wash: "linear-gradient(145deg, rgba(126,212,229,0.14), transparent 68%)",
    rim: "linear-gradient(90deg, rgba(126,212,229,0.7), transparent 75%)",
    glow: "rgba(126,212,229,0.18)",
    border: "rgba(126,212,229,0.28)",
  },
  indigo: {
    wash: "linear-gradient(145deg, rgba(79,93,255,0.16), transparent 68%)",
    rim: "linear-gradient(90deg, rgba(108,121,255,0.7), transparent 75%)",
    glow: "rgba(79,93,255,0.2)",
    border: "rgba(108,121,255,0.3)",
  },
  mint: {
    wash: "linear-gradient(145deg, rgba(55,227,165,0.12), transparent 68%)",
    rim: "linear-gradient(90deg, rgba(55,227,165,0.55), transparent 75%)",
    glow: "rgba(55,227,165,0.14)",
    border: "rgba(55,227,165,0.28)",
  },
  amber: {
    wash: "linear-gradient(145deg, rgba(255,185,94,0.12), transparent 68%)",
    rim: "linear-gradient(90deg, rgba(255,185,94,0.55), transparent 75%)",
    glow: "rgba(255,185,94,0.14)",
    border: "rgba(255,185,94,0.28)",
  },
};

export default function ProductOverview() {
  return (
    <section aria-labelledby="overview-title" style={{ paddingTop: 32 }}>
      <div className="m-wrap">
        <SectionHeading
          title={<span id="overview-title">A single system that knows glass.</span>}
        />
        <div className="m-overview-layout" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 48, marginTop: 32, alignItems: "start" }}>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: "var(--m-fg-mute)" }}>
            Most inventory software treats stock like a spreadsheet. Glass shops don't work that way. Thickness, unit
            conversions between millimeters and feet, cutting waste, remnants that go back on the rack, and staff who
            need pricing to be approved before it goes out — none of that fits in a generic tool. GlassSarthi is built for
            the material.
          </p>

          <div className="m-anatomy-grid" role="list">
            {cells.map((cell) => {
              const a = accentMap[cell.accent];
              return (
                <article
                  key={cell.k}
                  className="m-anatomy-tile"
                  role="listitem"
                  style={{
                    "--tile-wash": a.wash,
                    "--tile-rim": a.rim,
                    "--tile-glow": a.glow,
                    "--tile-border": a.border,
                  }}
                >
                  <span className="m-anatomy-wash" aria-hidden="true" />
                  <span className="m-anatomy-rim" aria-hidden="true" />
                  <div className="m-anatomy-art" aria-hidden="true">
                    {cell.art}
                  </div>
                  <div className="m-anatomy-copy">
                    <div className="m-mono m-anatomy-k">{cell.k}</div>
                    <div className="m-anatomy-v">{cell.v}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .m-anatomy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .m-anatomy-tile {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          display: flex;
          flex-direction: column;
          padding: 18px 18px 16px;
          border-radius: 16px;
          min-width: 0;
          background:
            linear-gradient(165deg, rgba(28, 42, 78, 0.78) 0%, rgba(14, 22, 48, 0.92) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.05) inset,
            0 10px 28px rgba(0, 0, 0, 0.28);
          transition:
            transform 240ms cubic-bezier(0.2, 0.7, 0.25, 1),
            border-color 240ms ease,
            box-shadow 240ms ease;
        }

        .m-anatomy-wash {
          position: absolute;
          inset: 0;
          background: var(--tile-wash);
          pointer-events: none;
          z-index: 0;
        }
        .m-anatomy-rim {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: var(--tile-rim);
          pointer-events: none;
          z-index: 1;
        }

        .m-anatomy-art {
          position: relative;
          z-index: 1;
          width: 64px;
          height: 40px;
          flex-shrink: 0;
          margin-bottom: 14px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        .m-anatomy-art svg {
          width: 56px;
          height: 34px;
          display: block;
        }

        .m-anatomy-copy {
          position: relative;
          z-index: 1;
          min-width: 0;
        }

        .m-anatomy-k {
          position: relative;
          z-index: 1;
          font-size: 11px;
          color: var(--m-fg-quiet);
          letter-spacing: 0.1em;
          line-height: 1.35;
          word-break: break-word;
        }
        .m-anatomy-v {
          position: relative;
          z-index: 1;
          font-size: 15px;
          color: var(--m-fg);
          margin-top: 6px;
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .m-anatomy-tile:hover {
          transform: translateY(-3px);
          border-color: var(--tile-border);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.06) inset,
            0 16px 36px rgba(0, 0, 0, 0.42),
            0 0 28px var(--tile-glow);
        }
        .m-anatomy-tile:hover .m-anatomy-art {
          border-color: var(--tile-border);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 0 18px var(--tile-glow);
        }

        @media (max-width: 900px) {
          #overview-title { max-width: 100%; }
          .m-overview-layout {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            margin-top: 24px !important;
          }
          .m-overview-layout > p {
            font-size: 15.5px !important;
            line-height: 1.6 !important;
          }
          .m-anatomy-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
          .m-anatomy-tile {
            padding: 14px 12px 12px !important;
            border-radius: 14px !important;
          }
          .m-anatomy-art {
            width: 52px !important;
            height: 34px !important;
            margin-bottom: 10px !important;
            border-radius: 8px !important;
          }
          .m-anatomy-art svg {
            width: 48px !important;
            height: 30px !important;
          }
          .m-anatomy-k {
            font-size: 9.5px !important;
            letter-spacing: 0.06em !important;
          }
          .m-anatomy-v {
            font-size: 13.5px !important;
            margin-top: 4px !important;
          }
        }

        /* Phones: compact horizontal rows in a tight 2×2 — no tall stacked list */
        @media (max-width: 560px) {
          .m-anatomy-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .m-anatomy-tile {
            flex-direction: row !important;
            align-items: center !important;
            gap: 12px !important;
            padding: 12px 14px !important;
          }
          .m-anatomy-art {
            margin-bottom: 0 !important;
            width: 56px !important;
            height: 36px !important;
          }
          .m-anatomy-art svg {
            width: 50px !important;
            height: 32px !important;
          }
          .m-anatomy-k {
            font-size: 10px !important;
            letter-spacing: 0.08em !important;
          }
          .m-anatomy-v {
            font-size: 14px !important;
            margin-top: 3px !important;
          }
          .m-anatomy-tile:hover {
            transform: translateY(-1px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .m-anatomy-tile { transition: none; }
          .m-anatomy-tile:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
