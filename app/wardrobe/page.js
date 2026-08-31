'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/Context/AppContext';
import MasonryGrid from '@/components/MasonryGrid';
import { Bookmark, Heart, Plus, Sparkles, User } from 'lucide-react';
import './wardrobe.css';

export default function WardrobePage() {
  const { outfits, savedOutfits, likedOutfits, user, setIsCreateModalOpen } = useApp();
  const [activeTab, setActiveTab] = useState('saved');

  const savedPins = outfits.filter(o => savedOutfits.includes(o.id));
  const likedPins = outfits.filter(o => likedOutfits.includes(o.id));
  const userCreatedPins = outfits.filter(o => o.id.startsWith('custom-'));

  const getDisplayedOutfits = () => {
    if (activeTab === 'saved') return savedPins;
    if (activeTab === 'liked') return likedPins;
    return userCreatedPins;
  };

  return (
    <div className="wardrobe-container animate-fade-in">
      {/* Profile Banner */}
      <div className="wardrobe-profile-card glass-panel">
        <img 
          src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'} 
          alt="User Profile" 
          className="profile-avatar-lg" 
        />
        <div className="profile-info">
          <h1>{user ? user.name : 'Personal Wardrobe Board'}</h1>
          <p>{user ? `@${user.name.toLowerCase().replace(/\s+/g, '_')}` : 'Saved outfit pins & style inspirations'}</p>
        </div>

        <button 
          onClick={() => setIsCreateModalOpen(true)}
          style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--pinterest-red)', color: 'white', fontWeight: 700, fontSize: '0.92rem' }}
        >
          <Plus size={18} />
          <span>New Pin</span>
        </button>
      </div>

      {/* Wardrobe Navigation Tabs */}
      <div className="wardrobe-tabs">
        <button 
          className={`wardrobe-tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          <Bookmark size={16} />
          <span>Saved Pins ({savedPins.length})</span>
        </button>

        <button 
          className={`wardrobe-tab-btn ${activeTab === 'liked' ? 'active' : ''}`}
          onClick={() => setActiveTab('liked')}
        >
          <Heart size={16} />
          <span>Liked Outfits ({likedPins.length})</span>
        </button>

        <button 
          className={`wardrobe-tab-btn ${activeTab === 'created' ? 'active' : ''}`}
          onClick={() => setActiveTab('created')}
        >
          <Sparkles size={16} />
          <span>My Created Pins ({userCreatedPins.length})</span>
        </button>
      </div>

      {/* Grid Display */}
      <MasonryGrid outfits={getDisplayedOutfits()} />
    </div>
  );
}
