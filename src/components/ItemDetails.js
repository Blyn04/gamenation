import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/componentsStyle/ItemDetails.css";
import Footer from "../customs/Footer";

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
          <img src={imageMap[gameData.image] || imageMap['mhw.png']} alt={gameData.title} />
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
            <img src={imageMap['ffvr.png']} alt="Final Fantasy VII Rebirth" />
            <p>FINAL FANTASY VII REBIRTH</p>
          </div>
          <div className="game-item">
            <img src={imageMap['octapath0.png']} alt="Octopath Traveler II" />
            <p>OCTOPATH TRAVELER II</p>
          </div>
          <div className="game-item">
            <img src={imageMap['atelierryza.png']} alt="Atelier Ryza" />
            <p>Atelier Ryza: The alchemist of Mimio Key & the enchanted Land</p>
          </div>
          <div className="game-item">
            <img src={imageMap['cyberpunk-2077.png']} alt="Cyberpunk 2077" />
            <p>CYBERPUNK 2077</p>
          </div>
          <div className="game-item">
            <img src={imageMap['er.png']} alt="Elden Ring" />
            <p>ELDEN RING</p>
          </div>
          <div className="game-item">
            <img src={imageMap['tekken8.png']} alt="Tekken 8" />
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
