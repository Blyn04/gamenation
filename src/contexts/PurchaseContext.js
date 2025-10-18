import React, { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';
import { sendPurchaseConfirmationEmailSimple } from '../services/emailService';

const PurchaseContext = createContext();

export const usePurchase = () => {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error('usePurchase must be used within a PurchaseProvider');
  }
  return context;
};

export const PurchaseProvider = ({ children }) => {
  const { user } = useAuth();
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const processPurchase = async (cartItems, totalAmount) => {
    if (!user) {
      return { success: false, error: 'User must be logged in to make a purchase' };
    }

    setIsProcessing(true);

    try {
      // Create purchase record
      const purchase = {
        id: Date.now().toString(),
        userId: user.id,
        userName: user.username,
        userEmail: user.email,
        items: cartItems,
        totalAmount: totalAmount,
        purchaseDate: new Date().toISOString(),
        status: 'completed'
      };

      // Add to purchase history
      setPurchaseHistory(prev => [...prev, purchase]);

      // Send confirmation email
      const emailResult = await sendPurchaseConfirmationEmailSimple(
        user.email,
        user.username,
        cartItems,
        totalAmount
      );

      if (emailResult.success) {
        console.log('Purchase completed and email sent:', emailResult);
        return { 
          success: true, 
          message: 'Purchase completed successfully! Confirmation email sent.',
          purchase: purchase
        };
      } else {
        console.warn('Purchase completed but email failed:', emailResult);
        return { 
          success: true, 
          message: 'Purchase completed successfully! (Email notification failed)',
          purchase: purchase
        };
      }
    } catch (error) {
      console.error('Purchase processing failed:', error);
      return { 
        success: false, 
        error: 'Purchase processing failed. Please try again.' 
      };
    } finally {
      setIsProcessing(false);
    }
  };

  const getUserPurchaseHistory = (userId) => {
    return purchaseHistory.filter(purchase => purchase.userId === userId);
  };

  const value = {
    purchaseHistory,
    isProcessing,
    processPurchase,
    getUserPurchaseHistory
  };

  return (
    <PurchaseContext.Provider value={value}>
      {children}
    </PurchaseContext.Provider>
  );
};
