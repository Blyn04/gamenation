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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="#" className="logo">🎮 GameNation</a>

              <div className="search-input">
                <input className="search-bar" type="text" placeholder="Search here..." />
              </div>

              {/* Dynamic class to show/hide */}
              <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">Browse</a></li>
                <li><a href="#">My Library</a></li>
                <li className="icon-links">
                  <UserOutlined className="icon" />
                  <ShoppingCartOutlined className="icon" />
                </li>
              </ul>

              <a className="menu-trigger" onClick={toggleMenu}>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
