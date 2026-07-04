'use client';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '../Components/PageHero';

const BLOGS = [
  { tag: 'BIS Certification', date: 'Apr 28, 2025', read: '6 min', title: 'BIS CRS Registration: What Every Electronics Importer Must Know in 2025', excerpt: 'Mandatory for 70+ product categories, CRS registration can make or break your India market entry. Step-by-step guide.', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80', href: '/blog/bis-crs', featured: true },
  { tag: 'EPR', date: 'Apr 15, 2025', read: '5 min', title: 'EPR Registration for E-Waste: A Complete Compliance Roadmap', excerpt: 'CPCB\'s EPR rules now apply to all producers, importers, and brand owners of electronic equipment.', img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80', href: '/blog/epr' },
  { tag: 'WPC / ETA', date: 'Mar 30, 2025', read: '4 min', title: 'WPC ETA Approval for Wireless Devices: Timelines, Docs & Common Pitfalls', excerpt: 'Missing ETA approval is one of the top reasons wireless products get held at Indian customs.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', href: '/blog/wpc' },
  { tag: 'ISO Certification', date: 'Mar 12, 2025', read: '7 min', title: 'ISO 9001:2015 Certification: Is Your Business Actually Ready?', excerpt: 'Most organizations underestimate the documentation gap. Here\'s a practical readiness checklist.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', href: '/blog/iso' },
  { tag: 'BEE', date: 'Feb 28, 2025', read: '5 min', title: 'BEE Star Rating: What Changed in 2025 and How It Affects Your Product', excerpt: 'BEE revised energy efficiency norms for ACs and refrigerators. New minimum star ratings apply from July 2025.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80', href: '/blog/bee' },
  { tag: 'LMPC', date: 'Feb 10, 2025', read: '4 min', title: 'LMPC Importer Licence: The Overlooked Requirement That Stops Shipments', excerpt: 'Hundreds of import consignments are cleared incorrectly every year. Understanding LMPC before your first import.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', href: '/blog/lmpc' },
];

const TAGS = ['All', 'BIS Certification', 'EPR', 'WPC / ETA', 'ISO Certification', 'BEE', 'LMPC', 'CDSCO', 'TEC'];

export default function BlogScreen() {
  const [featured, ...rest] = BLOGS;

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Knowledge Hub"
        title="Insights & Regulatory"
        highlight="Guides"
        description="Expert articles on BIS, EPR, WPC, ISO and more — written by our regulatory consultants to keep you informed and compliant."
        image={featured.img}
        imageAlt={featured.title}
        badge={{ label: '★', sub: 'Featured' }}
        stats={[
          { value: '6+', label: 'Topics Covered' },
          { value: 'Weekly', label: 'New Articles' },
        ]}
        primaryCta={{ label: 'Read Latest', href: featured.href }}
        secondaryCta={{ label: 'Browse Topics ↓', href: '#topics' }}
        features={[featured.tag, `${featured.date}`, `${featured.read} read`]}
      />

      {/* Topics + Featured — LIGHT */}
      <section className="section-light" style={{ padding: '4rem 1.5rem 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Topic filter */}
        <div id="topics" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '3rem' }}>
          {TAGS.map(t => (
            <button key={t} style={{
              padding: '6px 14px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', border: '1px solid var(--border)', borderRadius: '2px',
              background: t === 'All' ? 'var(--gold)' : 'transparent',
              color: t === 'All' ? '#fff' : 'var(--text-secondary)',
              cursor: 'pointer', transition: 'all .2s',
            }}>{t}</button>
          ))}
        </div>

        {/* Featured */}
        <Link href={featured.href} style={{ textDecoration: 'none', display: 'block', marginBottom: '3rem' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0', border: '1px solid var(--border-subtle)', borderRadius: '4px', overflow: 'hidden',
            transition: 'box-shadow .25s',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div style={{ position: 'relative', minHeight: '280px' }}>
              <Image src={featured.img} alt={featured.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '2.5rem', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', background: 'var(--gold)', color: '#fff', borderRadius: '2px', letterSpacing: '0.1em' }}>★ Featured</span>
                <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', background: 'var(--gold-pale)', color: 'var(--gold)', borderRadius: '2px', letterSpacing: '0.1em' }}>{featured.tag}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{featured.date} · {featured.read}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '1rem' }}>{featured.title}</h2>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem' }}>{featured.excerpt}</p>
              <span style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 700 }}>Read Article →</span>
            </div>
          </div>
        </Link>
      </div>
      </section>

      {/* More articles — DARK */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(24px,3vw,32px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2rem' }}>More Articles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {rest.map(b => (
            <Link key={b.title} href={b.href} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                borderRadius: '4px', overflow: 'hidden', transition: 'all .25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image src={b.img} alt={b.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', background: 'var(--gold-pale)', color: 'var(--gold)', borderRadius: '2px', letterSpacing: '0.1em' }}>{b.tag}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{b.date} · {b.read}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '19px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4, marginBottom: '0.75rem' }}>{b.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{b.excerpt}</p>
                  <div style={{ marginTop: '1rem', fontSize: '12px', color: 'var(--gold)', fontWeight: 700 }}>Read Article →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}