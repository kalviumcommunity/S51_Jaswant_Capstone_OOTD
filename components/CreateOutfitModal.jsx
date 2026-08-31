'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/Context/AppContext';
import { X, Sparkles, Image as ImageIcon, Plus } from 'lucide-react';
import './CreateOutfitModal.css';

export default function CreateOutfitModal() {
  const { isCreateModalOpen, setIsCreateModalOpen, addOutfitPin } = useApp();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('/assets/pic1.jpg');
  const [occasion, setOccasion] = useState('Casual');
  const [colorPalette, setColorPalette] = useState('Monochrome');
  const [topItem, setTopItem] = useState('');
  const [bottomItem, setBottomItem] = useState('');
  const [footwearItem, setFootwearItem] = useState('');
  const [accessoriesItem, setAccessoriesItem] = useState('');
  const [stylingTip, setStylingTip] = useState('');

  if (!isCreateModalOpen) return null;

  const presetImages = [
    '/assets/pic1.jpg',
    '/assets/pic2.jpg',
    '/assets/pic3.jpg',
    '/assets/pic4.jpeg',
    '/assets/pic7.jpeg',
    '/assets/Traditionalimg3.jpg',
    '/assets/office.jpg',
    '/assets/college.jpg'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Please fill out the outfit title and description.');
      return;
    }

    addOutfitPin({
      title,
      description,
      imageUrl: imageUrl || '/assets/pic1.jpg',
      occasion,
      colorPalette,
      items: {
        top: topItem || 'Stylish Topwear',
        bottom: bottomItem || 'Matching Trousers',
        footwear: footwearItem || 'Classic Footwear',
        accessories: accessoriesItem || 'Watch / Sunglasses'
      },
      fitGuide: {
        recommendedBodyTypes: ["All Body Types"],
        recommendedSkinTones: ["All Skin Tones"],
        stylingTip: stylingTip || "Wear with confidence and posture."
      },
      tags: [occasion.replace(/\s+/g, ''), 'OOTD', 'StylePin']
    });

    setIsCreateModalOpen(false);
    alert('🎉 Your OOTD outfit pin has been published!');
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={() => setIsCreateModalOpen(false)}>
      <div className="create-modal-content glass-panel animate-scale-up" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={() => setIsCreateModalOpen(false)}>
          <X size={20} />
        </button>

        <div className="create-modal-header">
          <div className="create-header-icon">
            <Sparkles size={24} />
          </div>
          <h2>Publish New OOTD Pin</h2>
          <p>Share your fashion combination with the OOTD community.</p>
        </div>

        <form onSubmit={handleSubmit} className="create-form">
          <div className="form-row">
            <div className="form-group">
              <label>Outfit Title *</label>
              <input 
                type="text" 
                placeholder="e.g. Linen White Shirt & Navy Chinos"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label>Occasion Category</label>
              <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="Casual">Casual</option>
                <option value="Office">Office</option>
                <option value="Interview">Interview</option>
                <option value="Birthday">Birthday</option>
                <option value="Traditional">Traditional</option>
                <option value="College">College</option>
                <option value="Date Night">Date Night</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Outfit Description & Inspiration *</label>
            <textarea 
              rows={3} 
              placeholder="Describe the aesthetic, fit feel, and when to wear this look..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Image URL (or select from preset gallery)</label>
            <input 
              type="text" 
              placeholder="https://... or /assets/pic1.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <div className="preset-images-strip">
              {presetImages.map((img, i) => (
                <img 
                  key={i} 
                  src={img} 
                  alt="Preset" 
                  className={`preset-thumb ${imageUrl === img ? 'selected' : ''}`}
                  onClick={() => setImageUrl(img)}
                />
              ))}
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>Topwear Piece</label>
              <input 
                type="text" 
                placeholder="e.g. Slim-fit Black Shirt" 
                value={topItem}
                onChange={(e) => setTopItem(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Bottomwear Piece</label>
              <input 
                type="text" 
                placeholder="e.g. Slate Grey Chinos" 
                value={bottomItem}
                onChange={(e) => setBottomItem(e.target.value)}
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>Footwear</label>
              <input 
                type="text" 
                placeholder="e.g. Black Derby Shoes" 
                value={footwearItem}
                onChange={(e) => setFootwearItem(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Accessories</label>
              <input 
                type="text" 
                placeholder="e.g. Leather Watch & Aviators" 
                value={accessoriesItem}
                onChange={(e) => setAccessoriesItem(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Pro Styling Tip</label>
            <input 
              type="text" 
              placeholder="e.g. Roll sleeves up 3/4 and tuck in for smart-casual contrast" 
              value={stylingTip}
              onChange={(e) => setStylingTip(e.target.value)}
            />
          </div>

          <button type="submit" className="publish-pin-btn">
            <Plus size={20} />
            <span>Publish OOTD Pin</span>
          </button>
        </form>
      </div>
    </div>
  );
}
