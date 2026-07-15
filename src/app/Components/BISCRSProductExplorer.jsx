'use client';
import { useState } from 'react';
import { CRS_PRODUCTS } from '../lib/crsProducts';

const ALL_CATEGORIES = ['All', ...Array.from(new Set(CRS_PRODUCTS.map(p => p.category)))];

const CATEGORY_ICONS = {
  All: '⚡',
  'Audio & Video': '🔊',
  'IT & Computing': '💻',
  'Power & Energy': '🔋',
  'LED & Lighting': '💡',
  'Home Appliances': '🏠',
  'Scanning & ID': '📊',
  'Solar & Renewable': '☀️',
  'Commercial & Office': '🏢',
  Storage: '💾',
  Switchgear: '⚙️',
};

function Label({ children }) {
  return (
    <p style={{
      fontSize: '11px', letterSpacing: '0.32em', color: 'var(--gold-dark)',
      textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.25rem',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
      fontFamily: 'var(--font-body)',
    }}>
      <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'var(--gold-dark)' }} />
      {children}
    </p>
  );
}

function ProductModal({ product, onClose }) {
  if (!product) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 9000, background: 'rgba(27,42,74,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: 'var(--bg-card)', borderRadius: 16, width: '100%', maxWidth: 640, maxHeight: '88vh', overflowY: 'auto', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-subtle)' }}
      >
        <div style={{ padding: '22px 26px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--gold-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{product.icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{product.title}</h3>
            <p style={{ fontSize: 12.5, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{product.category} · {product.standard}</p>
          </div>
          <button
            onClick={onClose}
            style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--bg-secondary)', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 15, flexShrink: 0 }}
          >✕</button>
        </div>

        <div style={{ padding: '22px 26px' }}>
          <div style={{ display: 'flex', gap: 0, border: '1px solid var(--border-subtle)', borderRadius: 10, overflow: 'hidden', marginBottom: 20, flexWrap: 'wrap' }}>
            {[{ label: 'Validity', value: product.validity }, { label: 'Timeline', value: product.timeline }, { label: 'Standard', value: product.standard }].map((it, i) => (
              <div key={it.label} style={{ flex: 1, minWidth: 120, padding: '10px 14px', background: 'var(--bg-secondary)', borderRight: i < 2 ? '1px solid var(--border-subtle)' : 'none' }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 2 }}>{it.label}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, color: 'var(--gold-dark)' }}>{it.value}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 18, fontFamily: 'var(--font-body)' }}>{product.intro}</p>

          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Documents Required</div>
          <div style={{ display: 'grid', gap: 8, marginBottom: 20 }}>
            {(product.documents || []).map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '9px 12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 8 }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--gold-pale)', color: 'var(--gold-dark)', flexShrink: 0, fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</div>
                <span style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>{d}</span>
              </div>
            ))}
          </div>

          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Registration Process</div>
          <div style={{ display: 'grid', gap: 10 }}>
            {(product.docsDomestic || []).map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--gold)', color: '#fff', flexShrink: 0, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</div>
                <span style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, paddingTop: 2, fontFamily: 'var(--font-body)' }}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '16px 26px', background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, color: '#fff', flex: 1, minWidth: 160, fontFamily: 'var(--font-body)' }}>Need CRS registration for {product.title.toLowerCase()}?</span>
          <a href="/contact" style={{ padding: '9px 20px', background: '#fff', color: 'var(--gold-dark)', borderRadius: 6, fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>Get Free Consultation →</a>
        </div>
      </div>
    </div>
  );
}

