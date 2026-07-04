"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../Components/PageHero";

/* ── Brand tokens ── */
const C = {
  orange: "#E8470A",
  orangeLight: "#ff6b35",
  orangeDark: "#c73a06",
  navy: "#1B2A4A",
  navyDark: "#0f1a30",
  navyMid: "#162240",
  navyCard: "#223362",
  white: "#ffffff",
  lightBg: "#f5f7fa",
  lightAlt: "#edf0f7",
  textLight: "#c8d4e8",
  textMuted: "#8a9ab8",
  textDark: "#1B2A4A",
  textMid: "#2d4270",
};

/* ── Data ── */
const TEAM = [
  { name: "Rajendra Sharma", role: "Founder & CEO", bio: "20+ years in regulatory compliance. Former BIS technical committee member.", icon: "R" },
  { name: "Meena Gupta", role: "Head of BIS Division", bio: "Specialist in CRS, ISI and BIS product certification for electronics.", icon: "M" },
  { name: "Arvind Nair", role: "EPR & Environment Head", bio: "CPCB-certified EPR consultant managing e-waste and plastics compliance.", icon: "A" },
  { name: "Sunita Khanna", role: "ISO & Management Systems", bio: "Lead auditor for ISO 9001, 14001 and 45001 across 200+ organizations.", icon: "S" },
];

const MILESTONES = [
  { year: "2012", event: "SRC Global founded in New Delhi with a focus on BIS certification." },
  { year: "2015", event: "Expanded to WPC and TEC services for telecom and wireless manufacturers." },
  { year: "2018", event: "Launched EPR division as Indian e-waste regulations gained enforcement." },
  { year: "2020", event: "Crossed 5,000 successful certifications. Opened 3 regional offices." },
  { year: "2023", event: "Extended services to 25+ countries. Launched 24/7 support desk." },
  { year: "2025", event: "10,000+ certifications. 0% first-attempt failure rate maintained." },
];

const STATS = [
  { value: "10000", display: "10,000+", label: "Certifications Delivered", icon: "🏆" },
  { value: "0", display: "0%", label: "First-Attempt Failure Rate", icon: "✅" },
  { value: "25", display: "25+", label: "Countries Served", icon: "🌏" },
  { value: "12", display: "12+", label: "Years of Excellence", icon: "📅" },
];

const VALUES = [
  { title: "Precision", desc: "Every file reviewed against latest regulatory requirements before submission.", icon: "🎯" },
  { title: "Transparency", desc: "Real-time updates at every stage. No surprises, no hidden fees.", icon: "🔍" },
  { title: "Speed", desc: "Fastest turnaround in the industry — we move as fast as regulations allow.", icon: "⚡" },
  { title: "Integrity", desc: "We never promise what we can't deliver. Our record speaks for itself.", icon: "🛡️" },
];

const SERVICES_PREVIEW = [
  { name: "BIS / CRS", desc: "Compulsory Registration Scheme for electronics & IT products" },
  { name: "WPC / ETA", desc: "Wireless Planning & Coordination approvals" },
  { name: "EPR", desc: "Extended Producer Responsibility — e-waste & plastics" },
  { name: "ISO Certification", desc: "9001 · 14001 · 45001 management systems" },
  { name: "TEC / MTCTE", desc: "Telecom Equipment Certification from DoT" },
  { name: "BEE Star Rating", desc: "Energy efficiency labelling for appliances" },
];

const CLIENTS = ["Samsung", "Xiaomi", "Bosch", "LG Electronics", "Havells", "Philips", "Bajaj", "Honeywell"];

/* ── Hooks ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useCounter(target, active, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const num = parseInt(target, 10);
    if (!num) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * num));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

/* ── AnimStat ── */
function AnimStat({ stat, active }) {
  const num = useCounter(stat.value, active);
  const isZero = stat.value === "0";
  return (
    <div style={{ textAlign: "center", padding: "2rem 1.5rem" }}>
      <div style={{ fontSize: "36px", marginBottom: "8px" }}>{stat.icon}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px,4vw,50px)", fontWeight: 700, color: C.orange, lineHeight: 1, marginBottom: "8px" }}>
        {isZero ? "0%" : active ? (stat.display.includes("+") ? `${num.toLocaleString()}+` : stat.display) : "0"}
      </div>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: "12px", color: C.textLight, letterSpacing: "0.05em", lineHeight: 1.5, maxWidth: "140px", margin: "0 auto" }}>{stat.label}</p>
    </div>
  );
}

