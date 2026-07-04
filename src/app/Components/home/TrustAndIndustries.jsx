'use client';
import { useEffect, useRef, useState } from 'react';
import { Label, GoldBtn, SectionHeading } from './HomeAtoms';

const CLIENTS = ['Samsung', 'Xiaomi', 'Bosch', 'LG Electronics', 'Havells', 'Philips', 'Bajaj', 'Honeywell'];

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

export default function TrustAndIndustries() {
  const [clientsRef, clientsVis] = useInView(0.15);
  const [indRef, indVis] = useInView(0.1);

  return (
    <>
      {/* TRUSTED BY — cream panel */}
      <div ref={clientsRef} className="section-light" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.32em', color: 'var(--gold-dark)', textTransform: 'uppercase', fontWeight: 700 }}>
              ◆ Trusted by Industry Leaders ◆
            </p>
          </div>
          <SectionHeading light>Brands That Rely on Us</SectionHeading>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
            {CLIENTS.map((c, i) => (
              <div key={c} style={{
                background: '#faf6ef', border: '1px solid rgba(28,26,23,0.1)', borderRadius: '2px',
                padding: '14px 28px', fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 700, color: '#1B2A4A',
                opacity: clientsVis ? 1 : 0, transform: clientsVis ? 'none' : 'scale(0.9)',
                transition: `opacity 0.5s ${i * 0.06}s, transform 0.5s ${i * 0.06}s`,
              }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INDUSTRIES WE SERVE — dark panel */}
      <div ref={indRef} style={{ background: '#1B2A4A', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Label>Cross-Industry Expertise</Label>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: '#faf6ef', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Industries We Serve
            </h2>
            <GoldBtn href="/services">All Services →</GoldBtn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1.25rem' }}>
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.name} style={{
                background: '#162240', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px',
                padding: '2rem 1.5rem', textAlign: 'center',
                opacity: indVis ? 1 : 0, transform: indVis ? 'none' : 'translateY(24px)',
                transition: `opacity 0.5s ${i * 0.07}s, transform 0.5s ${i * 0.07}s, border-color .2s, box-shadow .2s`,
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(232,71,10,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: '34px', marginBottom: '0.75rem' }}>{ind.icon}</div>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#faf6ef', lineHeight: 1.4, fontFamily: 'var(--font-body)' }}>{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}