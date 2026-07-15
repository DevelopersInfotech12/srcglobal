'use client';
import { useState } from 'react';
import Link from 'next/link';

const QUESTIONS = [
  {
    key: 'product_type',
    title: 'What type of product are you selling?',
    sub: 'Pick the category that best describes it.',
    type: 'text',
    placeholder: 'e.g. Bluetooth earbuds, LED bulb, cosmetic cream, imported toy…',
  },
  {
    key: 'activity',
    title: 'What is your primary business activity?',
    sub: 'This helps us determine which licences apply to you.',
    type: 'options',
    options: ['Manufacturing in India', 'Importing into India', 'Both manufacturing & importing', 'Reselling / distribution only'],
  },
  {
    key: 'wireless',
    title: 'Does your product use wireless technology?',
    sub: 'Wi-Fi, Bluetooth, RF, Zigbee, GPS — any radio frequency component.',
    type: 'options',
    options: ['Yes — Wi-Fi / Bluetooth', 'Yes — Other RF / Zigbee', 'No wireless component', "Not sure"],
  },
  {
    key: 'packaging',
    title: 'Is your product pre-packaged with an MRP label?',
    sub: 'Relevant for Legal Metrology (LMPC) compliance.',
    type: 'options',
    options: ['Yes, pre-packaged with MRP', 'No, sold loose / B2B only', "Not sure"],
  },
  {
    key: 'sell_channel',
    title: 'Where will you primarily sell this product?',
    sub: 'Government and B2B channels often need extra certifications.',
    type: 'options',
    options: ['E-commerce / D2C', 'Retail stores', 'Government tenders / B2B', 'Export only'],
  },
  {
    key: 'origin',
    title: 'Where is the product manufactured?',
    sub: 'Foreign manufacturers may need an Authorized Indian Representative.',
    type: 'text',
    placeholder: 'e.g. India, China, Vietnam, USA…',
  },
  {
    key: 'urgency',
    title: 'When are you planning to launch?',
    sub: 'We\'ll prioritise your timeline accordingly.',
    type: 'options',
    options: ['As soon as possible', 'Within 1–2 months', 'Within 3–6 months', 'Just exploring'],
  },
];

