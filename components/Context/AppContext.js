'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_OUTFITS } from '@/lib/mockOutfits';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [outfits, setOutfits] = useState(INITIAL_OUTFITS);
  const [savedOutfits, setSavedOutfits] = useState([]);
  const [likedOutfits, setLikedOutfits] = useState([]);
  const [activeOutfitModal, setActiveOutfitModal] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('All');

  // Load user saved state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ootd_saved_pins');
      const liked = localStorage.getItem('ootd_liked_pins');
      const loggedUser = localStorage.getItem('ootd_user');
      
      if (saved) setSavedOutfits(JSON.parse(saved));
      if (liked) setLikedOutfits(JSON.parse(liked));
      if (loggedUser) setUser(JSON.parse(loggedUser));
    } catch (e) {
      console.error("Failed to parse stored state:", e);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('ootd_saved_pins', JSON.stringify(savedOutfits));
  }, [savedOutfits]);

  useEffect(() => {
    localStorage.setItem('ootd_liked_pins', JSON.stringify(likedOutfits));
  }, [likedOutfits]);

  useEffect(() => {
    if (user) localStorage.setItem('ootd_user', JSON.stringify(user));
    else localStorage.removeItem('ootd_user');
  }, [user]);

  const toggleSave = (outfitId) => {
    setSavedOutfits((prev) => {
      const isSaved = prev.includes(outfitId);
      const updated = isSaved ? prev.filter(id => id !== outfitId) : [...prev, outfitId];
      
      // Update outfit saves count locally
      setOutfits(all => all.map(o => {
        if (o.id === outfitId) {
          return { ...o, savesCount: isSaved ? Math.max(0, o.savesCount - 1) : o.savesCount + 1 };
        }
        return o;
      }));

      return updated;
    });
  };

  const toggleLike = (outfitId) => {
    setLikedOutfits((prev) => {
      const isLiked = prev.includes(outfitId);
      const updated = isLiked ? prev.filter(id => id !== outfitId) : [...prev, outfitId];

      setOutfits(all => all.map(o => {
        if (o.id === outfitId) {
          return { ...o, likesCount: isLiked ? Math.max(0, o.likesCount - 1) : o.likesCount + 1 };
        }
        return o;
      }));

      return updated;
    });
  };

  const addOutfitPin = (newPin) => {
    const created = {
      id: `custom-${Date.now()}`,
      createdAt: new Date().toISOString(),
      likesCount: 1,
      savesCount: 1,
      author: user ? { name: user.name, avatar: user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80', username: `@${user.name.toLowerCase().replace(/\s+/g, '_')}` } : { name: "Guest Stylist", avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80', username: "@guest" },
      ...newPin
    };

    setOutfits(prev => [created, ...prev]);
    setSavedOutfits(prev => [...prev, created.id]);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{
      outfits,
      setOutfits,
      savedOutfits,
      likedOutfits,
      toggleSave,
      toggleLike,
      activeOutfitModal,
      setActiveOutfitModal,
      isCreateModalOpen,
      setIsCreateModalOpen,
      addOutfitPin,
      user,
      setUser,
      logout,
      searchQuery,
      setSearchQuery,
      selectedOccasion,
      setSelectedOccasion
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
