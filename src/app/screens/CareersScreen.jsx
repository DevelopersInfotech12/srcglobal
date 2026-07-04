'use client';
import Link from 'next/link';
import PageHero from '../Components/PageHero';

const OPENINGS = [
  { title: 'BIS Certification Executive', type: 'Full-time', location: 'New Delhi', dept: 'BIS Division', exp: '1–3 years' },
  { title: 'EPR Compliance Analyst', type: 'Full-time', location: 'New Delhi / Remote', dept: 'EPR Division', exp: '1–2 years' },
  { title: 'Senior ISO Lead Auditor', type: 'Full-time', location: 'Pan-India', dept: 'ISO Division', exp: '5+ years' },
  { title: 'Client Account Manager', type: 'Full-time', location: 'New Delhi', dept: 'Client Success', exp: '2–4 years' },
  { title: 'Regulatory Documentation Specialist', type: 'Full-time', location: 'New Delhi', dept: 'Operations', exp: '1–3 years' },
  { title: 'Business Development Executive', type: 'Full-time', location: 'New Delhi / Mumbai', dept: 'Sales', exp: '2–4 years' },
];

const PERKS = [
  { icon: '📈', title: 'Growth-first Culture', desc: 'Structured learning paths, certifications funded, and clear promotion milestones.' },
  { icon: '🌍', title: 'Work on Global Cases', desc: 'Clients from 25+ countries mean exposure to international regulatory landscapes.' },
  { icon: '🕐', title: 'Flexible Hours', desc: 'Core hours 10–4. Flex around your life while hitting your goals.' },
  { icon: '💰', title: 'Competitive Pay', desc: 'Market-leading CTC with performance bonus and annual increments.' },
  { icon: '🏥', title: 'Health Cover', desc: 'Group medical insurance for you and your immediate family.' },
  { icon: '🤝', title: 'Expert Community', desc: 'Work alongside India\'s leading regulatory professionals every day.' },
];

export default function CareersScreen() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Join the Team"
        title="Build India's Compliance"
        highlight="Future"
        description="We are a 100-person team of regulatory experts, client managers, and documentation specialists. Come work on the cases that shape how products enter India."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85&fit=crop"
        imageAlt="SRC Global team collaborating in office"
        badge={{ label: '6', sub: 'Open Roles' }}
        stats={[
          { value: '100+', label: 'Team Members' },
          { value: '25+', label: 'Countries Served' },
          { value: '6', label: 'Open Roles' },
        ]}
        primaryCta={{ label: 'View Open Roles', href: '#openings' }}
        secondaryCta={{ label: 'Why SRC Global ↓', href: '#why' }}
        features={['Growth-first Culture', 'Global Case Exposure', 'Flexible Hours', 'Health Cover']}
      />

      {/* Perks — LIGHT */}
      <section className="section-light" style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 id="why" style={{ fontFamily: 'var(--font-display)', fontSize: "clamp(34px, 3.8vw, 54px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.12, color: 'var(--text-primary)', marginBottom: '3rem' }}>Why SRC Global</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {PERKS.map(p => (
              <div key={p.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '2rem', boxShadow: '0 2px 16px rgba(27,42,74,0.06)' }}>
                <div style={{ fontSize: '28px', marginBottom: '1rem' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles — DARK */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '6rem 1.5rem' }}>
        <h2 id="openings" style={{ fontFamily: 'var(--font-display)', fontSize: "clamp(34px, 3.8vw, 54px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.12, color: 'var(--text-primary)', marginBottom: '2rem' }}>Open Positions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
          {OPENINGS.map(o => (
            <div key={o.title} style={{
              background: 'var(--bg-card)', padding: '1.5rem 2rem',
              display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-subtle)',
              transition: 'background .2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-pale)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{o.title}</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {[o.dept, o.location, o.exp, o.type].map(t => (
                    <span key={t} style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{t}</span>
                  ))}
                </div>
              </div>
              <Link href="/contact" style={{
                padding: '8px 20px', background: 'var(--gold)', color: '#fff',
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none',
                textTransform: 'uppercase', borderRadius: '2px', flexShrink: 0,
              }}>Apply →</Link>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', marginTop: '1rem' }}>
          Don&apos;t see a fit? Email your CV to <a href="mailto:starindia.acc@gmail.com" style={{ color: 'var(--gold)' }}>starindia.acc@gmail.com</a> with the role you&apos;d like.
        </p>
      </div>
    </>
  );
}