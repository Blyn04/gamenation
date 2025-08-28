import React, { useState } from 'react';
import '../styles/customsStyle/Header.css';
import { UserOutlined, ShoppingCartOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons';
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
            <Link to="/cart">
              <ShoppingCartOutlined className="icon" />
            </Link>
          </li>
          <li className="desktop-only">
            {/* ✅ Profile icon leads to Profile page */}
            <Link to="/profile">
              <UserOutlined className="icon" />
            </Link>
          </li>

          {/* Mobile fallback text */}
          <li className="mobile-text">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="mobile-text">
            {/* ✅ Profile text leads to Profile page */}
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        {/* Menu trigger for mobile */}
        <div className="menu-trigger" onClick={toggleMenu}>
          <MenuOutlined className="burger-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
