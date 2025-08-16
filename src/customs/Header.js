import React from 'react';
import '../styles/customsStyle/Header.css'; 
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

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

      <div className="header-icons">
        <UserOutlined className="icon" />
        <ShoppingCartOutlined className="icon" />
      </div>

      {/* Hamburger menu for mobile */}
      <div className="menu-trigger">
        <span>☰</span>
      </div>
    </header>
  );
};

export default Header;
