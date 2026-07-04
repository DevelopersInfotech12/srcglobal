'use client';
import { useState } from 'react';

export default function WhatsAppWidget() {
  const [tooltip, setTooltip] = useState(true);
  const phone = '919891229135';
  const msg = encodeURIComponent('Hi SRC Global, I need help with a certification. Can you guide me?');

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
      {tooltip && (
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: '8px', padding: '10px 14px', fontSize: '12px',
          color: 'var(--text-secondary)', boxShadow: 'var(--shadow-md)',
          maxWidth: '200px', lineHeight: 1.5, position: 'relative',
        }}>
          Chat with our experts on WhatsApp
          <button onClick={() => setTooltip(false)} style={{
            position: 'absolute', top: '4px', right: '6px', background: 'none',
            border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '12px',
          }}>✕</button>
        </div>
      )}
      <a
        href={`https://wa.me/${phone}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,.4)', transition: 'transform .2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.659 1.438 5.168L2 22l4.932-1.398A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.174-1.184l-.299-.178-3.1.878.89-3.023-.196-.311A7.944 7.944 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
        </svg>
      </a>
    </div>
  );
}
