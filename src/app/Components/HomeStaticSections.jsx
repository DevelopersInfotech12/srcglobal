'use client';
import Link from 'next/link';
import Image from 'next/image';

/* ── helpers ── */
export const GoldBtn = ({ href, children, outline }) => (
  <Link href={href} style={{
    display: 'inline-block', padding: '13px 32px', fontSize: '12px', fontWeight: 600,
    letterSpacing: '0.15em', textDecoration: 'none', textTransform: 'uppercase',
    borderRadius: '2px', transition: 'all .2s',
    background: outline ? 'transparent' : 'var(--gold)',
    color: outline ? 'var(--gold)' : '#fff',
    border: `1.5px solid var(--gold)`,
  }}>{children}</Link>
);

/* ── data ── */
export const SERVICES = [
  { icon: '🏷️', title: 'BIS — CRS', sub: 'Compulsory Registration Scheme', desc: '70+ product categories, mandatory for electronics & IT. We handle lab co-ordination, BIS portal filing, and follow-up.', weeks: '4–8 wk', href: '/services/bis' },
  { icon: '♻️', title: 'EPR', sub: 'Extended Producer Responsibility', desc: 'E-waste, plastics & battery EPR registration with CPCB. Full documentation and annual compliance reporting.', weeks: '3–6 wk', href: '/services/epr' },
  { icon: '📡', title: 'WPC — ETA', sub: 'Wireless Equipment Type Approval', desc: 'Mandatory for Wi-Fi, Bluetooth, GPS and all wireless devices. We manage lab testing and WPC portal submissions.', weeks: '6–10 wk', href: '/services/wpc' },
  { icon: '📶', title: 'TEC / MTCTE', sub: 'Telecom Equipment Certification', desc: 'Mandatory for telecom products under DoT. We handle TEC portal, lab co-ordination and compliance review.', weeks: '8–12 wk', href: '/services/tec' },
  { icon: '⚡', title: 'BEE', sub: 'Bureau of Energy Efficiency', desc: 'Star labelling and mandatory registration for energy-consuming products. Covers 24+ product categories.', weeks: '4–8 wk', href: '/services/bee' },
  { icon: '📦', title: 'LMPC', sub: 'Legal Metrology Packaged Commodities', desc: 'Import licence and product label compliance under Legal Metrology Act for importers.', weeks: '2–4 wk', href: '/services/lmpc' },
  { icon: '🏆', title: 'ISO', sub: 'ISO 9001 / 14001 / 45001', desc: 'International management system certification. We guide documentation, audits, and certification body liaison.', weeks: '8–16 wk', href: '/services/iso' },
  { icon: '💊', title: 'CDSCO', sub: 'Drug & Medical Device License', desc: 'Registration of medical devices, drugs, and cosmetics under CDSCO / MDR 2017.', weeks: '12–20 wk', href: '/services/cdsco' },
];

export const INDUSTRIES = [
  { icon: '💻', name: 'Electronics & IT', tags: 'BIS CRS, ISI, WPC' },
  { icon: '📡', name: 'Telecom & IoT', tags: 'TEC, WPC-ETA, BIS' },
  { icon: '💊', name: 'Pharmaceuticals', tags: 'CDSCO, GMP, WHO' },
  { icon: '🛒', name: 'FMCG', tags: 'FSSAI, BIS, LMPC' },
  { icon: '🚗', name: 'Automotive', tags: 'AIS, CMVR, BIS' },
  { icon: '🏥', name: 'Medical Devices', tags: 'CDSCO MDR, ISO 13485' },
  { icon: '👕', name: 'Textiles', tags: 'BIS, GOTS, Oeko-Tex' },
  { icon: '🍽️', name: 'Food & Beverages', tags: 'FSSAI, APEDA, AGMARK' },
  { icon: '⚗️', name: 'Chemicals', tags: 'BIS, REACH, GHS' },
  { icon: '🏗️', name: 'Construction', tags: 'BIS, BEE, Green' },
  { icon: '🧸', name: 'Toys & Furniture', tags: 'BIS, IS 9873, BIFMA' },
  { icon: '⚡', name: 'Energy & Power', tags: 'BEE, BIS, MNRE' },
];

export const PROCESS = [
  { n: '01', icon: '💬', title: 'Free Consultation', desc: 'We assess your product and advise on the exact certification path needed.' },
  { n: '02', icon: '📄', title: 'Documentation', desc: 'Our experts prepare every document and lab test required for your file.' },
  { n: '03', icon: '📤', title: 'Filing', desc: 'We submit the complete, error-free application with the regulatory body.' },
  { n: '04', icon: '🎓', title: 'Certificate', desc: 'We track and follow up until your certificate is issued and delivered.' },
];

