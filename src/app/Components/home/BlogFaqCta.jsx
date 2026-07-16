'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Label, GoldBtn } from './HomeAtoms';

const INDUSTRIES = [
  { name: 'Electronics & IT', href: '/bis-crs' },
  { name: 'Telecom & IoT', href: '/wpc' },
  { name: 'Pharmaceuticals', href: '/cdsco' },
  { name: 'FMCG', href: '/epr' },
  { name: 'Automotive', href: '/iso' },
  { name: 'Construction', href: '/bis-isi' },
  { name: 'Toys & Furniture', href: '/testing&certification' },
  { name: 'Food & Beverages', href: '/lmpc' },
  { name: 'Chemicals', href: '/tec' },
  { name: 'Energy & Power', href: '/bee' },
];

const getIndustryIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes('electronic') || n.includes('it')) return '💻';
  if (n.includes('telecom') || n.includes('iot') || n.includes('wireless')) return '📡';
  if (n.includes('pharma')) return '💊';
  if (n.includes('fmcg')) return '🛒';
  if (n.includes('auto')) return '🚗';
  if (n.includes('medical')) return '🩺';
  if (n.includes('textile')) return '🧵';
  if (n.includes('food') || n.includes('beverage')) return '🍽️';
  if (n.includes('chemical')) return '🧪';
  if (n.includes('construction')) return '🏗️';
  if (n.includes('toy') || n.includes('furniture')) return '🧸';
  if (n.includes('energy') || n.includes('power')) return '⚡';
  return '🏭';
};

const FAQS = [
  {
    q: 'How long does BIS certification take?',
    a: 'BIS CRS typically takes 4–8 weeks. ISI mark (product certification) takes 8–16 weeks depending on product category and lab testing schedule.'
  },
  {
    q: 'What is the cost of EPR registration?',
    a: 'EPR registration cost varies by producer category and annual turnover. We provide a transparent, fixed-fee quote after an initial assessment — no hidden charges.'
  },
  {
    q: 'Can foreign companies apply for Indian certifications?',
    a: 'Yes. Foreign manufacturers can apply directly or via an Authorised Indian Representative (AIR). SRC Global acts as AIR for clients across 25+ countries.'
  },
  {
    q: 'Do you provide post-certification support?',
    a: 'Yes. We handle renewal, annual audits, surveillance reports, and amendment filings. Your dedicated account manager stays with you throughout the certificate lifecycle.'
  },
  {
    q: 'What is your first-attempt approval rate?',
    a: 'Our first-attempt approval rate is 100%. Achieved through meticulous documentation, pre-audit checks, and regulatory expertise built over 12+ years.'
  },
  {
    q: 'Which certifications and registrations do you assist with?',
    a: 'We provide end-to-end assistance for BIS (CRS & ISI), EPR, WPC, TEC, BEE, CDSCO, LMPC, FSSAI, NABL, and several other regulatory certifications required for the Indian market.'
  },
  {
    q: 'What documents are required to start the certification process?',
    a: 'The required documents depend on the certification type but generally include company registration documents, product specifications, test reports, technical drawings, and authorization letters. Our team provides a detailed checklist before starting.'
  },
  {
    q: 'Can you help if my application has been rejected?',
    a: 'Yes. We review the rejection, identify the root cause, rectify documentation or compliance issues, and guide you through the re-application process to maximize the chances of approval.'
  },
  {
    q: 'Will I have a dedicated point of contact during the process?',
    a: 'Absolutely. Every client is assigned a dedicated compliance expert who provides regular updates, answers queries, and coordinates with regulatory authorities until the certification is successfully completed.'
  },
];

