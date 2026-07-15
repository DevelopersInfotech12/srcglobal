'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import PageHero from '../Components/PageHero';

function useInView(threshold = 0.12) {
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

export default function ServiceDetailScreen({ data, overviewSlot }) {
  const [typesRef, typesVis] = useInView(0.08);
  const [processRef, processVis] = useInView(0.1);
  const [statsRef, statsVis] = useInView(0.2);
  const [docsRef, docsVis] = useInView(0.1);
  const [faqRef, faqVis] = useInView(0.1);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        eyebrow={data.subtitle}
        title={data.title.split(' ').slice(0, -1).join(' ') || data.title}
        highlight={data.title.split(' ').slice(-1).join(' ')}
        description={data.intro}
        image={data.heroImage}
        imageAlt={data.title}
        badge={{ label: data.icon, sub: data.subtitle }}
        stats={data.stats.slice(0, 3).map(s => ({ value: s.value, label: s.label }))}
        primaryCta={{ label: 'Get Free Quote', href: '/contact' }}
        secondaryCta={{ label: 'All Services', href: '/services' }}
        features={data.heroChips}
      />

      {/* ── QUICK INFO STRIP — LIGHT ── */}
      <section className="section-light" style={{ padding: '3.5rem 1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1.5rem' }}>
          {data.quickInfo.map(qi => (
            <div key={qi.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '6px' }}>{qi.label}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>{qi.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW + TYPES GRID — LIGHT ── */}
      <section id="types" ref={typesRef} className="section-light" style={{ padding: '7rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto 4rem', textAlign: 'center' }}>
            <Label light>Overview</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.4vw, 44px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Every Path Under <span style={{ color: 'var(--gold)' }}>{data.title}</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 700, fontFamily: 'var(--font-body)' }}>{data.introSecondary}</p>
          </div>
          {overviewSlot ? (
            overviewSlot
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {data.types.map((t, i) => (
                <div key={t.title} style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                  borderRadius: '10px', padding: '2rem', position: 'relative', overflow: 'hidden',
                  opacity: typesVis ? 1 : 0, transform: typesVis ? 'none' : 'translateY(24px)',
                  transition: `opacity 0.55s ${i * 0.06}s, transform 0.55s ${i * 0.06}s, border-color .25s, box-shadow .25s`,
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(232,71,10,0.13)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ fontSize: '30px', marginBottom: '1rem' }}>{t.icon}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 700, color: 'var(--text-primary)' }}>{t.title}</h3>
                    <span style={{ fontSize: '9px', fontWeight: 700, padding: '3px 9px', background: 'var(--gold-pale)', color: 'var(--gold-dark)', borderRadius: '1px', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>{t.tag}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 700, fontFamily: 'var(--font-body)' }}>{t.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── PROCESS — DARK ── */}
      <section ref={processRef} style={{ background: 'var(--bg-primary)', padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(232,71,10,0.12) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <Label>How It Works</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Our {data.title} <span style={{ color: 'var(--gold)' }}>Process</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '38px', left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg,transparent,var(--gold),transparent)', opacity: 0.35 }} />
            {data.process.map((p, i) => (
              <div key={p.step} style={{
                textAlign: 'center', position: 'relative',
                opacity: processVis ? 1 : 0, transform: processVis ? 'none' : 'translateY(24px)',
                transition: `opacity 0.55s ${i * 0.1}s, transform 0.55s ${i * 0.1}s`,
              }}>
                <div style={{
                  width: '76px', height: '76px', borderRadius: '50%', background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '30px', margin: '0 auto 1.25rem', position: 'relative', zIndex: 1,
                }}>{p.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.16em', marginBottom: '6px' }}>STEP {p.step}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '220px', margin: '0 auto', fontWeight: 700, fontFamily: 'var(--font-body)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP — LIGHT ── */}
      <section ref={statsRef} className="section-light" style={{ padding: '4.5rem 1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}>
          {data.stats.map((s, i) => (
            <div key={s.label} style={{
              textAlign: 'center', padding: '1rem',
              opacity: statsVis ? 1 : 0, transform: statsVis ? 'none' : 'translateY(16px)',
              transition: `opacity 0.5s ${i * 0.08}s, transform 0.5s ${i * 0.08}s`,
            }}>
              <div style={{ fontSize: '30px', marginBottom: '6px' }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,32px)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: '6px' }}>{s.value}</div>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', letterSpacing: '0.03em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DOCUMENTS REQUIRED — DARK ── */}
      <section ref={docsRef} style={{ background: 'var(--bg-primary)', padding: '7rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <Label>Documentation</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Documents <span style={{ color: 'var(--gold)' }}>You'll Need</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {data.documents.map((d, i) => (
              <div key={d.title} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '10px', padding: '1.75rem',
                opacity: docsVis ? 1 : 0, transform: docsVis ? 'none' : 'translateY(20px)',
                transition: `opacity 0.5s ${i * 0.06}s, transform 0.5s ${i * 0.06}s`,
              }}>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>{d.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>{d.title}</h4>
                <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 700, fontFamily: 'var(--font-body)' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — LIGHT ── */}
      <section ref={faqRef} className="section-light" style={{ padding: '7rem 1.5rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <Label light>Common Questions</Label>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 3.8vw, 54px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              {data.title} <span style={{ color: 'var(--gold)' }}>FAQs</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid var(--border-subtle)', borderRadius: '10px', overflow: 'hidden' }}>
            {data.faqs.map((f, i) => {
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
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{f.q}</span>
                    <span style={{
                      fontSize: '18px', color: 'var(--gold)', fontWeight: 700, flexShrink: 0,
                      transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .3s',
                    }}>+</span>
                  </button>
                  <div style={{ maxHeight: open ? '260px' : '0px', overflow: 'hidden', transition: 'max-height .35s ease' }}>
                    <p style={{ padding: '0 1.75rem 1.5rem', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 700, fontFamily: 'var(--font-body)' }}>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--gold)', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '350px', borderRadius: '50%', background: 'radial-gradient(ellipse,rgba(255,255,255,0.15) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.6vw, 48px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem' }}>
            Ready to start your {data.title}?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '15px', marginBottom: '2rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>
            Talk to our regulatory experts — free assessment, fixed pricing, no surprises.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#fff', color: 'var(--gold)', padding: '14px 40px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.16em', fontFamily: 'var(--font-body)', textDecoration: 'none', textTransform: 'uppercase', borderRadius: '3px', display: 'inline-block', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', transition: 'transform .2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              Free Consultation
            </Link>
            <Link href="/ai-recommendation" style={{ background: 'transparent', color: '#fff', padding: '14px 40px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.16em', fontFamily: 'var(--font-body)', textDecoration: 'none', textTransform: 'uppercase', borderRadius: '3px', display: 'inline-block', border: '1.5px solid rgba(255,255,255,.6)', transition: 'transform .2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              ✨ Not Sure? Ask AI
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
