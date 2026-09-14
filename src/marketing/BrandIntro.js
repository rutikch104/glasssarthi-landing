import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const SESSION_FLAG = "gs-intro-seen";

/**
 * Cinematic brand intro. ~4.4s total.
 *
 * Sequence:
 *   0.0 – 0.6s   background settles, ambient particles surface
 *   0.4 – 1.4s   six glass shards drift in from the perimeter and converge
 *   1.2 – 2.0s   shards lock into a hexagonal glass pane at centre
 *   1.8 – 2.6s   outer wheel + compass strokes trace themselves in
 *   2.6 – 3.4s   a light arc sweeps once around the wheel
 *   3.0 – 3.8s   wordmark fades in
 *   3.6 – 4.2s   tagline fades in
 *   4.2 – 4.6s   whole intro fades and hands off to the landing
 */
export default function BrandIntro({ onDone }) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  const skip = useMemo(() => {
    if (typeof window === "undefined") return true;
    try { return sessionStorage.getItem(SESSION_FLAG) === "1"; } catch { return false; }
  }, []);

  useEffect(() => {
    if (skip) { onDone?.(); return; }
    const total = reduce ? 2200 : 4400;
    const t = window.setTimeout(() => {
      setVisible(false);
      try { sessionStorage.setItem(SESSION_FLAG, "1"); } catch {}
    }, total);
    return () => window.clearTimeout(t);
  }, [skip, reduce, onDone]);

  if (skip) return null;

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="brand-intro"
          role="dialog"
          aria-label="GlassSarthi brand intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            height: "100dvh",   // iOS Safari address-bar safe
            display: "grid", placeItems: "center",
            background:
              "radial-gradient(70% 55% at 50% 45%, #0E1B3C 0%, #050B1F 55%, #02060F 100%)",
            overflow: "hidden",
            touchAction: "none",
            WebkitTapHighlightColor: "transparent",
            fontFamily: "'Inter', -apple-system, sans-serif",
            padding: "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
          }}
        >
          {reduce ? <StaticMark /> : <FullSequence />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------- Full animated sequence -------------------- */

function FullSequence() {
  return (
    <>
      {/* Particles cover the full viewport as ambient backdrop */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none" }} aria-hidden="true">
        <Particles />
      </div>
      {/* Compact logo lockup — emblem stacked over wordmark */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Emblem />
        <Wordmark />
      </div>
    </>
  );
}

/* Ambient dust: slow, low-opacity, deterministic layout — no bright neon. */
function Particles() {
  const dots = useMemo(() => {
    // Deterministic pseudo-random layout so re-renders stay stable.
    const seed = 42;
    const rand = (i) => {
      const s = Math.sin(seed * (i + 1)) * 10000;
      return s - Math.floor(s);
    };
    return Array.from({ length: 22 }, (_, i) => ({
      cx: 8 + rand(i * 2) * 84,
      cy: 8 + rand(i * 2 + 1) * 84,
      r:  0.35 + rand(i * 3) * 0.9,
      d:  4 + rand(i * 4) * 3,
      delay: rand(i * 5) * 2.5,
    }));
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <motion.circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill="rgba(214, 231, 255, 0.55)"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.7, 0.4, 0.65, 0], y: [-2, 2, -2] }}
          transition={{ duration: d.d, repeat: Infinity, repeatType: "reverse", delay: d.delay, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

/* The emblem — six glass shards converge into a hexagonal pane,
   then a wheel + compass outline traces itself and sweeps a light arc. */
function Emblem() {
  const cx = 100, cy = 100; // logical coords, SVG viewBox 200x200
  const paneR = 42;
  const wheelR = 62;

  // Hexagon vertices (used both for the pane and shard start positions).
  const hex = Array.from({ length: 6 }, (_, i) => {
    const a = -Math.PI / 2 + i * (Math.PI / 3);
    return { x: cx + paneR * Math.cos(a), y: cy + paneR * Math.sin(a) };
  });

  // Shards start off-screen, drift in toward their hex vertex, dissolve into the pane.
  const shardOrigin = (i) => {
    const a = -Math.PI / 2 + i * (Math.PI / 3);
    const dist = 260;
    return { x: cx + dist * Math.cos(a), y: cy + dist * Math.sin(a) };
  };

  return (
    <motion.div
      style={{ display: "grid", placeItems: "center" }}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
    >
      <svg viewBox="0 0 200 200" width="200" height="200" style={{ display: "block", overflow: "visible", maxWidth: "min(48vw, 200px)", height: "auto" }} aria-hidden="true">
        <defs>
          <linearGradient id="pane-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0"   stopColor="rgba(214,231,255,0.35)" />
            <stop offset="0.55" stopColor="rgba(126,212,229,0.22)" />
            <stop offset="1"   stopColor="rgba(79,93,255,0.18)" />
          </linearGradient>
          <linearGradient id="pane-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E9F3FF" />
            <stop offset="1" stopColor="#7ED4E5" />
          </linearGradient>
          <linearGradient id="shard" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(233,243,255,0.85)" />
            <stop offset="1" stopColor="rgba(126,212,229,0.10)" />
          </linearGradient>
          <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0"   stopColor="rgba(126,212,229,0.35)" />
            <stop offset="0.6" stopColor="rgba(79,93,255,0.15)" />
            <stop offset="1"   stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          {/* Light-arc gradient for the sweep */}
          <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0"    stopColor="rgba(255,255,255,0)" />
            <stop offset="0.55" stopColor="rgba(233,243,255,0.9)" />
            <stop offset="1"    stopColor="rgba(126,212,229,0)" />
          </linearGradient>
        </defs>

        {/* Soft halo behind everything */}
        <circle cx={cx} cy={cy} r={95} fill="url(#halo)" />

        {/* Shards flying in — animation lives on <motion.g> for reliable mobile-Safari transform behavior */}
        {hex.map((v, i) => {
          const start = shardOrigin(i);
          return (
            <motion.g
              key={i}
              initial={{ x: start.x - cx, y: start.y - cy, opacity: 0, rotate: -35 + i * 12 }}
              animate={{
                x: [start.x - cx, 0, 0],
                y: [start.y - cy, 0, 0],
                opacity: [0, 0.9, 0.35],
                rotate: [-35 + i * 12, 0, 0],
              }}
              transition={{
                duration: 1.6,
                times: [0, 0.6, 1],
                ease: [0.22, 0.9, 0.35, 1],
                delay: 0.35 + i * 0.05,
              }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            >
              <polygon
                points={`${cx},${cy} ${v.x},${v.y} ${hex[(i + 1) % 6].x},${hex[(i + 1) % 6].y}`}
                fill="url(#shard)"
                stroke="rgba(214,231,255,0.35)"
                strokeWidth="0.4"
              />
            </motion.g>
          );
        })}

        {/* Hexagonal glass pane assembles */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 0.95, 0.85], scale: [0.6, 1.04, 1] }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.2, 0.7, 0.3, 1] }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <polygon
            points={hex.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="url(#pane-fill)"
            stroke="url(#pane-edge)"
            strokeWidth="0.6"
          />
        </motion.g>

        {/* Compass cross inside the pane */}
        <motion.g
          stroke="rgba(233,243,255,0.75)"
          strokeWidth="0.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 0.9, delay: 1.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.line x1={cx} y1={cy - paneR + 8} x2={cx} y2={cy + paneR - 8} />
          <motion.line x1={cx - paneR + 8} y1={cy} x2={cx + paneR - 8} y2={cy} />
        </motion.g>

        {/* Compass rose diamond */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5, ease: [0.2, 0.7, 0.3, 1] }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <polygon
            points={`${cx},${cy - 14} ${cx + 4},${cy} ${cx},${cy + 14} ${cx - 4},${cy}`}
            fill="rgba(233,243,255,0.85)"
            stroke="rgba(126,212,229,0.7)"
            strokeWidth="0.5"
          />
        </motion.g>
        <motion.circle
          cx={cx} cy={cy} r="1.6"
          fill="#0E1B3C"
          stroke="#E9F3FF" strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.7 }}
        />

        {/* Outer wheel — 8-spoke abstract chariot wheel drawn in */}
        <motion.circle
          cx={cx} cy={cy} r={wheelR}
          fill="none"
          stroke="rgba(214,231,255,0.75)"
          strokeWidth="0.55"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1.0, delay: 1.8, ease: [0.4, 0, 0.2, 1] }}
        />

        <motion.g
          stroke="rgba(214,231,255,0.5)"
          strokeWidth="0.35"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.6, delay: 2.3 }}
        >
          {Array.from({ length: 8 }, (_, i) => {
            const a = i * (Math.PI / 4);
            const x1 = cx + paneR * Math.cos(a);
            const y1 = cy + paneR * Math.sin(a);
            const x2 = cx + wheelR * Math.cos(a);
            const y2 = cy + wheelR * Math.sin(a);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </motion.g>

        {/* Light arc sweep — one full rotation */}
        <motion.g
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.3, delay: 2.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: "fill-box" }}
        >
          <path
            d={`M ${cx + wheelR} ${cy}
                A ${wheelR} ${wheelR} 0 0 1 ${cx + wheelR * Math.cos(Math.PI / 2)} ${cy + wheelR * Math.sin(Math.PI / 2)}`}
            fill="none"
            stroke="url(#arc)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Continuous slow rotation of the whole wheel + spokes for a "living" feel */}
        {/*   – kept subtle at ~24s per full rev so it reads as gentle motion  */}
      </svg>
    </motion.div>
  );
}

