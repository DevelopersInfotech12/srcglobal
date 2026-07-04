'use client';
import Link from 'next/link';

export const Label = ({ children, light }) => (
  <p style={{
    fontSize: '11px', letterSpacing: '0.32em',
    color: 'var(--gold-light)',
    textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.25rem',
    display: 'flex', alignItems: 'center', gap: '10px',
    // fontFamily: 'var(--font-body)',
  }}>
    <span style={{ display: 'inline-block', width: '28px', height: '1px', background: light ? 'var(--gold-dark)' : 'var(--gold)' }} />
    {children}
  </p>
);

export const GoldBtn = ({ href, children, outline, dark, style = {} }) => (
  <Link href={href} style={{
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    padding: '13px 34px', fontSize: '11px', fontWeight: 800,
    letterSpacing: '0.16em', textDecoration: 'none', textTransform: 'uppercase',
    borderRadius: '1px', transition: 'all .22s',
    background: '#E8470A',
    color: '#faf6ef',
    border: outline
      ? `1.5px solid ${dark ? '#1B2A4A' : 'var(--gold)'}`
      : '1.5px solid var(--gold)',
    fontFamily: 'var(--font-body)',
    ...style,
  }}>{children}</Link>
);

export const Divider = ({ dark }) => (
  <div style={{ width: '44px', height: '2px', background: dark ? '#c73a06' : 'var(--gold)', margin: '1.75rem 0' }} />
);

export const SectionHeading = ({ children, light }) => (
  <h2 style={{
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(34px, 3.8vw, 54px)',
    fontWeight: 700,
    color: light ? '#1B2A4A' : 'var(--text-primary)',
    lineHeight: 1.12,
    letterSpacing: '-0.02em',
  }}>{children}</h2>
);
