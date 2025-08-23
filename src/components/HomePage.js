import React, { useState } from 'react';
import '../styles/componentsStyle/HomePage.css';
import { useNavigate } from "react-router-dom";
import { PlayCircleOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import HomeSlider from '../customs/HomeSlider';

// Dummy data for games
const popularGames = [
  { id: 1, title: "Cyberpunk 2077", genre: "RPG", price: "$59.99", image: "cyberpunk-2077.png" },
  { id: 2, title: "FIFA 24", genre: "Sports", price: "$69.99", image: "ea-sports-fc.png" },
  { id: 3, title: "Call of Duty", genre: "FPS", price: "$59.99", image: "codbo6.png" },
  { id: 4, title: "GTA Online", genre: "Action", price: "Free", image: "gta-online.png" },
  { id: 5, title: "The Last of Us", genre: "Adventure", price: "$49.99", image: "thelastofus.png" },
  { id: 6, title: "Monster Hunter", genre: "Action", price: "$39.99", image: "mhw.png" },
  { id: 7, title: "NBA 2K26", genre: "Sports", price: "$69.99", image: "nba2k26.png" },
  { id: 8, title: "Battlefield", genre: "FPS", price: "$59.99", image: "battlefield6-standard.png" }
];

const recentlyAdded = [
  { id: 11, title: "Phasmophobia", genre: "Horror", price: "$19.99", image: "phasmophobia.png" },
  { id: 12, title: "Street Fighter", genre: "Fighting", price: "$59.99", image: "sf.png" },
  { id: 13, title: "Silent Hill", genre: "Horror", price: "$49.99", image: "sh2.png" },
  { id: 14, title: "WWE 2K24", genre: "Sports", price: "$59.99", image: "wwe.png" },
  { id: 15, title: "Hitman", genre: "Stealth", price: "$39.99", image: "hitman.png" },
  { id: 16, title: "Doom Eternal", genre: "FPS", price: "$39.99", image: "doom.png" },
  { id: 17, title: "Gran Turismo", genre: "Racing", price: "$69.99", image: "gt7.png" },
  { id: 18, title: "Mortal Kombat", genre: "Fighting", price: "$59.99", image: "mk.png" }
];

const discountGames = [
  { id: 21, title: "Elden Ring", genre: "RPG", price: "$39.99", image: "er.png" },
  { id: 22, title: "Hogwarts Legacy", genre: "Adventure", price: "$49.99", image: "hl.png" },
  { id: 23, title: "Avatar", genre: "Action", price: "$44.99", image: "afp.png" },
  { id: 24, title: "Assassin's Creed", genre: "Action", price: "$34.99", image: "ab.png" },
  { id: 25, title: "Dead Space", genre: "Horror", price: "$29.99", image: "ds2tb.png" },
  { id: 26, title: "Forspoken", genre: "RPG", price: "$39.99", image: "fps.png" },
  { id: 27, title: "Redfall", genre: "FPS", price: "$49.99", image: "rf.png" },
  { id: 28, title: "Starfield", genre: "RPG", price: "$59.99", image: "sf.png" }
];

const carouselGames = [
  { id: 31, title: "Metal Gear Solid", image: "mgsse.png" },
  { id: 32, title: "Demon Slayer", image: "ds-kimetsu.png" },
  { id: 33, title: "Tekken 8", image: "thps.png" },
  { id: 34, title: "God of War", image: "gy.png" },
  { id: 35, title: "Spider-Man", image: "sinx-shadows.png" },
  { id: 36, title: "Final Fantasy", image: "ffvr.png" }
];

const categorizedGames = [
  { id: 41, title: "Elden Ring", image: "er.png" },
  { id: 42, title: "Hogwarts Legacy", image: "hl.png" },
  { id: 43, title: "Avatar", image: "afp.png" },
  { id: 44, title: "Assassin's Creed", image: "ab.png" },
  { id: 45, title: "Dead Space", image: "ds2tb.png" },
  { id: 46, title: "Forspoken", image: "fps.png" }
];

const GameCard = ({ game, showPlayIcon = false, showRating = false }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="game-card" 
      onClick={() => navigate("/item-details")}
      style={{ cursor: "pointer" }}
    >
      <div className="thumbnail-container">
        <div 
          className="thumbnail"
          style={{
            backgroundImage: `url(/src/assets/ps5Games/${game.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        {showPlayIcon && <PlayCircleOutlined className="play-icon" />}
      </div>
      <div className="game-info">
        <h4>{game.title}</h4>
        {game.genre && <p className="genre">{game.genre}</p>}
        {game.price && <p className="price">{game.price}</p>}
        {showRating && <p className="rating">⭐ 4.5</p>}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("new-trending");
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Main Hero/Slider Section */}
      <HomeSlider />

      {/* Most Popular Section */}
      <section className="game-section">
        <h2 className="section-title">Most Popular</h2>
        <div className="game-grid">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game} showPlayIcon={true} showRating={true} />
          ))}
        </div>
        <div className="show-all-container">
          <button className="show-all-btn">Show All</button>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="featured-section">
        <div className="featured-hero-banner">
          <div className="hero-game-scene">
            {/* Large hero banner with game scene background */}
            <div 
              className="hero-background"
              style={{backgroundImage: 'url(/src/assets/ps5Games/er.png)'}}
            ></div>
            
            {/* Video player overlay in bottom-left */}
            <div className="video-overlay">
              <div className="video-player">
                <div className="video-thumbnail-small">
                  <div className="video-placeholder-small">
                    <PlayCircleOutlined className="small-play-icon" />
                  </div>
                </div>
                <div className="video-text-content">
                  <h3>Game Title</h3>
                  <p>Description</p>
                  <button className="see-more-btn-small">See more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discounts and Sales Section */}
      <section className="game-section">
        <h2 className="section-title">Discounts and Sales</h2>
        <div className="game-grid">
          {discountGames.map((game) => (
            <GameCard key={game.id} game={game} showPlayIcon={true} />
          ))}
        </div>
        <div className="show-all-container">
          <button className="show-all-btn">Show All</button>
        </div>
      </section>

      {/* Horizontal Carousel Section */}
      <section className="carousel-section">
        <div className="carousel-tabs">
          <button 
            className={`carousel-tab ${activeTab === "new-trending" ? "active" : ""}`}
            onClick={() => setActiveTab("new-trending")}
          >
            New and Trending
          </button>
          <button 
            className={`carousel-tab ${activeTab === "top-seller" ? "active" : ""}`}
            onClick={() => setActiveTab("top-seller")}
          >
            Top Seller
          </button>
          <button 
            className={`carousel-tab ${activeTab === "popular-upcoming" ? "active" : ""}`}
            onClick={() => setActiveTab("popular-upcoming")}
          >
            Popular Upcoming
          </button>
        </div>
        <div className="carousel-container">
          <button className="carousel-nav left">
            <LeftOutlined />
          </button>
          <div className="carousel-content">
            {carouselGames.map((game) => (
              <div key={game.id} className="carousel-card">
                <div 
                  className="carousel-thumbnail"
                  style={{backgroundImage: `url(/src/assets/ps5Games/${game.image})`}}
                ></div>
                <h4>{game.title}</h4>
              </div>
            ))}
          </div>
          <button className="carousel-nav right">
            <RightOutlined />
          </button>
        </div>
      </section>

      {/* Categorized Games Section */}
      <section className="categorized-section">
        <div className="category-tabs">
          <button 
            className={`tab ${activeTab === "new-releases" ? "active" : ""}`}
            onClick={() => setActiveTab("new-releases")}
          >
            New Game Releases
          </button>
          <button 
            className={`tab ${activeTab === "trending" ? "active" : ""}`}
            onClick={() => setActiveTab("trending")}
          >
            Trending
          </button>
          <button 
            className={`tab ${activeTab === "popular" ? "active" : ""}`}
            onClick={() => setActiveTab("popular")}
          >
            Popular
          </button>
          <button 
            className={`tab ${activeTab === "recommended" ? "active" : ""}`}
            onClick={() => setActiveTab("recommended")}
          >
            Recommended for you
          </button>
        </div>
        <div className="game-grid">
          {categorizedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-column">
          <h4>ABOUT US</h4>
          <p>Who we are</p>
          <p>Mission</p>
          <p>Vision</p>
        </div>
        <div className="footer-column">
          <h4>CUSTOMER CARE</h4>
          <p>FAQs</p>
          <p>Feedback & Inquiry</p>
        </div>
        <div className="footer-column">
          <h4>PARTNERSHIPS</h4>
          <p>NVIDIA</p>
          <p>PlayStation</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
