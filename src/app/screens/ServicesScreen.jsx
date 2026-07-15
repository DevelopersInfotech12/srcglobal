'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import PageHero from '../Components/PageHero';

/* ── Data ── */
const SERVICES = [
  {
    slug: 'bis', icon: '🏷️', title: 'BIS Certification', sub: 'Bureau of Indian Standards',
    desc: 'Mandatory for 70+ electronic and IT product categories including mobiles, laptops, LED lights, chargers, and power banks. We handle lab coordination, BIS portal filing, and follow-up until your R-number is issued.',
    features: ['CRS (Compulsory Registration Scheme)', 'ISI Mark (Product Certification)', 'BIS Hallmarking', 'Foreign Manufacturer Registration'],
    weeks: '4–16 wk',
  },
  {
    slug: 'epr', icon: '♻️', title: 'EPR Registration', sub: 'Extended Producer Responsibility',
    desc: 'E-waste, plastics, and battery EPR registration with CPCB. Full documentation, PRO empanelment, and annual compliance reporting for producers, importers, and brand owners.',
    features: ['E-Waste EPR', 'Plastic Waste EPR', 'Battery EPR', 'Annual Compliance Filing'],
    weeks: '3–6 wk',
  },
  {
    slug: 'wpc', icon: '📡', title: 'WPC — ETA Approval', sub: 'Wireless Planning & Coordination Wing',
    desc: 'Mandatory for Wi-Fi, Bluetooth, GPS, RFID, and all wireless devices. We manage lab testing with accredited labs and WPC portal submissions for Equipment Type Approval.',
    features: ['Wi-Fi & Bluetooth ETA', 'GPS & RFID Approval', 'Short Range Device Licensing', 'Import/Dealer Licence'],
    weeks: '6–10 wk',
  },
  {
    slug: 'tec', icon: '📶', title: 'TEC / MTCTE', sub: 'Telecom Engineering Centre',
    desc: 'Mandatory for telecom products under DoT — MTCTE (Mandatory Testing and Certification of Telecom Equipment) for routers, switches, SFPs, and network equipment.',
    features: ['MTCTE Certification', 'DoT Portal Management', 'Lab Testing Coordination', 'SDO Compliance Review'],
    weeks: '8–12 wk',
  },
  {
    slug: 'bee', icon: '⚡', title: 'BEE Registration', sub: 'Bureau of Energy Efficiency',
    desc: 'Star labelling and mandatory energy efficiency registration for appliances and equipment. Covers ACs, refrigerators, pumps, fans, motors, and 20+ more product categories.',
    features: ['Mandatory Star Labelling', 'Voluntary Star Labelling', 'BEE Portal Registration', 'Energy Audit Support'],
    weeks: '4–8 wk',
  },
  {
    slug: 'lmpc', icon: '📦', title: 'LMPC Registration', sub: 'Legal Metrology Packaged Commodities',
    desc: 'Import licence and product label compliance under the Legal Metrology (Packaged Commodities) Rules. Mandatory for all importers selling pre-packaged goods in India.',
    features: ['Importer LMPC Licence', 'Label Compliance Audit', 'State Metrology Coordination', 'Annual Renewal'],
    weeks: '2–4 wk',
  },
  {
    slug: 'iso', icon: '🏆', title: 'ISO Certification', sub: 'International Management Systems',
    desc: 'International management system certification for quality (9001), environment (14001), safety (45001), and information security (27001). We guide documentation, gap audits, and certification body liaison.',
    features: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'ISO 27001:2022'],
    weeks: '8–16 wk',
  },
  {
    slug: 'cdsco', icon: '💊', title: 'CDSCO / Drug License', sub: 'Central Drugs Standard Control Organization',
    desc: 'Registration of medical devices, drugs, cosmetics, and diagnostics under CDSCO and MDR 2017. We manage the online portal, clinical evidence review, and CDSCO liaison.',
    features: ['Medical Device Registration', 'Import Licence', 'Manufacturing Licence', 'CDSCO Portal Filing'],
    weeks: '12–20 wk',
  },
];

const PROCESS = [
  { step: '01', icon: '📋', title: 'Consultation & Assessment', desc: 'Free evaluation of your product against every applicable regulatory framework — no guesswork, no surprises.' },
  { step: '02', icon: '📝', title: 'Documentation & Filing', desc: 'Our specialists prepare every document and file directly on the relevant government portal on your behalf.' },
  { step: '03', icon: '🔬', title: 'Lab Testing & Coordination', desc: 'We coordinate with accredited labs, track sample testing, and manage every follow-up until results are in.' },
  { step: '04', icon: '✅', title: 'Certificate Issued', desc: 'Receive your certification — fully compliant and ready to sell, import, or manufacture in India.' },
];

