'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useApp } from '@/components/Context/AppContext';
import MasonryGrid from '@/components/MasonryGrid';
import { Sparkles, ArrowRight, Plus, Loader2 } from 'lucide-react';
import './home.css';

export default function HomePage() {
  const { 
    outfits: initialOutfits, 
    searchQuery, 
    selectedOccasion, 
    setSelectedOccasion, 
    setIsCreateModalOpen 
  } = useApp();

  const [liveOutfits, setLiveOutfits] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = ['All', 'Birthday', 'Office', 'Interview', 'Casual', 'Traditional', 'College', 'Date Night'];

  // Fetch live Unsplash outfits whenever selectedOccasion or searchQuery changes!
  useEffect(() => {
    let isMounted = true;
    const fetchLivePins = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedOccasion && selectedOccasion !== 'All') {
          params.append('occasion', selectedOccasion);
        }
        if (searchQuery && searchQuery.trim() !== '') {
          params.append('q', searchQuery);
        }

        const res = await fetch(`/api/outfits?${params.toString()}`);
        const result = await res.json();

        if (isMounted) {
          if (result.success && result.data && result.data.length > 0) {
            setLiveOutfits(result.data);
          } else {
            setLiveOutfits(initialOutfits);
          }
        }
      } catch (err) {
        console.error("Error fetching live Unsplash pins:", err);
        if (isMounted) setLiveOutfits(initialOutfits);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchLivePins();
    }, 300); // 300ms debounce for search input

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [selectedOccasion, searchQuery]);

  const displayedOutfits = liveOutfits.length > 0 ? liveOutfits : initialOutfits;

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-banner animate-fade-in">
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>OOTD Style Platform</span>
        </div>

        <h1 className="hero-title">
          Discover Your Ideal Outfit Of The Day
        </h1>

        <p className="hero-description">
          Explore dynamic, live fashion outfit pins fetched in real-time. Filter by occasion, body fit, or search custom fashion queries.
        </p>

        <div className="hero-actions">
          <Link href="/explore" className="hero-primary-btn">
            <span>Browse Pin Board</span>
            <ArrowRight size={18} />
          </Link>

          <Link href="/style-quiz" className="hero-secondary-btn">
            <Sparkles size={18} color="#8b5cf6" />
            <span>Interactive Style Matcher</span>
          </Link>

          <button 
            className="hero-secondary-btn"
            onClick={() => setIsCreateModalOpen(true)}
          >
            <Plus size={18} color="#e60023" />
            <span>Publish Pin</span>
          </button>
        </div>
      </section>

      {/* Occasion Filter Strip */}
      <div className="category-filter-strip">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-badge ${selectedOccasion === cat ? 'active' : ''}`}
            onClick={() => setSelectedOccasion(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading Indicator */}
      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
          <Loader2 size={36} className="animate-spin" style={{ animation: 'spin 1s linear infinite', color: 'var(--pinterest-red)', marginBottom: '12px' }} />
          <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>
            Fetching fresh {selectedOccasion !== 'All' ? selectedOccasion : ''} outfit pins from Unsplash API...
          </p>
          <style jsx>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : (
        <MasonryGrid 
          outfits={displayedOutfits} 
          title={selectedOccasion === 'All' && !searchQuery ? "Live Trending Outfit Pins" : searchQuery ? `Search Results for "${searchQuery}"` : `${selectedOccasion} Outfit Suggestions`}
          subtitle={`Showing ${displayedOutfits.length} live Unsplash fashion recommendations`}
        />
      )}
    </div>
  );
}