const BLOGS = [
  { tag: 'BIS Certification', date: 'Apr 28, 2025', read: '6 min read', title: 'BIS CRS Registration: What Every Electronics Importer Must Know in 2025', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80', href: '/blog/bis-crs' },
  { tag: 'EPR', date: 'Apr 15, 2025', read: '5 min read', title: 'EPR Registration for E-Waste: A Complete Compliance Roadmap', img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80', href: '/blog/epr' },
  { tag: 'WPC / ETA', date: 'Mar 30, 2025', read: '4 min read', title: 'WPC ETA Approval for Wireless Devices: Timelines, Docs & Common Pitfalls', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', href: '/blog/wpc' },
  { tag: 'ISI Mark', date: 'Mar 12, 2025', read: '5 min read', title: 'ISI Mark Certification: Step-by-Step Guide for Product Approval', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', href: '/blog/isi-mark' },
  { tag: 'BIS Certification', date: 'Feb 28, 2025', read: '4 min read', title: 'CRS vs ISI: Which BIS Scheme Applies to Your Product?', img: 'https://images.unsplash.com/photo-1581091870622-1c6f0f0a2c2e?w=800&q=80', href: '/blog/crs-vs-isi' },
  { tag: 'EPR', date: 'Feb 10, 2025', read: '6 min read', title: 'Plastic Packaging EPR: Obligations for Brand Owners in 2025', img: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=800&q=80', href: '/blog/plastic-epr' },
  { tag: 'Compliance', date: 'Jan 22, 2025', read: '5 min read', title: 'Legal Metrology Registration: A Guide for Importers', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', href: '/blog/legal-metrology' },
  { tag: 'WPC / ETA', date: 'Jan 8, 2025', read: '4 min read', title: 'Common Reasons WPC ETA Applications Get Rejected', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', href: '/blog/wpc-rejections' },
];

export default function BlogFaqCta() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [counters, setCounters] = useState({ clients: 0, certs: 0, countries: 0 });
  const statsRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const targets = { clients: 10000, certs: 10000, countries: 25 };
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        let step = 0;
        const timer = setInterval(() => {
          step++;
          const ease = 1 - Math.pow(1 - step / steps, 3);
          setCounters({
            clients: Math.round(targets.clients * ease),
            certs: Math.round(targets.certs * ease),
            countries: Math.round(targets.countries * ease),
          });
          if (step >= steps) clearInterval(timer);
        }, 1800 / steps);
      }
    }, { threshold: 0.4 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>

      {/* INDUSTRIES — cream */}
      <div className="section-light" style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <Label light>Industries We Serve</Label>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.2vw, 48px)', fontWeight: 700, color: '#1B2A4A', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Trusted Across Every Sector
            </h2>
            <GoldBtn href="/services">View All Services →</GoldBtn>
          </div>
        </div>
        <div style={{
          display: 'flex', gap: '1.5rem', overflowX: 'auto',
          scrollSnapType: 'x mandatory', padding: '0.5rem 2rem 1.5rem',
          maxWidth: '1280px', margin: '0 auto',
          scrollbarWidth: 'thin', scrollbarColor: 'var(--gold) #faf6ef',
        }}>
          {INDUSTRIES.map((ind, i) => (
            <Link
              key={ind.name}
              href={ind.href}
              className="ind-card"
              style={{
                position: 'relative',
                minWidth: '200px', flex: '0 0 200px', height: '170px', scrollSnapAlign: 'start',
                borderRadius: '14px',
                padding: '2px',
                background: 'linear-gradient(135deg, rgba(201,146,28,0.25), rgba(201,146,28,0))',
                cursor: 'pointer',
                transition: 'transform .4s cubic-bezier(.2,.8,.2,1)',
                textDecoration: 'none',
                display: 'block',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
            >
              <div style={{
                position: 'relative',
                height: '100%', width: '100%',
                borderRadius: '12px',
                background: '#fff',
                padding: '1.25rem',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                overflow: 'hidden',
                boxShadow: '0 4px 14px rgba(28,26,23,0.06)',
              }}>
                <div style={{
                  position: 'absolute', top: '-40%', right: '-30%',
                  width: '160px', height: '160px', borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(201,146,28,0.18), transparent 70%)',
                  transition: 'all .5s ease',
                }} className="ind-glow" />
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '17px',
                  position: 'relative', zIndex: 1,
                }}>
                  {getIndustryIcon(ind.name)}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: '#1B2A4A', lineHeight: 1.3, display: 'block', marginBottom: '0.5rem' }}>
                    {ind.name}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700,
                    color: 'var(--gold-dark)', letterSpacing: '0.05em',
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                  }}>
                    Explore <span style={{ transition: 'transform .3s' }} className="ind-arrow">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* BLOG — dark */}
      <div className="section-light" style={{ background: '#162240', padding: '3.5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Label>Knowledge Hub</Label>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.2vw, 48px)', fontWeight: 700, color: '#faf6ef', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Insights &amp; Regulatory Guides
            </h2>
            <Link href="/blog" style={{ fontSize: '11px', color: '#fff', padding: '0.7rem 2rem', background: 'var(--gold)', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>All Articles →</Link>
          </div>
          <div className="blog-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <Link href={BLOGS[0].href} style={{ textDecoration: 'none' }}>
              <div
                style={{ borderRadius: '1px', overflow: 'hidden', background: '#223362', border: '1px solid rgba(255,255,255,0.06)', height: '300px', transition: 'all .25s', display: 'flex', flexDirection: 'column' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ position: 'relative', height: '160px', overflow: 'hidden', flexShrink: 0 }}>
                  <Image src={BLOGS[0].img} alt={BLOGS[0].title} fill style={{ objectFit: 'cover', filter: 'brightness(0.85)' }} />
                </div>
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '0.75rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '9px', fontWeight: 800, padding: '3px 10px', background: 'rgb(255, 255, 255)', color: 'var(--gold)', borderRadius: '1px', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>{BLOGS[0].tag}</span>
                    <span style={{ fontSize: '11px', color: '#8a7d6a', fontFamily: 'var(--font-body)' }}>{BLOGS[0].date} · {BLOGS[0].read}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: '#faf6ef', lineHeight: 1.3, marginBottom: '0.75rem' }}>{BLOGS[0].title}</h3>
                  <div style={{ fontSize: '12px', color: 'var(--gold-light)', fontWeight: 600, letterSpacing: '0.1em', fontFamily: 'var(--font-body)', marginTop: 'auto' }}>Read Article →</div>
                </div>
              </div>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '300px', overflowY: 'auto', paddingRight: '8px' }}>
              {BLOGS.slice(1).map(b => (
                <Link key={b.title} href={b.href} style={{ textDecoration: 'none' }}>
                  <div
                    style={{ borderRadius: '1px', overflow: 'hidden', background: '#223362', border: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: '90px 1fr', transition: 'all .25s', height: '90px' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                      <Image src={b.img} alt={b.title} fill style={{ objectFit: 'cover', filter: 'brightness(0.8)' }} />
                    </div>
                    <div style={{ padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
                      <span style={{ fontSize: '9px', fontWeight: 800, padding: '2px 8px', background: 'rgb(255, 255, 255)', color: 'var(--gold)', borderRadius: '1px', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-body)', display: 'inline-block', marginBottom: '0.35rem', width: 'fit-content' }}>{b.tag}</span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: '#faf6ef', lineHeight: 1.25, marginBottom: '0.3rem', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{b.title}</h3>
                      <span style={{ fontSize: '10px', color: '#8a7d6a', fontFamily: 'var(--font-body)' }}>{b.date} · {b.read}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ — cream */}
      <div className="section-light" style={{ padding: '4rem 2rem' }}>
        <div className="faq-split-grid" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>
          <div className="faq-split-sidebar" style={{ position: 'sticky', top: '6rem' }}>
            <Label className="font-bold">Questions</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: '#1B2A4A', letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: '1.5rem' }}>
              Frequently Asked
            </h2>
            <div style={{ width: '44px', height: '2px', background: 'var(--gold-dark)', margin: '1.75rem 0' }} />
            <p style={{ fontSize: '15px', fontWeight: '700', color: '#4a4438', lineHeight: 1.8, marginBottom: '2rem', fontFamily: 'var(--font-body)' }}>
              Everything you need to know before choosing your certification partner in India.
            </p>
            <GoldBtn href="/contact">Ask an Expert →</GoldBtn>
          </div>
          <div>
            {FAQS.map((f, i) => (
              <div key={f.q} style={{ borderBottom: '1px solid rgba(28,26,23,0.12)' }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left', background: 'none', border: 'none',
                    cursor: 'pointer', padding: '1.5rem 0',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: '#1B2A4A', lineHeight: 1.3 }}>{f.q}</span>
                  <span style={{
                    color: 'var(--gold-dark)', flexShrink: 0,
                    transform: activeFaq === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform .2s',
                    width: '24px', height: '24px',
                    border: '1px solid rgba(28,26,23,0.2)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '16px', lineHeight: 1,
                  }}>+</span>
                </button>
                {activeFaq === i && (
                  <div style={{ paddingBottom: '1.5rem' }}>
                    <p style={{ fontSize: '14px', color: '#4a4438', lineHeight: 1.85, fontFamily: 'var(--font-body)' }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA BANNER — light cream, left/right split */}
      <div className="section-light" style={{ padding: '3.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: 'clamp(80px, 14vw, 180px)',
          fontWeight: 800, color: 'transparent',
          WebkitTextStroke: '1px rgba(28,26,23,0.05)',
          lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
          letterSpacing: '-0.03em',
        }}>
          CERTIFIED
        </div>
        <div style={{
          position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '2rem',
        }}>
          <div style={{ flex: '1 1 420px' }}>
            <Label light>Start Today</Label>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700, color: '#1B2A4A', lineHeight: 1.15,
              marginBottom: '0.75rem', letterSpacing: '-0.02em',
            }}>
              Begin Your Certification Journey with <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>SRC Global</span>
            </h2>
            <p style={{ fontSize: '13px', color: '#79766e', lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: "700" }}>
              Free consultation · Clear timeline · Transparent pricing. Our experts respond within 2 hours.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: '0 0 auto' }}>
            <GoldBtn href="/contact">Get Free Consultation</GoldBtn>
            <a href="tel:+919891229135" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              padding: '11px 28px', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.16em', textDecoration: 'none', textTransform: 'uppercase',
              borderRadius: '1px', border: '1.5px solid rgba(28,26,23,0.18)', color: 'var(--gold-dark)',
              fontFamily: 'var(--font-body)',
            }}>
              +91 98912 29135
            </a>
          </div>
        </div>
      </div>
    </>
  );
}