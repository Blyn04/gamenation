import React from 'react';
import '../styles/customsStyle/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🎮 GameNation</div>

      <input className="search-bar" type="text" placeholder="Search Here..." />

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Browse</a>
        <a href="#">My Library</a>
      </nav>

      <div className="user-icon">👤</div>

      {/* Hamburger menu for mobile */}
      <div className="menu-trigger">
        <span>☰</span>
      </div>
    </header>
  );
};

export default Header;
