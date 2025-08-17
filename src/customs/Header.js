import React, { useState } from 'react';
import '../styles/customsStyle/Header.css';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-area header-sticky">
      <nav className="main-nav">
        {/* LOGO */}
        <a href="#" className="logo">🎮 GameNation</a>

        {/* Search Input */}
        <div className="search-input">
          <input className="search-bar" type="text" placeholder="Search here..." />
        </div>

        {/* Nav Items */}
        <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Browse</a></li>
          <li><a href="#">My Library</a></li>
        </ul>

        {/* Icons all the time */}
        <div className="header-icons">
          <UserOutlined className="icon" />
          <ShoppingCartOutlined className="icon" />
        </div>

        {/* Menu Trigger (mobile button) */}
        <a className="menu-trigger" onClick={toggleMenu}>
          <span>Menu</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
