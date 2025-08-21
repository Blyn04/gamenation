import React, { useState } from 'react';
import '../styles/componentsStyle/HomePage.css';
import HomeSlider from '../customs/HomeSlider';
import { useNavigate } from "react-router-dom";

const dummyGames = Array(8).fill({
  title: "Game Title",
  category: "Category",
  rating: "⭐ 4.5",
});

const GameCard = ({ title, category, rating }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="game-card" 
      onClick={() => navigate("/item-details")}
      style={{ cursor: "pointer" }}
    >
      <div className="thumbnail"></div>
      <div className="game-info">
        <p>{title}</p>
        <p>{category}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("new");
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* 🔹 Banner Slider */}
      <HomeSlider />

      {/* 🔹 Most Popular */}
      <section className="game-section">
        <h3>Most Popular</h3>
        <div className="game-grid">
          {dummyGames.map((game, idx) => (
            <GameCard key={idx} {...game} />
          ))}
        </div>
        <button className="show-all">Show All</button>
      </section>

      {/* 🔹 Big Featured Banner */}
      <section className="banner-slide">
        <div className="banner-text">
          <h2>Game Title</h2>
          <p>Some description text here</p>
        </div>
        <div className="banner-image"></div>
      </section>

      {/* 🔹 Crossplay & DLCs */}
      <section className="game-section">
        <h3>Crossplay & DLCs</h3>
        <div className="game-grid">
          {dummyGames.map((game, idx) => (
            <GameCard key={idx} {...game} />
          ))}
        </div>
        <button className="show-all">Show All</button>
      </section>

      {/* 🔹 Horizontal Carousel */}
      <section className="game-section">
        <h3>Trending Now</h3>
        <div className="horizontal-scroll">
          {dummyGames.slice(0, 5).map((game, idx) => (
            <div 
              className="carousel-card" 
              key={idx}
              onClick={() => navigate("/item-details")}
              style={{ cursor: "pointer" }}
            >
              <div className="thumbnail"></div>
              <p>{game.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Tabs Section */}
      <section className="game-section">
        <div className="tabs">
          <button
            className={activeTab === "new" ? "active" : ""}
            onClick={() => setActiveTab("new")}
          >
            New Releases
          </button>
          <button
            className={activeTab === "top" ? "active" : ""}
            onClick={() => setActiveTab("top")}
          >
            Top Rated
          </button>
          <button
            className={activeTab === "popular" ? "active" : ""}
            onClick={() => setActiveTab("popular")}
          >
            Popular Upcoming
          </button>
        </div>
        <div className="game-grid">
          {dummyGames.map((game, idx) => (
            <GameCard key={idx} {...game} />
          ))}
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="footer">
        <div>
          <h4>ABOUT US</h4>
          <p>Mission</p>
          <p>Vision</p>
        </div>
        <div>
          <h4>CUSTOMER CARE</h4>
          <p>FAQs</p>
          <p>Privacy & Policy</p>
        </div>
        <div>
          <h4>PARTNERSHIPS</h4>
          <p>Work with us</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
