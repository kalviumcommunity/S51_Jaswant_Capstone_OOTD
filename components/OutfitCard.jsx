'use client';

import React from 'react';
import { useApp } from '@/components/Context/AppContext';
import { Heart, Bookmark, Share2, Sparkles, ExternalLink } from 'lucide-react';
import './OutfitCard.css';

export default function OutfitCard({ outfit }) {
  const { 
    savedOutfits, 
    likedOutfits, 
    toggleSave, 
    toggleLike, 
    setActiveOutfitModal 
  } = useApp();

  const isSaved = savedOutfits.includes(outfit.id);
  const isLiked = likedOutfits.includes(outfit.id);

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: outfit.title,
        text: `Check out this OOTD look: ${outfit.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Outfit link copied to clipboard!');
    }
  };

  return (
    <div className="outfit-card masonry-item animate-fade-in" onClick={() => setActiveOutfitModal(outfit)}>
      <div className="card-image-wrapper">
        <img 
          src={outfit.imageUrl} 
          alt={outfit.title} 
          className="card-image"
          loading="lazy"
        />

        {/* Hover Overlay Actions */}
        <div className="card-overlay">
          {/* Top Right Save Button */}
          <div className="overlay-top">
            <button 
              className={`pin-save-btn ${isSaved ? 'saved' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleSave(outfit.id);
              }}
            >
              <Bookmark size={16} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>

          {/* Bottom Bar Controls */}
          <div className="overlay-bottom">
            <div className="overlay-left">
              <span className="occasion-pill">{outfit.occasion}</span>
            </div>

            <div className="overlay-right">
              <button 
                className={`icon-action-btn ${isLiked ? 'liked' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(outfit.id);
                }}
                title="Like look"
              >
                <Heart size={16} fill={isLiked ? '#ef4444' : 'none'} />
                <span>{outfit.likesCount}</span>
              </button>

              <button 
                className="icon-action-btn"
                onClick={handleShare}
                title="Share look"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Info Details */}
      <div className="card-details">
        <h3 className="card-title">{outfit.title}</h3>
        
        <div className="card-meta">
          <div className="author-info">
            <img src={outfit.author.avatar} alt={outfit.author.name} className="author-avatar" />
            <span className="author-name">{outfit.author.name}</span>
          </div>

          {outfit.items?.top && (
            <div className="outfit-quick-piece" title={outfit.items.top}>
              <Sparkles size={12} />
              <span>{outfit.colorPalette || 'Stylish Outfit'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
