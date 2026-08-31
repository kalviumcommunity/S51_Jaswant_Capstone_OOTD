'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/Context/AppContext';
import MasonryGrid from '@/components/MasonryGrid';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import './quiz.css';

export default function StyleQuizPage() {
  const { outfits } = useApp();
  
  const [occasion, setOccasion] = useState('Office');
  const [skinTone, setSkinTone] = useState('Wheatish');
  const [bodyType, setBodyType] = useState('Athletic');
  const [height, setHeight] = useState("5'7\" - 6'0\"");
  const [quizResults, setQuizResults] = useState(null);

  const occasions = ['Office', 'Interview', 'Birthday', 'Casual', 'Traditional', 'College', 'Date Night'];
  const skinTones = ['Fair', 'Wheatish', 'Dusky', 'Deep'];
  const bodyTypes = ['Athletic', 'Lean', 'Average', 'Muscular'];
  const heights = ["Below 5'7\"", "5'7\" - 6'0\"", "Above 6'0\""];

  const handleMatch = (e) => {
    e.preventDefault();

    // Match algorithm based on user selections
    const matched = outfits.filter(o => {
      const matchesOccasion = o.occasion === occasion;
      const matchesSkin = o.fitGuide?.recommendedSkinTones?.includes(skinTone) || o.fitGuide?.recommendedSkinTones?.includes('All Skin Tones');
      const matchesBody = o.fitGuide?.recommendedBodyTypes?.includes(bodyType) || o.fitGuide?.recommendedBodyTypes?.includes('All Body Types');

      return matchesOccasion || (matchesSkin && matchesBody);
    });

    setQuizResults(matched.length > 0 ? matched : outfits.slice(0, 4));
  };

  return (
    <div className="quiz-container animate-fade-in">
      {!quizResults ? (
        <div className="quiz-card glass-panel">
          <div className="quiz-title-box">
            <div className="quiz-icon">
              <Sparkles size={28} />
            </div>
            <h1>Smart Style Matcher</h1>
            <p>Tell us about your event and personal features to get custom OOTD recommendations.</p>
          </div>

          <form onSubmit={handleMatch}>
            {/* Step 1: Occasion */}
            <div className="quiz-step-section">
              <div className="quiz-step-label">
                <CheckCircle2 size={16} color="#8b5cf6" />
                <span>1. Select Event / Occasion</span>
              </div>
              <div className="option-pills-grid">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    className={`quiz-option-btn ${occasion === occ ? 'selected' : ''}`}
                    onClick={() => setOccasion(occ)}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Skin Tone */}
            <div className="quiz-step-section">
              <div className="quiz-step-label">
                <CheckCircle2 size={16} color="#06b6d4" />
                <span>2. Select Your Skin Tone</span>
              </div>
              <div className="option-pills-grid">
                {skinTones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    className={`quiz-option-btn ${skinTone === tone ? 'selected' : ''}`}
                    onClick={() => setSkinTone(tone)}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Body Type */}
            <div className="quiz-step-section">
              <div className="quiz-step-label">
                <CheckCircle2 size={16} color="#e60023" />
                <span>3. Select Body Build</span>
              </div>
              <div className="option-pills-grid">
                {bodyTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`quiz-option-btn ${bodyType === type ? 'selected' : ''}`}
                    onClick={() => setBodyType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Height */}
            <div className="quiz-step-section">
              <div className="quiz-step-label">
                <CheckCircle2 size={16} color="#a855f7" />
                <span>4. Select Height Range</span>
              </div>
              <div className="option-pills-grid">
                {heights.map((h) => (
                  <button
                    key={h}
                    type="button"
                    className={`quiz-option-btn ${height === h ? 'selected' : ''}`}
                    onClick={() => setHeight(h)}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="quiz-submit-btn">
              <span>Find My Perfect OOTD</span>
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)' }}>Your Personalized OOTD Matches</h2>
              <p style={{ color: 'var(--text-muted)' }}>Curated for {occasion} | {skinTone} skin tone | {bodyType} build</p>
            </div>

            <button 
              onClick={() => setQuizResults(null)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', color: 'var(--text-main)', fontWeight: 600 }}
            >
              <RotateCcw size={16} />
              <span>Retake Quiz</span>
            </button>
          </div>

          <MasonryGrid outfits={quizResults} />
        </div>
      )}
    </div>
  );
}
