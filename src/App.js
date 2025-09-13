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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browse" element={<AllProducts/>} />
          <Route path="/library" element={<Library/>} />
          <Route path="/wishlist" element={<LikePage/>} />
          <Route path="/item-details" element={<ItemDetails/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/account-settings" element={<AccountSetting/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
