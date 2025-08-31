import React, { useState } from "react";
import "../styles/componentsStyle/Library.css";
import Header from "../customs/Header";
import Footer from "../customs/Footer";
import { SearchOutlined, MoreOutlined } from '@ant-design/icons';

// Import game images for library games
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

// Create image mapping for library games
const libraryImageMap = {
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
  'dragonball.png': dragonball
};

// Library games data
const libraryGames = [
  { id: 1, title: "It Takes Two", image: "itt.png" },
  { id: 2, title: "ELDEN RING", image: "er.png" },
  { id: 3, title: "Gran Turismo® 7", image: "gt7.png" },
  { id: 4, title: "Tony Hawk's™ Pro Skater", image: "thps.png" },
  { id: 5, title: "Hello Kitty Island Adventure: Deluxe Edition", image: "hellokitty.png" },
  { id: 6, title: "DRAGON QUEST I & II HD-2D Remake", image: "dragonquest.png" },
  { id: 7, title: "Code Violet", image: "codeviolet.png" },
  { id: 8, title: "Tiny Cats", image: "tinycats.png" },
  { id: 9, title: "Until Dawn", image: "untildawn.png" },
  { id: 10, title: "SWORD ART ONLINE Fractured Daydream", image: "swordart.png" },
  { id: 11, title: "Street Fighter™ 6 Years 1-2 Fighters Editio", image: "streetfighter.png" },
  { id: 12, title: "Kingdom Hearts III", image: "kingdomhearts.png" },
  { id: 13, title: "FINAL FANTASY VII REBIRTH", image: "ffvr.png" },
  { id: 14, title: "Goosebumps: Terror in Little Creek - Frightmare Edition", image: "goosebumps.png" },
  { id: 15, title: "THE KING OF FIGHTERS XV Ultimate Edition", image: "kingoffighters.png" },
  { id: 16, title: "DRAGON BALL Z: KAKAROT DAIMA EDITION", image: "dragonball.png" },
  // Add more games for pagination
  { id: 17, title: "Cyberpunk 2077", image: "cyberpunk-2077.png" },
  { id: 18, title: "Grand Theft Auto Online", image: "gta-online.png" },
  { id: 19, title: "Call of Duty Black Ops 6", image: "codbo6.png" },
  { id: 20, title: "NBA 2K26", image: "nba2k26.png" },
  { id: 21, title: "Mortal Kombat", image: "mk.png" },
  { id: 22, title: "Dead by Daylight", image: "dbd.png" },
  { id: 23, title: "Phasmophobia", image: "phasmophobia.png" },
  { id: 24, title: "Hogwarts Legacy", image: "hl.png" },
  { id: 25, title: "ASTRO BOT", image: "ab.png" },
  { id: 26, title: "Hitman World of Assassination", image: "hitman.png" },
  { id: 27, title: "The Last of Us Part II", image: "thelastofus.png" },
  { id: 28, title: "WUCHANG Fallen Feathers", image: "wff.png" },
  { id: 29, title: "DOOM The Dark Ages", image: "doom.png" },
  { id: 30, title: "EA SPORTS FC", image: "ea-sports-fc.png" },
  { id: 31, title: "Death Stranding 2", image: "ds2tb.png" },
  { id: 32, title: "Ghost of Yōtei", image: "gy.png" },
  { id: 33, title: "Metal Gear Solid Delta", image: "mgsse.png" },
  { id: 34, title: "Split Fiction", image: "sf.png" },
  { id: 35, title: "CarX Street", image: "carx-street.png" },
  { id: 36, title: "Forza Horizon 5", image: "fh5.png" },
  { id: 37, title: "Borderlands 4", image: "borderlands4.png" },
  { id: 38, title: "Clair Obscur Expedition 33", image: "coe33.png" },
  { id: 39, title: "Watch Dogs: Legion", image: "watchdog.png" },
  { id: 40, title: "Bad Cat", image: "badcat.png" }
];

const Library = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const gamesPerPage = 16; // Show 16 games per page (4x4 grid)
  const totalPages = Math.ceil(libraryGames.length / gamesPerPage);

  // Filter games based on search term
  const filteredGames = libraryGames.filter(game =>
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
    <div className="library-container">
      {/* Header */}
      <Header />

      {/* Library Section */}
      <section className="library-section">
        <div className="library-content">
          <h1 className="library-title">Library</h1>
          
          {/* Search and Filter Bar */}
          <div className="library-filters">
            <div className="library-search-container">
              <SearchOutlined className="library-search-icon" />
              <input
                type="text"
                placeholder="Search Here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="library-search-input"
              />
            </div>
            <select className="library-filter-select">
              <option>Sort</option>
              <option>Name: A-Z</option>
              <option>Name: Z-A</option>
              <option>Recently Added</option>
              <option>Most Played</option>
            </select>
            <select className="library-filter-select">
              <option>Genre</option>
              <option>Action</option>
              <option>Adventure</option>
              <option>RPG</option>
              <option>Sports</option>
              <option>Racing</option>
            </select>
          </div>

          {/* Games Grid */}
          <div className="library-games-grid">
            {currentGames.map((game) => (
              <div key={game.id} className="library-game-card">
                <div className="library-game-image">
                  <img 
                    src={libraryImageMap[game.image] || libraryImageMap['er.png']} 
                    alt={game.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </div>
                <div className="library-game-info">
                  <h4 className="library-game-title">{game.title}</h4>
                  <MoreOutlined className="library-game-options" />
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredGames.length === 0 && searchTerm && (
            <div className="library-no-results">
              <p>No games found matching "{searchTerm}"</p>
            </div>
          )}

          {/* Pagination */}
          {filteredGames.length > 0 && (
            <div className="library-pagination">
              <button 
                className="library-pagination-btn" 
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                {"<"}
              </button>
              
              {getPageNumbers().map((num) => (
                <button
                  key={num}
                  className={`library-pagination-btn ${currentPage === num ? "active" : ""}`}
                  onClick={() => handlePageChange(num)}
                >
                  {num}
                </button>
              ))}
              
              {totalFilteredPages > 4 && currentPage < totalFilteredPages - 2 && (
                <span className="library-pagination-dots">...</span>
              )}
              
              {totalFilteredPages > 4 && currentPage < totalFilteredPages - 2 && (
                <button 
                  className="library-pagination-btn"
                  onClick={() => handlePageChange(totalFilteredPages)}
                >
                  {totalFilteredPages}
                </button>
              )}
              
              <button 
                className="library-pagination-btn" 
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

export default Library;
