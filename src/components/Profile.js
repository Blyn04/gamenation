import React from "react";
import { SettingOutlined, MoreOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "../styles/componentsStyle/Profile.css";
import Footer from '../customs/Footer';

const Profile = () => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/account-settings');
  };

  const handleLibraryShowAll = () => {
    navigate('/library');
  };

  const handleWishlistShowAll = () => {
    navigate('/wishlist');
  };

  // Dummy data for games
  const libraryGames = [
    { id: 1, title: "Cyberpunk 2077", description: "Open-world action-adventure RPG", image: "cyberpunk-2077.png" },
    { id: 2, title: "Elden Ring", description: "Action role-playing game", image: "er.png" },
    { id: 3, title: "God of War Ragnarök", description: "Action-adventure game", image: "gta-online.png" }
  ];

  const wishlistGames = [
    { id: 1, title: "Final Fantasy XVI", description: "Action role-playing game", image: "ffvr.png" },
    { id: 2, title: "Spider-Man 2", description: "Action-adventure game", image: "sh2.png" },
    { id: 3, title: "Starfield", description: "Space exploration RPG", image: "sf.png" }
  ];

  return (
    <div className="profile-page">
      {/* Profile Section */}
      <div className="profile-card">
        <div className="profile-left">
          <div className="avatar">
            <UserOutlined className="avatar-icon" />
          </div>
          <div className="user-info">
            <h2 className="username">Username</h2>
            <p className="full-name">Full Name</p>
            <button className="settings-btn" onClick={handleSettingsClick}>
              <SettingOutlined /> Settings
            </button>
          </div>
        </div>
        <div className="stats-box">
          <div className="stat-item">
            <span className="stat-label">Games Downloaded</span>
            <span className="stat-value">10</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Vouchers</span>
            <span className="stat-value">09</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Points</span>
            <span className="stat-value">12</span>
          </div>
        </div>
      </div>

      {/* Library Section */}
      <section className="games-section">
        <div className="section-header">
          <h3 className="section-title">Library</h3>
          <button onClick={handleLibraryShowAll} className="show-all-link">Show All</button>
        </div>
        <div className="game-grid">
          {libraryGames.map((game) => (
            <div key={game.id} className="game-card-vertical">
              <div className="game-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/ps5Games/${game.image}`} 
                  alt={game.title}
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/assets/ps5Games/cyberpunk-2077.png`;
                  }}
                />
              </div>
              <div className="game-info-vertical">
                <h4 className="game-title">{game.title}</h4>
                <p className="game-description">{game.description}</p>
                <div className="game-actions-vertical">
                  <MoreOutlined className="more-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wishlist Section */}
      <section className="games-section">
        <div className="section-header">
          <h3 className="section-title">Wish list</h3>
          <button onClick={handleWishlistShowAll} className="show-all-link">Show All</button>
        </div>
        <div className="game-grid">
          {wishlistGames.map((game) => (
            <div key={game.id} className="game-card-vertical">
              <div className="game-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/ps5Games/${game.image}`} 
                  alt={game.title}
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/assets/ps5Games/cyberpunk-2077.png`;
                  }}
                />
              </div>
              <div className="game-info-vertical">
                <h4 className="game-title">{game.title}</h4>
                <p className="game-description">{game.description}</p>
                <div className="game-actions-vertical">
                  <MoreOutlined className="more-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
