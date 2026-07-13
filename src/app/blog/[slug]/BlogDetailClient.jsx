"use client";
// /app/blog/[slug]/BlogDetailClient.jsx
// ✅ CLIENT COMPONENT — Gazette / Official Filing redesign

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "../../Components/Navbar";
const Footer = dynamic(() => import("../../Components/Footer"));
import "../../animations.css";

const T = {
  ink: "#0B1E33",
  paper: "#F7F4EC",
  paperDark: "#EFEAE0",
  seal: "#A6301F",
  sealDark: "#7E2417",
  gold: "#9C7A2E",
  goldLight: "#F3ECD8",
  slate: "#333F4E",
  muted: "#6B7280",
  line: "#D9D2C0",
  white: "#FFFFFF",
  display: "'Fraunces', 'Georgia', serif",
  body: "'IBM Plex Sans', 'system-ui', sans-serif",
  mono: "'IBM Plex Mono', 'Courier New', monospace",
};

function useReveal(opts = {}) {
  const { threshold = 0.01, stagger = false, baseDelay = 80, once = true } = opts;
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (stagger) {
        Array.from(el.children).forEach((child, i) => {
          child.style.transitionDelay = i * baseDelay + "ms";
          child.classList.add("revealed");
        });
      } else { el.classList.add("revealed"); }
      if (once) obs.unobserve(el);
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, stagger, baseDelay, once]);
  return ref;
}

// scroll-progress, gazette style "form completion" bar
function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setPct(height > 0 ? Math.min(100, (scrolled / height) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return pct;
}

// deterministic doc reference number from slug, e.g. SIACC/BLG/2025/0417
function refNumber(slug = "", date = "") {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const year = (date.match(/\d{4}/) || [String(new Date().getFullYear())])[0];
  return `SRC/BLG/${year}/${String(h % 10000).padStart(4, "0")}`;
}

function tagAbbrev(tag = "") {
  const clean = tag.replace(/[^A-Za-z ]/g, "").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 4).toUpperCase();
  return words.map(w => w[0]).join("").slice(0, 4).toUpperCase();
}

