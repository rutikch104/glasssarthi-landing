export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const centerMargin = align === "center" ? "auto" : undefined;
  return (
    <header style={{ textAlign: align, maxWidth: align === "center" ? 720 : "none", margin: align === "center" ? "0 auto" : undefined }}>
      {eyebrow && (
        <div className="m-eyebrow" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
          <span className="m-eyebrow-dot" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="m-h2" style={{ marginLeft: centerMargin, marginRight: centerMargin }}>{title}</h2>
      {subtitle && <p className="m-sub" style={{ marginLeft: centerMargin, marginRight: centerMargin }}>{subtitle}</p>}
    </header>
  );
}
