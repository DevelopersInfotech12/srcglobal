export const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

// All fetches go through these — never raw fetch() in components

export async function fetchServices(params = {}) {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v != null && v !== '') qs.set(k, v);
  });
  const res = await fetch(`${API}/services?${qs}`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error('Failed to fetch services');
  return res.json();
}

export async function fetchBlogPosts(params = {}) {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v != null && v !== '') qs.set(k, v);
  });
  const res = await fetch(`${API}/blogs?${qs}`, { next: { revalidate: 1800 } });
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
}

export async function fetchBlogBySlug(slug) {
  const res = await fetch(`${API}/blogs/${slug}`, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  return res.json();
}

export async function submitContact(data) {
  const res = await fetch(`${API}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json().catch(() => null);
  if (!res.ok) throw new Error(json?.message || 'Contact submission failed');
  return json;
}

// Normalize blog from backend shape → frontend shape
export function normaliseBlog(b) {
  return {
    id: b._id,
    slug: b.slug,
    title: b.title,
    excerpt: b.excerpt,
    tag: b.category,
    date: new Date(b.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }),
    read: b.readTime ? `${b.readTime} min` : '5 min',
    img: b.coverImage || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    href: `/blog/${b.slug}`,
  };
}