export const TESTIMONIALS = [
  { name: 'Rajesh Mehta', co: 'TechImport Pvt. Ltd.', service: 'BIS CRS', text: 'SRC Global handled our BIS CRS certification end-to-end. Professional, fast and transparent from day one. Highly recommended.' },
  { name: 'Priya Sharma', co: 'EcoGoods India', service: 'EPR', text: 'EPR registration done within the promised timeline despite the urgency. Their 24/7 availability is a game-changer.' },
  { name: 'Arjun Kapoor', co: 'Wireless Solutions Ltd.', service: 'WPC-ETA', text: 'WPC-ETA was always a black box for us. SRC Global made it completely simple. We go to them for every new product launch.' },
  { name: 'Sneha Verma', co: 'MediCare Devices Pvt. Ltd.', service: 'CDSCO', text: 'CDSCO licensing used to terrify us. SRC Global\'s expertise made it completely stress-free. Outstanding team, proactive communication.' },
];

export const BLOGS = [
  { tag: 'BIS Certification', date: 'Apr 28, 2025', read: '6 min', title: 'BIS CRS Registration: What Every Electronics Importer Must Know in 2025', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80', href: '/blog/bis-crs' },
  { tag: 'EPR', date: 'Apr 15, 2025', read: '5 min', title: 'EPR Registration for E-Waste: A Complete Compliance Roadmap', img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80', href: '/blog/epr' },
  { tag: 'WPC / ETA', date: 'Mar 30, 2025', read: '4 min', title: 'WPC ETA Approval for Wireless Devices: Timelines, Docs & Common Pitfalls', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', href: '/blog/wpc' },
];

export const FAQS = [
  { q: 'How long does BIS certification take?', a: 'BIS CRS typically takes 4–8 weeks. ISI mark (product certification) takes 8–16 weeks depending on the product category and lab testing schedule.' },
  { q: 'What is the cost of EPR registration?', a: 'EPR registration cost varies by producer category and annual turnover. We provide a transparent, fixed-fee quote after an initial assessment with no hidden charges.' },
  { q: 'Can foreign companies apply for Indian certifications?', a: 'Yes. Foreign manufacturers can apply directly or via an Authorised Indian Representative (AIR). SRC Global acts as AIR for 25+ countries.' },
  { q: 'Do you provide post-certification support?', a: 'Yes. We handle renewal, annual audits, surveillance reports, and amendment filings. Your dedicated account manager stays with you throughout the certificate lifecycle.' },
  { q: 'What is your failure rate?', a: 'Our first-attempt approval rate is 100%. We achieve this through meticulous documentation, thorough pre-audit checks, and deep regulatory expertise built over 12+ years.' },
];

/* ── Sections ── */

export function HeroSection() {
  return (
    <div style={{ background: 'var(--bg-secondary)', overflow: 'hidden', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: .04,
        backgroundImage: 'repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)',
        backgroundSize: '40px 40px',
      }} />
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem 4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.25rem', fontWeight: 600 }}>
            ✦ India&apos;s Premier Compliance Partner
          </p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            Where Compliance<br />
            <span style={{ color: 'var(--gold)' }}>Meets Speed.</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '460px', marginBottom: '2.5rem' }}>
            BIS · EPR · WPC · TEC · BEE · ISO · CDSCO — certified across every major Indian regulatory framework. 12+ years. 10,000+ clients. 0% failure rate.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <GoldBtn href="/contact">Free Consultation</GoldBtn>
            <GoldBtn href="/services" outline>All Services</GoldBtn>
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            {['✓ BIS Approved', '✓ NABL Accredited', '✓ Govt. Recognized'].map(t => (
              <span key={t} style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.05em' }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative', aspectRatio: '4/3' }}>
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=720&q=85&fit=crop"
              alt="SRC Global compliance consultants at work"
              fill style={{ objectFit: 'cover' }} priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(201,146,28,.15) 0%, transparent 60%)' }} />
          </div>
          <div style={{
            position: 'absolute', bottom: '-1.5rem', left: '-1.5rem',
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: '4px', padding: '1.25rem 1.5rem', boxShadow: 'var(--shadow-md)',
          }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '36px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>10K+</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Clients Served</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <div style={{ background: 'var(--gold)', padding: '1.25rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-around', alignItems: 'center' }}>
        {[
          ['Ethically Transparent', 'Fixed pricing, no hidden fees'],
          ['Pan-India Network', 'Offices & lab partners nationwide'],
          ['Secure Submissions', '100% error-free portal filings'],
          ['Express Turnaround', 'Fastest approval timelines'],
        ].map(([title, sub]) => (
          <div key={title} style={{ textAlign: 'center', color: '#fff' }}>
            <div style={{ fontWeight: 600, fontSize: '13px', letterSpacing: '0.05em' }}>{title}</div>
            <div style={{ fontSize: '11px', opacity: .85, marginTop: '2px' }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <div style={{ background: 'var(--bg-primary)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>What We Offer</p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3.5rem', maxWidth: '600px' }}>
          Our Services
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {SERVICES.map((s, i) => (
            <Link key={s.title} href={s.href} style={{ textDecoration: 'none' }}>
              <div
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '2rem', transition: 'all .25s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '28px', marginBottom: '1rem' }}>{s.icon}</div>
                <div style={{ fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>{s.sub}</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--gold)', background: 'var(--gold-pale)', padding: '4px 10px', borderRadius: '2px' }}>{s.weeks}</span>
                  <span style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 600 }}>Learn More →</span>
                </div>
                <div style={{ position: 'absolute', bottom: '1rem', right: '1.25rem', fontFamily: 'var(--font-cormorant)', fontSize: '80px', fontWeight: 700, color: 'var(--border-subtle)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StatsSection({ statsRef, counters }) {
  return (
    <div ref={statsRef} style={{ background: 'var(--bg-secondary)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>Heritage Craft</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Where Compliance<br />Meets <em>Speed.</em>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '480px' }}>
            Star India Accreditation (SRC Global) is a trusted name with over 12+ years of experience in BIS, EPR, WPC, TEC, BEE and ISO certifications. We deliver fast, reliable, and cost-effective regulatory approvals for Indian and foreign manufacturers and importers.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {['BIS Approved', 'NABL Accredited', '0% Failure Rate'].map(t => (
              <span key={t} style={{ fontSize: '11px', fontWeight: 700, padding: '5px 12px', border: '1.5px solid var(--gold)', color: 'var(--gold)', borderRadius: '2px', letterSpacing: '0.1em' }}>{t}</span>
            ))}
          </div>
          <GoldBtn href="/about">Our Story →</GoldBtn>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { val: counters.clients, suffix: '+', label: 'Clients Served' },
            { val: counters.certs, suffix: '+', label: 'Certifications' },
            { val: counters.countries, suffix: '+', label: 'Countries Served' },
            { val: counters.services, suffix: '+', label: 'Services Covered' },
          ].map(s => (
            <div key={s.label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '44px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>
                {s.val >= 1000 ? `${(s.val / 1000).toFixed(0)}K` : s.val}{s.suffix}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '8px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhyUsSection() {
  return (
    <div style={{ background: 'var(--bg-primary)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>Why Choose Us</p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3.5rem', maxWidth: '600px' }}>
          Every decision counts,<br />Every second matters.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: '🛡️', stat: '12+', unit: 'Years', title: 'Trusted & Experienced', desc: '12+ years and 10,000+ successful certifications across every major Indian regulatory framework.' },
            { icon: '⚡', stat: '48hr', unit: 'Response', title: 'Fast Turnaround', desc: 'Dedicated managers and streamlined processes ensure the fastest-possible approval timelines.' },
            { icon: '🕐', stat: '24/7', unit: 'Available', title: '24/7 Expert Support', desc: 'Our compliance experts are available round-the-clock via call, WhatsApp, or email.' },
            { icon: '💰', stat: '₹0', unit: 'Hidden Fees', title: 'Transparent Pricing', desc: 'Fixed pricing, no hidden charges, clear milestones from day one.' },
            { icon: '📋', stat: '50+', unit: 'Services', title: 'End-to-End Service', desc: 'From documentation and lab testing to final certificate delivery — we manage everything.' },
            { icon: '🏆', stat: '0%', unit: 'Failure', title: '0% Failure Rate', desc: 'Meticulous preparation and regulatory expertise means your application succeeds first time.' },
          ].map(f => (
            <div key={f.title} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '2rem' }}>
              <div style={{ fontSize: '28px', marginBottom: '1rem' }}>{f.icon}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', fontWeight: 700, color: 'var(--gold)' }}>{f.stat}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{f.unit}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <div style={{ background: 'var(--bg-secondary)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>Our Process</p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3.5rem' }}>
          How It Works
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {PROCESS.map((p, idx) => (
            <div key={p.title} style={{ position: 'relative', padding: '2.5rem 2rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '64px', fontWeight: 700, color: 'var(--border)', lineHeight: 1, marginBottom: '1rem' }}>{p.n}</div>
              <div style={{ fontSize: '28px', marginBottom: '0.75rem' }}>{p.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{p.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '3rem', padding: '1.5rem 2rem', background: 'var(--gold-pale)', border: '1px solid var(--border)', borderRadius: '4px', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)' }}>✅ Most certifications completed in 15–30 days</p>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>Dedicated manager assigned from day one. 0% first-attempt failure rate.</p>
          </div>
          <GoldBtn href="/contact">Get Free Consultation</GoldBtn>
        </div>
      </div>
    </div>
  );
}

export function IndustriesSection() {
  return (
    <div style={{ background: 'var(--bg-primary)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>Industries We Serve</p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3.5rem' }}>
          Trusted Across Every Sector
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '1rem' }}>
          {INDUSTRIES.map(ind => (
            <div key={ind.name}
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '1.5rem 1.25rem', textAlign: 'center', transition: 'all .2s', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'var(--gold-pale)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.background = 'var(--bg-secondary)'; }}
            >
              <div style={{ fontSize: '28px', marginBottom: '0.75rem' }}>{ind.icon}</div>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{ind.name}</div>
              <div style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.05em' }}>{ind.tags}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <GoldBtn href="/services" outline>View All Services →</GoldBtn>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <div style={{ background: 'var(--bg-secondary)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>Client Stories</p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3.5rem' }}>
          Why People Trust SRC Global
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {TESTIMONIALS.map(t => (
            <div key={t.name} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '2rem' }}>
              <div style={{ color: 'var(--gold)', fontSize: '20px', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gold)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-cormorant)', fontSize: '18px', fontWeight: 700 }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.co}</div>
                </div>
                <span style={{ marginLeft: 'auto', fontSize: '10px', fontWeight: 700, padding: '3px 8px', background: 'var(--gold-pale)', color: 'var(--gold)', borderRadius: '2px', letterSpacing: '0.1em' }}>{t.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogSection() {
  return (
    <div style={{ background: 'var(--bg-primary)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>Knowledge Hub</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)' }}>
            Insights &amp; Regulatory Guides
          </h2>
          <Link href="/blog" style={{ fontSize: '13px', color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>View All Articles →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {BLOGS.map(b => (
            <Link key={b.title} href={b.href} style={{ textDecoration: 'none', display: 'block' }}>
              <div
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', overflow: 'hidden', transition: 'all .25s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image src={b.img} alt={b.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', background: 'var(--gold-pale)', color: 'var(--gold)', borderRadius: '2px', letterSpacing: '0.1em' }}>{b.tag}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{b.date} · {b.read}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '19px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>{b.title}</h3>
                  <div style={{ marginTop: '1rem', fontSize: '12px', color: 'var(--gold)', fontWeight: 600 }}>Read Article →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FaqSection({ activeFaq, setActiveFaq }) {
  return (
    <div style={{ background: 'var(--bg-secondary)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>Got Questions</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
            Frequently<br />Asked
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Everything you need to know before choosing your certification partner.
          </p>
          <GoldBtn href="/contact">Ask an Expert →</GoldBtn>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {FAQS.map((f, i) => (
            <div key={f.q} style={{ borderBottom: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '1.25rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}
              >
                <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>{f.q}</span>
                <span style={{ color: 'var(--gold)', fontSize: '18px', flexShrink: 0, transition: 'transform .2s', transform: activeFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              {activeFaq === i && (
                <div style={{ paddingBottom: '1.25rem' }}>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CtaBanner() {
  return (
    <div style={{ background: 'linear-gradient(135deg, var(--bg-ticker) 0%, #2a2318 100%)', padding: '6rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .05, backgroundImage: 'repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)', backgroundSize: '40px 40px' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.25rem' }}>Start Today</p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '1.25rem' }}>
          Begin Your Certification<br />Journey with SRC Global
        </h2>
        <p style={{ fontSize: '16px', color: '#a89f8e', marginBottom: '2.5rem' }}>
          Free consultation · Clear timeline · Transparent pricing. Our experts respond within 2 hours.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <GoldBtn href="/contact">Get Free Consultation</GoldBtn>
          <a href="tel:+919891229135" style={{ display: 'inline-block', padding: '13px 32px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textDecoration: 'none', textTransform: 'uppercase', borderRadius: '2px', border: '1.5px solid rgba(201,146,28,.4)', color: 'var(--gold)' }}>
            📞 +91-9891229135
          </a>
        </div>
      </div>
    </div>
  );
}