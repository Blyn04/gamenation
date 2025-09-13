import React, { useState } from "react";
import "../styles/componentsStyle/LikePage.css";
import Header from "../customs/Header";
import Footer from "../customs/Footer";
import { SearchOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';

// Import game images for wishlist games
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
import dbd from '../assets/ps5Games/dbd.png';
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

// Create image mapping for wishlist games
const wishlistImageMap = {
  'itt.png': ittakes2,
  'er.png': eldenring,
  'gt7.png': gt7,
  'thps.png': thps,
  'hellokitty.png': hellokitty,
  'dragonquest.png': dragonquest,
  'codeviolet.png': codeviolet,
  'tinycats.png': tinycats,
  'untildawn.png': untildawn,
  'swordart.png': swordart,
  'streetfighter.png': streetfighter,
  'kingdomhearts.png': kingdomhearts,
  'ffvr.png': ffvr,
  'goosebumps.png': goosebumps,
  'kingoffighters.png': kingoffighters,
  'dragonball.png': dragonball,
  'cyberpunk-2077.png': cyberpunk,
  'gta-online.png': gtaonline,
  'codbo6.png': codbo6,
  'nba2k26.png': nba2k26,
  'mk.png': mk,
  'dbd.png': dbd,
  'phasmophobia.png': phasmophobia,
  'hl.png': hl,
  'ab.png': ab,
  'hitman.png': hitman,
  'thelastofus.png': thelastofus,
  'wff.png': wff,
  'doom.png': doom,
  'ea-sports-fc.png': easportsfc,
  'ds2tb.png': ds2tb,
  'gy.png': gy,
  'mgsse.png': mgsse,
  'sf.png': sf,
  'carx-street.png': carxstreet,
  'fh5.png': fh5,
  'borderlands4.png': borderlands4,
  'coe33.png': coe33,
  'watchdog.png': watchdog,
  'badcat.png': badcat
};

// Wishlist games data
const wishlistGames = [
  { id: 1, title: "It Takes Two", image: "itt.png", isLiked: true },
  { id: 2, title: "ELDEN RING", image: "er.png", isLiked: true },
  { id: 3, title: "Gran Turismo® 7", image: "gt7.png", isLiked: true },
  { id: 4, title: "Tony Hawk's™ Pro Skater", image: "thps.png", isLiked: true },
  { id: 5, title: "Hello Kitty Island Adventure: Deluxe Edition", image: "hellokitty.png", isLiked: true },
  { id: 6, title: "DRAGON QUEST I & II HD-2D Remake", image: "dragonquest.png", isLiked: true },
  { id: 7, title: "Code Violet", image: "codeviolet.png", isLiked: true },
  { id: 8, title: "Tiny Cats", image: "tinycats.png", isLiked: true },
  { id: 9, title: "Until Dawn", image: "untildawn.png", isLiked: true },
  { id: 10, title: "SWORD ART ONLINE Fractured Daydream", image: "swordart.png", isLiked: true },
  { id: 11, title: "Street Fighter™ 6 Years 1-2 Fighters Editio", image: "streetfighter.png", isLiked: true },
  { id: 12, title: "Kingdom Hearts III", image: "kingdomhearts.png", isLiked: true },
  { id: 13, title: "FINAL FANTASY VII REBIRTH", image: "ffvr.png", isLiked: true },
  { id: 14, title: "Goosebumps: Terror in Little Creek - Frightmare Edition", image: "goosebumps.png", isLiked: true },
  { id: 15, title: "THE KING OF FIGHTERS XV Ultimate Edition", image: "kingoffighters.png", isLiked: true },
  { id: 16, title: "DRAGON BALL Z: KAKAROT DAIMA EDITION", image: "dragonball.png", isLiked: true },
  { id: 17, title: "Cyberpunk 2077", image: "cyberpunk-2077.png", isLiked: true },
  { id: 18, title: "Grand Theft Auto Online", image: "gta-online.png", isLiked: true },
  { id: 19, title: "Call of Duty Black Ops 6", image: "codbo6.png", isLiked: true },
  { id: 20, title: "NBA 2K26", image: "nba2k26.png", isLiked: true },
  { id: 21, title: "Mortal Kombat", image: "mk.png", isLiked: true },
  { id: 22, title: "Dead by Daylight", image: "dbd.png", isLiked: true },
  { id: 23, title: "Phasmophobia", image: "phasmophobia.png", isLiked: true },
  { id: 24, title: "Hogwarts Legacy", image: "hl.png", isLiked: true },
  { id: 25, title: "ASTRO BOT", image: "ab.png", isLiked: true },
  { id: 26, title: "Hitman World of Assassination", image: "hitman.png", isLiked: true },
  { id: 27, title: "The Last of Us Part II", image: "thelastofus.png", isLiked: true },
  { id: 28, title: "WUCHANG Fallen Feathers", image: "wff.png", isLiked: true },
  { id: 29, title: "DOOM The Dark Ages", image: "doom.png", isLiked: true },
  { id: 30, title: "EA SPORTS FC", image: "ea-sports-fc.png", isLiked: true },
  { id: 31, title: "Death Stranding 2", image: "ds2tb.png", isLiked: true },
  { id: 32, title: "Ghost of Yōtei", image: "gy.png", isLiked: true },
  { id: 33, title: "Metal Gear Solid Delta", image: "mgsse.png", isLiked: true },
  { id: 34, title: "Split Fiction", image: "sf.png", isLiked: true },
  { id: 35, title: "CarX Street", image: "carx-street.png", isLiked: true },
  { id: 36, title: "Forza Horizon 5", image: "fh5.png", isLiked: true },
  { id: 37, title: "Borderlands 4", image: "borderlands4.png", isLiked: true },
  { id: 38, title: "Clair Obscur Expedition 33", image: "coe33.png", isLiked: true },
  { id: 39, title: "Watch Dogs: Legion", image: "watchdog.png", isLiked: true },
  { id: 40, title: "Bad Cat", image: "badcat.png", isLiked: true }
];

const LikePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [games, setGames] = useState(wishlistGames);
  const gamesPerPage = 16; // Show 16 games per page (4x4 grid)
  const totalPages = Math.ceil(games.length / gamesPerPage);

  // Filter games based on search term
  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination for filtered games
  const totalFilteredPages = Math.ceil(filteredGames.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const currentGames = filteredGames.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalFilteredPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Handle heart click (remove from wishlist)
  const handleHeartClick = (gameId) => {
    setGames(prevGames => prevGames.filter(game => game.id !== gameId));
  };

  // Reset to page 1 when searching
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 4;
    
    if (totalFilteredPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalFilteredPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page, current page, and last page with ellipsis
      if (currentPage <= 2) {
        pages.push(1, 2, 3, 4);
      } else if (currentPage >= totalFilteredPages - 1) {
        pages.push(totalFilteredPages - 3, totalFilteredPages - 2, totalFilteredPages - 1, totalFilteredPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
      }
    }
    
    return pages;
  };

  return (
    <div className="wishlist-container">
      {/* Header */}
      <Header />

      {/* Wishlist Section */}
      <section className="wishlist-section">
        <div className="wishlist-content">
          <h1 className="wishlist-title">Wishlist</h1>
          
          {/* Search and Filter Bar */}
          <div className="wishlist-filters">
            <div className="wishlist-search-container">
              <SearchOutlined className="wishlist-search-icon" />
              <input
                type="text"
                placeholder="Search Here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="wishlist-search-input"
              />
            </div>
            <select className="wishlist-filter-select">
              <option>Sort</option>
              <option>Name: A-Z</option>
              <option>Name: Z-A</option>
              <option>Recently Added</option>
              <option>Most Wanted</option>
            </select>
            <select className="wishlist-filter-select">
              <option>Genre</option>
              <option>Action</option>
              <option>Adventure</option>
              <option>RPG</option>
              <option>Sports</option>
              <option>Racing</option>
            </select>
          </div>

          {/* Games Grid */}
          <div className="wishlist-games-grid">
            {currentGames.map((game) => (
              <div key={game.id} className="wishlist-game-card">
                <div className="wishlist-game-image">
                  <img 
                    src={wishlistImageMap[game.image] || wishlistImageMap['er.png']} 
                    alt={game.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </div>
                <div className="wishlist-game-info">
                  <h4 className="wishlist-game-title">{game.title}</h4>
                  <div className="wishlist-heart-container">
                    {game.isLiked ? (
                      <HeartFilled 
                        className="wishlist-heart-filled" 
                        onClick={() => handleHeartClick(game.id)}
                      />
                    ) : (
                      <HeartOutlined 
                        className="wishlist-heart-outline" 
                        onClick={() => handleHeartClick(game.id)}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredGames.length === 0 && searchTerm && (
            <div className="wishlist-no-results">
              <p>No games found matching "{searchTerm}"</p>
            </div>
          )}

          {/* Empty wishlist message */}
          {games.length === 0 && (
            <div className="wishlist-empty">
              <HeartOutlined className="wishlist-empty-icon" />
              <h3>Your wishlist is empty</h3>
              <p>Start adding games to your wishlist to see them here!</p>
            </div>
          )}

          {/* Pagination */}
          {filteredGames.length > 0 && (
            <div className="wishlist-pagination">
              <button 
                className="wishlist-pagination-btn" 
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                {"<"}
              </button>
              
              {getPageNumbers().map((num) => (
                <button
                  key={num}
                  className={`wishlist-pagination-btn ${currentPage === num ? "active" : ""}`}
                  onClick={() => handlePageChange(num)}
                >
                  {num}
                </button>
              ))}
              
              {totalFilteredPages > 4 && currentPage < totalFilteredPages - 2 && (
                <span className="wishlist-pagination-dots">...</span>
              )}
              
              {totalFilteredPages > 4 && currentPage < totalFilteredPages - 2 && (
                <button 
                  className="wishlist-pagination-btn"
                  onClick={() => handlePageChange(totalFilteredPages)}
                >
                  {totalFilteredPages}
                </button>
              )}
              
              <button 
                className="wishlist-pagination-btn" 
                onClick={handleNextPage}
                disabled={currentPage === totalFilteredPages}
              >
                {">"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LikePage;
