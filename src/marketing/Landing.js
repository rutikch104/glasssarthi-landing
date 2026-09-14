import { useEffect, useState } from "react";
import "./landing.css";

import BrandIntro from "./BrandIntro";
import MarketingNav from "./MarketingNav";
import MarketingFooter from "./MarketingFooter";
import Hero from "./sections/Hero";
import ProductOverview from "./sections/ProductOverview";
import Features from "./sections/Features";
import DashboardPreview from "./sections/DashboardPreview";
import Benefits from "./sections/Benefits";
import WhyChooseUs from "./sections/WhyChooseUs";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import { appPath } from "../config";

export default function Landing() {
  const [introSeen] = useState(() => {
    try { return sessionStorage.getItem("gs-intro-seen") === "1"; } catch { return true; }
  });
  const [introActive, setIntroActive] = useState(!introSeen);

  // If already logged into the product app on this browser, send them there.
  useEffect(() => {
    try {
      if (sessionStorage.getItem("token")) {
        window.location.replace(appPath("/dashboard"));
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!introActive) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [introActive]);

  return (
    <div className="m">
      <BrandIntro onDone={() => setIntroActive(false)} />
      <MarketingNav />
      <main>
        <Hero />
        <ProductOverview />
        <Features />
        <DashboardPreview />
        <Benefits />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <MarketingFooter />
    </div>
  );
}
