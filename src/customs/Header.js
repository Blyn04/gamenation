import React, { useState } from 'react';
import '../styles/customsStyle/Header.css';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header-area header-sticky">
      <nav className="main-nav">
        <a href="#" className="logo">🎮 GameNation</a>

        {/* Wrap search and burger in one flex container */}
        <div className="right-side">
          <div className="search-input">
            <input className="search-bar" type="text" placeholder="Search here..." />
          </div>
          
          <div className="menu-trigger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Browse</a></li>
          <li><a href="#">My Library</a></li>
          <li className="mobile-text">Profile</li>
          <li className="mobile-text">Cart</li>
        </ul>

        {/* Desktop profile/cart */}
        <div className="header-icons desktop-only">
          <UserOutlined className="icon" />
          <ShoppingCartOutlined className="icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
