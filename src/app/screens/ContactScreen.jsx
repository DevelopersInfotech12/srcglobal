'use client';
import { useState } from 'react';
import PageHero from '../Components/PageHero';

const SERVICES_LIST = ['BIS — CRS / ISI', 'EPR Registration', 'WPC — ETA', 'TEC / MTCTE', 'BEE Registration', 'LMPC Registration', 'ISO Certification', 'CDSCO / Drug License', 'Other / Not Sure'];

export default function ContactScreen() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = k => e => setForm(p => ({ ...p, [k]: e.target.value }));
  const submit = () => {
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', fontSize: '14px',
    background: 'var(--bg-secondary)', border: '1px solid var(--border)',
    borderRadius: '2px', color: 'var(--text-primary)', outline: 'none',
    marginBottom: '1rem', boxSizing: 'border-box',
    transition: 'border-color .2s',
  };

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Get In Touch"
        title="Free"
        highlight="Consultation"
        description="Fill in the form and our compliance experts will respond within 2 hours — no obligation, no cost."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=85&fit=crop"
        imageAlt="SRC Global contact and support desk"
        badge={{ label: '2hr', sub: 'Response' }}
        stats={[
          { value: '2hr', label: 'Avg. Response' },
          { value: '24/7', label: 'WhatsApp Support' },
        ]}
        primaryCta={{ label: 'Request Consultation', href: '#form' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: 'https://wa.me/919891229135?text=Hi SRC Global, I need help with a certification.' }}
        features={['Phone & WhatsApp', 'Email Support', 'New Delhi Office', 'Mon–Sat 9–6']}
      />

      {/* Form + Info — LIGHT */}
      <section className="section-light" style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Form */}
          <div id="form" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '1rem' }}>✅</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "clamp(34px, 3.8vw, 54px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.12, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Message Received</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Our experts will reach out within 2 business hours. Check your email for confirmation.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "clamp(34px, 2.5vw, 30px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.12, color: 'var(--text-primary)', marginBottom: '2rem' }}>Request a Consultation</h2>
                <input style={inputStyle} placeholder="Your Full Name *" value={form.name} onChange={set('name')} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                <input style={inputStyle} placeholder="Email Address *" type="email" value={form.email} onChange={set('email')} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                <input style={inputStyle} placeholder="Phone / WhatsApp" value={form.phone} onChange={set('phone')} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.service} onChange={set('service')} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'}>
                  <option value="">Select Service Needed</option>
                  {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <textarea
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="Tell us about your product and certification requirement…"
                  value={form.message}
                  onChange={set('message')}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
                <button
                  onClick={submit}
                  style={{
                    width: '100%', padding: '14px', background: 'var(--gold)', color: '#fff',
                    border: 'none', borderRadius: '2px', fontSize: '12px', fontWeight: 700,
                    letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer',
                    transition: 'opacity .2s',
                  }}
                  onMouseEnter={e => e.target.style.opacity = '.85'}
                  onMouseLeave={e => e.target.style.opacity = '1'}
                >
                  Send Message →
                </button>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem' }}>
                  No spam · Free consultation · Response within 2 hours
                </p>
              </>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "clamp(34px, 2.5vw, 30px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.12, color: 'var(--text-primary)', marginBottom: '2rem' }}>Contact Information</h2>
            {[
              { icon: '📞', label: 'Phone / WhatsApp', values: ['+91-9891229135', '+91-9540190334'] },
              { icon: '✉', label: 'Email', values: ['✉ starindia.acc@gmail.com'] },

              {
                icon: '📍',
                label: 'Address',
                values: [
                  '122 GF, Pocket 9,',
                  'Rohini Sector 21, New Delhi - 110086'
                ]
              },
              { icon: '🕐', label: 'Working Hours', values: ['Mon–Sat: 9:00 AM – 6:00 PM', '24/7 WhatsApp Support'] },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ fontSize: '20px', minWidth: '28px', paddingTop: '2px' }}>{c.icon}</div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>{c.label}</p>
                  {c.values.map(v => <p key={v} style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{v}</p>)}
                </div>
              </div>
            ))}

            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--gold-pale)', border: '1px solid var(--border)', borderRadius: '4px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>Prefer WhatsApp?</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Message us directly on WhatsApp for the fastest response.</p>
              <a
                href="https://wa.me/919891229135?text=Hi SRC Global, I need help with a certification."
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-block', background: '#25d366', color: '#fff', padding: '10px 24px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase', borderRadius: '2px' }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}