function ProgressBar({ step, total }) {
  const pct = ((step) / total) * 100;
  return (
    <div style={{ width: '100%', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Question {Math.min(step + 1, total)} of {total}
        </span>
        <span style={{ fontSize: '11px', color: 'var(--gold)', fontFamily: 'var(--font-body)', fontWeight: 700 }}>{Math.round(pct)}%</span>
      </div>
      <div style={{ height: '4px', background: 'var(--border-subtle)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg,var(--gold),var(--gold-light))', transition: 'width .4s ease', borderRadius: '2px' }} />
      </div>
    </div>
  );
}

export default function AIRecommendationScreen() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [textVal, setTextVal] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const total = QUESTIONS.length;
  const q = QUESTIONS[step];

  async function submitAnswers(finalAnswers) {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/ai-recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalAnswers),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (e) {
      setError("We couldn't generate a recommendation right now — please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  }

  function handleOption(opt) {
    const updated = { ...answers, [q.key]: opt };
    setAnswers(updated);
    if (step + 1 < total) {
      setStep(step + 1);
      setTextVal('');
    } else {
      submitAnswers(updated);
    }
  }

  function handleTextNext() {
    if (!textVal.trim()) return;
    handleOption(textVal.trim());
  }

  function restart() {
    setStep(0);
    setAnswers({});
    setTextVal('');
    setResult(null);
    setError('');
  }

  return (
    <>
      {/* ── HERO STRIP: bg image full-bleed, text overlaid on top ── */}
      <style>{`
        .hero-banner {
          position: relative;
          height: 400px;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/ai.png');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }
        .hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(5,6,28,0.55) 0%, rgba(5,6,28,0.78) 100%);
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 1.5rem;
        }
        .hero-text {
          max-width: 640px;
        }

        @media (max-width: 860px) {
          .hero-banner { height: 340px; }
          .hero-inner {
            padding: 0 1.25rem;
            text-align: center;
            justify-content: center;
          }
          .hero-text { max-width: 100%; }
          .hero-text h1 { font-size: 28px !important; line-height: 1.25 !important; }
          .hero-text p { font-size: 13px !important; max-width: 100% !important; margin-left: auto; margin-right: auto; }
          .hero-tag { font-size: 10px !important; letter-spacing: 0.2em !important; justify-content: center !important; }
        }
        @media (max-width: 400px) {
          .hero-banner { height: 300px; }
          .hero-text h1 { font-size: 24px !important; }
          .hero-text p { font-size: 12px !important; }
        }
      `}</style>
      <section className="hero-banner">
        <div className="hero-bg" />
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-tag" style={{
              fontSize: '11px', letterSpacing: '0.32em', color: 'var(--gold-light)',
              textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.25rem',
              display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-body)',
            }}>
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'var(--gold)' }} />
              ✨ AI Certification Advisor
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Not Sure Which <span style={{ color: 'var(--gold)' }}>Certification</span> You Need?
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px',  maxWidth: '480px', fontFamily: 'var(--font-body)', fontWeight: 700, lineHeight: 1.7, marginTop: '1rem' }}>
              Answer {total} quick questions about your product and we'll instantly map out every mandatory and recommended certification — free, in under a minute.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUIZ / RESULT — LIGHT ── */}
      <section className="section-light" style={{ padding: '4rem 1.5rem 7rem', minHeight: '50vh' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {!result && !loading && (
            <>
              <ProgressBar step={step} total={total} />
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px',
                padding: '2.75rem 2.25rem', boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
              }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.6vw,28px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.3 }}>
                  {q.title}
                </h2>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '2rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>{q.sub}</p>

                {q.type === 'options' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {q.options.map(opt => (
                      <button
                        key={opt}
                        onClick={() => handleOption(opt)}
                        style={{
                          textAlign: 'left', padding: '16px 20px', borderRadius: '8px',
                          border: '1.5px solid var(--border-subtle)', background: 'var(--bg-primary-alt, transparent)',
                          color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14.5px',
                          cursor: 'pointer', transition: 'border-color .2s, background .2s, transform .15s',
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.transform = 'none'; }}
                      >
                        {opt}
                        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>→</span>
                      </button>
                    ))}
                  </div>
                )}

                {q.type === 'text' && (
                  <div>
                    <input
                      autoFocus
                      value={textVal}
                      onChange={e => setTextVal(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter') handleTextNext(); }}
                      placeholder={q.placeholder}
                      style={{
                        width: '100%', padding: '16px 18px', borderRadius: '8px', border: '1.5px solid var(--border-subtle)',
                        fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '1.25rem',
                        outline: 'none', background: 'transparent',
                      }}
                    />
                    <button
                      onClick={handleTextNext}
                      disabled={!textVal.trim()}
                      style={{
                        background: textVal.trim() ? 'var(--gold)' : 'var(--border-subtle)', color: '#fff', border: 'none',
                        padding: '14px 32px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
                        fontFamily: 'var(--font-body)', borderRadius: '6px', cursor: textVal.trim() ? 'pointer' : 'not-allowed',
                      }}
                    >
                      Continue →
                    </button>
                  </div>
                )}

                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    style={{ marginTop: '1.75rem', background: 'none', border: 'none', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: '12.5px', fontWeight: 700, cursor: 'pointer' }}
                  >
                    ← Back
                  </button>
                )}
              </div>
            </>
          )}

          {loading && (
            <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
              <div style={{ fontSize: '44px', marginBottom: '1.25rem' }}>✨</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>Analyzing your product…</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Matching against 8 regulatory frameworks.</p>
            </div>
          )}

          {error && (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p style={{ color: '#c0392b', fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '1rem' }}>{error}</p>
              <button onClick={restart} style={{ background: 'var(--gold)', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '6px', fontWeight: 800, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Try Again</button>
            </div>
          )}

          {result && !loading && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <div style={{ fontSize: '40px', marginBottom: '1rem' }}>✨</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3vw,34px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>Your Compliance Roadmap</h2>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75, fontFamily: 'var(--font-body)', fontWeight: 700 }}>{result.aiSummary}</p>
                <div style={{ display: 'inline-block', marginTop: '1.25rem', background: 'var(--gold-pale)', color: 'var(--gold-dark)', fontSize: '11px', fontWeight: 700, padding: '6px 16px', borderRadius: '20px', letterSpacing: '0.06em', fontFamily: 'var(--font-body)' }}>
                  ⏱ Estimated Total Timeline: {result.totalTimeline}
                </div>
              </div>

              {result.mandatory?.length > 0 && (
                <div style={{ marginBottom: '2.25rem' }}>
                  <h3 style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c0392b', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>🔴 Mandatory Certifications</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {result.mandatory.map(c => (
                      <Link key={c.name} href={c.href} style={{ textDecoration: 'none' }}>
                        <div style={{
                          background: 'var(--bg-card)', border: '1.5px solid var(--border-subtle)', borderRadius: '10px', padding: '1.5rem',
                          display: 'flex', gap: '1rem', alignItems: 'flex-start', transition: 'border-color .2s, transform .2s',
                        }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.transform = 'none'; }}
                        >
                          <div style={{ fontSize: '28px' }}>{c.icon}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>{c.name}</h4>
                              <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 10px', background: 'var(--gold-pale)', color: 'var(--gold-dark)', borderRadius: '1px', fontFamily: 'var(--font-body)' }}>⏱ {c.timeline}</span>
                            </div>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: '6px', fontFamily: 'var(--font-body)', fontWeight: 700 }}>{c.reason}</p>
                            <span style={{ fontSize: '11px', color: 'var(--gold)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>View Details →</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {result.recommended?.length > 0 && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-dark)', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>🟡 Recommended</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {result.recommended.map(c => (
                      <Link key={c.name} href={c.href} style={{ textDecoration: 'none' }}>
                        <div style={{
                          background: 'var(--bg-card)', border: '1.5px dashed var(--border-subtle)', borderRadius: '10px', padding: '1.5rem',
                          display: 'flex', gap: '1rem', alignItems: 'flex-start', transition: 'border-color .2s',
                        }}
                          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
                        >
                          <div style={{ fontSize: '26px' }}>{c.icon}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{c.name}</h4>
                              <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 10px', background: 'var(--gold-pale)', color: 'var(--gold-dark)', borderRadius: '1px', fontFamily: 'var(--font-body)' }}>⏱ {c.timeline}</span>
                            </div>
                            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '6px', fontFamily: 'var(--font-body)', fontWeight: 700 }}>{c.reason}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2.5rem' }}>
                <Link href="/contact" style={{
                  background: 'var(--gold)', color: '#fff', padding: '14px 36px', fontSize: '11px', fontWeight: 800,
                  letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '6px', fontFamily: 'var(--font-body)',
                }}>Talk to an Expert</Link>
                <button onClick={restart} style={{
                  background: 'transparent', border: '1.5px solid var(--border-subtle)', color: 'var(--text-primary)',
                  padding: '14px 36px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
                  borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-body)',
                }}>Start Over</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}