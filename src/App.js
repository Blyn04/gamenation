import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './customs/Header';
import HomePage from './components/HomePage';
import Profile from './components/Profile'; 
import './App.css';
import AllProducts from './components/AllProducts';
import ItemDetails from './components/ItemDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browse" element={<AllProducts/>} />
          <Route path="/item-details" element={<ItemDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
