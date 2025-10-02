import React, { useState } from "react";
import "../styles/componentsStyle/LikePage.css";
import Header from "../customs/Header";
import Footer from "../customs/Footer";
import { SearchOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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

  // Handle game card click
  const handleGameClick = (game) => {
    // Generate random details for the game
    const randomPrice = Math.floor(Math.random() * 2000) + 1000; // Price between 1000-3000
    const randomRating = (Math.random() * 2 + 3).toFixed(1); // Rating between 3.0-5.0
    const randomDownloads = Math.floor(Math.random() * 2000000) + 100000; // Downloads between 100k-2M
    const randomSize = Math.floor(Math.random() * 50) + 10; // Size between 10-60GB
    
    const gameData = {
      title: game.title,
      subtitle: "",
      image: game.image,
      price: `₱${randomPrice.toLocaleString()}`,
      rating: randomRating,
      downloads: randomDownloads,
      size: `${randomSize}GB`,
      company: "GameNation Studios",
      release: "2024",
      genre: "Action",
      description: `Experience the ultimate gaming adventure with ${game.title}. This incredible game offers stunning graphics, immersive gameplay, and hours of entertainment. Perfect for gamers of all skill levels, ${game.title} delivers an unforgettable experience that will keep you coming back for more.`
    };
    
    navigate("/item-details", { state: { gameData } });
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
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-blue-800 text-white font-['Inter'] pt-20 relative">
      {/* Header */}
      <Header />

      {/* Wishlist Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl mx-auto py-10">
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white text-left drop-shadow-lg">Wishlist</h1>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center">
            <div className="relative flex items-center bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus-within:bg-white/15 focus-within:border-amber-500/50 focus-within:shadow-lg focus-within:shadow-amber-500/20 min-w-64">
              <SearchOutlined className="text-white/70 text-base ml-3 mr-2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search Here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none text-white text-sm py-3 px-4 w-full outline-none font-inherit placeholder-white/60"
              />
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white text-sm cursor-pointer min-w-32 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                <option className="bg-slate-900 text-white">Sort</option>
                <option className="bg-slate-900 text-white">Name: A-Z</option>
                <option className="bg-slate-900 text-white">Name: Z-A</option>
                <option className="bg-slate-900 text-white">Recently Added</option>
                <option className="bg-slate-900 text-white">Most Wanted</option>
              </select>
              <select className="px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white text-sm cursor-pointer min-w-32 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                <option className="bg-slate-900 text-white">Genre</option>
                <option className="bg-slate-900 text-white">Action</option>
                <option className="bg-slate-900 text-white">Adventure</option>
                <option className="bg-slate-900 text-white">RPG</option>
                <option className="bg-slate-900 text-white">Sports</option>
                <option className="bg-slate-900 text-white">Racing</option>
              </select>
            </div>
          </div>

          {/* Games Grid - 2 cards per row on mobile, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8">
            {currentGames.map((game, index) => (
              <div 
                key={game.id} 
                className="wishlist-game-card group cursor-pointer bg-transparent border-none p-0 text-left rounded-2xl transition-transform duration-200 relative overflow-hidden animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => handleGameClick(game)}
              >
                <div className="wishlist-game-image relative overflow-hidden rounded-xl mb-3 bg-slate-700 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                  <img 
                    src={wishlistImageMap[game.image] || wishlistImageMap['er.png']} 
                    alt={game.title}
                    className="w-full h-48 sm:h-44 md:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="wishlist-game-info flex justify-between items-start gap-2">
                  <h4 className="wishlist-game-title text-white text-sm font-semibold leading-tight flex-1 line-clamp-2">{game.title}</h4>
                  <div 
                    className="wishlist-heart-container flex-shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleHeartClick(game.id);
                    }}
                  >
                    {game.isLiked ? (
                      <HeartFilled 
                        className="wishlist-heart-filled text-red-500 text-lg p-1 rounded-full bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/40 hover:scale-110 transition-all duration-300 cursor-pointer" 
                      />
                    ) : (
                      <HeartOutlined 
                        className="wishlist-heart-outline text-white/70 text-lg p-1 rounded-full border border-white/20 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/30 hover:scale-110 transition-all duration-300 cursor-pointer" 
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredGames.length === 0 && searchTerm && (
            <div className="text-center py-10 text-white/70 text-base">
              <p className="italic">No games found matching "{searchTerm}"</p>
            </div>
          )}

          {/* Empty wishlist message */}
          {games.length === 0 && (
            <div className="text-center py-16 px-5 text-white/70">
              <HeartOutlined className="text-6xl text-white/30 mb-5 block" />
              <h3 className="text-2xl mb-3 text-white/80">Your wishlist is empty</h3>
              <p className="text-base italic">Start adding games to your wishlist to see them here!</p>
            </div>
          )}

          {/* Pagination */}
          {filteredGames.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              <button 
                className="px-3 py-2 rounded-xl border border-white/20 bg-white/10 text-white text-sm min-w-[40px] backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed" 
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                {"<"}
              </button>
              
              {getPageNumbers().map((num) => (
                <button
                  key={num}
                  className={`px-3 py-2 rounded-xl border text-sm min-w-[40px] backdrop-blur-sm transition-all duration-300 ${
                    currentPage === num 
                      ? "bg-white text-slate-800 border-white" 
                      : "border-white/20 bg-white/10 text-white hover:bg-white/15 hover:border-white/30"
                  }`}
                  onClick={() => handlePageChange(num)}
                >
                  {num}
                </button>
              ))}
              
              {totalFilteredPages > 4 && currentPage < totalFilteredPages - 2 && (
                <span className="text-white text-sm px-1">...</span>
              )}
              
              {totalFilteredPages > 4 && currentPage < totalFilteredPages - 2 && (
                <button 
                  className="px-3 py-2 rounded-xl border border-white/20 bg-white/10 text-white text-sm min-w-[40px] backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/30"
                  onClick={() => handlePageChange(totalFilteredPages)}
                >
                  {totalFilteredPages}
                </button>
              )}
              
              <button 
                className="px-3 py-2 rounded-xl border border-white/20 bg-white/10 text-white text-sm min-w-[40px] backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed" 
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
