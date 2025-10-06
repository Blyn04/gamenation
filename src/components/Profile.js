import React from "react";
import { SettingOutlined, MoreOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "../styles/componentsStyle/Profile.css";
import Footer from '../customs/Footer';

// Import game images
import armoredcore from '../assets/ps5Games/armoredcore.png';
import harvestmoon from '../assets/ps5Games/harvestmoon.png';
import p5 from '../assets/ps5Games/p5.png';
import dbd from '../assets/ps5Games/dbd.png';
import granblue from '../assets/ps5Games/granblue.png';
import suicide from '../assets/ps5Games/suicide.png';

// Create image mapping object
const imageMap = {
  'armoredcore.png': armoredcore,
  'harvestmoon.png': harvestmoon,
  'p5.png': p5,
  'dbd.png': dbd,
  'granblue.png': granblue,
  'suicide.png': suicide
};

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

  // Handle game click to navigate to item details
  const handleGameClick = (game) => {
    // Generate random details for the game (similar to other components)
    const randomPrice = Math.floor(Math.random() * 2000) + 1000; // Price between 1000-3000
    const randomRating = (Math.random() * 2 + 3).toFixed(1); // Rating between 3.0-5.0
    const randomDownloads = Math.floor(Math.random() * 2000000) + 100000; // Downloads between 100k-2M
    const randomSize = Math.floor(Math.random() * 50) + 10; // Size between 10-60GB
    
    const gameData = {
      title: game.title,
      subtitle: "",
      image: game.image,
      price: `₱${randomPrice.toLocaleString()}`,
      rating: randomRating,
      downloads: randomDownloads,
      size: `${randomSize}GB`,
      company: "GameNation Studios",
      release: "2024",
      genre: "Action",
      description: `Experience the ultimate gaming adventure with ${game.title}. This incredible game offers stunning graphics, immersive gameplay, and hours of entertainment. Perfect for gamers of all skill levels, ${game.title} delivers an unforgettable experience that will keep you coming back for more.`
    };
    
    navigate("/item-details", { state: { gameData } });
  };

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
        <div className="game-list">
          <div className="section-header">
            <h3 className="section-title">Library</h3>
            <button onClick={handleLibraryShowAll} className="show-all-link">Show All</button>
          </div>
          {libraryGames.map((game) => (
            <div key={game.id} className="game-item" onClick={() => handleGameClick(game)}>
              <div className="game-thumbnail">
                <img 
                  src={imageMap[game.image]} 
                  alt={game.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px'
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
        <div className="game-list">
          <div className="section-header">
            <h3 className="section-title">Wish list</h3>
            <button onClick={handleWishlistShowAll} className="show-all-link">Show All</button>
          </div>
          {wishlistGames.map((game) => (
            <div key={game.id} className="game-item" onClick={() => handleGameClick(game)}>
              <div className="game-thumbnail">
                <img 
                  src={imageMap[game.image]} 
                  alt={game.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px'
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