const WHY_STATS = [
  { value: '10000', display: '10,000+', label: 'Certifications Delivered', icon: '🏆' },
  { value: '0', display: '0%', label: 'First-Attempt Failure Rate', icon: '✅' },
  { value: '8', display: '8+', label: 'Regulatory Bodies Covered', icon: '🏛️' },
  { value: '25', display: '25+', label: 'Countries Served', icon: '🌏' },
];

const INDUSTRIES = [
  { icon: '📱', name: 'Electronics & IT' },
  { icon: '📡', name: 'Telecom & Wireless' },
  { icon: '🏠', name: 'Home Appliances' },
  { icon: '🧸', name: 'Toys & Juvenile Products' },
  { icon: '💄', name: 'Cosmetics & Personal Care' },
  { icon: '🩺', name: 'Medical Devices' },
  { icon: '🍫', name: 'Packaged Foods' },
  { icon: '🚗', name: 'Automotive Components' },
];

const FAQS = [
  { q: 'How long does a certification typically take?', a: 'Turnaround depends on the certification — anywhere from 2 weeks for LMPC to 20 weeks for CDSCO medical device registration. We give you an exact timeline after the free assessment.' },
  { q: 'Do you handle Foreign Manufacturer Registration?', a: 'Yes. We manage FMR/FMCR filings end-to-end for overseas manufacturers looking to sell BIS-regulated products in India, including local Authorised Indian Representative (AIR) setup.' },
  { q: 'What happens if my product fails lab testing?', a: 'Our 0% first-attempt failure rate comes from rigorous pre-submission review. In the rare edge case, we diagnose the gap, guide remediation, and resubmit at no extra consulting cost.' },
  { q: 'Can you manage multiple certifications together?', a: 'Absolutely — most clients need 2–3 certifications (e.g. BIS + WPC + BEE) for a single product. We run them in parallel with one dedicated account manager.' },
  { q: 'Do you offer ongoing compliance support after certification?', a: 'Yes. We track renewal dates, regulatory changes, and annual filing requirements (like EPR returns) so you never miss a compliance deadline.' },
];

const TESTIMONIALS = [
  { name: 'Rajesh Mehta', co: 'TechImport Pvt. Ltd.', service: 'BIS CRS', text: 'SRC Global handled our BIS CRS certification end-to-end. Professional, fast, and completely transparent from day one.' },
  { name: 'Priya Sharma', co: 'EcoGoods India', service: 'EPR', text: 'EPR registration done within the promised timeline despite the urgency. Their support changed how we think about compliance.' },
  { name: 'Arjun Kapoor', co: 'Wireless Solutions Ltd.', service: 'WPC-ETA', text: 'WPC-ETA was always a black box for us. SRC Global made it completely simple. We call them for every new product launch now.' },
];

const DOC_CATEGORIES = [
  { icon: '🏢', title: 'Company Documents', items: ['Certificate of Incorporation', 'GST Registration', 'IEC Code (for imports)', 'Authorised Signatory ID'] },
  { icon: '📦', title: 'Product Documents', items: ['Product Datasheet / Manual', 'Circuit Diagram (electronics)', 'Test Reports (if available)', 'Product Images & Labels'] },
  { icon: '🌍', title: 'For Foreign Manufacturers', items: ['Manufacturing Licence', 'Authorised Indian Representative', 'ISO/Factory Certificates', 'Power of Attorney'] },
];


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

function Label({ children, light }) {
  return (
    <p style={{
      fontSize: '11px', letterSpacing: '0.32em',
      color: light ? 'var(--gold-dark)' : 'var(--gold-light)',
      textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.25rem',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
      fontFamily: 'var(--font-body)',
    }}>
      <span style={{ display: 'inline-block', width: '28px', height: '1px', background: light ? 'var(--gold-dark)' : 'var(--gold)' }} />
      {children}
    </p>
  );
}

function StatCard({ stat, active }) {
  const num = useCounter(stat.value, active);
  const isZero = stat.value === '0';
  return (
    <div style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
      <div style={{ fontSize: '36px', marginBottom: '8px' }}>{stat.icon}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,46px)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>
        {isZero ? '0%' : active ? (stat.display.includes('+') ? `${num.toLocaleString()}+` : stat.display) : '0'}
      </div>
      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', letterSpacing: '0.03em', lineHeight: 1.5, maxWidth: '160px', margin: '0 auto' }}>{stat.label}</p>
    </div>
  );
}

