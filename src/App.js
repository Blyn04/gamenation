import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './customs/Header';
import HomePage from './components/HomePage';
import Profile from './components/Profile'; 
import './App.css';
import AllProducts from './components/AllProducts';
import ItemDetails from './components/ItemDetails';
import CartPage from './components/CartPage';
import AccountSetting from './components/AccountSetting';
import Library from './components/Library';
import LikePage from './components/LikePage';
import ScrollToTop from './components/ScrollToTop';
import LoginModal from './customs/LoginModal';
import ProtectedRoute from './components/ProtectedRoute';
import { WishlistProvider } from './contexts/WishlistContext';
import { CartProvider } from './contexts/CartContext';
import { ModalProvider, useModal } from './contexts/ModalContext';
import { AuthProvider } from './contexts/AuthContext';

const AppContent = () => {
  const { isLoginModalOpen, closeLoginModal } = useModal();
  
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/browse" element={<AllProducts/>} />
          <Route path="/library" element={<Library/>} />
          <Route path="/wishlist" element={<LikePage/>} />
          <Route path="/item-details" element={<ItemDetails/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/account-settings" element={
            <ProtectedRoute>
              <AccountSetting />
            </ProtectedRoute>
          } />
        </Routes>
        
        {/* Login Modal - rendered at root level */}
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={closeLoginModal} 
        />
      </div>
    </Router>
  );
};

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <AuthProvider>
          <ModalProvider>
            <AppContent />
          </ModalProvider>
        </AuthProvider>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
