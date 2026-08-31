'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Grid, Sliders, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import './about.css';

export default function AboutPage() {
  return (
    <div className="about-page-container animate-fade-in">
      <section className="about-hero">
        <h1 className="hero-title">Redefining Men's Fashion Inspiration</h1>
        <p>
          OOTD (Outfit Of The Day) is a Pinterest-style outfit recommendation platform engineered exclusively to simplify men's sartorial choices for every event, body fit, and complexion.
        </p>
      </section>

      <div className="feature-grid-3">
        <div className="feature-card glass-panel">
          <div className="feature-card-icon">
            <Grid size={24} />
          </div>
          <h3>Pinterest Masonry Board</h3>
          <p>
            Browse high-resolution outfit pins with clothing piece breakdowns (*Top, Bottom, Shoes, Accessories*) and save your favorite looks instantly to your personal wardrobe.
          </p>
        </div>

        <div className="feature-card glass-panel">
          <div className="feature-card-icon" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' }}>
            <Sliders size={24} />
          </div>
          <h3>Smart Style Matcher</h3>
          <p>
            Filter outfits based on your specific event (*Office, Interview, Birthday, Traditional, Date Night*), skin tone, and body build for maximum sartorial confidence.
          </p>
        </div>

        <div className="feature-card glass-panel">
          <div className="feature-card-icon" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}>
            <ShieldCheck size={24} />
          </div>
          <h3>Itemized Outfit Breakdown</h3>
          <p>
            Never wonder how an outfit comes together again. Every OOTD pin breaks down each individual clothing garment alongside pro styling advice.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/explore" className="hero-primary-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--pinterest-red)', color: 'white', fontWeight: 700 }}>
          <span>Start Exploring Outfits</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