export default function ServicesScreen() {
  const [gridRef, gridVis] = useInView(0.05);
  const [processRef, processVis] = useInView(0.1);
  const [statsRef, statsVis] = useInView(0.2);
  const [industriesRef, industriesVis] = useInView(0.1);
  const [faqRef, faqVis] = useInView(0.1);
  const [openFaq, setOpenFaq] = useState(0);
  const [testiRef, testiVis] = useInView(0.1);
  const [docsRef, docsVis] = useInView(0.1);

  return (
    <>
      {/* ── 1. HERO ── */}
      <PageHero
        eyebrow="What We Offer"
        title="Our"
        highlight="Services"
        description="End-to-end compliance across every major Indian regulatory framework — BIS, EPR, WPC, TEC, BEE, ISO and CDSCO. Fixed pricing, dedicated managers, 0% failure rate."
        image="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&q=85&fit=crop"
        imageAlt="Product certification and testing"
        badge={{ label: '8+', sub: 'Certifications' }}
        stats={[
          { value: '8+', label: 'Regulatory Bodies' },
          { value: '0%', label: 'Failure Rate' },
          { value: '2–20wk', label: 'Turnaround' },
        ]}
        primaryCta={{ label: 'Get Free Quote', href: '/contact' }}
        secondaryCta={{ label: 'View All Services', href: '#services-grid' }}
        features={['BIS · CRS / ISI', 'WPC — ETA Approval', 'EPR Registration', 'ISO Certification']}
      />

      {/* ── 2. SERVICES GRID — LIGHT ── */}
      <section id="services-grid" ref={gridRef} className="section-light" style={{ padding: '7rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <Label light>Full-Spectrum Compliance</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              8 Certifications, <span style={{ color: 'var(--gold)' }}>One Partner</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {SERVICES.map((s, i) => (
              <div key={s.slug} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                borderRadius: '10px', padding: '2.5rem', position: 'relative', overflow: 'hidden',
                opacity: gridVis ? 1 : 0, transform: gridVis ? 'none' : 'translateY(30px)',
                transition: `opacity 0.6s ${i * 0.07}s, transform 0.6s ${i * 0.07}s, border-color .25s, box-shadow .25s`,
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(232,71,10,0.15)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,var(--gold),var(--gold-light))', transform: gridVis ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: `transform 0.7s ${0.2 + i * 0.07}s ease` }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '72px', fontWeight: 700, color: 'var(--border-subtle)', position: 'absolute', top: '1rem', right: '1.5rem', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: '32px', marginBottom: '1rem' }}>{s.icon}</div>
                <div style={{ fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.22em', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>{s.sub}</div>
                <Link href={`/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>{s.title}</h3>
                </Link>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-body)' }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '2rem' }}>
                  {s.features.map(f => (
                    <li key={f} style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontWeight: 700 }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '12px' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', fontWeight: 600, padding: '4px 10px', background: 'var(--gold-pale)', color: 'var(--gold-dark)', borderRadius: '1px', letterSpacing: '0.05em', fontFamily: 'var(--font-body)' }}>⏱ {s.weeks}</span>
                  <Link href={`/${s.slug}`} style={{ fontSize: '11px', color: 'var(--gold)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Get Started →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PROCESS — DARK ── */}
      <section ref={processRef} style={{ background: 'var(--bg-primary)', padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(232,71,10,0.12) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <Label>How It Works</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              From Query to <span style={{ color: 'var(--gold)' }}>Certificate</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '38px', left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg,transparent,var(--gold),transparent)', opacity: 0.35 }} />
            {PROCESS.map((p, i) => (
              <div key={p.step} style={{
                textAlign: 'center', position: 'relative',
                opacity: processVis ? 1 : 0, transform: processVis ? 'none' : 'translateY(40px)',
                transition: `opacity 0.6s ${i * 0.15}s, transform 0.6s ${i * 0.15}s`,
              }}>
                <div style={{
                  width: '76px', height: '76px', borderRadius: '50%', margin: '0 auto 1.5rem',
                  background: 'linear-gradient(135deg,var(--gold),var(--gold-dark))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px',
                  boxShadow: '0 8px 28px rgba(232,71,10,0.4)', position: 'relative', zIndex: 1,
                }}>{p.icon}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>STEP {p.step}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 700, fontFamily: 'var(--font-body)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US — LIGHT ── */}
      <section ref={statsRef} className="section-light" style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Label light>Why Choose SRC Global</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Numbers That <span style={{ color: 'var(--gold)' }}>Speak for Themselves</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '1rem' }}>
            {WHY_STATS.map(s => <StatCard key={s.label} stat={s} active={statsVis} />)}
          </div>
        </div>
      </section>

      {/* ── 5. INDUSTRIES WE SERVE — DARK ── */}
      <section ref={industriesRef} style={{ background: 'var(--bg-primary)', padding: '7rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <Label>Cross-Industry Expertise</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Industries We <span style={{ color: 'var(--gold)' }}>Serve</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1.25rem' }}>
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.name} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '10px',
                padding: '2rem 1.5rem', textAlign: 'center', cursor: 'default',
                opacity: industriesVis ? 1 : 0, transform: industriesVis ? 'none' : 'scale(0.9)',
                transition: `opacity 0.5s ${i * 0.06}s, transform 0.5s ${i * 0.06}s, border-color .2s, box-shadow .2s`,
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(232,71,10,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: '34px', marginBottom: '0.75rem' }}>{ind.icon}</div>
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4, fontFamily: 'var(--font-body)' }}>{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. DOCUMENTS REQUIRED — LIGHT ── */}
      <section ref={docsRef} className="section-light" style={{ padding: '7rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <Label light>Get Started Quickly</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              What You&apos;ll <span style={{ color: 'var(--gold)' }}>Need</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
            {DOC_CATEGORIES.map((d, i) => (
              <div key={d.title} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '10px', padding: '2rem',
                opacity: docsVis ? 1 : 0, transform: docsVis ? 'none' : 'translateY(30px)',
                transition: `opacity 0.6s ${i * 0.12}s, transform 0.6s ${i * 0.12}s`,
              }}>
                <div style={{ fontSize: '30px', marginBottom: '1rem' }}>{d.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>{d.title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {d.items.map(it => (
                    <li key={it} style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px', fontFamily: 'var(--font-body)', fontWeight: 700 }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '12px', marginTop: '2px' }}>✓</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CLIENT STORIES — DARK ── */}
      <section ref={testiRef} style={{ background: 'var(--bg-primary)', padding: '7rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <Label>Client Stories</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Why People <span style={{ color: 'var(--gold)' }}>Trust SRC Global</span>
            </h2>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: 'var(--gold)', fontSize: '14px' }}>★</span>)}
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '8px', fontFamily: 'var(--font-body)' }}>4.9 / 5 · 10,000+ Reviews</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '10px', padding: '2rem',
                opacity: testiVis ? 1 : 0, transform: testiVis ? 'none' : 'translateY(30px)',
                transition: `opacity 0.6s ${i * 0.12}s, transform 0.6s ${i * 0.12}s`,
              }}>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.75rem', fontStyle: 'italic', fontFamily: 'var(--font-display)', fontWeight: 400 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--gold)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, flexShrink: 0 }}>{t.name[0]}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>{t.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{t.co}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '9px', fontWeight: 700, padding: '4px 10px', background: 'var(--gold-pale)', color: 'var(--gold)', borderRadius: '2px', letterSpacing: '0.1em', flexShrink: 0, textTransform: 'uppercase' }}>{t.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── 6. FAQ — LIGHT ── */}
      <section ref={faqRef} className="section-light" style={{ padding: '7rem 1.5rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <Label light>Common Questions</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Frequently Asked <span style={{ color: 'var(--gold)' }}>Questions</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid var(--border-subtle)', borderRadius: '10px', overflow: 'hidden' }}>
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} style={{
                  background: 'var(--bg-card)',
                  opacity: faqVis ? 1 : 0, transform: faqVis ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.5s ${i * 0.08}s, transform 0.5s ${i * 0.08}s`,
                }}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    style={{
                      width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                      padding: '1.5rem 1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>{f.q}</span>
                    <span style={{
                      fontSize: '18px', color: 'var(--gold)', fontWeight: 700, flexShrink: 0,
                      transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .3s',
                    }}>+</span>
                  </button>
                  <div style={{
                    maxHeight: open ? '200px' : '0px', overflow: 'hidden', transition: 'max-height .35s ease',
                  }}>
                    <p style={{ padding: '0 1.75rem 1.5rem', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 700, fontFamily: 'var(--font-body)' }}>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 9. CTA ── */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--gold)', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '350px', borderRadius: '50%', background: 'radial-gradient(ellipse,rgba(255,255,255,0.15) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: '1rem' }}>
            Not sure which certification you need?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '15px', marginBottom: '2rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>
            Our experts will assess your product and recommend the exact path — free of charge.
          </p>
          <Link href="/contact" style={{ background: '#fff', color: 'var(--gold)', padding: '14px 40px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.16em', fontFamily: 'var(--font-body)', textDecoration: 'none', textTransform: 'uppercase', borderRadius: '3px', display: 'inline-block', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', transition: 'transform .2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </>
  );
}