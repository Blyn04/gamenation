import React, { useState } from 'react';
import '../styles/customsStyle/Header.css';
import { UserOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header-area header-sticky">
      <nav className="main-nav">
        {/* Left: Logo */}
        <Link to="/" className="logo">
          <div className="logo-container">
            <div className="logo-square"></div>
            <span className="logo-text">GameStation</span>
          </div>
        </Link>

        {/* Middle: Search bar */}
        <div className="search-input">
          <SearchOutlined className="search-icon" />
          <input className="search-bar" type="text" placeholder="Search games..." />
        </div>

        {/* Navigation Menu + Icons */}
        <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/browse">Browse</Link></li>
          <li><Link to="/library">My Library</Link></li>

          {/* Desktop icons inside nav */}
          <li className="desktop-only">
            <ShoppingCartOutlined className="icon" />
          </li>
          <li className="desktop-only">
            {/* ✅ Profile icon leads to /profile */}
            <Link to="/profile">
              <UserOutlined className="icon" />
            </Link>
          </li>

          {/* Mobile fallback text */}
          <li className="mobile-text">Cart</li>
          <li className="mobile-text">
            {/* ✅ Profile text leads to /profile */}
            <Link to="/profile">Profile</Link>
          </li>
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
