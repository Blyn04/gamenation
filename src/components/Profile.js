import React, { useState } from "react";
import { SettingOutlined, MoreOutlined, UserOutlined, InfoCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "../styles/componentsStyle/Profile.css";
import Footer from '../customs/Footer';
import { useWishlist } from '../contexts/WishlistContext';
import { useAuth } from '../contexts/AuthContext';

// Import game images
import armoredcore from '../assets/ps5Games/armoredcore.png';
import harvestmoon from '../assets/ps5Games/harvestmoon.png';
import p5 from '../assets/ps5Games/p5.png';
import dbd from '../assets/ps5Games/dbd.png';
import granblue from '../assets/ps5Games/granblue.png';
import suicide from '../assets/ps5Games/suicide.png';

// Import additional images for wishlist items - Complete set from ItemDetails
import ittakes2 from '../assets/ps5Games/itt.png';
import eldenring from '../assets/ps5Games/er.png';
import gt7 from '../assets/ps5Games/gt7.png';
import thps from '../assets/ps5Games/thps.png';
import hellokitty from '../assets/ps5Games/hellokitty.png';
import dragonquest from '../assets/ps5Games/dragonquest.png';
import codeviolet from '../assets/ps5Games/codeviolet.png';
import tinycats from '../assets/ps5Games/tinycats.png';
import untildawn from '../assets/ps5Games/untildawn.png';
import swordart from '../assets/ps5Games/swordart.png';
import streetfighter from '../assets/ps5Games/streetfighter.png';
import kingdomhearts from '../assets/ps5Games/kingdomhearts.png';
import ffvr from '../assets/ps5Games/ffvr.png';
import goosebumps from '../assets/ps5Games/goosebumps.png';
import kingoffighters from '../assets/ps5Games/kingoffighters.png';
import dragonball from '../assets/ps5Games/dragonball.png';
import cyberpunk from '../assets/ps5Games/cyberpunk-2077.png';
import gtaonline from '../assets/ps5Games/gta-online.png';
import codbo6 from '../assets/ps5Games/codbo6.png';
import nba2k26 from '../assets/ps5Games/nba2k26.png';
import mk from '../assets/ps5Games/mk.png';
import phasmophobia from '../assets/ps5Games/phasmophobia.png';
import hl from '../assets/ps5Games/hl.png';
import ab from '../assets/ps5Games/ab.png';
import hitman from '../assets/ps5Games/hitman.png';
import thelastofus from '../assets/ps5Games/thelastofus.png';
import wff from '../assets/ps5Games/wff.png';
import doom from '../assets/ps5Games/doom.png';
import easportsfc from '../assets/ps5Games/ea-sports-fc.png';
import ds2tb from '../assets/ps5Games/ds2tb.png';
import gy from '../assets/ps5Games/gy.png';
import mgsse from '../assets/ps5Games/mgsse.png';
import sf from '../assets/ps5Games/sf.png';
import carxstreet from '../assets/ps5Games/carx-street.png';
import fh5 from '../assets/ps5Games/fh5.png';
import borderlands4 from '../assets/ps5Games/borderlands4.png';
import coe33 from '../assets/ps5Games/coe33.png';
import watchdog from '../assets/ps5Games/watchdog.png';
import badcat from '../assets/ps5Games/badcat.png';

// Import additional images that might be in wishlist
import mhw from '../assets/ps5Games/mhw.png';
import sh2 from '../assets/ps5Games/sh2.png';
import wwe from '../assets/ps5Games/wwe.png';
import ijgc from '../assets/ps5Games/ijgc.png';
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
import ateliermarie from '../assets/ps5Games/ateliermarie.png';
import atelierryza from '../assets/ps5Games/atelierryza.png';
import battlefield6 from '../assets/ps5Games/battlefield6-standard.png';
import bmw from '../assets/ps5Games/bmw.png';
import disney from '../assets/ps5Games/disney.png';
import disneydreamland from '../assets/ps5Games/disneydreamland.png';
import f1 from '../assets/ps5Games/f1.png';
import fuga from '../assets/ps5Games/fuga.png';
import ghostwire from '../assets/ps5Games/ghostwire.png';
import shin from '../assets/ps5Games/shin.png';
import p3 from '../assets/ps5Games/p3.png';
import valkyrie from '../assets/ps5Games/valkyrie.png';
import hotwheels from '../assets/ps5Games/hotwheels.png';
import rugby from '../assets/ps5Games/rugby.png';
import re3nemesis from '../assets/ps5Games/re3nemesis.png';

// Create image mapping object - Complete mapping like ItemDetails
const imageMap = {
  // Library images
  'armoredcore.png': armoredcore,
  'harvestmoon.png': harvestmoon,
  'p5.png': p5,
  'dbd.png': dbd,
  'granblue.png': granblue,
  'suicide.png': suicide,
  
  // Complete wishlist images - matching ItemDetails
  'ffvr.png': ffvr,
  'mhw.png': mhw,
  'gt7.png': gt7,
  'itt.png': ittakes2,
  'er.png': eldenring,
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
  'ea-sports-fc.png': easportsfc,
  'ds2tb.png': ds2tb,
  'mk.png': mk,
  'gy.png': gy,
  'cyberpunk-2077.png': cyberpunk,
  'gta-online.png': gtaonline,
  'mgsse.png': mgsse,
  'codbo6.png': codbo6,
  'nba2k26.png': nba2k26,
  'sf.png': sf,
  'carx-street.png': carxstreet,
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

const Profile = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { wishlist, removeFromWishlist } = useWishlist();
  const { user } = useAuth();

  const handleSettingsClick = () => {
    navigate('/account-settings');
  };

  const handleLibraryShowAll = () => {
    navigate('/library');
  };

  const handleWishlistShowAll = () => {
    navigate('/wishlist');
  };

  // Handle dropdown toggle
  const handleDropdownToggle = (gameId, section) => {
    const dropdownId = `${section}-${gameId}`;
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  // Handle dropdown actions
  const handleDetails = (game) => {
    handleGameClick(game);
    setActiveDropdown(null);
  };

  const handleUninstall = (gameId, section) => {
    // Here you would typically remove the game from the library
    console.log(`Uninstalling game ${gameId} from ${section}`);
    setActiveDropdown(null);
    // You could also update the state to remove the game from the list
  };

  const handleRemoveFromWishlist = (gameId) => {
    removeFromWishlist(gameId);
    setActiveDropdown(null);
  };

  // Handle game click to navigate to item details
  const handleGameClick = (game) => {
    // Use the actual game data from wishlist (which already has all the details)
    const gameData = {
      title: game.title,
      subtitle: game.subtitle || "",
      image: game.image,
      price: game.price,
      rating: game.rating,
      downloads: game.downloads,
      size: game.size,
      company: game.company,
      release: game.release,
      genre: game.genre,
      description: game.description
    };
    
    navigate("/item-details", { state: { gameData } });
  };

  const libraryGames = [
    { id: 1, title: "ARMORED CORE™ VI FIRES OF RUBICON™ - Deluxe Edition", image: "armoredcore.png" },
    { id: 2, title: "Harvest Moon: The Winds of Anthos", image: "harvestmoon.png" },
    { id: 3, title: "Persona 5 Tactical Digital Deluxe", image: "p5.png" }
  ];

  // Get the first 3 items from wishlist for display
  const displayWishlist = wishlist.slice(0, 3);

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-left">
          <div className="avatar">
            <UserOutlined className="avatar-icon" />
          </div>
          <div className="user-info">
            <h2 className="username">{user?.username || 'User'}</h2>
            <p className="full-name">{user?.email || 'No email provided'}</p>
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
            <div key={game.id} className="game-item">
              <div className="game-thumbnail" onClick={() => handleGameClick(game)}>
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
              <div className="game-detailsss" onClick={() => handleGameClick(game)}>
                <h4 className="game-titles">{game.title}</h4>
              </div>
              <div className="game-actions">
                <MoreOutlined 
                  className="more-icon" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdownToggle(game.id, 'library');
                  }}
                />
                {activeDropdown === `library-${game.id}` && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={() => handleDetails(game)}>
                      <InfoCircleOutlined />
                      <span>Details</span>
                    </div>
                    <div className="dropdown-item" onClick={() => handleUninstall(game.id, 'library')}>
                      <DeleteOutlined />
                      <span>Uninstall</span>
                    </div>
                  </div>
                )}
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
          {displayWishlist.length > 0 ? (
            displayWishlist.map((game) => (
            <div key={game.id} className="game-item">
              <div className="game-thumbnail" onClick={() => handleGameClick(game)}>
                <img 
                    src={imageMap[game.image] || imageMap['er.png']} 
                  alt={game.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>
              <div className="game-detailsss" onClick={() => handleGameClick(game)}>
                <h4 className="game-titles">{game.title}</h4>
              </div>
              <div className="game-actions">
                <MoreOutlined 
                  className="more-icon" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdownToggle(game.id, 'wishlist');
                  }}
                />
                {activeDropdown === `wishlist-${game.id}` && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={() => handleDetails(game)}>
                      <InfoCircleOutlined />
                      <span>Details</span>
                    </div>
                    <div className="dropdown-item" onClick={() => handleRemoveFromWishlist(game.id)}>
                      <DeleteOutlined />
                      <span>Remove from Wishlist</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            ))
          ) : (
            <div className="empty-wishlist">
              <p>Your wishlist is empty. Start adding games to see them here!</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
