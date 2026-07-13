'use client';
import Link from 'next/link';
import { Label, GoldBtn, Divider, SectionHeading } from './HomeAtoms';

const SERVICES = [
  { title: 'BIS — CRS', sub: 'Compulsory Registration Scheme', desc: 'Mandatory for 70+ electronics & IT product categories. Lab coordination, portal filing, follow-up handled end-to-end.', weeks: '4–8 weeks', href: '/services' },
  { title: 'EPR', sub: 'Extended Producer Responsibility', desc: 'E-waste, plastics & battery EPR registration with CPCB. Full documentation and annual compliance reporting.', weeks: '3–6 weeks', href: '/services' },
  { title: 'WPC — ETA', sub: 'Wireless Equipment Type Approval', desc: 'For Wi-Fi, Bluetooth, GPS and all wireless devices. Lab testing to WPC portal — fully managed.', weeks: '6–10 weeks', href: '/services' },
  { title: 'TEC / MTCTE', sub: 'Telecom Equipment Certification', desc: 'Mandatory under DoT for telecom products. Portal coordination, lab liaison, compliance review.', weeks: '8–12 weeks', href: '/services' },
  { title: 'BEE', sub: 'Bureau of Energy Efficiency', desc: 'Star labelling and mandatory registration for energy-consuming products across 24+ categories.', weeks: '4–8 weeks', href: '/services' },
  { title: 'LMPC', sub: 'Legal Metrology Packaged Commodities', desc: 'Import licence and product label compliance under Legal Metrology Act for importers.', weeks: '2–4 weeks', href: '/services' },
  { title: 'ISO Certification', sub: 'ISO 9001 / 14001 / 45001', desc: 'International management system certification. Documentation, audits, certification body liaison.', weeks: '8–16 weeks', href: '/services' },
  { title: 'CDSCO', sub: 'Drug & Medical Device License', desc: 'Registration of medical devices, drugs and cosmetics under CDSCO / MDR 2017.', weeks: '12–20 weeks', href: '/services' },
];

const PROCESS = [
  { n: '01', title: 'Free Consultation', desc: 'We assess your product and advise on the exact certification path needed for your business.' },
  { n: '02', title: 'Documentation', desc: 'Our experts prepare every document and lab test required — nothing left to chance.' },
  { n: '03', title: 'Filing', desc: 'We submit the complete, error-free application directly to the regulatory authority.' },
  { n: '04', title: 'Certification', desc: 'We track and follow up until your certificate is issued, verified, and delivered.' },
];

export default function ServicesAndProcess() {
  return (
    <>
      {/* SERVICES — cream bg */}
      <div className="section-light" style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="services-split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>
            <div className="services-split-sidebar" style={{ position: 'sticky', top: '6rem' }}>
              <Label light>What We Offer</Label>
              <SectionHeading light>
                Our<br />Services
              </SectionHeading>
              <Divider dark />
              <p className='text-justify' style={{ fontSize: '14px', color: '#4a4438', lineHeight: 1.8, marginBottom: '2rem', fontFamily: 'var(--font-body)', fontWeight:'700' }}>
                End-to-end certification support for every major Indian regulatory framework. We manage everything so you can focus on your business.
              </p>
              <GoldBtn href="/services" >All Services →</GoldBtn>
            </div>
            <div>
              {SERVICES.map((s, i) => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', display: 'block' }}>
                  <div
                    className="service-row-grid"
                    style={{
                      padding: '2rem 0',
                      borderBottom: '1px solid rgba(28,26,23,0.12)',
                      display: 'grid', gridTemplateColumns: 'auto 1fr auto',
                      gap: '1.5rem', alignItems: 'start',
                      transition: 'all .2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.paddingLeft = '1rem'; e.currentTarget.style.borderBottomColor = 'var(--gold)'; }}
                    onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.borderBottomColor = 'rgba(28,26,23,0.12)'; }}
                  >
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--gold-dark)', opacity: 0.7, paddingTop: '4px', minWidth: '28px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', letterSpacing: '0.22em', color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px', fontFamily: 'var(--font-body)' }}>{s.sub}</div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '21px', fontWeight: 700, color: '#1B2A4A', marginBottom: '0.5rem' }}>{s.title}</h3>
                      <p style={{ fontSize: '13px', color: '#6b675c', lineHeight: 1.7,fontWeight:'700', fontFamily: 'var(--font-body)' }}>{s.desc}</p>
                    </div>
                    <div style={{ textAlign: 'right', paddingTop: '2px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--gold-dark)', background: '#f8edcf', padding: '4px 12px', borderRadius: '1px', whiteSpace: 'nowrap', fontFamily: 'var(--font-body)' }}>{s.weeks}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS — dark bg */}
      <div style={{ background: '#1B2A4A', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Label>Our Process</Label>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(34px, 3.8vw, 54px)',
            fontWeight: 700, color: '#faf6ef',
            letterSpacing: '-0.02em', marginBottom: '1.5rem',
          }}>
            How It Works
          </h2>
          <div className="process-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', position: 'relative' }}>
            <div className="process-steps-line" style={{ position: 'absolute', top: '1.5rem', left: '12.5%', right: '12.5%', height: '1px', background: 'var(--gold)', opacity: 0.15 }} />
            {PROCESS.map((p) => (
              <div key={p.title} style={{ padding: '0 2rem 0 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    border: '1.5px solid #E8470A', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#1B2A4A', flexShrink: 0,
                    fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: '#E8470A',
                    letterSpacing: '0.05em',
                  }}>
                    {p.n}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 700, color: '#faf6ef', margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ fontSize: '13px', color: '#d4c5a9', lineHeight: 1.75, fontFamily: 'var(--font-body)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '4rem', background: '#162240', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '3px solid var(--gold)', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: '#faf6ef', marginBottom: '4px' }}>Most certifications completed in 15–30 business days</p>
              <p style={{ fontSize: '13px', color: '#d4c5a9', fontFamily: 'var(--font-body)' }}>Dedicated manager assigned from day one. 100% first-attempt approval rate.</p>
            </div>
            <GoldBtn href="/contact">Start Today →</GoldBtn>
          </div>
        </div>
      </div>
    </>
  );
}