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
    { id: 1, title: "ARMORED CORE™ VI FIRES OF RUBICON™ - Deluxe Edition", image: "armoredcore.png" },
    { id: 2, title: "Harvest Moon: The Winds of Anthos", image: "harvestmoon.png" },
    { id: 3, title: "Persona 5 Tactical Digital Deluxe", image: "p5.png" }
  ];

  const wishlistGames = [
    { id: 1, title: "Dead by Daylight - Gold Edition", image: "dbd.png" },
    { id: 2, title: "Granblue Fantasy: Relink Special Edition", image: "granblue.png" },
    { id: 3, title: "Suicide Squad: Kill the Justice League", image: "suicide.png" }
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
            <h2 className="username">Mikmik</h2>
            <p className="full-name">Berlene Bernabe</p>
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
        <div className="game-list">
          {libraryGames.map((game) => (
            <div key={game.id} className="game-item">
              <div className="game-thumbnail">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/ps5Games/${game.image}`} 
                  alt={game.title}
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/assets/ps5Games/cyberpunk-2077.png`;
                  }}
                />
              </div>
              <div className="game-detailsss">
                <h4 className="game-titles">{game.title}</h4>
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
          <button onClick={handleWishlistShowAll} className="show-all-link">Show All</button>
        </div>
        <div className="game-list">
          {wishlistGames.map((game) => (
            <div key={game.id} className="game-item">
              <div className="game-thumbnail">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/ps5Games/${game.image}`} 
                  alt={game.title}
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/assets/ps5Games/cyberpunk-2077.png`;
                  }}
                />
              </div>
              <div className="game-detailsss">
                <h4 className="game-titles">{game.title}</h4>
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
