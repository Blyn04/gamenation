import React, { useState, useEffect } from 'react';
import '../styles/customsStyle/Header.css';
import { UserOutlined, ShoppingCartOutlined, SearchOutlined, MenuOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GN2Logo from '../assets/logo/png/GN2.png';
import { useModal } from '../contexts/ModalContext';
import { useAuth } from '../contexts/AuthContext'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { openLoginModal } = useModal();
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  const handleProfileClick = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      openLoginModal();
    }
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);
    logout();
    navigate('/');
  };

  const handleCancelLogout = () => {
    setIsLogoutModalOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to browse page with search term
      navigate('/browse', { state: { searchTerm: searchTerm.trim() } });
      setSearchTerm("");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.main-nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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
        <form className="search-input" onSubmit={handleSearch}>
          <SearchOutlined className="search-icon" />
          <input 
            className="search-bar" 
            type="text" 
            placeholder="Search games..." 
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>

        {/* Navigation Menu + Icons */}
        <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/browse" className={location.pathname === '/browse' ? 'active' : ''} onClick={closeMenu}>Browse</Link></li>
          <li><Link to="/library" className={location.pathname === '/library' ? 'active' : ''} onClick={closeMenu}>My Library</Link></li>

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
            <button onClick={handleProfileClick} className="profile-btn">
              {isMobile ? (
                <span className="mobile-text">
                  {isAuthenticated ? (user?.username || 'Profile') : 'Login'}
                </span>
              ) : (
                <UserOutlined className="icon" />
              )}
            </button>
          </li>
          {isAuthenticated && (
            <li>
              <button onClick={handleLogoutClick} className="logout-btn">
                {isMobile ? (
                  <span className="mobile-text">Logout</span>
                ) : (
                  <LogoutOutlined className="icon" />
                )}
              </button>
            </li>
          )}
        </ul>

        {/* Menu trigger for mobile */}
        <div className="menu-trigger" onClick={toggleMenu}>
          <MenuOutlined className="burger-icon" />
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="modal-overlay" onClick={handleCancelLogout}>
          <div className="modal-content logout-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Sign Out</h2>
              <button className="close-btn" onClick={handleCancelLogout}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="logout-content">
                <LogoutOutlined className="logout-icon" />
                <h3>Are you sure you want to sign out?</h3>
                <p>You'll need to sign in again to access your account and continue your gaming experience.</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="cancel-btn" onClick={handleCancelLogout}>
                Cancel
              </button>
              <button className="confirm-logout-btn" onClick={handleConfirmLogout}>
                <LogoutOutlined /> Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
