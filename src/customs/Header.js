import React, { useState, useEffect } from 'react';
import '../styles/customsStyle/Header.css';
import { UserOutlined, ShoppingCartOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import GN2Logo from '../assets/logo/png/GN2.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <header className="header-area header-sticky">
      <nav className="main-nav">
        {/* Left: Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-container">
            <img src={GN2Logo} alt="GameNation" className="logo-image" />
            <span className="logo-text">GameNation</span>
          </div>
        </Link>

        {/* Middle: Search bar */}
        <div className="search-input">
          <SearchOutlined className="search-icon" />
          <input className="search-bar" type="text" placeholder="Search games..." />
        </div>

        {/* Navigation Menu + Icons */}
        <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="active" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/browse" onClick={closeMenu}>Browse</Link></li>
          <li><Link to="/library" onClick={closeMenu}>My Library</Link></li>

          {/* Icons/Text - responsive based on screen size */}
          <li>
            <Link to="/cart" onClick={closeMenu}>
              {isMobile ? (
                <span className="mobile-text">Cart</span>
              ) : (
                <ShoppingCartOutlined className="icon" />
              )}
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={closeMenu}>
              {isMobile ? (
                <span className="mobile-text">Profile</span>
              ) : (
                <UserOutlined className="icon" />
              )}
            </Link>
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
