'use client';

import React from 'react';

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function Hero({
  title = 'Song4U — custom songs',
  subtitle = 'Turn your story into music.',
  ctaText = 'Start my song',
  ctaHref = '#start',
}: HeroProps) {
  return (
    <section
      style={{
        padding: '64px 24px',
        textAlign: 'center',
        borderRadius: 16,
        border: '1px solid #e2e8f0',
      }}
    >
      <h1 style={{ fontSize: 36, margin: 0 }}>{title}</h1>
      <p style={{ fontSize: 18, color: '#555', margin: '12px 0 24px' }}>
        {subtitle}
      </p>
      <a
        href={ctaHref}
        style={{
          display: 'inline-block',
          padding: '12px 20px',
          borderRadius: 999,
          background: '#0ea5e9',
          color: 'white',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        {ctaText}
      </a>
    </section>
  );
}