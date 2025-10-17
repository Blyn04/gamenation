import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('gamenation-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        setCart([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('gamenation-cart', JSON.stringify(cart));
  }, [cart]);

  // Helper function to parse price from string
  const parsePrice = (priceString) => {
    if (!priceString) return 0;
    
    if (typeof priceString === 'number') {
      return priceString;
    }
    
    if (typeof priceString === 'string') {
      // Remove currency symbols, commas, and any non-numeric characters except decimal point
      const cleanPrice = priceString.replace(/[₱,]/g, '').replace(/[^\d.]/g, '').trim();
      const parsed = parseFloat(cleanPrice);
      return isNaN(parsed) || parsed < 0 ? 0 : parsed;
    }
    
    return 0;
  };

  // Add item to cart
  const addToCart = (gameData) => {
    const gameId = gameData.title; // Use title as unique identifier
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.title === gameData.title);
    
    if (existingItem) {
      // If item exists, increase quantity
      setCart(prev => prev.map(item => 
        item.title === gameData.title 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // If item doesn't exist, add new item
      const cartItem = {
        id: Date.now(), // Generate unique ID
        title: gameData.title,
        subtitle: gameData.subtitle || "",
        image: gameData.image,
        price: parsePrice(gameData.price), // Convert price to number
        originalPrice: gameData.price, // Keep original price string for display
        rating: gameData.rating,
        downloads: gameData.downloads,
        size: gameData.size,
        company: gameData.company,
        release: gameData.release,
        genre: gameData.genre,
        description: gameData.description,
        quantity: 1,
        addedAt: new Date().toISOString()
      };
      
      setCart(prev => [...prev, cartItem]);
    }
    
    return true; // Successfully added
  };

  // Remove item from cart
  const removeFromCart = (gameId) => {
    setCart(prev => prev.filter(item => item.id !== gameId));
  };

  // Update item quantity
  const updateQuantity = (gameId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(gameId);
    } else {
      setCart(prev => prev.map(item => 
        item.id === gameId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  // Check if item is in cart
  const isInCart = (gameTitle) => {
    return cart.some(item => item.title === gameTitle);
  };

  // Get cart count (total items)
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Get cart total price
  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parsePrice(item.price);
      return total + (price * item.quantity);
    }, 0);
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Get cart item by title
  const getCartItem = (gameTitle) => {
    return cart.find(item => item.title === gameTitle);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    isInCart,
    getCartCount,
    getCartTotal,
    clearCart,
    getCartItem
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
