"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* ── Brand tokens — same system as Home hero / globals.css ── */
const C = {
  navy: "#1B2A4A",
  navyDark: "#0f1a30",
  orange: "#E8470A",
  orangeLight: "#ff6b35",
  white: "#ffffff",
  muted: "#a9b6d1",
  text: "#e3e8f2",
};

/**
 * PageHero — full-bleed "chapter" style hero for inner pages (About,
 * Services, Blog, Careers, Contact). Same visual language as the
 * full-bleed rotating hero pattern: full-height bg image, dark gradient,
 * fading-in eyebrow → title → tagline → body → CTA stack — but static
 * (one chapter per page) and restyled with SRC Global's navy/orange palette
 * and Playfair Display / DM Sans fonts to match the Home hero.
 *
 * Same prop API as before, so no screen files need to change:
 *  eyebrow, title, highlight, description, image, imageAlt, badge,
 *  stats, primaryCta, secondaryCta, features
 */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt = "",
  badge,
  stats,
  primaryCta,
  secondaryCta,
  features,
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden h-[60vh] min-h-[520px] lg:h-[65vh] lg:min-h-[220px]"
      style={{ background: C.navyDark }}
    >
      {/* Background image */}
      {image && (
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                `linear-gradient(90deg, ${C.navyDark}E6 0%, ${C.navy}CC 38%, ${C.navy}55 62%, ${C.navy}22 100%), linear-gradient(0deg, ${C.navyDark}99 0%, transparent 35%)`,
            }}
          />
        </div>
      )}

      {/* faint vertical grid lines, matches Home/About texture */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 1 }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute top-0 bottom-0" style={{ left: `${(i + 1) * 16.66}%`, width: 1, background: "rgba(232,71,10,0.08)" }} />
        ))}
      </div>

      {/* Floating badge, top-right */}
      {badge && (
        <div
          className="hidden sm:block absolute right-5 top-6 z-20 rounded px-3 py-1.5 text-center text-xs backdrop-blur-md"
          style={{ background: `${C.orange}CC`, border: `1px solid ${C.orange}`, color: C.white }}
        >
          <p className="text-xs font-black leading-tight">{badge.label}</p>
          {badge.sub && <p className="mt-2 sm:mt-0 leading-snug sm:leading-normal text-[10px] sm:text-[12px] " style={{ opacity: 0.8 }}>{badge.sub}</p>}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center">
        <div className="max-w-xl w-full">
          {eyebrow && (
            <div
              className="inline-flex items-center gap-2.5 mb-5 px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${C.orange}59`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s cubic-bezier(.22,1,.36,1) 0.05s, transform 0.6s cubic-bezier(.22,1,.36,1) 0.05s",
              }}
            >
              <span style={{ display: "block", width: 6, height: 6, borderRadius: "50%", background: C.orange, boxShadow: `0 0 8px 2px ${C.orange}99` }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.orangeLight }}>
                {eyebrow}
              </span>
            </div>
          )}

          <h1
            className="leading-[1.05] text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              backgroundImage: `linear-gradient(135deg, #ffffff 35%, ${C.orangeLight} 75%, ${C.orange} 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s cubic-bezier(.22,1,.36,1) 0.15s, transform 0.8s cubic-bezier(.22,1,.36,1) 0.15s",
            }}
          >
            {title} {highlight && <span>{highlight}</span>}
          </h1>

          {description && (
            <p
              className="mt-6 max-w-md text-[15px] leading-relaxed"
              style={{
                color: C.text,
                fontFamily: "var(--font-body)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s",
              }}
            >
              {description}
            </p>
          )}

          {features && features.length > 0 && (
            <div
              className="mt-6 flex flex-wrap gap-2"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.5s" }}
            >
              {features.map((f) => (
                <span
                  key={f}
                  className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(232,71,10,0.3)", color: C.text, fontFamily: "var(--font-body)" }}
                >
                  <span style={{ color: C.orange }}>✦</span> {f}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}