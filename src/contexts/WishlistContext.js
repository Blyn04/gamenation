import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('gamenation-wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
        setWishlist([]);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('gamenation-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Add item to wishlist
  const addToWishlist = (gameData) => {
    const gameId = gameData.title; // Use title as unique identifier
    
    // Check if item already exists in wishlist
    const existingItem = wishlist.find(item => item.title === gameData.title);
    
    if (!existingItem) {
      const wishlistItem = {
        id: Date.now(), // Generate unique ID
        title: gameData.title,
        subtitle: gameData.subtitle || "",
        image: gameData.image,
        price: gameData.price,
        rating: gameData.rating,
        downloads: gameData.downloads,
        size: gameData.size,
        company: gameData.company,
        release: gameData.release,
        genre: gameData.genre,
        description: gameData.description,
        isLiked: true,
        addedAt: new Date().toISOString()
      };
      
      setWishlist(prev => [...prev, wishlistItem]);
      return true; // Successfully added
    }
    
    return false; // Already exists
  };

  // Remove item from wishlist
  const removeFromWishlist = (gameId) => {
    setWishlist(prev => prev.filter(item => item.id !== gameId));
  };

  // Check if item is in wishlist
  const isInWishlist = (gameTitle) => {
    return wishlist.some(item => item.title === gameTitle);
  };

  // Get wishlist count
  const getWishlistCount = () => {
    return wishlist.length;
  };

  // Clear entire wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    getWishlistCount,
    clearWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
