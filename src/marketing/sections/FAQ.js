import AccordionItem from "../components/AccordionItem";
import SectionHeading from "../components/SectionHeading";

const items = [
  {
    q: "What exactly does GlassSarthi do?",
    a: "It's a single system for glass and mirror shops covering inventory, cutting optimization, quotations, invoicing, and audit. Staff manage day-to-day operations while owners get approval controls and full visibility.",
  },
  {
    q: "Who is it built for?",
    a: "Independent glass, mirror, and cutting shops — typically 2 to 15 staff. If you deal in sheets, thicknesses, and remnants, this is built for you. Multi-branch operators are supported via multi-tenancy.",
  },
  {
    q: "Does it handle Indian GST invoices?",
    a: "Yes. Tax invoices with CGST / SGST / IGST split, delivery challans, and payment tracking are built in. HSN codes are attached at the line-item level, and PDFs are generated on the server.",
  },
  {
    q: "Can I restrict what staff can do?",
    a: "Yes — 40+ granular permissions, applied per user. A typical staff role can add stock and issue quotations but cannot approve new prices, delete customers, or view profit margins. Every action is audited by shop.",
  },
  {
    q: "How is my shop's data kept separate from other tenants?",
    a: "Every business record — customer, stock, quotation, invoice, audit row — is scoped by shopId from creation. The API resolves the acting user's shop from the JWT and filters every query against it. There are no global admin roles across tenants.",
  },
  {
    q: "How do I try it?",
    a: (
      <>
        Register a shop from the top-right, or use the demo credentials on the login page (<span className="m-mono">admin / admin123</span>) if provided. Contact us for a guided walkthrough.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title">
      <div className="m-wrap" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.6fr", gap: 48 }} >
        <div>
          <SectionHeading
            title={<span id="faq-title">Common questions, direct answers.</span>}
            subtitle="Everything a shop owner asks in the first 15 minutes."
          />
        </div>
        <div>
          {items.map((it, i) => (
            <AccordionItem key={i} q={it.q} a={it.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section[aria-labelledby="faq-title"] > .m-wrap { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
