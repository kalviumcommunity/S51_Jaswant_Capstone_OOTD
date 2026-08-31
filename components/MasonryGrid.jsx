'use client';

import React from 'react';
import OutfitCard from './OutfitCard';
import { Sparkles, SearchX } from 'lucide-react';
import './MasonryGrid.css';

export default function MasonryGrid({ outfits, title, subtitle }) {
  if (!outfits || outfits.length === 0) {
    return (
      <div className="empty-grid-state animate-fade-in">
        <SearchX size={56} className="empty-icon" />
        <h3>No Outfit Pins Found</h3>
        <p>Try searching for another keyword or selecting a different occasion category!</p>
      </div>
    );
  }

  return (
    <section className="masonry-section">
      {(title || subtitle) && (
        <div className="section-header">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}

      <div className="masonry-grid">
        {outfits.map((outfit) => (
          <OutfitCard key={outfit.id} outfit={outfit} />
        ))}
      </div>
    </section>
  );
}
