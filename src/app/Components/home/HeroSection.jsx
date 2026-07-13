"use client";

import { useEffect, useRef, useState } from "react";

const COLORS = {
  bg: "#1B2A4A",
  surface: "#162240",
  border: "rgba(232,71,10,0.3)",
  gold: "#ff4400",
  goldLight: "#ff6b35",
  text: "#ffffff",
  muted: "#8a9ab8",
  pill: "#0f1a30",
  pillActive: "#E8470A",
};

// Single unified service color (warm sand/tan)
const SVC_COLOR = { bg: "#E8470A", text: "#ffffff" };
const SERVICE_COLORS = Array(10).fill(SVC_COLOR);

const services = [
  { name: "BIS — CRS", short: "CRS", desc: "Compulsory Registration Scheme", icon: "🛡️", img: "/bis-crs.png", imgMobile: "/bis-crsmob.png" },
  { name: "BIS — ISI", short: "ISI", desc: "Indian Standards Institute Mark", icon: "✅", img: "/bis-isi.png", imgMobile: "/bis-isimob.png" },
  { name: "WPC — ETA", short: "WPC", desc: "Wireless Planning & Coordination", icon: "📡", img: "/wpc-eta.png", imgMobile: "/wpc-etamob.png" },
  { name: "Testing", short: "TEST", desc: "Product & Safety Testing", icon: "🔬", img: "/testing.png", imgMobile: "/testingmob.png" },
  { name: "BEE", short: "BEE", desc: "Bureau of Energy Efficiency", icon: "⚡", img: "/bee.png", imgMobile: "/beemob.png" },
  { name: "ISO", short: "ISO", desc: "International Standards", icon: "🌐", img: "/iso.png", imgMobile: "/isomob.png" },
  { name: "EPR", short: "EPR", desc: "Extended Producer Responsibility", icon: "♻️", img: "/epr.png", imgMobile: "/eprmob.png" },
  { name: "TEC / MTCTE", short: "TEC", desc: "Telecom Equipment Certification", icon: "📶", img: "/tec.png", imgMobile: "/tecmob.png" },
  { name: "LMPC", short: "LMPC", desc: "Legal Metrology Packaged Commodities", icon: "⚖️", img: "/lmpc.png", imgMobile: "/lmpcmob.png" },
  { name: "CDSCO", short: "CDSCO", desc: "Drug & Medical Device License", icon: "💊", img: "/cdsco.png", imgMobile: "/cdscomob.png" },
];

