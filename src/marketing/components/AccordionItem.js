import { useId, useState } from "react";

export default function AccordionItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div style={{ borderBottom: "1px solid var(--m-line)" }}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%", background: "transparent", border: 0, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 24, padding: "22px 4px",
          color: "var(--m-fg)", textAlign: "left",
          fontFamily: "var(--m-sans)", fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em",
        }}
      >
        <span>{q}</span>
        <svg
          width="20" height="20" viewBox="0 0 20 20"
          style={{
            flex: "0 0 auto",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 220ms ease",
            color: "var(--m-glass-cyan)",
          }}
          fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        >
          <path d="M10 4v12M4 10h12" />
        </svg>
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        hidden={!open}
        style={{
          paddingBottom: open ? 22 : 0,
          color: "var(--m-fg-mute)", lineHeight: 1.6, fontSize: 15,
          maxWidth: 720,
        }}
      >
        {a}
      </div>
    </div>
  );
}
