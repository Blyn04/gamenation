import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/componentsStyle/ItemDetails.css";
import Footer from "../customs/Footer";

const ItemDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get game data from navigation state, or use default data
  const gameData = location.state?.gameData || {
    title: "Monster Hunter Wilds",
    subtitle: "",
    image: "mhw.png",
    price: "₱2,500",
    rating: "4.8",
    downloads: 1300000,
    size: "30GB",
    company: "Capcom U.S.A., Inc.",
    release: "2/20/2025",
    genre: "Action",
    description: "Embark on an epic journey through the vast and untamed wilderness of Monster Hunter Wilds. As a skilled hunter, you'll face off against colossal creatures in breathtaking landscapes that stretch as far as the eye can see. Master the art of the hunt with an arsenal of weapons and armor, each crafted from the very beasts you've conquered."
  };
  return (
    <div className="item-details">
      {/* Hero Section with Game Banner */}
      <div className="hero-section">
        <div className="hero-image">
          <img src={`/src/assets/ps5Games/${gameData.image}`} alt={gameData.title} />
        </div>
        <div className="hero-overlay">
          <h1 className="game-title">{gameData.title}</h1>
          {gameData.subtitle && <p className="game-subtitle">{gameData.subtitle}</p>}
          <p className="game-price">{gameData.price}</p>
          <div className="hero-actions">
            <button className="buy-btn">BUY</button>
            <button className="wishlist-btn">♡</button>
          </div>
        </div>
      </div>

      {/* Game Details Section */}
      <div className="game-details">
        <div className="game-metadata">
          <div className="metadata-left">
            <p>Company Name: {gameData.company}</p>
            <p>Release: {gameData.release}</p>
            <p>Genre: {gameData.genre}</p>
          </div>
          <div className="metadata-right">
            <div className="stat-card">
              <span className="stat-icon">⭐</span>
              <span className="stat-text">{gameData.rating}</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">⬇</span>
              <span className="stat-text">{(gameData.downloads / 1000000).toFixed(1)}M</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📄</span>
              <span className="stat-text">{gameData.size}</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🎮</span>
              <span className="stat-text">{gameData.price}</span>
            </div>
          </div>
        </div>

        <div className="game-description">
          <p>
            {gameData.description}
          </p>
          <p>
            Experience dynamic weather systems that affect both you and your prey, creating ever-changing 
            scenarios. Team up with fellow players in seamless multiplayer co-op or venture 
            alone into the adventure. Every moment tells a story, every victory brings new possibilities, 
            and every challenge you encounter is a testament to the incredible gaming experience.
          </p>
          <p>
            With cutting-edge graphics and immersive gameplay mechanics, {gameData.title} delivers 
            the ultimate gaming experience. Discover hidden secrets, forge powerful alliances, and 
            become the legendary player you were destined to be in this masterpiece.
          </p>
          <button className="show-more-btn">Show More</button>
        </div>
      </div>

      {/* Discover More Games Section */}
      <div className="discover-section">
        <h2 className="discover-title">DISCOVER MORE GAMES</h2>
        <div className="games-grid">
          <div className="game-item">
            <img src="/src/assets/ps5Games/ffvr.png" alt="Final Fantasy VII Rebirth" />
            <p>FINAL FANTASY VII REBIRTH</p>
          </div>
          <div className="game-item">
            <img src="/src/assets/ps5Games/octapath0.png" alt="Octopath Traveler II" />
            <p>OCTOPATH TRAVELER II</p>
          </div>
          <div className="game-item">
            <img src="/src/assets/ps5Games/atelierryza.png" alt="Atelier Ryza" />
            <p>Atelier Ryza: The alchemist of Mimio Key & the enchanted Land</p>
          </div>
          <div className="game-item">
            <img src="/src/assets/ps5Games/cyberpunk-2077.png" alt="Cyberpunk 2077" />
            <p>CYBERPUNK 2077</p>
          </div>
          <div className="game-item">
            <img src="/src/assets/ps5Games/er.png" alt="Elden Ring" />
            <p>ELDEN RING</p>
          </div>
          <div className="game-item">
            <img src="/src/assets/ps5Games/tekken8.png" alt="Tekken 8" />
            <p>TEKKEN 8</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ItemDetails;
