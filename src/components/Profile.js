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
      <section className="profile-section">
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
      </section>

      {/* Library Section */}
      <section className="games-section">
        <div className="section-header">
          <h3 className="section-title">Library</h3>
          <a href="#" className="show-all-link">Show All</a>
        </div>
        <div className="game-list">
          {libraryGames.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-thumb">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/ps5Games/${game.image}`} 
                  alt={game.title}
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/assets/ps5Games/cyberpunk-2077.png`;
                  }}
                />
              </div>
              <div className="game-info">
                <h4 className="game-title">{game.title}</h4>
                <p className="game-description">{game.description}</p>
              </div>
              <div className="game-actions">
                <MoreOutlined className="more-icon" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wishlist Section */}
      <section className="games-section">
        <div className="section-header">
          <h3 className="section-title">Wish list</h3>
          <a href="#" className="show-all-link">Show All</a>
        </div>
        <div className="game-list">
          {wishlistGames.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-thumb">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/ps5Games/${game.image}`} 
                  alt={game.title}
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/assets/ps5Games/cyberpunk-2077.png`;
                  }}
                />
              </div>
              <div className="game-info">
                <h4 className="game-title">{game.title}</h4>
                <p className="game-description">{game.description}</p>
              </div>
              <div className="game-actions">
                <MoreOutlined className="more-icon" />
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
