'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useTheme } from '../lib/ThemeContext';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Announcement ticker — Taleo style */}
      <div
        style={{
          background: 'var(--bg-ticker)',
          color: 'var(--gold)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          overflow: 'hidden',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          fontWeight: '700'
        }}
      >
        <div className="ticker-track" style={{ display: 'flex', whiteSpace: 'nowrap', gap: '4rem' }}>
          {[...Array(6)].map((_, i) => (
            <span key={i}>
              ✦ FREE CONSULTATION &nbsp;&nbsp; ✦ 12+ YEARS EXCELLENCE &nbsp;&nbsp; ✦ 10,000+ CERTIFICATIONS &nbsp;&nbsp; ✦ 0% FAILURE RATE &nbsp;&nbsp; ✦ BIS · EPR · WPC · TEC · BEE · ISO · CDSCO &nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Main navbar */}
      <nav
        style={{
          background: '#ffffff',
          borderBottom: `1px solid var(--border-subtle)`,
          boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
          transition: 'box-shadow .3s',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src="/logo.png" alt="SRC Global logo" width={76} height={76} priority />
            <div>
              <div style={{ fontWeight: 700, fontSize: '24px', color: '#222222', lineHeight: 1.1 }}>
                SRC Global
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#464545',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color .2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = '#464545'}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

            {/* CTA */}
            <Link
              href="/contact"
              style={{
                background: 'var(--gold)',
                color: '#fff',
                padding: '8px 20px',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'background .2s',
              }}
              className="hidden-mobile"
            >
              Free Consultation
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(p => !p)}
              aria-label="Menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#1B2A4A', fontSize: '20px',
                display: 'none',
              }}
              className="show-mobile"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              background: '#ffffff',
              borderTop: '1px solid var(--border-subtle)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#1B2A4A',
                  textDecoration: 'none',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(27,42,74,0.12)',
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                background: 'var(--gold)', color: '#fff', textAlign: 'center',
                padding: '12px', fontSize: '13px', fontWeight: 600,
                letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase',
                borderRadius: '2px', marginTop: '0.5rem',
              }}
            >
              Free Consultation
            </Link>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}