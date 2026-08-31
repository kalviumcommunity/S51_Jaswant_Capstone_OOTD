'use client';

import React from 'react';
import { useApp } from '@/components/Context/AppContext';
import { X, Heart, Bookmark, Share2, Sparkles, Check, Tag, ShieldCheck } from 'lucide-react';
import './OutfitDetailModal.css';

export default function OutfitDetailModal() {
  const { 
    activeOutfitModal, 
    setActiveOutfitModal, 
    savedOutfits, 
    likedOutfits, 
    toggleSave, 
    toggleLike 
  } = useApp();

  if (!activeOutfitModal) return null;

  const outfit = activeOutfitModal;
  const isSaved = savedOutfits.includes(outfit.id);
  const isLiked = likedOutfits.includes(outfit.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: outfit.title,
        text: `OOTD Outfit Suggestion: ${outfit.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={() => setActiveOutfitModal(null)}>
      <div className="modal-content glass-panel animate-scale-up" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={() => setActiveOutfitModal(null)}>
          <X size={20} />
        </button>

        <div className="modal-body-grid">
          {/* Left: Large High-Res Outfit Image */}
          <div className="modal-image-column">
            <img src={outfit.imageUrl} alt={outfit.title} className="modal-outfit-img" />
            <div className="image-occasion-tag">
              <span>{outfit.occasion} Look</span>
            </div>
          </div>

          {/* Right: Outfit Breakdown & Fit Specs */}
          <div className="modal-details-column">
            {/* Author & Action Controls Bar */}
            <div className="modal-top-bar">
              <div className="author-badge">
                <img src={outfit.author.avatar} alt={outfit.author.name} className="modal-author-avatar" />
                <div>
                  <h4 className="modal-author-name">{outfit.author.name}</h4>
                  <span className="modal-author-user">{outfit.author.username}</span>
                </div>
              </div>

              <div className="modal-actions">
                <button 
                  className={`modal-like-btn ${isLiked ? 'liked' : ''}`}
                  onClick={() => toggleLike(outfit.id)}
                >
                  <Heart size={18} fill={isLiked ? '#ef4444' : 'none'} />
                  <span>{outfit.likesCount}</span>
                </button>

                <button className="modal-share-btn" onClick={handleShare}>
                  <Share2 size={18} />
                </button>

                <button 
                  className={`modal-save-btn ${isSaved ? 'saved' : ''}`}
                  onClick={() => toggleSave(outfit.id)}
                >
                  <Bookmark size={18} />
                  <span>{isSaved ? 'Saved to Wardrobe' : 'Save Pin'}</span>
                </button>
              </div>
            </div>

            {/* Title & Description */}
            <h1 className="modal-title">{outfit.title}</h1>
            <p className="modal-description">{outfit.description}</p>

            {/* Clothing Pieces Breakdown */}
            {outfit.items && (
              <div className="pieces-breakdown-card">
                <div className="breakdown-header">
                  <Sparkles size={18} className="breakdown-icon" />
                  <h3>Outfit Pieces Breakdown</h3>
                </div>

                <div className="pieces-list">
                  <div className="piece-item">
                    <span className="piece-label">Topwear</span>
                    <span className="piece-value">{outfit.items.top}</span>
                  </div>
                  <div className="piece-item">
                    <span className="piece-label">Bottomwear</span>
                    <span className="piece-value">{outfit.items.bottom}</span>
                  </div>
                  <div className="piece-item">
                    <span className="piece-label">Footwear</span>
                    <span className="piece-value">{outfit.items.footwear}</span>
                  </div>
                  <div className="piece-item">
                    <span className="piece-label">Accessories</span>
                    <span className="piece-value">{outfit.items.accessories}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Styling Tip & Fit Matcher */}
            {outfit.fitGuide && (
              <div className="fit-guide-container">
                {outfit.fitGuide.stylingTip && (
                  <div className="styling-tip-box">
                    <ShieldCheck size={18} className="tip-icon" />
                    <div>
                      <strong>Pro Styling Tip:</strong> {outfit.fitGuide.stylingTip}
                    </div>
                  </div>
                )}

                <div className="compatibility-tags">
                  {outfit.fitGuide.recommendedBodyTypes && (
                    <div className="tag-group">
                      <span className="tag-group-label">Body Fit:</span>
                      {outfit.fitGuide.recommendedBodyTypes.map((type, idx) => (
                        <span key={idx} className="spec-tag">{type}</span>
                      ))}
                    </div>
                  )}

                  {outfit.fitGuide.recommendedSkinTones && (
                    <div className="tag-group">
                      <span className="tag-group-label">Skin Tone Match:</span>
                      {outfit.fitGuide.recommendedSkinTones.map((tone, idx) => (
                        <span key={idx} className="spec-tag tone-tag">{tone}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tags */}
            {outfit.tags && (
              <div className="modal-hashtags">
                {outfit.tags.map((tag, i) => (
                  <span key={i} className="hashtag">#{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