const stats = [
  { value: "5000+", label: "Businesses" },
  { value: "15+", label: "Years" },
  { value: "98%", label: "Approval" },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [hoveredPill, setHoveredPill] = useState(null);
  const intervalRef = useRef(null);

  const goTo = (idx) => {
    if (fading || idx === active) return;
    clearInterval(intervalRef.current);
    setFading(true);
    setTimeout(() => { setActive(idx); setFading(false); }, 280);
    intervalRef.current = setInterval(() => tick(), 3400);
  };

  const tick = () => {
    setFading(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % services.length);
      setFading(false);
    }, 280);
  };

  useEffect(() => {
    intervalRef.current = setInterval(tick, 3400);
    return () => clearInterval(intervalRef.current);
  }, []);

  const svc = services[active];

  return (
    <section
      style={{ background: COLORS.bg, color: COLORS.text, fontFamily: "'Georgia', serif" }}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">

          {/* COL 1 */}
          <div className="flex flex-col justify-center">
            <h1
              className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight xl:text-6xl"
              style={{ color: COLORS.text }}
            >
              Get certified{" "}
              <em className="not-italic" style={{ color: COLORS.gold }}>faster</em>
              {" "}with expert guidance
            </h1>

            <p className="mb- max-w-sm text-[14px] leading-relaxed" style={{ color: "#fff", fontFamily: 'var(--font-body)' }}>
              BIS, WPC, BEE, ISO, EPR and product testing — managed under one roof.
              We handle regulatory approvals end-to-end.
            </p>

            <div className="mb-8 flex gap-6 border-b pb-8" style={{ borderColor: COLORS.border }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black" style={{ color: COLORS.gold, fontFamily: 'var(--font-body)' }}>{s.value}</p>
                  <p className="text-xs uppercase tracking-widest" style={{ color: COLORS.muted, }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-wide transition-opacity hover:opacity-80"
                style={{ background: COLORS.gold, color: "#fff", borderRadius: 4, fontFamily: 'var(--font-body)' }}
              >
                Get Free Quote
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-opacity hover:opacity-70"
                style={{ border: `1px solid #fff`, color: COLORS.goldLight, borderRadius: 4 }}
              >
                All Services
              </a>
            </div>
          </div>

          {/* COL 2 */}
          <div className="flex flex-col gap-0">

            {/* Pills row — each has its own color, active = full opacity, inactive = 55% opacity */}
            <div
              className="grid grid-cols-4 gap-1 rounded-t-2xl px-2 py-2 sm:flex sm:flex-wrap sm:items-center sm:gap-1.5 sm:px-3 sm:py-2"
              style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderBottom: "none" }}
            >
              {services.map((s, i) => {
                const sc = SERVICE_COLORS[i];
                const isActive = i === active;
                const isHovered = hoveredPill === i;
                return (
                  <button
                    key={s.name}
                    onClick={() => goTo(i)}
                    onMouseEnter={() => setHoveredPill(i)}
                    onMouseLeave={() => setHoveredPill(null)}
                    className="flex items-center justify-center gap-1 rounded-md px-1.5 py-1 text-[9px] font-bold sm:rounded-lg sm:px- sm:py-0.7 sm:text-[11px] sm:gap-1.5"
                    style={{
                      background: sc.bg,
                      color: sc.text,
                      opacity: isActive ? 1 : isHovered ? 0.85 : 0.45,
                      boxShadow: isActive ? `0 2px 14px ${sc.bg}66` : "none",
                      border: "none",
                      transition: "opacity 0.2s, box-shadow 0.2s, transform 0.15s",
                      transform: isHovered && !isActive ? "scale(1.05)" : "scale(1)",
                      // fontFamily: 'var(--font-body)'
                    }}
                  >
                    <span className="text-xs leading-none sm:text-sm">{s.icon}</span>
                    <span className="font-display  truncate">{s.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Image — aspect-ratio instead of fixed minHeight so it never crops/cuts on narrow screens */}
            <div
              className="relative overflow-hidden rounded-b-2xl aspect-[4/5] sm:aspect-[16/11]"
              style={{ border: `1px solid ${COLORS.border}`, borderTop: "none" }}
            >
              <img
                src={svc.imgMobile}
                alt={svc.name}
                className="block sm:hidden absolute inset-0 h-full w-full object-cover object-center transition-all duration-300"
                style={{ opacity: fading ? 0 : 1, transform: fading ? "scale(1.03)" : "scale(1)" }}
              />
              <img
                src={svc.img}
                alt={svc.name}
                className="hidden sm:block absolute inset-0 h-full w-full object-cover object-center transition-all duration-300"
                style={{ opacity: fading ? 0 : 1, transform: fading ? "scale(1.03)" : "scale(1)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #1C120988 0%, transparent 55%)" }}
              />

              {/* Top-right badge — smaller on mobile so it doesn't sit on top of the title */}
              <div
                className="absolute right-2 top-2 rounded px-2 py-1 text-center text-[10px] sm:right-3 sm:top-3 sm:px-3 sm:py-1.5 sm:text-xs"
                style={{
                  background: `${SERVICE_COLORS[active].bg}CC`,
                  border: `1px solid ${SERVICE_COLORS[active].bg}`,
                  color: SERVICE_COLORS[active].text,
                  backdropFilter: "blur(8px)",
                  transition: "background 0.3s",
                }}
              >
                <p className="text-sm font-black sm:text-base">{svc.short}</p>
                <p style={{ fontSize: 9, opacity: 0.75 }}>Certified</p>
              </div>

              {/* Floating service detail card — full-width inset on mobile, no more mt-16 fighting bottom-1 */}
              <div
                className="absolute bottom-2 left-2 w-[310px] sm:w-[500px] mx-auto right-2 rounded-xl p-2 transition-all duration-300 sm:left-4 sm:right-4 sm:bottom-3"
                style={{
                  background: `${COLORS.bg}80`,
                  border: `1px solid ${SERVICE_COLORS[active].bg}55`,
                  backdropFilter: "blur(4px)",
                  opacity: fading ? 0 : 1,
                  transform: fading ? "translateY(6px)" : "translateY(0)",
                }}
              >
                <p className="mb-1 text-[12px] font-extrabold sm:text-[13px]" style={{ color: "#ff5e24", fontWeight: 800, fontFamily: 'system-ui, sans-serif' }}>{svc.icon} {svc.name}</p>
                <p className="mb-2 text-[9px] sm:text-[10px]" style={{ color: "#ffffffbe", fontFamily: 'var(--font-body)' }}>{svc.desc}</p>
                <div className="h-px mb-1" style={{ background: COLORS.border }} />
                <ul className="grid grid-cols-1 gap-x-3 gap-y-1 text-[10px] sm:grid-cols-2 sm:text-[11px]" style={{ color: COLORS.muted }}>
                  {["End-to-end management", "Document preparation", "Govt. liaison & follow-up", "Post-cert support"].map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-[#fff] font-semibold font-body">
                      <span style={{ color: SERVICE_COLORS[active].bg }}>✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress dots */}
              <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 flex-row gap-1.5 sm:bottom-28">
                {services.map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full transition-all duration-300"
                    style={{
                      height: 4,
                      width: i === active ? 20 : 4,
                      background: i === active ? SERVICE_COLORS[i].bg : COLORS.muted + "60",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM MARQUEE STRIP — cards get their service color as a left accent bar */}
        <div
          className="relative mt-14 overflow-hidden rounded-2xl"
          style={{ border: `1px solid ${COLORS.border}`, background: COLORS.surface }}
        >
          <div className="flex w-max gap-4 py-4 px-4" style={{ animation: "marqueeBottom 32s linear infinite" }}>
            {[...services, ...services, ...services].map((s, i) => {
              const sc = SERVICE_COLORS[i % services.length];
              return (
                <div
                  key={i}
                  className="flex flex-shrink-0 items-center gap-3 rounded-xl px-4 py-2.5 overflow-hidden relative"
                  style={{ border: `1px solid ${COLORS.border}`, background: COLORS.gold, }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                    style={{ background: sc.bg }}
                  />
                  <span className="text-lg ml-1">{s.icon}</span>
                  <div>
                    <p className="text-xs font-bold font-display" style={{ color: "#ffffff" }}>{s.name}</p>
                    <p style={{ fontSize: 11, color: "#ffffff9f" }} className="font-display font-bold">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeBottom {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}



