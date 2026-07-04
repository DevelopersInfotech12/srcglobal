'use client';
import { Label, GoldBtn, SectionHeading } from './HomeAtoms';

const WHY = [
  { stat: '12+', unit: 'Years', title: 'Trusted & Experienced', desc: '10,000+ successful certifications across every major Indian regulatory framework.' },
  { stat: '48h', unit: 'Response', title: 'Fast Turnaround', desc: 'Dedicated account managers and streamlined processes ensure the fastest approval timelines.' },
  { stat: '24/7', unit: 'Available', title: 'Round-the-Clock Support', desc: 'Our compliance experts are reachable via call, WhatsApp, or email — any time.' },
  { stat: '0%', unit: 'Hidden Fees', title: 'Transparent Pricing', desc: 'Fixed pricing, clear milestones, and no surprises from initial quote to final certificate.' },
];

const TESTIMONIALS = [
  { name: 'Rajesh Mehta', co: 'TechImport Pvt. Ltd.', service: 'BIS CRS', text: 'SRC Global handled our BIS CRS certification end-to-end. Professional, fast, and completely transparent from day one. I would not go anywhere else.' },
  { name: 'Priya Sharma', co: 'EcoGoods India', service: 'EPR', text: 'EPR registration done within the promised timeline despite the urgency. Their 24/7 availability changed the way we think about compliance.' },
  { name: 'Arjun Kapoor', co: 'Wireless Solutions Ltd.', service: 'WPC-ETA', text: 'WPC-ETA was always a black box for us. SRC Global made it completely simple. We call them for every new product launch now.' },
  { name: 'Sneha Verma', co: 'MediCare Devices Pvt. Ltd.', service: 'CDSCO', text: "CDSCO licensing used to terrify our team. SRC Global's expertise made the entire process stress-free. Outstanding, proactive communication." },
];

export default function WhyAndTestimonials() {
  return (
    <>
      {/* WHY SRC Global — cream panel */}
      <div className="section-light" style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Label light>Why Choose SRC Global</Label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start', marginBottom: '4rem' }}>
            <SectionHeading light>
              Every decision counts.<br />
              <em>Every second matters.</em>
            </SectionHeading>
            <p style={{ fontSize: '15px', color: '#79766e', lineHeight: 1.9, paddingTop: '0.5rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>
              SRC Global is India's most trusted compliance partner — 12+ years, 10,000+ certifications, and a 0% first-attempt failure rate. We exist to make regulatory compliance fast, reliable, and completely stress-free.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
            {WHY.map((f, i) => (
              <div key={f.title} style={{
                padding: '2.5rem 2rem',
                borderRight: i < 3 ? '1px solid rgba(28,26,23,0.1)' : 'none',
                borderTop: '2px solid var(--gold-dark)',
              }}>
                <div style={{ fontSize: '40px', fontWeight: 700, color: 'var(--gold-dark)', lineHeight: 1, marginBottom: '0.25rem' }}>{f.stat}</div>
                <div style={{ fontSize: '9px', color: '#8a7d6a', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.25rem', fontWeight: 700 }}>{f.unit}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: '#1B2A4A', marginBottom: '0.75rem' }}>{f.title}</h3>
                <p className='text-justify' style={{ fontSize: '13px', color: '#68635a', lineHeight: 1.75, fontWeight: 700, fontFamily: 'var(--font-body)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
            <GoldBtn href="/about" >Our Story →</GoldBtn>
            <GoldBtn href="/contact">Free Consultation</GoldBtn>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS — dark panel, horizontal scroller */}
      <div style={{ background: '#162240', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <Label>Client Stories</Label>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(35px, 3.2vw, 50px)', fontWeight: 700, color: '#faf6ef', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Why People Trust SRC Global
            </h2>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: 'var(--gold)', fontSize: '14px' }}>★</span>
              ))}
              <span style={{ fontSize: '12px', color: '#8a7d6a', marginLeft: '8px', fontFamily: 'var(--font-body)' }}>4.9 / 5 · 10,000+ Reviews</span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '1px',
            background: 'rgba(255,255,255,0.05)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '0 2rem 1rem',
            maxWidth: '1280px',
            margin: '0 auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--gold) #162240',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: '#162240',
                padding: '1.5rem',
                minWidth: '380px',
                flex: '0 0 380px',
                scrollSnapAlign: 'start',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* <div style={{ fontFamily: 'var(--font-display)', fontSize: '72px', color: 'var(--gold-light)', opacity: 0.1, lineHeight: 0.6, marginBottom: '0.1rem' }}>&ldquo;</div> */}
              <p style={{ fontSize: '15px', color: '#d4c5a9', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic', fontFamily: 'var(--font-display)', fontWeight: 400 }}>
                {t.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: 'var(--gold)', color: '#ffffff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, flexShrink: 0,
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: '#faf6ef', fontFamily: 'var(--font-body)' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: '#8a7d6a', fontFamily: 'var(--font-body)' }}>{t.co}</div>
                  </div>
                </div>
                <span style={{ fontSize: '9px', fontWeight: 600, padding: '4px 10px', background: 'rgba(201,146,28,0.12)', color: 'var(--gold)', borderRadius: '1px', letterSpacing: '0.12em', flexShrink: 0, fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>{t.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}