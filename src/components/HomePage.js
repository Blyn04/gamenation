import React, { useState } from 'react';
import '../styles/componentsStyle/HomePage.css';
import { useNavigate } from "react-router-dom";
import { PlayCircleOutlined, LeftOutlined, RightOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import HomeSlider from '../customs/HomeSlider';
import Footer from '../customs/Footer';

// Updated game data with all the new titles
const popularGames = [
  { id: 1, title: "FINAL FANTASY VII REBIRTH", genre: "RPG", price: "$69.99", image: "ffvr.png" },
  { id: 2, title: "Monster Hunter Wilds", genre: "Action", price: "$59.99", image: "mhw.png" },
  { id: 3, title: "Gran Turismo® 7", genre: "Racing", price: "$69.99", image: "gt7.png" },
  { id: 4, title: "It Takes Two", genre: "Adventure", price: "$39.99", image: "itt.png" },
  { id: 5, title: "ELDEN RING", genre: "RPG", price: "$59.99", image: "er.png" },
  { id: 6, title: "Tony Hawk's™ Pro Skater™", genre: "Sports", price: "$39.99", image: "thps.png" },
  { id: 7, title: "SILENT HILL 2", genre: "Horror", price: "$49.99", image: "sh2.png" },
  { id: 8, title: "WWE 2K25 The Bloodline", genre: "Sports", price: "$69.99", image: "wwe.png" }
];

const recentlyAdded = [
  { id: 11, title: "Black Myth Wukong", genre: "Action", price: "$59.99", image: "badcat.png" },
  { id: 12, title: "The Last of Us™ Part II Remastered", genre: "Adventure", price: "$49.99", image: "thelastofus.png" },
  { id: 13, title: "WUCHANG Fallen Feathers", genre: "Action", price: "$59.99", image: "wff.png" },
  { id: 14, title: "HITMAN World of Assassination", genre: "Stealth", price: "$39.99", image: "hitman.png" },
  { id: 15, title: "Hogwarts Legacy", genre: "Adventure", price: "$59.99", image: "hl.png" },
  { id: 16, title: "ASTRO BOT", genre: "Platformer", price: "$39.99", image: "ab.png" },
  { id: 17, title: "Phasmophobia", genre: "Horror", price: "$19.99", image: "phasmophobia.png" },
  { id: 18, title: "Indiana Jones and the Great Circle", genre: "Adventure", price: "$59.99", image: "ijgc.png" }
];

const discountGames = [
  { id: 21, title: "DOOM The Dark Ages", genre: "FPS", price: "$49.99", image: "doom.png" },
  { id: 22, title: "EA SPORTS FC", genre: "Sports", price: "$69.99", image: "ea-sports-fc.png" },
  { id: 23, title: "Assassins Creed Shadows", genre: "Action", price: "$59.99", image: "ab.png" },
  { id: 24, title: "DEATH STRANDING 2 ON THE BEACH", genre: "Adventure", price: "$59.99", image: "ds2tb.png" },
  { id: 25, title: "Mortal Kombat", genre: "Fighting", price: "$59.99", image: "mk.png" },
  { id: 26, title: "Ghost of Yōtei", genre: "Action", price: "$59.99", image: "gy.png" },
  { id: 27, title: "Cyberpunk 2077", genre: "RPG", price: "$39.99", image: "cyberpunk-2077.png" },
  { id: 28, title: "Grand Theft Auto Online", genre: "Action", price: "Free", image: "gta-online.png" }
];

const carouselGames = [
  { id: 31, title: "METAL GEAR SOLID Δ SNAKE EATER", image: "mgsse.png" },
  { id: 32, title: "Call of Duty® Black Ops 6", image: "codbo6.png" },
  { id: 33, title: "NBA 2K26", image: "nba2k26.png" },
  { id: 34, title: "Split Fiction", image: "sf.png" },
  { id: 35, title: "CarX Street", image: "carx-street.png" },
  { id: 36, title: "Forza Horizon 5", image: "fh5.png" },
  { id: 37, title: "Borderlands 4", image: "borderlands4.png" },
  { id: 38, title: "Clair Obscur Expedition 33", image: "coe33.png" }
];

const categorizedGames = [
  { id: 41, title: "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles 2", image: "ds-kimetsu.png" },
  { id: 42, title: "OCTOPATH TRAVELER 0", image: "octapath0.png" },
  { id: 43, title: "SILENT HILL f", image: "shf.png" },
  { id: 44, title: "Dying Light: The Beast", image: "dytb.png" },
  { id: 45, title: "Bad Cat", image: "badcat.png" },
  { id: 46, title: "Resident Evil 3 Nemesis", image: "re3nemesis.png" },
  { id: 47, title: "Cats Ritual", image: "catsritual.png" },
  { id: 48, title: "Sonic Racing: CrossWorlds", image: "srcw.png" }
];

// Additional game arrays for more variety
const upcomingGames = [
  { id: 51, title: "Digimon Story Time Stranger", image: "digimon.png" },
  { id: 52, title: "The Outer Worlds 2", image: "outerworld.png" },
  { id: 53, title: "Ready or Not: Digital Deluxe Edition", image: "readyornot.png" },
  { id: 54, title: "EDENS ZERO", image: "edenzero.png" },
  { id: 55, title: "HUNTER×HUNTER NEN×IMPACT Deluxe Edition", image: "hxh.png" },
  { id: 56, title: "TEKKEN 8 Advanced Edition", image: "tekken8.png" }
];

const featuredGames = [
  { id: 61, title: "Atelier Yumia: The Alchemist of Memories & the Envisioned Land", image: "atelieryumia.png" },
  { id: 62, title: "The First Berserker: Khazan Deluxe Edition", image: "firstberserker.png" },
  { id: 63, title: "LEGO® Horizon Adventures™ Digital Deluxe Edition", image: "lego.png" },
  { id: 64, title: "Life is Strange: Double Exposure Ultimate Edition", image: "lifestrange.png" },
  { id: 65, title: "Metaphor: ReFantazio PS4 & PS5", image: "metaphor.png" },
  { id: 66, title: "SPY×ANYA: Operation Memories Deluxe Edition", image: "spy.png" }
];

// Additional game arrays using more available images
const newReleases = [
  { id: 71, title: "ARMORED CORE™ VI FIRES OF RUBICON™ - Deluxe Edition", image: "armoredcore.png" },
  { id: 72, title: "Atelier Marie Remake: The Alchemist of Salburg Digital Deluxe Edition", image: "ateliermarie.png" },
  { id: 73, title: "Atelier Ryza 3: Alchemist of the End & the Secret Key Digital Deluxe Edition", image: "atelierryza.png" },
  { id: 74, title: "Battlefield 6", image: "battlefield6-standard.png" },
  { id: 75, title: "BMW", image: "bmw.png" },
  { id: 76, title: "Code Violet", image: "codeviolet.png" },
  { id: 77, title: "Dead by Daylight - Gold Edition", image: "dbd.png" },
  { id: 78, title: "Disney", image: "disney.png" }
];

const specialEditions = [
  { id: 81, title: "Disney Dreamlight Valley", image: "disneydreamland.png" },
  { id: 82, title: "DRAGON BALL Z: KAKAROT DAIMA EDITION", image: "dragonball.png" },
  { id: 83, title: "DRAGON QUEST I & II HD-2D Remake", image: "dragonquest.png" },
  { id: 84, title: "F1® 24", image: "f1.png" },
  { id: 85, title: "Fuga: Melodies of Steel 3 - Deluxe Edition", image: "fuga.png" },
  { id: 86, title: "Ghostwire: Tokyo Deluxe Edition", image: "ghostwire.png" },
  { id: 87, title: "Goosebumps: Terror in Little Creek - Frightmare Edition", image: "goosebumps.png" },
  { id: 88, title: "Granblue Fantasy: Relink Special Edition", image: "granblue.png" }
];

// Additional game arrays for more variety
const premiumGames = [
  { id: 91, title: "Shin Megami Tensei V: Vengeance Digital Deluxe Edition", image: "shin.png" },
  { id: 92, title: "Persona 3 Reload Digital Deluxe Edition", image: "p3.png" },
  { id: 93, title: "Suicide Squad: Kill the Justice League", image: "suicide.png" },
  { id: 94, title: "Persona 5 Tactical Digital Deluxe", image: "p5.png" },
  { id: 95, title: "Harvest Moon: The Winds of Anthos", image: "harvestmoon.png" },
  { id: 96, title: "Hogwarts Legacy: Digital Deluxe Edition", image: "hl.png" },
  { id: 97, title: "VALKYRIE ELYSIUM - Digital Deluxe Edition", image: "valkyrie.png" },
  { id: 98, title: "HOT WHEELS UNLEASHED", image: "hotwheels.png" }
];

const actionAdventure = [
  { id: 101, title: "Watch Dogs: Legion - Deluxe Edition", image: "watchdog.png" },
  { id: 102, title: "SWORD ART ONLINE Fractured Daydream", image: "swordart.png" },
  { id: 103, title: "Until Dawn™", image: "untildawn.png" },
  { id: 104, title: "Disney Epic Mickey: Rebrushed", image: "disney.png" },
  { id: 105, title: "THE KING OF FIGHTERS XV Ultimate Edition", image: "kingoffighters.png" },
  { id: 106, title: "KINGDOM HEARTS III", image: "kingdomhearts.png" },
  { id: 107, title: "tiny Cats", image: "tinycats.png" },
  { id: 108, title: "Hello Kitty Island Adventure: Deluxe Edition", image: "hellokitty.png" }
];

const sportsRacing = [
  { id: 111, title: "Rugby League 26", image: "rugby.png" },
  { id: 112, title: "Street Fighter™ 6 Years 1-2 Fighters Edition", image: "streetfighter.png" },
  { id: 113, title: "Fuga: Melodies of Steel 3 - Deluxe Edition", image: "fuga.png" },
  { id: 114, title: "BMW", image: "bmw.png" },
  { id: 115, title: "CarX Street", image: "carx-street.png" },
  { id: 116, title: "Forza Horizon 5", image: "fh5.png" },
  { id: 117, title: "Gran Turismo® 7", image: "gt7.png" },
  { id: 118, title: "F1® 24", image: "f1.png" }
];

const GameCard = ({ game, showPlayIcon = false, showRating = false }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/item-details");
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click
    // Here you would typically add the item to cart
    // For now, we'll just show an alert
    alert(`${game.title} added to cart!`);
  };

  return (
    <div 
      className="game-card" 
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div className="thumbnail-container">
        <div 
          className="thumbnail"
          style={{
            backgroundImage: `url(./src/assets/ps5Games/${game.image})`,
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
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          <ShoppingCartOutlined /> Add to Cart
        </button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("new-trending");
  const [activeCategory, setActiveCategory] = useState("new-releases");
  const navigate = useNavigate();

  // Function to get games based on active category
  const getCategoryGames = () => {
    switch (activeCategory) {
      case "new-releases":
        return recentlyAdded;
      case "trending":
        return popularGames;
      case "popular":
        return featuredGames;
      case "recommended":
        return upcomingGames;
      default:
        return categorizedGames;
    }
  };

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
              style={{backgroundImage: `url(${process.env.PUBLIC_URL}/src/assets/ps5Games/er.png)`}}
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
                  <h3>ELDEN RING</h3>
                  <p>Experience the epic adventure in the Lands Between</p>
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
                  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/src/assets/ps5Games/${game.image})`}}
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
            className={`tab ${activeCategory === "new-releases" ? "active" : ""}`}
            onClick={() => setActiveCategory("new-releases")}
          >
            New Game Releases
          </button>
          <button 
            className={`tab ${activeCategory === "trending" ? "active" : ""}`}
            onClick={() => setActiveCategory("trending")}
          >
            Trending
          </button>
          <button 
            className={`tab ${activeCategory === "popular" ? "active" : ""}`}
            onClick={() => setActiveCategory("popular")}
          >
            Popular
          </button>
          <button 
            className={`tab ${activeCategory === "recommended" ? "active" : ""}`}
            onClick={() => setActiveCategory("recommended")}
          >
            Recommended for you
          </button>
        </div>
        <div className="game-grid">
          {getCategoryGames().map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