export default function BISCRSProductExplorer() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const categoryCounts = ALL_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = cat === 'All' ? CRS_PRODUCTS.length : CRS_PRODUCTS.filter(p => p.category === cat).length;
    return acc;
  }, {});

  const filtered = CRS_PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.standard.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <section className="section-light" style={{ padding: '7rem 1.5rem' }}>
      <style>{`
        .crs-cat-btn:hover { background: var(--gold-pale); }
        .crs-row-card:hover { border-color: var(--gold) !important; transform: translateY(-2px); box-shadow: var(--shadow-md); }
        .crs-scroll-list::-webkit-scrollbar { width: 5px; }
        .crs-scroll-list::-webkit-scrollbar-thumb { background: var(--border-subtle); border-radius: 4px; }
        .crs-search-input:focus { border-color: var(--gold) !important; box-shadow: 0 0 0 3px var(--gold-pale); }
        @media (max-width: 720px) {
          .crs-body { grid-template-columns: 1fr !important; }
          .crs-sidebar { flex-direction: row !important; overflow-x: auto; border-right: none !important; border-bottom: 1px solid var(--border-subtle); position: static !important; height: auto !important; }
        }
        @media (max-width: 500px) {
          .crs-scroll-list { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Label>Complete CRS Product List</Label>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.8vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: '1.25rem' }}>
            Products Under <span style={{ color: 'var(--gold)' }}>BIS Registration Scheme</span>
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto', fontFamily: 'var(--font-body)' }}>
            {CRS_PRODUCTS.length}+ product categories require mandatory BIS CRS registration. <strong>Click any product</strong> to view detailed registration requirements, documents, and process.
          </p>
        </div>

        <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 14, overflow: 'hidden', background: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)' }}>
          {/* Top search bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
              <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 13 }}>🔍</span>
              <input
                type="text"
                className="crs-search-input"
                placeholder="Search product name or IS standard…"
                value={search}
                onChange={e => { setSearch(e.target.value); setActiveCategory('All'); }}
                style={{ width: '100%', boxSizing: 'border-box', padding: '9px 12px 9px 34px', border: '1px solid var(--border-subtle)', borderRadius: 7, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-primary)', outline: 'none', background: 'var(--bg-card)' }}
              />
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
              <strong style={{ color: 'var(--gold-dark)' }}>{filtered.length}</strong> / {CRS_PRODUCTS.length} products
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--gold-pale)', borderRadius: 6, padding: '5px 12px' }}>
              <span style={{ fontSize: 13 }}>☝️</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: 'var(--gold-dark)' }}>Click any product for details</span>
            </div>
          </div>

          {/* Body: sidebar + panel */}
          <div className="crs-body" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', alignItems: 'flex-start' }}>
            <div className="crs-sidebar" style={{ display: 'flex', flexDirection: 'column', padding: '12px 8px', gap: 2, background: 'var(--bg-secondary)', borderRight: '1px solid var(--border-subtle)', position: 'sticky', top: 90, maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
              {ALL_CATEGORIES.map(cat => {
                const isActive = activeCategory === cat && !search;
                return (
                  <button
                    key={cat}
                    className="crs-cat-btn"
                    onClick={() => { setActiveCategory(cat); setSearch(''); }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 8,
                      border: 'none', background: isActive ? 'var(--gold-pale)' : 'transparent', cursor: 'pointer',
                      textAlign: 'left', width: '100%', position: 'relative',
                      borderLeft: isActive ? '3px solid var(--gold)' : '3px solid transparent',
                    }}
                  >
                    <span style={{ fontSize: 17, width: 22, textAlign: 'center', flexShrink: 0 }}>{CATEGORY_ICONS[cat] || '🏷️'}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, flex: 1, color: isActive ? 'var(--gold-dark)' : 'var(--text-primary)' }}>{cat}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, background: isActive ? 'var(--gold)' : 'var(--gold-pale)', color: isActive ? '#fff' : 'var(--gold-dark)', borderRadius: 10, padding: '1px 7px', flexShrink: 0 }}>{categoryCounts[cat]}</span>
                  </button>
                );
              })}
            </div>

            <div>
              <div style={{ padding: '14px 18px 10px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, color: 'var(--gold-dark)' }}>{search ? `Search: "${search}"` : activeCategory}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', marginLeft: 8 }}>{filtered.length} product{filtered.length !== 1 ? 's' : ''}</span>
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-muted)' }}>↕ Scroll inside list</span>
              </div>

              {filtered.length === 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 300, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
                  <p>No products match "{search}"</p>
                </div>
              ) : (
                <div className="crs-scroll-list" style={{ height: 580, overflowY: 'auto', padding: 14, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10, background: 'var(--bg-secondary)', alignContent: 'flex-start' }}>
                  {filtered.map(product => (
                    <div
                      key={product.id}
                      className="crs-row-card"
                      onClick={() => setSelected(product)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={e => e.key === 'Enter' && setSelected(product)}
                      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 9, padding: 14, cursor: 'pointer', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', gap: 7, minHeight: 140 }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--gold-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{product.icon}</div>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 9, fontWeight: 700, background: 'var(--gold-pale)', color: 'var(--gold-dark)', padding: '2px 7px', borderRadius: 3, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Mandatory</span>
                      </div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{product.title}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-muted)' }}>{product.standard}</div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 6 }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', background: 'var(--bg-secondary)', borderRadius: 3, padding: '1px 6px' }}>{product.category}</span>
                        <span style={{ fontSize: 11, color: 'var(--gold)' }}>→</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{ background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--gold-dark) 100%)', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 22 }}>📋</span>
            <div style={{ flex: 1, minWidth: 160 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 700, color: '#fff', marginBottom: 2 }}>Don't see your product?</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'rgba(255,255,255,0.82)' }}>{CRS_PRODUCTS.length}+ categories under CRS. Get a free eligibility check.</p>
            </div>
            <a
              href="/contact"
              style={{ padding: '9px 20px', background: 'var(--gold)', color: '#fff', border: 'none', borderRadius: 6, fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}
            >
              Free Eligibility Check →
            </a>
          </div>
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
