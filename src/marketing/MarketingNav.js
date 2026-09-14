import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoMark from "./components/LogoMark";
import { appPath } from "../config";

const links = [
  { href: "#features", label: "Features" },
  { href: "#preview",  label: "Product" },
  { href: "#why",      label: "Why GlassSarthi" },
  { href: "#faq",      label: "FAQ" },
];

export default function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="m-nav"
      style={{
        position: "sticky", top: 0, zIndex: 40,
        background: scrolled ? "rgba(5,11,31,0.72)" : "rgba(5,11,31,0.28)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.09)" : "transparent"}`,
        transition: "background 200ms ease, border-color 200ms ease",
      }}
    >
      <div
        className="m-wrap"
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 12, padding: "14px 16px",
        }}
      >
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--m-fg)", minWidth: 0 }}>
          <LogoMark size={28} />
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.02em" }}>GlassSarthi</span>
          <span className="m-mono m-nav-version" style={{ fontSize: 10, color: "var(--m-fg-quiet)", padding: "2px 6px", border: "1px solid var(--m-line)", borderRadius: 999 }}>
            v1.0
          </span>
        </Link>

        <ul
          className="m-nav-links"
          style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ color: "var(--m-fg-mute)", textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "-0.005em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--m-fg)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--m-fg-mute)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Login / Get started hidden for now — Nestify soft launch */}
        {false && (
          <div className="m-nav-ctas" style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
            <a href={appPath("/login")} className="m-nav-login" style={{ color: "var(--m-fg-mute)", textDecoration: "none", fontSize: 14, fontWeight: 600, padding: "8px 10px" }}>
              Log in
            </a>
            <a href={appPath("/register")} className="m-btn m-btn-primary m-nav-cta-primary" style={{ height: 40, padding: "0 16px", fontSize: 14, display: "inline-flex", alignItems: "center" }}>
              Get started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