/* ── Label ── */
function Label({ children, light }) {
  return (
    <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", letterSpacing: "0.32em", color: C.orange, textTransform: "uppercase", fontWeight: 700, marginBottom: "1rem" }}>
      ◆ {children} ◆
    </p>
  );
}

/* ── Main ── */
export default function AboutScreen() {
  /* Section visibility */
  const [statsRef, statsVis] = useInView(0.2);
  const [storyRef, storyVis] = useInView(0.1);
  const [vmjRef, vmjVis] = useInView(0.1);
  const [valuesRef, valuesVis] = useInView(0.1);
  const [timelineRef, tlVis] = useInView(0.05);
  const [teamRef, teamVis] = useInView(0.1);
  const [servRef, servVis] = useInView(0.1);
  const [clientsRef, clientsVis] = useInView(0.1);

  /* Timeline */
  const [activeMs, setActiveMs] = useState(0);
  useEffect(() => {
    if (!tlVis) return;
    const t = setInterval(() => setActiveMs(i => (i + 1) % MILESTONES.length), 2200);
    return () => clearInterval(t);
  }, [tlVis]);

  return (
    <>
      {/* ── 1. HERO ── */}
      <PageHero
        eyebrow="About SRC Global"
        title="12 Years of"
        highlight="Compliance Excellence"
        description="India's most trusted compliance partner — end-to-end BIS, WPC, BEE, ISO, EPR and product certification, managed by a 100-person team of regulatory specialists."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&fit=crop"
        imageAlt="SRC Global team at work"
        badge={{ label: "Est.", sub: "2012" }}
        stats={STATS.slice(0, 3).map((s) => ({ value: s.display, label: s.label }))}
        primaryCta={{ label: "Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "Our Story ↓", href: "#story" }}
        features={VALUES.map((v) => v.title)}
      />

      {/* ── 3. STORY — LIGHT ── */}
      <section id="story" ref={storyRef} className="section-light" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "5rem", alignItems: "center" }}>
          <div style={{ opacity: storyVis ? 1 : 0, transform: storyVis ? "none" : "translateX(-40px)", transition: "opacity 0.8s, transform 0.8s" }}>
            <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 24px 60px rgba(27,42,74,0.2)" }}>
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&fit=crop" alt="SRC Global team" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,rgba(232,71,10,0.12),transparent)` }} />
            </div>
            <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", background: C.orange, color: C.white, borderRadius: "6px", padding: "1.25rem 1.5rem", boxShadow: "0 8px 32px rgba(232,71,10,0.4)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 700, lineHeight: 1 }}>0%</div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em" }}>FAILURE RATE</div>
            </div>
          </div>

          <div style={{ opacity: storyVis ? 1 : 0, transform: storyVis ? "none" : "translateX(40px)", transition: "opacity 0.8s 0.2s, transform 0.8s 0.2s" }}>
            <Label>Our Story</Label>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 3.8vw, 54px)", fontWeight: 700, letterSpacing: "-0.02em", color: C.navy, lineHeight: 1.12, marginBottom: "1.5rem" }}>
              Born from a Need to<br /><span style={{ color: C.orange }}>Simplify Compliance</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: "15px", color: C.textMid, lineHeight: 1.9, marginBottom: "1.25rem" }}>
              Founded in 2012 by regulatory veterans, SRC Global was born from a single insight: Indian and foreign manufacturers were losing months — and crores — to failed certification attempts caused by avoidable documentation errors.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: "15px", color: C.textMid, lineHeight: 1.9, marginBottom: "2rem" }}>
              Today we are a 100-person team across Delhi, Mumbai, Bengaluru, and Chennai. We&apos;ve served clients from 25+ countries, and our 0% failure rate is the result of rigorous pre-submission review on every file.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["12+ Years", "100+ Experts", "25+ Countries", "50+ Services"].map(t => (
                <span key={t} style={{ fontSize: "11px", fontWeight: 700, padding: "6px 14px", border: `1.5px solid ${C.orange}`, color: C.orange, borderRadius: "3px", letterSpacing: "0.1em" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. VISION · MISSION · JOURNEY — DARK ── */}
      <section ref={vmjRef} style={{ background: C.navy, padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <Label>What We Stand For</Label>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 3.8vw, 54px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.12, color: C.white }}>
              Vision, Mission <span style={{ color: C.orange }}>&amp; Journey</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2rem" }}>
            {/* Vision */}
            <div style={{ background: `linear-gradient(135deg,${C.navyMid},${C.navyCard})`, border: `1px solid rgba(232,71,10,0.2)`, borderRadius: "12px", padding: "3rem 2.5rem", opacity: vmjVis ? 1 : 0, transform: vmjVis ? "none" : "translateY(40px)", transition: "opacity 0.6s 0s, transform 0.6s 0s", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg,${C.orange},${C.orangeLight})` }} />
              <div style={{ width: "56px", height: "56px", borderRadius: "12px", background: `rgba(232,71,10,0.15)`, border: `1px solid rgba(232,71,10,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", marginBottom: "1.5rem" }}>🔭</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 700, color: C.white, marginBottom: "1rem" }}>Our Vision</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "15px", color: C.textLight, lineHeight: 1.85 }}>
                To be the most trusted compliance partner in Asia — enabling every manufacturer, startup, and enterprise to enter regulated markets with confidence, speed, and zero risk of rejection.
              </p>
              <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid rgba(232,71,10,0.15)` }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: "12px", color: C.orange, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Where we&apos;re going</p>
              </div>
            </div>

            {/* Mission */}
            <div style={{ background: `linear-gradient(135deg,${C.orange},${C.orangeDark})`, borderRadius: "12px", padding: "3rem 2.5rem", opacity: vmjVis ? 1 : 0, transform: vmjVis ? "none" : "translateY(40px)", transition: "opacity 0.6s 0.15s, transform 0.6s 0.15s", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
              <div style={{ width: "56px", height: "56px", borderRadius: "12px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", marginBottom: "1.5rem" }}>🎯</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 700, color: C.white, marginBottom: "1rem" }}>Our Mission</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.85 }}>
                To deliver end-to-end regulatory compliance services — BIS, EPR, WPC, TEC, ISO, and beyond — with unmatched accuracy, transparent communication, and a first-attempt approval rate that the industry has never seen.
              </p>
              <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: "12px", color: "rgba(255,255,255,0.8)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>How we get there</p>
              </div>
            </div>

            {/* Journey */}
            <div style={{ background: `linear-gradient(135deg,${C.navyMid},${C.navyCard})`, border: `1px solid rgba(232,71,10,0.2)`, borderRadius: "12px", padding: "3rem 2.5rem", opacity: vmjVis ? 1 : 0, transform: vmjVis ? "none" : "translateY(40px)", transition: "opacity 0.6s 0.3s, transform 0.6s 0.3s", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg,${C.orange},${C.orangeLight})` }} />
              <div style={{ width: "56px", height: "56px", borderRadius: "12px", background: `rgba(232,71,10,0.15)`, border: `1px solid rgba(232,71,10,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", marginBottom: "1.5rem" }}>🚀</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 700, color: C.white, marginBottom: "1rem" }}>Our Journey</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { year: "2012", note: "Founded in New Delhi" },
                  { year: "2016", note: "500+ certifications milestone" },
                  { year: "2020", note: "5,000+ certs · 3 city offices" },
                  { year: "2025", note: "10,000+ certs · 25 countries" },
                ].map(j => (
                  <div key={j.year} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ minWidth: "48px", fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, color: C.orange }}>{j.year}</div>
                    <div style={{ flex: 1, height: "1px", background: "rgba(232,71,10,0.2)" }} />
                    <div style={{ fontSize: "13px", color: C.textLight }}>{j.note}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid rgba(232,71,10,0.15)` }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: "12px", color: C.orange, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>12 years strong</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CORE VALUES — LIGHT ── */}
      <section ref={valuesRef} className="section-light" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <Label>What Drives Us</Label>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 3.8vw, 54px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.12, color: C.navy }}>
              Our Core <span style={{ color: C.orange }}>Values</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem" }}>
            {VALUES.map((v, i) => (
              <div key={v.title} style={{ background: C.white, border: `1px solid rgba(27,42,74,0.08)`, borderRadius: "10px", padding: "2.5rem", boxShadow: "0 2px 16px rgba(27,42,74,0.07)", opacity: valuesVis ? 1 : 0, transform: valuesVis ? "none" : "translateY(30px)", transition: `opacity 0.6s ${i * 0.12}s, transform 0.6s ${i * 0.12}s`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg,${C.orange},${C.orangeLight})`, transform: valuesVis ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: `transform 0.6s ${0.3 + i * 0.12}s ease` }} />
                <div style={{ fontSize: "32px", marginBottom: "1.25rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: C.navy, marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: "14px", color: C.textMid, lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TIMELINE — DARK ── */}
      <section ref={timelineRef} style={{ background: C.navy, padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <Label>Our Growth</Label>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 3.8vw, 54px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.12, color: C.white }}>Key Milestones</h2>
          </div>
          <div style={{ display: "flex", position: "relative", overflowX: "auto", paddingBottom: "2rem" }}>
            <div style={{ position: "absolute", top: "28px", left: "40px", right: "40px", height: "2px", background: `linear-gradient(90deg,rgba(232,71,10,0.2),${C.orange},rgba(232,71,10,0.2))` }} />
            {MILESTONES.map((m, i) => (
              <div key={m.year} onClick={() => setActiveMs(i)} style={{ flex: "1 0 140px", textAlign: "center", padding: "0 1rem", cursor: "pointer", minWidth: "120px" }}>
                <div style={{ width: i === activeMs ? "24px" : "16px", height: i === activeMs ? "24px" : "16px", borderRadius: "50%", background: i === activeMs ? C.orange : C.navyMid, border: `3px solid ${i === activeMs ? C.orange : "rgba(232,71,10,0.4)"}`, margin: "0 auto 1.5rem", boxShadow: i === activeMs ? `0 0 16px rgba(232,71,10,0.6)` : "none", transition: "all 0.4s ease", position: "relative", zIndex: 1 }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, color: i === activeMs ? C.orange : C.textMuted, marginBottom: "0.5rem", transition: "color 0.4s" }}>{m.year}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: "12px", color: i === activeMs ? C.textLight : C.textMuted, lineHeight: 1.6, transition: "color 0.4s, opacity 0.4s", opacity: i === activeMs ? 1 : 0.55 }}>{m.event}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem", background: C.orange, borderRadius: "8px", padding: "1.75rem 2rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "52px", fontWeight: 700, color: C.white, opacity: 0.25, lineHeight: 1, flexShrink: 0 }}>{MILESTONES[activeMs].year}</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", color: C.white, lineHeight: 1.7, fontWeight: 500 }}>{MILESTONES[activeMs].event}</p>
          </div>
        </div>
      </section>

      {/* ── 7. TEAM — LIGHT ── */}
      <section ref={teamRef} className="section-light" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <Label>Meet the Experts</Label>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 3.8vw, 54px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.12, color: C.navy }}>The <span style={{ color: C.orange }}>SRC Global</span> Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "1.5rem" }}>
            {TEAM.map((t, i) => (
              <div key={t.name} style={{ background: C.white, border: `1px solid rgba(27,42,74,0.08)`, borderRadius: "10px", padding: "2.5rem 2rem", textAlign: "center", boxShadow: "0 2px 16px rgba(27,42,74,0.07)", opacity: teamVis ? 1 : 0, transform: teamVis ? "none" : "translateY(40px)", transition: `opacity 0.6s ${i * 0.12}s, transform 0.6s ${i * 0.12}s`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg,transparent,${C.orange},transparent)` }} />
                <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: `linear-gradient(135deg,${C.orange},${C.orangeDark})`, color: C.white, fontSize: "28px", fontFamily: "var(--font-display)", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", boxShadow: `0 4px 20px rgba(232,71,10,0.3)` }}>
                  {t.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: C.navy, marginBottom: "4px" }}>{t.name}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: "11px", color: C.orange, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, marginBottom: "1rem" }}>{t.role}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: "13px", color: C.textMid, lineHeight: 1.75 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. SERVICES PREVIEW — DARK ── */}
      <section ref={servRef} style={{ background: C.navy, padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "5rem", alignItems: "center" }}>
          <div style={{ opacity: servVis ? 1 : 0, transform: servVis ? "none" : "translateX(-30px)", transition: "opacity 0.7s, transform 0.7s" }}>
            <Label>What We Do</Label>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 3.8vw, 54px)", fontWeight: 700, letterSpacing: "-0.02em", color: C.white, lineHeight: 1.12, marginBottom: "1.5rem" }}>
              50+ Compliance<br /><span style={{ color: C.orange }}>Services Under One Roof</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: "15px", color: C.textLight, lineHeight: 1.9, marginBottom: "2rem" }}>
              From BIS registration to EPR compliance, we handle every certification your product needs to enter the Indian market.
            </p>
            <Link href="/services" style={{ display: "inline-block", background: `linear-gradient(135deg,${C.orange},${C.orangeDark})`, color: C.white, padding: "13px 32px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textDecoration: "none", textTransform: "uppercase", borderRadius: "3px", boxShadow: "0 4px 20px rgba(232,71,10,0.35)" }}>
              View All Services →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", opacity: servVis ? 1 : 0, transform: servVis ? "none" : "translateX(30px)", transition: "opacity 0.7s 0.2s, transform 0.7s 0.2s" }}>
            {SERVICES_PREVIEW.map((s, i) => (
              <div key={s.name} style={{ background: C.navyMid, borderRadius: "8px", padding: "1.25rem", borderTop: `3px solid ${C.orange}`, border: `1px solid rgba(232,71,10,0.15)`, borderTopWidth: "3px", borderTopColor: C.orange, opacity: servVis ? 1 : 0, transform: servVis ? "none" : "translateY(20px)", transition: `opacity 0.5s ${0.3 + i * 0.07}s, transform 0.5s ${0.3 + i * 0.07}s` }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, color: C.white, marginBottom: "6px" }}>{s.name}</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: "12px", color: C.textMuted, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CLIENTS — LIGHT ── */}
      <section ref={clientsRef} className="section-light" style={{ padding: "5rem 1.5rem", borderTop: `1px solid rgba(27,42,74,0.08)` }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", letterSpacing: "0.32em", color: C.orange, textTransform: "uppercase", fontWeight: 700, marginBottom: "3rem", opacity: clientsVis ? 1 : 0, transition: "opacity 0.6s" }}>
            ◆ Trusted by Industry Leaders ◆
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            {CLIENTS.map((c, i) => (
              <div key={c} style={{ background: C.white, border: `1px solid rgba(27,42,74,0.1)`, borderRadius: "6px", padding: "12px 24px", fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: C.navy, boxShadow: "0 2px 8px rgba(27,42,74,0.07)", opacity: clientsVis ? 1 : 0, transform: clientsVis ? "none" : "scale(0.9)", transition: `opacity 0.5s ${i * 0.06}s, transform 0.5s ${i * 0.06}s` }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "7rem 1.5rem", textAlign: "center", background: `linear-gradient(135deg,${C.navyDark} 0%,${C.navy} 60%,${C.navyMid} 100%)` }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "400px", borderRadius: "50%", background: `radial-gradient(ellipse,rgba(232,71,10,0.18) 0%,transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Label>Get Started</Label>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 3.8vw, 54px)", fontWeight: 700, letterSpacing: "-0.02em", color: C.white, lineHeight: 1.12, marginBottom: "1.25rem" }}>
            Ready to Get Certified<br /><span style={{ color: C.orange }}>Without the Headache?</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', color: C.textLight, fontSize: "16px", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            Our experts respond within 2 hours. Free consultation, always.
          </p>
          <Link href="/contact" style={{ background: `linear-gradient(135deg,${C.orange},${C.orangeDark})`, color: C.white, padding: "16px 44px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textDecoration: "none", textTransform: "uppercase", borderRadius: "3px", boxShadow: "0 8px 32px rgba(232,71,10,0.45)", display: "inline-block" }}>
            Get Free Consultation →
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }
        @keyframes scrollDot { 0%{opacity:1;transform:translateY(0)} 50%{opacity:0;transform:translateY(8px)} 100%{opacity:0;transform:translateY(0)} }
      `}</style>
    </>
  );
}
