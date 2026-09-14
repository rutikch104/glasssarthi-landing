import { useEffect, useRef } from "react";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";

const Ic = {
  Stock: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="16" height="14" rx="1.5" />
      <line x1="3" y1="9" x2="19" y2="9" />
      <line x1="3" y1="14" x2="19" y2="14" />
      <line x1="9" y1="4" x2="9" y2="18" />
    </svg>
  ),
  Cut: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="16" height="14" rx="1.5" />
      <line x1="11" y1="4" x2="11" y2="18" strokeDasharray="2 2" />
      <line x1="3" y1="12" x2="11" y2="12" strokeDasharray="2 2" />
    </svg>
  ),
  Price: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 11l7-7 7 7-7 7-7-7z" />
      <circle cx="8" cy="8" r="1" />
      <path d="M13 8l-5 5" />
    </svg>
  ),
  Doc: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h7l4 4v12H6z" />
      <path d="M13 3v4h4" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="15" x2="14" y2="15" />
    </svg>
  ),
  Audit: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M11 7v4l3 2" />
    </svg>
  ),
};

const steps = [
  {
    n: "01",
    icon: Ic.Stock,
    title: "Stock manager",
    body: "Add, edit, transfer between stands. Every mutation writes an audit row and updates low-stock alerts against a threshold you set.",
  },
  {
    n: "02",
    icon: Ic.Cut,
    title: "Cutting optimizer",
    body: "Guillotine bin-packing that classifies orders as exact / good / partial and saves leftover rectangles back to the rack as remnants.",
  },
  {
    n: "03",
    icon: Ic.Price,
    title: "Price approvals",
    body: "New glass types enter as pending. Staff can quote but not approve. Owner confirms, and pending stock flips to APPROVED automatically.",
  },
  {
    n: "04",
    icon: Ic.Doc,
    title: "Quotes & invoices",
    body: "Draft → Confirmed → Invoice with a single click. Tax invoices, delivery challans, and payment tracking, exported as PDF.",
  },
  {
    n: "05",
    icon: Ic.Audit,
    title: "Audit trail",
    body: "Every stock change, login, price approval, and optimization run is recorded with actor, action, and shop scope. Filterable by module.",
  },
];

