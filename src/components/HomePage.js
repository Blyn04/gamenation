import React, { useState, useRef } from 'react';
import '../styles/componentsStyle/HomePage.css';
import { useNavigate } from "react-router-dom";
import { PlayCircleOutlined, LeftOutlined, RightOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import HomeSlider from '../customs/HomeSlider';
import Footer from '../customs/Footer';

// Import all PS5 game images
import ffvr from '../assets/ps5Games/ffvr.png';
import mhw from '../assets/ps5Games/mhw.png';
import gt7 from '../assets/ps5Games/gt7.png';
import itt from '../assets/ps5Games/itt.png';
import er from '../assets/ps5Games/er.png';
import thps from '../assets/ps5Games/thps.png';
import sh2 from '../assets/ps5Games/sh2.png';
import wwe from '../assets/ps5Games/wwe.png';
import badcat from '../assets/ps5Games/badcat.png';
import thelastofus from '../assets/ps5Games/thelastofus.png';
import wff from '../assets/ps5Games/wff.png';
import hitman from '../assets/ps5Games/hitman.png';
import hl from '../assets/ps5Games/hl.png';
import ab from '../assets/ps5Games/ab.png';
import phasmophobia from '../assets/ps5Games/phasmophobia.png';
import ijgc from '../assets/ps5Games/ijgc.png';
import doom from '../assets/ps5Games/doom.png';
import eaSportsFc from '../assets/ps5Games/ea-sports-fc.png';
import ds2tb from '../assets/ps5Games/ds2tb.png';
import mk from '../assets/ps5Games/mk.png';
import gy from '../assets/ps5Games/gy.png';
import cyberpunk2077 from '../assets/ps5Games/cyberpunk-2077.png';
import gtaOnline from '../assets/ps5Games/gta-online.png';
import mgsse from '../assets/ps5Games/mgsse.png';
import codbo6 from '../assets/ps5Games/codbo6.png';
import nba2k26 from '../assets/ps5Games/nba2k26.png';
import sf from '../assets/ps5Games/sf.png';
import carxStreet from '../assets/ps5Games/carx-street.png';
import fh5 from '../assets/ps5Games/fh5.png';
import borderlands4 from '../assets/ps5Games/borderlands4.png';
import coe33 from '../assets/ps5Games/coe33.png';
import dsKimetsu from '../assets/ps5Games/ds-kimetsu.png';
import octapath0 from '../assets/ps5Games/octapath0.png';
import shf from '../assets/ps5Games/shf.png';
import dytb from '../assets/ps5Games/dytb.png';
import catsritual from '../assets/ps5Games/catsritual.png';
import srcw from '../assets/ps5Games/srcw.png';
import digimon from '../assets/ps5Games/digimon.png';
import outerworld from '../assets/ps5Games/outerworld.png';
import readyornot from '../assets/ps5Games/readyornot.png';
import edenzero from '../assets/ps5Games/edenzero.png';
import hxh from '../assets/ps5Games/hxh.png';
import tekken8 from '../assets/ps5Games/tekken8.png';
import atelieryumia from '../assets/ps5Games/atelieryumia.png';
import firstberserker from '../assets/ps5Games/firstberserker.png';
import lego from '../assets/ps5Games/lego.png';
import lifestrange from '../assets/ps5Games/lifestrange.png';
import metaphor from '../assets/ps5Games/metaphor.png';
import spy from '../assets/ps5Games/spy.png';
import armoredcore from '../assets/ps5Games/armoredcore.png';
import ateliermarie from '../assets/ps5Games/ateliermarie.png';
import atelierryza from '../assets/ps5Games/atelierryza.png';
import battlefield6 from '../assets/ps5Games/battlefield6-standard.png';
import bmw from '../assets/ps5Games/bmw.png';
import codeviolet from '../assets/ps5Games/codeviolet.png';
import dbd from '../assets/ps5Games/dbd.png';
import disney from '../assets/ps5Games/disney.png';
import disneydreamland from '../assets/ps5Games/disneydreamland.png';
import dragonball from '../assets/ps5Games/dragonball.png';
import dragonquest from '../assets/ps5Games/dragonquest.png';
import f1 from '../assets/ps5Games/f1.png';
import fuga from '../assets/ps5Games/fuga.png';
import ghostwire from '../assets/ps5Games/ghostwire.png';
import goosebumps from '../assets/ps5Games/goosebumps.png';
import granblue from '../assets/ps5Games/granblue.png';
import shin from '../assets/ps5Games/shin.png';
import p3 from '../assets/ps5Games/p3.png';
import suicide from '../assets/ps5Games/suicide.png';
import p5 from '../assets/ps5Games/p5.png';
import harvestmoon from '../assets/ps5Games/harvestmoon.png';
import valkyrie from '../assets/ps5Games/valkyrie.png';
import hotwheels from '../assets/ps5Games/hotwheels.png';
import watchdog from '../assets/ps5Games/watchdog.png';
import swordart from '../assets/ps5Games/swordart.png';
import untildawn from '../assets/ps5Games/untildawn.png';
import kingoffighters from '../assets/ps5Games/kingoffighters.png';
import kingdomhearts from '../assets/ps5Games/kingdomhearts.png';
import tinycats from '../assets/ps5Games/tinycats.png';
import hellokitty from '../assets/ps5Games/hellokitty.png';
import rugby from '../assets/ps5Games/rugby.png';
import streetfighter from '../assets/ps5Games/streetfighter.png';
import re3nemesis from '../assets/ps5Games/re3nemesis.png';

// Create an image mapping object
const imageMap = {
  'ffvr.png': ffvr,
  'mhw.png': mhw,
  'gt7.png': gt7,
  'itt.png': itt,
  'er.png': er,
  'thps.png': thps,
  'sh2.png': sh2,
  'wwe.png': wwe,
  'badcat.png': badcat,
  'thelastofus.png': thelastofus,
  'wff.png': wff,
  'hitman.png': hitman,
  'hl.png': hl,
  'ab.png': ab,
  'phasmophobia.png': phasmophobia,
  'ijgc.png': ijgc,
  'doom.png': doom,
  'ea-sports-fc.png': eaSportsFc,
  'ds2tb.png': ds2tb,
  'mk.png': mk,
  'gy.png': gy,
  'cyberpunk-2077.png': cyberpunk2077,
  'gta-online.png': gtaOnline,
  'mgsse.png': mgsse,
  'codbo6.png': codbo6,
  'nba2k26.png': nba2k26,
  'sf.png': sf,
  'carx-street.png': carxStreet,
  'fh5.png': fh5,
  'borderlands4.png': borderlands4,
  'coe33.png': coe33,
  'ds-kimetsu.png': dsKimetsu,
  'octapath0.png': octapath0,
  'shf.png': shf,
  'dytb.png': dytb,
  'catsritual.png': catsritual,
  'srcw.png': srcw,
  'digimon.png': digimon,
  'outerworld.png': outerworld,
  'readyornot.png': readyornot,
  'edenzero.png': edenzero,
  'hxh.png': hxh,
  'tekken8.png': tekken8,
  'atelieryumia.png': atelieryumia,
  'firstberserker.png': firstberserker,
  'lego.png': lego,
  'lifestrange.png': lifestrange,
  'metaphor.png': metaphor,
  'spy.png': spy,
  'armoredcore.png': armoredcore,
  'ateliermarie.png': ateliermarie,
  'atelierryza.png': atelierryza,
  'battlefield6-standard.png': battlefield6,
  'bmw.png': bmw,
  'codeviolet.png': codeviolet,
  'dbd.png': dbd,
  'disney.png': disney,
  'disneydreamland.png': disneydreamland,
  'dragonball.png': dragonball,
  'dragonquest.png': dragonquest,
  'f1.png': f1,
  'fuga.png': fuga,
  'ghostwire.png': ghostwire,
  'goosebumps.png': goosebumps,
  'granblue.png': granblue,
  'shin.png': shin,
  'p3.png': p3,
  'suicide.png': suicide,
  'p5.png': p5,
  'harvestmoon.png': harvestmoon,
  'valkyrie.png': valkyrie,
  'hotwheels.png': hotwheels,
  'watchdog.png': watchdog,
  'swordart.png': swordart,
  'untildawn.png': untildawn,
  'kingoffighters.png': kingoffighters,
  'kingdomhearts.png': kingdomhearts,
  'tinycats.png': tinycats,
  'hellokitty.png': hellokitty,
  'rugby.png': rugby,
  'streetfighter.png': streetfighter,
  're3nemesis.png': re3nemesis
};

// Updated game data with all the new titles
const popularGames = [
  { id: 1, title: "Battle Field 6 Standard", subtitle: "Standard Edition", rating: 4.5, image: "battlefield6-standard.png" },
  { id: 2, title: "Clair Obscur Expedition 33", subtitle: "Deluxe Edition", rating: 4.5, image: "coe33.png" },
  { id: 3, title: "NBA 2K26", subtitle: "Standard Edition", rating: 4.5, image: "nba2k26.png" },
  { id: 4, title: "Split Fiction", subtitle: "Digital Edition", rating: 4.5, image: "sf.png" },
  { id: 5, title: "Car X Street", subtitle: "Racing Edition", rating: 4.5, image: "carx-street.png" },
  { id: 6, title: "Borderlands 4", subtitle: "Ultimate Edition", rating: 4.5, image: "borderlands4.png" },
  { id: 7, title: "Forza Horizon 5", subtitle: "Premium Edition", rating: 4.5, image: "fh5.png" },
  { id: 8, title: "Call of Duty® Black Ops 6", subtitle: "Standard Edition", rating: 4.5, image: "codbo6.png" },
  { id: 9, title: "METAL GEAR SOLID Δ SNAKE EATER", subtitle: "Digital Deluxe", rating: 4.5, image: "mgsse.png" },
  { id: 10, title: "Grand Theft Auto Online", subtitle: "Free to Play", rating: 4.5, image: "gta-online.png" }
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

const GameCard = ({ game, showPlayIcon = false, showRating = false, showAddToCart = true, hideDetails = false }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Generate random price and details for the game
    const randomPrice = Math.floor(Math.random() * 2000) + 1000; // Price between 1000-3000
    const randomRating = (Math.random() * 2 + 3).toFixed(1); // Rating between 3.0-5.0
    const randomDownloads = Math.floor(Math.random() * 2000000) + 100000; // Downloads between 100k-2M
    const randomSize = Math.floor(Math.random() * 50) + 10; // Size between 10-60GB
    
    const gameData = {
      title: game.title,
      subtitle: game.subtitle || "",
      image: game.image,
      price: `₱${randomPrice.toLocaleString()}`,
      rating: randomRating,
      downloads: randomDownloads,
      size: `${randomSize}GB`,
      company: "GameNation Studios",
      release: "2024",
      genre: game.genre || "Action",
      description: `Experience the ultimate gaming adventure with ${game.title}. This incredible game offers stunning graphics, immersive gameplay, and hours of entertainment. Perfect for gamers of all skill levels, ${game.title} delivers an unforgettable experience that will keep you coming back for more.`
    };
    
    navigate("/item-details", { state: { gameData } });
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
        <div className="thumbnail">
          <img 
            src={imageMap[game.image]} 
            alt={game.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
        </div>
        {showPlayIcon && <PlayCircleOutlined className="play-icon" />}
      </div>
      <div className="game-info">
        <div className="game-title-section">
          <div className="game-text">
            <h4>{game.title}</h4>
            {game.subtitle && <p className="subtitle">{game.subtitle}</p>}
          </div>
          {showRating && (
            <div className="rating-container">
              <span className="star">★</span>
              <span className="rating-number">{game.rating}</span>
            </div>
          )}
        </div>
        {!hideDetails && game.genre && <p className="genre">{game.genre}</p>}
        {!hideDetails && game.price && <p className="price">{game.price}</p>}
        {!hideDetails && showAddToCart && (
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <ShoppingCartOutlined /> Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("new-trending");
  const [activeCategory, setActiveCategory] = useState("new-releases");
  const [isPopularExpanded, setIsPopularExpanded] = useState(false);
  const [isDiscountExpanded, setIsDiscountExpanded] = useState(false);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  // Create expanded game arrays that combine multiple collections
  const expandedPopularGames = [
    ...popularGames,
    ...recentlyAdded,
    ...newReleases,
    ...premiumGames
  ];

  const expandedDiscountGames = [
    ...discountGames,
    ...specialEditions,
    ...actionAdventure,
    ...sportsRacing
  ];

  // Carousel navigation functions
  const handleCarouselNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleCarouselPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Handle show all button clicks
  const handleShowAllPopular = () => {
    setIsPopularExpanded(!isPopularExpanded);
  };

  const handleShowAllDiscount = () => {
    setIsDiscountExpanded(!isDiscountExpanded);
  };

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
      <section className={`game-section popular-games-section ${isPopularExpanded ? 'expanded' : ''}`}>
        <h2 className="section-title">Popular Games</h2>
        <div className={`game-grid popular-games-grid ${isPopularExpanded ? 'expanded' : ''}`}>
          {(isPopularExpanded ? expandedPopularGames : popularGames).map((game) => (
            <GameCard key={game.id} game={game} showPlayIcon={true} showRating={true} showAddToCart={false} />
          ))}
        </div>

        <div className="show-all-container">
           <button className="show-all-btn" onClick={handleShowAllPopular}>
            {isPopularExpanded ? 'Show Less' : 'Show All'}
          </button>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="featured-section">
        <div className="featured-hero-banner">
          <div className="hero-game-scene">
            {/* Large hero banner with game scene background */}
            <div className="hero-background">
              <img 
                src={imageMap['er.png']} 
                alt="ELDEN RING"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* Video player overlay in bottom-left */}
          
          </div>
        </div>

           <div className="video-overlay">
              <div className="video-player">
                <div className="video-thumbnail-small">
                  <div className="video-placeholder-small">
                    <PlayCircleOutlined className="small-play-icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="video-overlay1">
              <div className="video-text-content">
                <h3>ELDEN RING</h3>
                <p>Experience the epic adventure in the Lands Between</p>
                <button className="see-more-btn-small">See more</button>
              </div>
            </div>
      </section>

      {/* Discounts and Sales Section */}
      <section className={`game-section1 ${isDiscountExpanded ? 'expanded' : ''}`}>
        <h2 className="section-title">Discounts and Sales</h2>
        <div className={`game-grid discount-games-grid ${isDiscountExpanded ? 'expanded' : ''}`}>
          {(isDiscountExpanded ? expandedDiscountGames : discountGames).map((game) => (
            <GameCard key={game.id} game={game} showPlayIcon={true} hideDetails={true} />
          ))}
        </div>
        <div className="show-all-container">
          <button className="show-all-btn" onClick={handleShowAllDiscount}>
            {isDiscountExpanded ? 'Show Less' : 'Show All'}
          </button>
        </div>
      </section>

      {/* Horizontal Carousel Section */}
      <section className="carousel-section">
        {/* <div className="carousel-tabs">
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
        </div> */}

        <div className="carousel-container">
          <button className="carousel-nav left" onClick={handleCarouselPrev}>
            <LeftOutlined />
          </button>
          
          <div className="carousel-content" ref={carouselRef}>
            {carouselGames.map((game) => (
              <div key={game.id} className="carousel-card">
                <div className="carousel-thumbnail">
                  <img 
                    src={imageMap[game.image]} 
                    alt={game.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                  <div className="carousel-video-icon">▶</div>
                </div>
                <h4>{game.title}</h4>
              </div>
            ))}
          </div>
          <button className="carousel-nav right" onClick={handleCarouselNext}>
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
            <GameCard key={game.id} game={game} showPlayIcon={true} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
