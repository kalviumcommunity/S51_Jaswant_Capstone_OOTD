'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/components/Context/AppContext';
import { Search, Plus, Bookmark, Sparkles, User, LogOut, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const { 
    searchQuery, 
    setSearchQuery, 
    setIsCreateModalOpen, 
    savedOutfits, 
    user, 
    logout 
  } = useApp();

  const occasions = ['All', 'Birthday', 'Office', 'Interview', 'Casual', 'Traditional', 'College', 'Date Night'];

  return (
    <header className="navbar-header glass-panel">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link href="/" className="navbar-brand">
          <div className="brand-icon">
            <Sparkles size={20} />
          </div>
          <span className="brand-text">OOTD</span>
        </Link>

        {/* Primary Navigation Links */}
        <nav className="navbar-links">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/explore" className={`nav-link ${pathname === '/explore' ? 'active' : ''}`}>
            Explore
          </Link>
          <Link href="/style-quiz" className={`nav-link ${pathname === '/style-quiz' ? 'active' : ''}`}>
            <span className="quiz-badge">Quiz</span> Style Matcher
          </Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
        </nav>

        {/* Pinterest Live Search Bar */}
        <div className="search-bar-container">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search outfits (e.g. Black shirt, Navy suit, Casual summer, Linen)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
              <X size={16} />
            </button>
          )}
        </div>

        {/* User & Actions */}
        <div className="navbar-actions">
          {/* Wardrobe Quick Button */}
          <Link href="/wardrobe" className={`action-btn wardrobe-btn ${pathname === '/wardrobe' ? 'active' : ''}`}>
            <Bookmark size={18} />
            <span className="wardrobe-count-badge">{savedOutfits.length}</span>
            <span className="action-text">Wardrobe</span>
          </Link>

          {/* Create Pin Button */}
          <button 
            className="create-pin-btn" 
            onClick={() => setIsCreateModalOpen(true)}
            title="Create OOTD Pin"
          >
            <Plus size={18} />
            <span>Create</span>
          </button>

          {/* Auth Button / User Profile */}
          {user ? (
            <div className="user-profile-menu">
              <img src={user.avatar || '/assets/logo.png'} alt={user.name} className="user-avatar" />
              <button onClick={logout} className="logout-btn" title="Logout">
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <Link href="/login" className="login-btn">
              <User size={18} />
              <span>Log in</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
