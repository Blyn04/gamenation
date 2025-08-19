import React, { useState } from 'react';
import '../styles/customsStyle/Header.css';
import { UserOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header-area header-sticky">
      <nav className="main-nav">
        {/* Left: Logo */}
        <a href="#" className="logo">🎮 GameNation</a>

        {/* Middle: Search bar */}
        <div className="search-input">
          <SearchOutlined className="search-icon" />
          <input className="search-bar" type="text" placeholder="Search here..." />
        </div>

        {/* Navigation Menu + Icons */}
        <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Browse</a></li>
          <li><a href="#">My Library</a></li>

          {/* Desktop icons inside nav */}
          <li className="desktop-only">
            <ShoppingCartOutlined className="icon" />
          </li>
          <li className="desktop-only">
            <UserOutlined className="icon" />
          </li>

          {/* Mobile fallback text */}
          <li className="mobile-text">Cart</li>
          <li className="mobile-text">Profile</li>
        </ul>

        {/* Burger for mobile */}
        <div className="menu-trigger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