function Wordmark() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      <motion.div
        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 3.0, ease: [0.2, 0.7, 0.3, 1] }}
        style={{
          fontSize: "clamp(22px, 2.8vw, 30px)",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          color: "#F0F6FF",
          textShadow: "0 0 24px rgba(126,212,229,0.25)",
          lineHeight: 1,
        }}
      >
        Glass<span style={{ color: "#7ED4E5", fontWeight: 600 }}>Sarthi</span>
      </motion.div>

      {/* Subtle silver hairline underline */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.5 }}
        transition={{ duration: 0.9, delay: 3.4, ease: [0.4, 0, 0.2, 1] }}
        style={{
          width: 72,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(214,231,255,0.7), transparent)",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}

/* -------------------- Reduced-motion fallback -------------------- */

function StaticMark() {
  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <svg width="120" height="120" viewBox="0 0 200 200" aria-hidden="true" style={{ display: "block", margin: "0 auto" }}>
        <defs>
          <linearGradient id="rm-pane" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(214,231,255,0.35)" />
            <stop offset="1" stopColor="rgba(79,93,255,0.18)" />
          </linearGradient>
          <linearGradient id="rm-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E9F3FF" />
            <stop offset="1" stopColor="#7ED4E5" />
          </linearGradient>
        </defs>
        {(() => {
          const pts = Array.from({ length: 6 }, (_, i) => {
            const a = -Math.PI / 2 + i * (Math.PI / 3);
            return `${100 + 42 * Math.cos(a)},${100 + 42 * Math.sin(a)}`;
          }).join(" ");
          return <polygon points={pts} fill="url(#rm-pane)" stroke="url(#rm-edge)" strokeWidth="0.9" />;
        })()}
        <circle cx="100" cy="100" r="62" fill="none" stroke="rgba(214,231,255,0.7)" strokeWidth="0.9" />
      </svg>
      <div style={{ marginTop: 18, fontSize: 28, fontWeight: 700, color: "#F0F6FF", letterSpacing: "-0.03em" }}>
        Glass<span style={{ color: "#7ED4E5" }}>Sarthi</span>
      </div>
    </div>
  );
}
