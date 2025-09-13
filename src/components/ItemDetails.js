import React from "react";
import "../styles/componentsStyle/ItemDetails.css";
import Footer from "../customs/Footer";

const ItemDetails = () => {
  return (
    <div className="item-details">
      {/* Hero Section with Game Banner */}
      <div className="hero-section">
        <div className="hero-image">
          <img src="/src/assets/ps5Games/mhw.png" alt="Monster Hunter Wilds" />
        </div>
        <div className="hero-overlay">
          <h1 className="game-title">Monster Hunter Wilds</h1>
          <p className="game-price">P2,500</p>
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
            <p>Company Name: Capcom U.S.A., Inc.</p>
            <p>Release: 2/20/2025</p>
          </div>
          <div className="metadata-right">
            <div className="stat-card">
              <span className="stat-icon">⭐</span>
              <span className="stat-text">4.8</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">⬇</span>
              <span className="stat-text">1.3M</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📄</span>
              <span className="stat-text">30GB</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🎮</span>
              <span className="stat-text">P85</span>
            </div>
          </div>
        </div>

        <div className="game-description">
          <p>
            Embark on an epic journey through the vast and untamed wilderness of Monster Hunter Wilds. 
            As a skilled hunter, you'll face off against colossal creatures in breathtaking landscapes 
            that stretch as far as the eye can see. Master the art of the hunt with an arsenal of 
            weapons and armor, each crafted from the very beasts you've conquered.
          </p>
          <p>
            Experience dynamic weather systems that affect both you and your prey, creating ever-changing 
            hunting scenarios. Team up with fellow hunters in seamless multiplayer co-op or venture 
            alone into the wilds. Every hunt tells a story, every victory brings new possibilities, 
            and every creature you encounter is a testament to the untamed beauty of nature.
          </p>
          <p>
            With cutting-edge graphics and immersive gameplay mechanics, Monster Hunter Wilds delivers 
            the ultimate hunting experience. Discover hidden secrets, forge powerful alliances, and 
            become the legendary hunter you were destined to be in this open-world masterpiece.
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
