import React from "react";
import "../styles/componentsStyle/ItemDetails.css";

const ItemDetails = () => {
  return (
    <div className="item-details">
      {/* Top Image */}
      <div className="item-image">
        <img src="https://via.placeholder.com/600x300" alt="Game Cover" />
      </div>

      {/* Title & Price */}
      <div className="item-info">
        <h2 className="item-title">Game Title</h2>
        <p className="item-price">₱ Price</p>
        <button className="buy-btn">BUY</button>
      </div>

      {/* Carousel */}
      <div className="carousel">
        <button className="arrow">◀</button>
        <div className="carousel-images">
          <div className="carousel-item"></div>
          <div className="carousel-item"></div>
          <div className="carousel-item"></div>
          <div className="carousel-item"></div>
        </div>
        <button className="arrow">▶</button>
      </div>

      {/* Company Info */}
      <div className="company-info">
        <p><strong>Company Name:</strong> Example Studio</p>
        <p><strong>Release:</strong> 2025</p>
        <div className="stats">
          <span>⭐ 4.6</span>
          <span>1.2M Downloads</span>
          <span>3000+ Reviews</span>
          <span>Action</span>
        </div>
      </div>

      {/* Description */}
      <div className="description">
        <p>
          Game Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Experience an epic adventure full of action and strategy.
        </p>
        <button className="show-btn">Show All</button>
      </div>

      {/* Discover More */}
      <div className="discover">
        <h3>DISCOVER MORE GAMES</h3>
        <div className="game-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="game-card">
              <div className="game-thumb"></div>
              <p>Game Title</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