const support = [
  {
    tag: "ACCESS",
    title: "Role-based staff",
    body: "40+ granular permissions per user — from VIEW_STOCK to MANAGE_REMNANTS.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="8" cy="8" r="3" />
        <circle cx="15" cy="9" r="2.5" />
        <path d="M2.5 17c.5-2.5 2.5-4 5.5-4s5 1.5 5.5 4" />
        <path d="M13 17c.3-1.8 1.5-3 3.5-3s3.2 1.2 3.5 3" />
      </svg>
    ),
  },
  {
    tag: "PARTNERS",
    title: "Customers & architects",
    body: "Link partners to quotations and invoices, with mobile validation and duplicate checks.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="16" height="14" rx="2" />
        <circle cx="8.5" cy="10" r="2" />
        <path d="M5.5 15c.4-1.5 1.6-2.5 3-2.5s2.6 1 3 2.5" />
        <path d="M13 9h4M13 12h4" />
      </svg>
    ),
  },
  {
    tag: "ALERTS",
    title: "Low-stock alerts",
    body: "Live dashboard against a per-shop threshold, tied straight to the optimizer's recommendations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 3l8 14H3L11 3z" />
        <line x1="11" y1="9" x2="11" y2="13" />
        <circle cx="11" cy="15.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Features() {
  const workflowRef = useRef(null);

  useEffect(() => {
    const root = workflowRef.current;
    if (!root) return;
    const cards = root.querySelectorAll(".m-feature-stack");
    if (!cards.length) return;

    if (typeof IntersectionObserver === "undefined") {
      cards.forEach((el) => el.classList.add("is-inview"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -6% 0px" }
    );

    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="features" aria-labelledby="features-title">
      <div className="m-wrap">
        <SectionHeading
          title={<span id="features-title">Five steps, one system.</span>}
          subtitle="The order below is the order your shop actually runs. GlassSarthi covers each step; nothing bounces to WhatsApp or Excel."
        />

        <div className="m-workflow" ref={workflowRef} style={{ position: "relative", marginTop: 36 }}>
          <ol
            className="m-workflow-grid"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              gap: 18,
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {steps.map((s, i) => (
              <li
                key={s.n}
                style={{
                  minWidth: 0,
                  display: "flex",
                  "--step-i": i,
                }}
              >
                <FeatureCard
                  step={s.n}
                  icon={s.icon}
                  title={s.title}
                  body={s.body}
                />
              </li>
            ))}
          </ol>
        </div>

        <div className="m-support-block" style={{ marginTop: 48 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
            <div style={{ maxWidth: 560 }}>
              <div className="m-eyebrow" style={{ marginBottom: 10 }}>
                <span className="m-eyebrow-dot" aria-hidden="true" />
                <span>Always on</span>
              </div>
              <h3
                id="support-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(22px, 2.4vw, 28px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  color: "var(--m-fg)",
                }}
              >
                The layer around every step.
              </h3>
              <p style={{ margin: "10px 0 0", color: "var(--m-fg-mute)", fontSize: 15, lineHeight: 1.55, maxWidth: 480 }}>
                Permissions, partners, and alerts sit beside the workflow — so stock, cuts, and invoices stay controlled in production.
              </p>
            </div>
          </div>

          <div
            className="m-support-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 14 }}
          >
            {support.map((s) => (
              <article
                key={s.title}
                className="m-card m-support-card"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  height: "100%",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 56,
                    background: "linear-gradient(180deg, rgba(79,93,255,0.08), transparent)",
                    pointerEvents: "none",
                  }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 1,
                    background: "linear-gradient(90deg, rgba(79,93,255,0.55), transparent 75%)",
                  }}
                />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div
                    aria-hidden="true"
                    style={{
                      width: 42, height: 42, borderRadius: 11,
                      display: "grid", placeItems: "center",
                      background: "linear-gradient(140deg, rgba(79,93,255,0.2), rgba(126,212,229,0.12))",
                      border: "1px solid rgba(79,93,255,0.32)",
                      color: "#F5F7FA",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                  >
                    {s.icon}
                  </div>
                  <span
                    className="m-mono"
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      color: "var(--m-fg-quiet)",
                      padding: "4px 8px",
                      borderRadius: 999,
                      border: "1px solid var(--m-line)",
                      background: "var(--m-glass)",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h4 style={{ margin: 0, fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em" }}>{s.title}</h4>
                <p style={{ margin: 0, color: "var(--m-fg-mute)", fontSize: 14.5, lineHeight: 1.55 }}>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Floating shelf stack ─────────────────────────────────────────── */
        .m-feature-stack {
          position: relative;
          display: flex;
          flex: 1;
          width: 100%;
          isolation: isolate;
          padding-bottom: 10px;
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 560ms cubic-bezier(0.2, 0.65, 0.3, 1),
            transform 560ms cubic-bezier(0.2, 0.65, 0.3, 1);
          transition-delay: calc(var(--step-i, 0) * 70ms);
        }
        .m-feature-stack.is-inview {
          opacity: 1;
          transform: translateY(0);
        }

        .m-feature-glow {
          position: absolute;
          left: 12%;
          right: 12%;
          bottom: 0;
          height: 42%;
          border-radius: 50%;
          background:
            radial-gradient(ellipse at center, rgba(126, 212, 229, 0.28) 0%, rgba(79, 93, 255, 0.14) 42%, transparent 72%);
          filter: blur(18px);
          opacity: 0.4;
          z-index: 0;
          pointer-events: none;
          transition: opacity 280ms ease, transform 280ms ease;
        }

        .m-feature-plate {
          position: absolute;
          inset: 0 0 10px 0;
          border-radius: var(--m-r-xl);
          pointer-events: none;
          z-index: 0;
          transition: transform 280ms cubic-bezier(0.2, 0.7, 0.25, 1), opacity 280ms ease, border-color 280ms ease;
        }
        .m-feature-plate--back {
          transform: translate3d(7px, 9px, 0) scale(0.965);
          background: linear-gradient(160deg, rgba(18, 28, 56, 0.55), rgba(10, 16, 36, 0.35));
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
          opacity: 0.55;
        }
        .m-feature-plate--mid {
          transform: translate3d(3.5px, 4.5px, 0) scale(0.985);
          background: linear-gradient(155deg, rgba(24, 38, 72, 0.62), rgba(12, 20, 44, 0.48));
          border: 1px solid rgba(126, 212, 229, 0.1);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.24);
          opacity: 0.75;
        }

        .m-feature-card {
          position: relative;
          z-index: 2;
          background:
            linear-gradient(165deg, rgba(32, 48, 88, 0.82) 0%, rgba(16, 26, 54, 0.92) 52%, rgba(14, 22, 48, 0.96) 100%);
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.06) inset,
            0 0 0 1px rgba(126, 212, 229, 0.04),
            0 14px 36px rgba(0, 0, 0, 0.38);
          transition:
            transform 280ms cubic-bezier(0.2, 0.7, 0.25, 1),
            border-color 280ms ease,
            box-shadow 280ms ease;
        }

        /* Override global .m-card:hover so lift is driven by the stack */
        .m-feature-stack .m-feature-card:hover {
          transform: none;
        }

        .m-feature-sheen {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(
            115deg,
            transparent 36%,
            rgba(255, 255, 255, 0.045) 48%,
            transparent 60%
          );
          opacity: 0;
          transform: translateX(-24%);
          transition: opacity 320ms ease, transform 420ms ease;
        }

        .m-feature-stack:hover .m-feature-glow {
          opacity: 0.72;
          transform: scale(1.08);
        }
        .m-feature-stack:hover .m-feature-plate--back {
          transform: translate3d(11px, 14px, 0) scale(0.94);
          opacity: 0.65;
          border-color: rgba(79, 93, 255, 0.16);
        }
        .m-feature-stack:hover .m-feature-plate--mid {
          transform: translate3d(5px, 8px, 0) scale(0.975);
          opacity: 0.88;
          border-color: rgba(126, 212, 229, 0.2);
        }
        .m-feature-stack:hover .m-feature-card {
          transform: translate3d(0, -7px, 0);
          border-color: rgba(126, 212, 229, 0.38);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.08) inset,
            0 0 0 1px rgba(126, 212, 229, 0.12),
            0 22px 48px rgba(0, 0, 0, 0.5),
            0 0 36px rgba(126, 212, 229, 0.1);
        }
        .m-feature-stack:hover .m-feature-sheen {
          opacity: 1;
          transform: translateX(18%);
        }
        .m-feature-stack:hover .m-feature-step {
          background: rgba(126, 212, 229, 0.16);
          border-color: rgba(126, 212, 229, 0.48);
          color: #B8F0F8;
          box-shadow: 0 0 16px rgba(126, 212, 229, 0.12), inset 0 1px 0 rgba(255,255,255,0.08);
        }
        .m-feature-stack:hover .m-feature-icon {
          border-color: rgba(126, 212, 229, 0.5);
          box-shadow: 0 6px 18px rgba(126, 212, 229, 0.16), inset 0 1px 0 rgba(255,255,255,0.12);
          transform: translateY(-1px);
        }
        .m-feature-icon {
          transition: border-color 280ms ease, box-shadow 280ms ease, transform 280ms ease;
        }
        .m-feature-step {
          transition: background 280ms ease, border-color 280ms ease, color 280ms ease, box-shadow 280ms ease;
        }

        .m-support-card {
          background:
            linear-gradient(165deg, rgba(26, 40, 74, 0.7) 0%, rgba(14, 22, 48, 0.88) 100%);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.04) inset,
            0 10px 28px rgba(0, 0, 0, 0.3);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }
        .m-support-card:hover {
          transform: translateY(-2px);
          border-color: rgba(79, 93, 255, 0.38);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.05) inset,
            0 16px 36px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(79, 93, 255, 0.12);
        }

        @media (min-width: 1081px) {
          .m-workflow-grid { gap: 16px !important; }
          .m-workflow-grid .m-feature-card { padding: 22px 16px 18px; }
          .m-workflow-grid .m-feature-card h3 { font-size: 15.5px !important; }
          .m-workflow-grid .m-feature-card p { font-size: 13.5px !important; line-height: 1.5 !important; }
        }

        @media (max-width: 1080px) {
          .m-workflow-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
          .m-workflow-line { display: none !important; }
          .m-feature-stack { padding-bottom: 8px; }
          .m-feature-plate--back { transform: translate3d(4px, 6px, 0) scale(0.975); opacity: 0.5; }
          .m-feature-plate--mid  { transform: translate3d(2px, 3px, 0) scale(0.99); opacity: 0.7; }
          .m-feature-stack:hover .m-feature-plate--back { transform: translate3d(6px, 9px, 0) scale(0.96); }
          .m-feature-stack:hover .m-feature-plate--mid  { transform: translate3d(3px, 5px, 0) scale(0.982); }
          .m-feature-stack:hover .m-feature-card { transform: translate3d(0, -4px, 0); }
          .m-workflow-grid .m-feature-card { padding: 18px 14px 16px !important; }
          .m-workflow-grid .m-feature-card h3 { font-size: 15px !important; }
          .m-workflow-grid .m-feature-card p { font-size: 13px !important; line-height: 1.45 !important; }
        }

        @media (max-width: 720px) {
          .m-workflow-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .m-support-grid  { grid-template-columns: 1fr !important; }
          .m-support-block { margin-top: 36px !important; }
          .m-feature-stack { padding-bottom: 6px; }
          /* Soften depth on phones — keep mid plate only, quieter glow */
          .m-feature-plate--back { display: none; }
          .m-feature-plate--mid {
            transform: translate3d(0, 3px, 0) scale(0.985);
            opacity: 0.55;
          }
          .m-feature-glow {
            opacity: 0.28;
            height: 36%;
            filter: blur(14px);
          }
          .m-feature-stack:hover .m-feature-plate--mid {
            transform: translate3d(0, 5px, 0) scale(0.98);
          }
          .m-feature-stack:hover .m-feature-card { transform: translate3d(0, -3px, 0); }
          .m-feature-stack:hover .m-feature-glow { opacity: 0.45; transform: none; }
          .m-workflow-grid .m-feature-card { padding: 18px 16px 16px !important; }
          .m-workflow-grid .m-feature-card h3 { font-size: 16px !important; }
          .m-workflow-grid .m-feature-card p { font-size: 14px !important; line-height: 1.5 !important; }
          .m-feature-step {
            top: 12px !important;
            right: 12px !important;
            height: 24px !important;
            font-size: 10px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .m-feature-stack {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .m-feature-stack .m-feature-plate,
          .m-feature-stack .m-feature-card,
          .m-feature-stack .m-feature-glow,
          .m-feature-stack .m-feature-sheen {
            transition: none !important;
          }
          .m-feature-stack:hover .m-feature-card { transform: none; }
          .m-feature-stack:hover .m-feature-plate--back,
          .m-feature-stack:hover .m-feature-plate--mid {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
