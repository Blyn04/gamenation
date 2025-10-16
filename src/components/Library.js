import React, { useState } from "react";
import Header from "../customs/Header";
import Footer from "../customs/Footer";
import { SearchOutlined, MoreOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { useNavigate } from "react-router-dom";
import 'antd/dist/reset.css';
import "../styles/componentsStyle/AllProducts.css";

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
  { id: 1, title: "It Takes Two", image: "itt.png", genre: "Adventure", playTime: "15-20 hours", lastPlayed: "2 days ago" },
  { id: 2, title: "ELDEN RING", image: "er.png", genre: "RPG", playTime: "50+ hours", lastPlayed: "1 week ago" },
  { id: 3, title: "Gran Turismo® 7", image: "gt7.png", genre: "Racing", playTime: "30+ hours", lastPlayed: "3 days ago" },
  { id: 4, title: "Tony Hawk's™ Pro Skater", image: "thps.png", genre: "Sports", playTime: "10-15 hours", lastPlayed: "1 day ago" },
  { id: 5, title: "Hello Kitty Island Adventure: Deluxe Edition", image: "hellokitty.png", genre: "Adventure", playTime: "20-25 hours", lastPlayed: "4 days ago" },
  { id: 6, title: "DRAGON QUEST I & II HD-2D Remake", image: "dragonquest.png", genre: "RPG", playTime: "40+ hours", lastPlayed: "1 week ago" },
  { id: 7, title: "Code Violet", image: "codeviolet.png", genre: "Action", playTime: "8-12 hours", lastPlayed: "2 days ago" },
  { id: 8, title: "Tiny Cats", image: "tinycats.png", genre: "Adventure", playTime: "5-8 hours", lastPlayed: "3 days ago" },
  { id: 9, title: "Until Dawn", image: "untildawn.png", genre: "Adventure", playTime: "8-10 hours", lastPlayed: "5 days ago" },
  { id: 10, title: "SWORD ART ONLINE Fractured Daydream", image: "swordart.png", genre: "RPG", playTime: "25+ hours", lastPlayed: "2 days ago" },
  { id: 11, title: "Street Fighter™ 6 Years 1-2 Fighters Editio", image: "streetfighter.png", genre: "Action", playTime: "20+ hours", lastPlayed: "1 day ago" },
  { id: 12, title: "Kingdom Hearts III", image: "kingdomhearts.png", genre: "RPG", playTime: "35+ hours", lastPlayed: "1 week ago" },
  { id: 13, title: "FINAL FANTASY VII REBIRTH", image: "ffvr.png", genre: "RPG", playTime: "60+ hours", lastPlayed: "3 days ago" },
  { id: 14, title: "Goosebumps: Terror in Little Creek - Frightmare Edition", image: "goosebumps.png", genre: "Adventure", playTime: "6-10 hours", lastPlayed: "4 days ago" },
  { id: 15, title: "THE KING OF FIGHTERS XV Ultimate Edition", image: "kingoffighters.png", genre: "Action", playTime: "15+ hours", lastPlayed: "2 days ago" },
  { id: 16, title: "DRAGON BALL Z: KAKAROT DAIMA EDITION", image: "dragonball.png", genre: "Action", playTime: "30+ hours", lastPlayed: "1 week ago" },
  // Add more games for pagination
  { id: 17, title: "Cyberpunk 2077", image: "cyberpunk-2077.png", genre: "Action", playTime: "40+ hours", lastPlayed: "2 days ago" },
  { id: 18, title: "Grand Theft Auto Online", image: "gta-online.png", genre: "Action", playTime: "100+ hours", lastPlayed: "1 day ago" },
  { id: 19, title: "Call of Duty Black Ops 6", image: "codbo6.png", genre: "Action", playTime: "25+ hours", lastPlayed: "3 days ago" },
  { id: 20, title: "NBA 2K26", image: "nba2k26.png", genre: "Sports", playTime: "30+ hours", lastPlayed: "1 day ago" },
  { id: 21, title: "Mortal Kombat", image: "mk.png", genre: "Action", playTime: "20+ hours", lastPlayed: "2 days ago" },
  { id: 22, title: "Dead by Daylight", image: "dbd.png", genre: "Action", playTime: "50+ hours", lastPlayed: "1 day ago" },
  { id: 23, title: "Phasmophobia", image: "phasmophobia.png", genre: "Adventure", playTime: "15+ hours", lastPlayed: "4 days ago" },
  { id: 24, title: "Hogwarts Legacy", image: "hl.png", genre: "RPG", playTime: "45+ hours", lastPlayed: "1 week ago" },
  { id: 25, title: "ASTRO BOT", image: "ab.png", genre: "Adventure", playTime: "8-12 hours", lastPlayed: "3 days ago" },
  { id: 26, title: "Hitman World of Assassination", image: "hitman.png", genre: "Action", playTime: "35+ hours", lastPlayed: "2 days ago" },
  { id: 27, title: "The Last of Us Part II", image: "thelastofus.png", genre: "Adventure", playTime: "25+ hours", lastPlayed: "1 week ago" },
  { id: 28, title: "WUCHANG Fallen Feathers", image: "wff.png", genre: "Action", playTime: "20+ hours", lastPlayed: "3 days ago" },
  { id: 29, title: "DOOM The Dark Ages", image: "doom.png", genre: "Action", playTime: "15+ hours", lastPlayed: "2 days ago" },
  { id: 30, title: "EA SPORTS FC", image: "ea-sports-fc.png", genre: "Sports", playTime: "40+ hours", lastPlayed: "1 day ago" },
  { id: 31, title: "Death Stranding 2", image: "ds2tb.png", genre: "Adventure", playTime: "30+ hours", lastPlayed: "1 week ago" },
  { id: 32, title: "Ghost of Yōtei", image: "gy.png", genre: "Action", playTime: "25+ hours", lastPlayed: "4 days ago" },
  { id: 33, title: "Metal Gear Solid Delta", image: "mgsse.png", genre: "Action", playTime: "20+ hours", lastPlayed: "2 days ago" },
  { id: 34, title: "Split Fiction", image: "sf.png", genre: "Adventure", playTime: "12+ hours", lastPlayed: "3 days ago" },
  { id: 35, title: "CarX Street", image: "carx-street.png", genre: "Racing", playTime: "25+ hours", lastPlayed: "1 day ago" },
  { id: 36, title: "Forza Horizon 5", image: "fh5.png", genre: "Racing", playTime: "50+ hours", lastPlayed: "2 days ago" },
  { id: 37, title: "Borderlands 4", image: "borderlands4.png", genre: "Action", playTime: "30+ hours", lastPlayed: "1 week ago" },
  { id: 38, title: "Clair Obscur Expedition 33", image: "coe33.png", genre: "RPG", playTime: "35+ hours", lastPlayed: "3 days ago" },
  { id: 39, title: "Watch Dogs: Legion", image: "watchdog.png", genre: "Action", playTime: "25+ hours", lastPlayed: "1 week ago" },
  { id: 40, title: "Bad Cat", image: "badcat.png", genre: "Adventure", playTime: "5-8 hours", lastPlayed: "2 days ago" }
];

