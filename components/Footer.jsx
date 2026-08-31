'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="app-footer glass-panel">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Sparkles size={18} />
            <span>OOTD</span>
          </div>
          <p className="footer-tagline">
            Your personal style advisor & Pinterest-inspired wardrobe board for men's fashion.
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>Explore</h4>
            <Link href="/explore">Outfit Feed</Link>
            <Link href="/style-quiz">Style Matcher</Link>
            <Link href="/wardrobe">Saved Pins</Link>
          </div>

          <div className="footer-col">
            <h4>Occasions</h4>
            <Link href="/explore?occasion=Office">Office & Corporate</Link>
            <Link href="/explore?occasion=Interview">Interview Suit</Link>
            <Link href="/explore?occasion=Birthday">Birthday Party</Link>
            <Link href="/explore?occasion=Traditional">Traditional Ethnic</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About OOTD</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 OOTD Capstone. Designed with <Heart size={14} fill="#ef4444" color="#ef4444" className="heart-icon" /> for fashion lovers.</p>
      </div>
    </footer>
  );
}
