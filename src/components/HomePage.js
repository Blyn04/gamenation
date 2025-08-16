import React from 'react';
import '../styles/componentsStyle/HomePage.css';
import HomeSlider from '../customs/HomeSlider';
const dummyGames = Array(8).fill({
  title: "Game Title",
  category: "Category",
  rating: "⭐ 4.5",
});

const GameCard = ({ title, category, rating }) => (
  <div className="game-card">
    <div className="thumbnail"></div>
    <div className="game-info">
      <p>{title}</p>
      <p>{category}</p>
      <p>{rating}</p>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Banner Slider */}
      <HomeSlider/>

      {/* Most Popular Section */}
      <section className="game-section">
        <h3>Most Popular</h3>
        <div className="game-grid">
          {dummyGames.map((game, idx) => (
            <GameCard key={idx} {...game} />
          ))}
        </div>
        <button className="show-all">Show All</button>
      </section>

      {/* Your Library Section */}
      <section className="game-section">
        <h3>Your Gaming Library</h3>
        <div className="game-grid">
          {dummyGames.map((game, idx) => (
            <GameCard key={idx} {...game} />
          ))}
        </div>
        <button className="show-all">View Your Library</button>
      </section>
    </div>
  );
};

export default HomePage;