const Library = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const navigate = useNavigate();
  const gamesPerPage = 16; // Show 16 games per page (4x4 grid)
  const totalPages = Math.ceil(libraryGames.length / gamesPerPage);

  // Filter games based on search term and filters
  const filteredGames = libraryGames.filter(game => {
    // Search term filter
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Genre filter
    const matchesGenre = !genreFilter || game.genre === genreFilter;
    
    return matchesSearch && matchesGenre;
  }).sort((a, b) => {
    // Apply sorting
    if (!sortBy) return 0;
    
    switch (sortBy) {
      case 'name-a-z':
        return a.title.localeCompare(b.title);
      case 'name-z-a':
        return b.title.localeCompare(a.title);
      case 'recently-added':
        return b.id - a.id; // Higher ID = more recent
      case 'most-played':
        // Sort by play time (extract numbers from playTime string)
        const aTime = parseInt(a.playTime.match(/\d+/)?.[0] || '0');
        const bTime = parseInt(b.playTime.match(/\d+/)?.[0] || '0');
        return bTime - aTime;
      default:
        return 0;
    }
  });

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

  // Reset to page 1 when searching or filtering
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy, genreFilter]);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-blue-800 text-white font-sans pt-20 relative">
      {/* Background overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800/15 via-transparent to-blue-600/15"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/15 via-transparent to-blue-800/15"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-r from-blue-800/10 via-transparent to-blue-600/10 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Library Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl mx-auto py-10">
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white text-left drop-shadow-lg">
            Library
          </h1>
          
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
              <div className="allproducts-filter-group">
                <label className="allproducts-filter-label">Sort By</label>
                <Select
                  className="allproducts-filter-select"
                  placeholder="Sort"
                  value={sortBy}
                  onChange={setSortBy}
                  allowClear
                  style={{ minWidth: 150 }}
                  options={[
                    { value: 'name-a-z', label: 'Name: A-Z' },
                    { value: 'name-z-a', label: 'Name: Z-A' },
                    { value: 'recently-added', label: 'Recently Added' },
                    { value: 'most-played', label: 'Most Played' }
                  ]}
                />
              </div>
              
              <div className="allproducts-filter-group">
                <label className="allproducts-filter-label">Genre</label>
                <Select
                  className="allproducts-filter-select"
                  placeholder="Genre"
                  value={genreFilter}
                  onChange={setGenreFilter}
                  allowClear
                  style={{ minWidth: 120 }}
                  options={[
                    { value: 'Action', label: 'Action' },
                    { value: 'Adventure', label: 'Adventure' },
                    { value: 'RPG', label: 'RPG' },
                    { value: 'Sports', label: 'Sports' },
                    { value: 'Racing', label: 'Racing' }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Games Grid - 2 cards per row on mobile, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8">
            {currentGames.map((game, index) => (
              <div 
                key={game.id} 
                className="bg-transparent border-none p-0 text-left rounded-2xl transition-transform duration-200 cursor-pointer relative overflow-hidden animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => handleGameClick(game)}
              >
                <div className="w-full h-48 sm:h-52 lg:h-56 rounded-xl mb-3 overflow-hidden bg-slate-700 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-black/40">
                  <img 
                    src={libraryImageMap[game.image] || libraryImageMap['er.png']} 
                    alt={game.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-sm font-semibold m-0 leading-tight text-white break-words flex-1">
                    {game.title}
                  </h4>
                  <MoreOutlined className="text-white/70 text-base cursor-pointer p-1 rounded transition-all duration-200 hover:text-white hover:bg-white/10 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredGames.length === 0 && searchTerm && (
            <div className="text-center py-10 text-white/70 text-base">
              <p className="m-0 italic">No games found matching "{searchTerm}"</p>
            </div>
          )}

          {/* Pagination */}
          {filteredGames.length > 0 && (
            <div className="mt-8 flex items-center gap-2 flex-wrap justify-center">
              <button 
                className="bg-white/10 border border-white/20 text-white px-3 py-2 rounded-xl cursor-pointer text-sm transition-all duration-300 min-w-10 backdrop-blur-sm hover:bg-white/15 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed" 
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                {"<"}
              </button>
              
              {getPageNumbers().map((num) => (
                <button
                  key={num}
                  className={`px-3 py-2 rounded-xl cursor-pointer text-sm transition-all duration-300 min-w-10 backdrop-blur-sm ${
                    currentPage === num 
                      ? "bg-white text-slate-900 border-white" 
                      : "bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-white/30"
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
                  className="bg-white/10 border border-white/20 text-white px-3 py-2 rounded-xl cursor-pointer text-sm transition-all duration-300 min-w-10 backdrop-blur-sm hover:bg-white/15 hover:border-white/30"
                  onClick={() => handlePageChange(totalFilteredPages)}
                >
                  {totalFilteredPages}
                </button>
              )}
              
              <button 
                className="bg-white/10 border border-white/20 text-white px-3 py-2 rounded-xl cursor-pointer text-sm transition-all duration-300 min-w-10 backdrop-blur-sm hover:bg-white/15 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed" 
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
