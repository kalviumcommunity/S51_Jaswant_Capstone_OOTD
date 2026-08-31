'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/components/Context/AppContext';
import MasonryGrid from '@/components/MasonryGrid';
import { Sparkles, RefreshCw, Loader2 } from 'lucide-react';
import '@/app/home.css';

export default function ExplorePage() {
  const { outfits: initialOutfits, searchQuery, setSearchQuery } = useApp();
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [selectedOccasion, setSelectedOccasion] = useState('All');
  
  const [liveOutfits, setLiveOutfits] = useState([]);
  const [loading, setLoading] = useState(false);

  const seasons = ['All', 'All Season', 'Summer', 'Autumn / Winter', 'Spring / Summer', 'Festive'];
  const occasions = ['All', 'Birthday', 'Office', 'Interview', 'Casual', 'Traditional', 'College', 'Date Night'];

  useEffect(() => {
    let isMounted = true;

    const fetchExplorePins = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedOccasion && selectedOccasion !== 'All') {
          params.append('occasion', selectedOccasion);
        }
        if (searchQuery && searchQuery.trim() !== '') {
          params.append('q', searchQuery);
        } else if (selectedSeason && selectedSeason !== 'All') {
          params.append('q', `mens ${selectedSeason} fashion`);
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
        console.error("Error fetching explore pins:", err);
        if (isMounted) setLiveOutfits(initialOutfits);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchExplorePins();
    }, 300);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [selectedOccasion, selectedSeason, searchQuery]);

  const resetFilters = () => {
    setSelectedSeason('All');
    setSelectedOccasion('All');
    setSearchQuery('');
  };

  const displayedOutfits = liveOutfits.length > 0 ? liveOutfits : initialOutfits;

  return (
    <div className="explore-page-container" style={{ padding: '30px 24px' }}>
      <div className="explore-header" style={{ maxWidth: '1600px', margin: '0 auto 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)' }}>Explore Live OOTD Pins</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Real-time fashion pins fetched dynamically via Unsplash API based on your selected filters.
            </p>
          </div>

          <button 
            onClick={resetFilters}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              padding: '8px 16px', 
              borderRadius: 'var(--radius-pill)', 
              backgroundColor: 'var(--bg-surface)', 
              border: '1px solid var(--border-subtle)', 
              color: 'var(--text-muted)', 
              fontSize: '0.88rem', 
              fontWeight: 600 
            }}
          >
            <RefreshCw size={14} />
            <span>Reset Filters</span>
          </button>
        </div>

        {/* Multi-filter Bar */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>Occasion:</span>
            <select 
              value={selectedOccasion} 
              onChange={(e) => setSelectedOccasion(e.target.value)}
              style={{ padding: '8px 14px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--bg-surface)', color: 'white', border: '1px solid var(--border-subtle)', fontWeight: 600 }}
            >
              {occasions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>Season:</span>
            <select 
              value={selectedSeason} 
              onChange={(e) => setSelectedSeason(e.target.value)}
              style={{ padding: '8px 14px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--bg-surface)', color: 'white', border: '1px solid var(--border-subtle)', fontWeight: 600 }}
            >
              {seasons.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
          <Loader2 size={36} style={{ animation: 'spin 1s linear infinite', color: 'var(--pinterest-red)', marginBottom: '12px' }} />
          <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>Fetching live fashion pins from Unsplash...</p>
          <style jsx>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : (
        <MasonryGrid outfits={displayedOutfits} />
      )}
    </div>
  );
}