function ContentBlock({ block }) {
  if (block.type === "p")
    return <p dangerouslySetInnerHTML={{ __html: block.text }} />;
  if (block.type === "h3")
    return <h3>{block.text}</h3>;
  if (block.type === "ul")
    return <ul>{block.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>;
  if (block.type === "ol")
    return <ol>{block.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}</ol>;
  if (block.type === "callout")
    return (
      <div className="notice notice-info">
        <span className="notice-stamp">NOTE</span>
        <p dangerouslySetInnerHTML={{ __html: block.text }} />
      </div>
    );
  if (block.type === "callout-warn")
    return (
      <div className="notice notice-warn">
        <span className="notice-stamp notice-stamp-warn">CAUTION</span>
        <p dangerouslySetInnerHTML={{ __html: block.text }} />
      </div>
    );
  if (block.type === "steps")
    return (
      <div className="docket">
        {(block.stepItems || block.items || []).map((s, i) => (
          <div key={i} className="docket-row">
            <div className="docket-num">{s.n}</div>
            <div className="docket-body">
              <div className="docket-title">{s.title}</div>
              <p>{s.desc}</p>
              {s.tip && <div className="docket-tip">↳ {s.tip}</div>}
            </div>
          </div>
        ))}
      </div>
    );
  if (block.type === "img")
    return <Image src={block.src} alt={block.alt || ""} style={{ borderRadius: 2, margin: "20px 0", width: "100%" }} unoptimized />;
  return null;
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  img { max-width:100%; display:block; } a { text-decoration:none; color:inherit; }

  @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.55;transform:scale(1.25);} }

  .progress-rail { position:sticky; top:0; z-index:40; height:3px; background:${T.line}; }
  .progress-fill { height:100%; background:${T.seal}; transition:width 0.1s linear; }

  .masthead { border-top:3px solid ${T.ink}; border-bottom:1px solid ${T.line}; background:${T.paper}; padding:10px clamp(16px,4vw,48px); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; }
  .masthead-eyebrow { font-family:${T.mono}; font-size:10.5px; letter-spacing:0.16em; text-transform:uppercase; color:${T.muted}; }
  .masthead-ref { font-family:${T.mono}; font-size:10.5px; letter-spacing:0.06em; color:${T.slate}; }

  .hero { position:relative; overflow:hidden; background:${T.ink}; }
  .hero-inner { position:relative; z-index:2; max-width:1180px; margin:0 auto; padding:clamp(52px,7vw,92px) clamp(20px,4vw,56px); display:grid; grid-template-columns:1fr auto; gap:40px; align-items:end; }
  @media(max-width:760px){ .hero-inner { grid-template-columns:1fr; } }
  .hero-img { position:absolute; inset:0; z-index:0; opacity:0.30; }
  .hero-overlay { position:absolute; inset:0; z-index:1; background:linear-gradient(180deg, rgba(11,30,51,0.55) 0%, rgba(11,30,51,0.94) 78%); }
  .docket-line { display:inline-flex; align-items:center; gap:9px; font-family:${T.mono}; font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.68); margin-bottom:20px; }
  .live-dot { width:6px; height:6px; border-radius:50%; background:#C9A227; box-shadow:0 0 6px rgba(201,162,39,0.8); display:inline-block; animation:pulse-dot 2.2s ease-in-out infinite; }
  .hero-title { font-family:${T.display}; font-weight:600; font-size:clamp(2rem,4.6vw,3.1rem); line-height:1.1; letter-spacing:-0.01em; color:#fff; max-width:760px; }
  .hero-title em { font-style:normal; color:${T.gold}; }
  .hero-meta { display:flex; gap:18px; flex-wrap:wrap; margin-top:22px; font-family:${T.mono}; font-size:11.5px; color:rgba(255,255,255,0.72); }
  .hero-meta span { display:flex; align-items:center; gap:6px; }

  .seal {
    width:112px; height:112px; border-radius:50%;
    border:2px solid ${T.seal}; outline:1px solid rgba(166,48,31,0.5); outline-offset:4px;
    display:flex; align-items:center; justify-content:center; flex-shrink:0;
    transform:rotate(-9deg); background:rgba(166,48,31,0.08);
    font-family:${T.display}; font-weight:700; color:${T.seal}; text-align:center;
  }
  .seal-text { font-size:15px; letter-spacing:0.04em; line-height:1.15; }
  .seal-sub { font-family:${T.mono}; font-size:7.5px; letter-spacing:0.2em; color:${T.seal}; margin-top:3px; text-transform:uppercase; }

  .layout-wrap { background:${T.paper}; padding:clamp(44px,6vw,76px) clamp(16px,4vw,48px); }
  .article-layout { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:1fr 300px; gap:52px; align-items:flex-start; }
  @media(max-width:900px){ .article-layout { grid-template-columns:1fr; } .sidebar { display:none; } }

  .record-card { background:${T.white}; border:1px solid ${T.line}; padding:22px 24px; margin-bottom:30px; position:relative; }
  .record-card::before { content:""; position:absolute; left:0; top:0; bottom:0; width:3px; background:${T.gold}; }
  .record-label { font-family:${T.mono}; font-size:10px; letter-spacing:0.16em; text-transform:uppercase; color:${T.gold}; margin-bottom:12px; display:block; }
  .checklist { list-style:none; }
  .checklist li { display:flex; gap:10px; align-items:flex-start; margin-bottom:10px; font-family:${T.body}; font-size:14.5px; color:${T.slate}; }
  .checklist .box { width:16px; height:16px; border:1.4px solid ${T.ink}; flex-shrink:0; margin-top:2px; display:flex; align-items:center; justify-content:center; font-size:11px; color:${T.ink}; font-weight:700; }

  .article-body h2 { font-family:${T.display}; font-size:clamp(1.25rem,2.2vw,1.55rem); color:${T.ink}; font-weight:600; margin:44px 0 6px; }
  .article-body h2::after { content:""; display:block; width:100%; height:1px; background:${T.line}; margin-top:12px; }
  .article-body h3 { font-family:${T.body}; font-size:1.02rem; color:${T.ink}; font-weight:700; margin:26px 0 10px; }
  .article-body p { font-family:${T.body}; font-size:16px; color:${T.slate}; line-height:1.85; margin-bottom:17px; }
  .article-body ul, .article-body ol { font-family:${T.body}; font-size:15.5px; color:${T.slate}; line-height:1.8; margin:0 0 17px 22px; }
  .article-body li { margin-bottom:8px; }
  .article-body strong { color:${T.ink}; font-weight:700; }

  .notice { position:relative; border:1px solid ${T.line}; background:${T.white}; padding:20px 24px 20px 26px; margin:26px 0; }
  .notice-info { border-left:3px solid ${T.ink}; }
  .notice-warn { border-left:3px solid ${T.seal}; }
  .notice-stamp { display:inline-block; font-family:${T.mono}; font-size:10px; font-weight:600; letter-spacing:0.14em; color:${T.ink}; border:1px solid ${T.ink}; padding:2px 8px; margin-bottom:10px; transform:rotate(-2deg); }
  .notice-stamp-warn { color:${T.seal}; border-color:${T.seal}; }
  .notice p { margin-bottom:0 !important; }

  .docket-row { display:flex; gap:16px; align-items:flex-start; padding:18px 0; border-bottom:1px solid ${T.line}; }
  .docket-row:last-child { border-bottom:none; }
  .docket-num { font-family:${T.mono}; font-size:13px; font-weight:600; color:${T.gold}; border:1px solid ${T.gold}; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .docket-title { font-family:${T.body}; font-size:15px; font-weight:700; color:${T.ink}; margin-bottom:5px; }
  .docket-body p { font-size:14.5px; margin-bottom:6px; }
  .docket-tip { font-family:${T.mono}; font-size:12px; color:${T.gold}; }

  .toc-link { display:flex; gap:8px; padding:7px 0; font-family:${T.mono}; font-size:12.5px; color:${T.slate}; border-bottom:1px dotted ${T.line}; transition:color 0.15s; }
  .toc-link:last-child { border-bottom:none; }
  .toc-link:hover { color:${T.seal}; }

  .meta-row { display:flex; justify-content:space-between; padding:9px 0; border-bottom:1px solid ${T.line}; font-family:${T.mono}; font-size:11.5px; }
  .meta-row:last-child { border-bottom:none; }
  .meta-row .k { color:${T.muted}; }
  .meta-row .v { color:${T.ink}; font-weight:600; text-align:right; max-width:58%; }

  .stamp-btn { display:inline-block; width:100%; text-align:center; padding:12px; background:${T.ink}; color:#fff; border:none; font-family:${T.mono}; font-size:12px; letter-spacing:0.08em; text-transform:uppercase; font-weight:600; cursor:pointer; transition:background 0.2s; }
  .stamp-btn:hover { background:${T.seal}; }

  .cta-banner { margin-top:44px; border:1.5px solid ${T.ink}; background:${T.goldLight}; padding:28px 30px; }
  .cta-banner-title { font-family:${T.display}; font-size:17px; font-weight:700; color:${T.ink}; margin-bottom:8px; }
  .cta-banner p { font-family:${T.body}; font-size:14px; color:${T.slate}; margin-bottom:18px !important; }
  .cta-banner button { padding:11px 26px; background:${T.seal}; color:#fff; border:none; font-family:${T.mono}; font-size:12.5px; letter-spacing:0.06em; text-transform:uppercase; font-weight:600; cursor:pointer; transition:background 0.2s; }
  .cta-banner button:hover { background:${T.sealDark}; }

  .related-section { background:${T.white}; border-top:1px solid ${T.line}; padding:clamp(40px,5vw,64px) clamp(16px,4vw,48px); }
  .related-head { max-width:1180px; margin:0 auto 26px; display:flex; align-items:baseline; gap:14px; }
  .related-head .eyebrow { font-family:${T.mono}; font-size:10.5px; letter-spacing:0.16em; text-transform:uppercase; color:${T.gold}; }
  .related-head h2 { font-family:${T.display}; font-size:clamp(1.3rem,2.4vw,1.7rem); color:${T.ink}; font-weight:600; }
  .related-grid { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:0; border-top:1px solid ${T.line}; border-left:1px solid ${T.line}; }
  .related-card { border-right:1px solid ${T.line}; border-bottom:1px solid ${T.line}; padding:22px; cursor:pointer; transition:background 0.2s; position:relative; }
  .related-card:hover { background:${T.paperDark}; }
  .related-ref { font-family:${T.mono}; font-size:10px; color:${T.gold}; letter-spacing:0.08em; margin-bottom:10px; display:block; }
  .related-card h3 { font-family:${T.body}; font-size:14.5px; font-weight:700; color:${T.ink}; line-height:1.45; margin-bottom:12px; }
  .related-read { font-family:${T.mono}; font-size:11.5px; color:${T.seal}; font-weight:600; }
  .related-soon { font-family:${T.mono}; font-size:10.5px; color:${T.muted}; }

  .cta-final { background:${T.ink}; padding:76px clamp(16px,5vw,56px); }
  .cta-final-inner { max-width:1080px; margin:0 auto; display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
  @media(max-width:720px){ .cta-final-inner { grid-template-columns:1fr; } }
  .cta-final-eyebrow { font-family:${T.mono}; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:${T.gold}; margin-bottom:16px; }
  .cta-final h2 { font-family:${T.display}; font-size:clamp(1.8rem,3.2vw,2.6rem); color:#fff; font-weight:600; line-height:1.15; margin-bottom:14px; }
  .cta-final p { font-family:${T.body}; color:rgba(255,255,255,0.72); font-size:15.5px; line-height:1.8; }
  .cta-final-actions { display:flex; flex-direction:column; gap:12px; }
  .cta-primary { padding:14px 34px; background:${T.seal}; color:#fff; border:none; font-family:${T.mono}; font-size:13px; letter-spacing:0.06em; text-transform:uppercase; font-weight:600; cursor:pointer; white-space:nowrap; transition:background 0.2s; }
  .cta-primary:hover { background:${T.sealDark}; }
  .cta-tel { padding:13px 28px; border:1px solid rgba(255,255,255,0.3); color:#fff; font-family:${T.mono}; font-size:13px; display:flex; align-items:center; justify-content:center; gap:8px; white-space:nowrap; transition:border-color 0.2s; }
  .cta-tel:hover { border-color:${T.gold}; }

  @media(max-width:640px){ .article-body p, .article-body li { font-size:15px; } .seal { width:88px; height:88px; } }
`;

function HeroTitle({ title }) {
  const sep = title.includes(" — ") ? " — " : title.includes(": ") ? ": " : null;
  if (!sep) return <>{title}</>;
  const idx = title.indexOf(sep);
  const left = title.slice(0, idx + (sep === ": " ? 1 : sep.length));
  const right = title.slice(idx + sep.length);
  return <>{left}{sep === ": " ? " " : ""}<em>{right}</em></>;
}

export default function BlogDetailClient({ blog, notFound }) {
  const router = useRouter();
  const progress = useScrollProgress();

  const heroRef = useReveal();
  const bodyRef = useReveal();
  const relRef = useReveal({ stagger: true, baseDelay: 70 });

  if (notFound || !blog) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: T.body, background: T.paper }}>
        <style>{css}</style>
        <Navbar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
          <div className="seal" style={{ marginBottom: 24 }}>
            <div>
              <div className="seal-text">VOID</div>
              <div className="seal-sub">no record</div>
            </div>
          </div>
          <h1 style={{ fontFamily: T.display, fontSize: "2rem", fontWeight: 600, color: T.ink, marginBottom: 12 }}>Filing Not Found</h1>
          <p style={{ fontFamily: T.mono, fontSize: 13, color: T.muted, marginBottom: 28 }}>No record matches this reference. It may have been withdrawn or relocated.</p>
          <button className="cta-primary" onClick={() => router.push("/blog")}>← Return to Bulletin</button>
        </div>
        <Footer />
      </div>
    );
  }

  const ref = refNumber(blog.slug, blog.date);
  const abbrev = tagAbbrev(blog.tag);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: T.paper, fontFamily: T.body, color: T.slate }}>
      <style>{css}</style>
      <Navbar />

      <div className="progress-rail"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>

      <div className="masthead">
        <span className="masthead-eyebrow">SRC Regulatory Bulletin</span>
        <span className="masthead-ref">REF. {ref}</span>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-img"><Image src={blog.heroImg || blog.img} alt={blog.title} fill style={{ objectFit: "cover" }} unoptimized priority /></div>
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div ref={heroRef} className="revealed reveal-left">
            <div className="docket-line"><span className="live-dot" />{blog.tag} · {blog.date} · {blog.readTime}</div>
            <h1 className="hero-title"><HeroTitle title={blog.title} /></h1>
            <div className="hero-meta">
              <span>✍ {blog.author}</span>
              <span>◆ Filed under {blog.tag}</span>
            </div>
          </div>
          <div className="seal">
            <div>
              <div className="seal-text">{abbrev}</div>
              <div className="seal-sub">verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="layout-wrap">
        <div className="article-layout">
          <div ref={bodyRef} className="reveal revealed article-body">

            {blog.highlights?.length > 0 && (
              <div className="record-card">
                <span className="record-label">Key Findings</span>
                <ul className="checklist">
                  {blog.highlights.map((pt, i) => (
                    <li key={i}><span className="box">✓</span>{pt}</li>
                  ))}
                </ul>
              </div>
            )}

            {blog.sections?.map((section) => (
              <div key={section.id} id={section.id}>
                <h2>{section.heading}</h2>
                {section.content?.map((block, i) => <ContentBlock key={i} block={block} />)}
              </div>
            ))}

            {blog.ctaTitle && (
              <div className="cta-banner">
                <div className="cta-banner-title">{blog.ctaTitle}</div>
                <p>{blog.ctaBody}</p>
                <button onClick={() => router.push("/contact")}>Request Consultation →</button>
              </div>
            )}
          </div>

          <aside className="sidebar" style={{ position: "sticky", top: 60 }}>
            {blog.toc?.length > 0 && (
              <div className="record-card">
                <span className="record-label">Index</span>
                {blog.toc.map(({ id, label }, i) => (
                  <a key={id} href={`#${id}`} className="toc-link"><span>{String(i + 1).padStart(2, "0")}</span>{label}</a>
                ))}
              </div>
            )}

            {blog.meta?.length > 0 && (
              <div className="record-card">
                <span className="record-label">Record Detail</span>
                {blog.meta.map((item) => (
                  <div key={item.label} className="meta-row"><span className="k">{item.label}</span><span className="v">{item.value}</span></div>
                ))}
              </div>
            )}

            {blog.sidebarCta?.title && (
              <div className="record-card" style={{ borderLeftColor: T.seal }}>
                <span className="record-label" style={{ color: T.seal }}>{blog.sidebarCta.title}</span>
                <p style={{ fontFamily: T.body, fontSize: 13, color: T.slate, lineHeight: 1.7, marginBottom: 16 }}>{blog.sidebarCta.body}</p>
                <button className="stamp-btn" onClick={() => router.push("/contact")}>{blog.sidebarCta.btn}</button>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* RELATED */}
      {blog.related?.length > 0 && (
        <section className="related-section">
          <div className="related-head">
            <span className="eyebrow">Cross-Reference</span>
            <h2>Related Filings</h2>
          </div>
          <div ref={relRef} className="related-grid">
            {blog.related.map((article, i) => (
              <div key={i} className={`related-card reveal d${i}`} onClick={() => article.slug && router.push(`/blog/${article.slug}`)}>
                <span className="related-ref">{article.slug ? refNumber(article.slug, article.date) : "PENDING"}</span>
                <h3>{article.title}</h3>
                {article.slug ? <span className="related-read">Read filing →</span> : <span className="related-soon">Coming soon</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="cta-final">
        <div className="cta-final-inner">
          <div>
            <div className="cta-final-eyebrow">Start Today</div>
            <h2>Begin Your Certification Journey with SRC</h2>
            <p>Free consultation. Clear timeline. Transparent pricing.<br />Our experts respond within 2 hours.</p>
          </div>
          <div className="cta-final-actions">
            <button className="cta-primary" onClick={() => router.push("/contact")}>Get Free Consultation</button>
            <a href="tel:+919891229135" className="cta-tel">📞 +91-9891229135</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}