'use client';
import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  { label: 'BIS Certification', href: '/services' },
  { label: 'EPR Registration', href: '/services' },
  { label: 'WPC-ETA Approval', href: '/services' },
  { label: 'TEC / MTCTE', href: '/services' },
  { label: 'BEE Registration', href: '/services' },
  { label: 'LMPC Registration', href: '/services' },
  { label: 'ISO Certification', href: '/services' },
  { label: 'CDSCO / Drug License', href: '/services' },
];

const QUICK = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'All Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-ticker)', color: 'var(--text-inverse)', paddingTop: '5rem' }}>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem 2rem' }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
           <Image src="/logo.png" alt="SRC Global logo" width={76} height={76} priority />
            <div>
              <div style={{ fontWeight: 700, fontSize: '22px', color: '#fff' }}>SRC Global</div>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#a89f8e', lineHeight: 1.7, maxWidth: '240px', marginBottom: '1.5rem' }}>
            India&apos;s trusted compliance &amp; certification consultancy. 12+ years, 10,000+ clients, 0% failure rate.
          </p>
          <div
            style={{
              marginTop: '1.5rem',
              fontSize: '13px',
              color: '#a89f8e',
              lineHeight: 2,
            }}
          >
            <div>
              📞{' '}
              <a href="tel:+919891229135" style={{ textDecoration: 'none' }}>
                +91-9891229135
              </a>
            </div>

            <div>
              ✉{' '}
              <a href="mailto:starindia.acc@gmail.com" style={{ textDecoration: 'none' }}>
                starindia.acc@gmail.com
              </a>
            </div>

            <div style={{ marginTop: '6px' }}>
              📍 122 GF, Pocket 9,<br />
              Rohini Sector 21, New Delhi - 110086
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>Our Services</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {SERVICES.map(s => (
              <li key={s.href}>
                <Link href={s.href} style={{ fontSize: '13px', color: '#a89f8e', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = '#a89f8e'}
                >
                  → {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {QUICK.map(s => (
              <li key={s.href}>
                <Link href={s.href} style={{ fontSize: '13px', color: '#a89f8e', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = '#a89f8e'}
                >
                  → {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>Stay Updated</h4>
          <p style={{ fontSize: '13px', color: '#a89f8e', lineHeight: 1.7, marginBottom: '1rem' }}>
            Get regulatory updates, QCO notifications &amp; compliance alerts.
          </p>
          <div style={{ display: 'flex', gap: '0' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1, padding: '10px 14px', fontSize: '13px',
                background: 'rgba(255,255,255,.06)', border: '1px solid rgba(201,146,28,.3)',
                borderRight: 'none', color: '#fff', outline: 'none',
                borderRadius: '2px 0 0 2px',
              }}
            />
            <button style={{
              background: 'var(--gold)', border: 'none', padding: '10px 16px',
              fontSize: '12px', color: '#fff', cursor: 'pointer', fontWeight: 600,
              borderRadius: '0 2px 2px 0', letterSpacing: '0.05em',
            }}>→</button>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <p style={{ fontSize: '11px', color: '#6b6050', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Certified & Recognized By</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['BIS', 'EPR', 'WPC', 'TEC', 'ISO', 'DPIIT'].map(b => (
                <span key={b} style={{
                  fontSize: '10px', fontWeight: 700, padding: '3px 8px',
                  border: '1px solid rgba(201,146,28,.3)', color: 'var(--gold)',
                  borderRadius: '2px', letterSpacing: '0.1em',
                }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(201,146,28,.15)',
        marginTop: '4rem',
        padding: '1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1280px',
        margin: '4rem auto 0',
      }}>
        <p style={{ fontSize: '12px', color: '#6b6050' }}>
          © 2026 SRC Global — Star India Accreditation. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacy Policy', 'Terms & Conditions'].map(t => (
            <a key={t} href="#" style={{ fontSize: '12px', color: '#6b6050', textDecoration: 'none' }}>{t}</a>
          ))}
        </div>
      </div>
      <div style={{ height: '1.5rem' }} />
    </footer>
  );
}
