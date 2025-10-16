import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/componentsStyle/AllProducts.css";
import Header from "../customs/Header";
import Footer from "../customs/Footer";
import { PlayCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import 'antd/dist/reset.css';

// Import game images
import watchdog from '../assets/ps5Games/watchdog.png';
import ffvr from '../assets/ps5Games/ffvr.png';
import badcat from '../assets/ps5Games/badcat.png';
import digimon from '../assets/ps5Games/digimon.png';
import octapath0 from '../assets/ps5Games/octapath0.png';
import sh1 from '../assets/ps5Games/sh2.png'; // Using sh2 as placeholder for sh1
import dytb from '../assets/ps5Games/dytb.png';
import re3nemesis from '../assets/ps5Games/re3nemesis.png';
import catsritual from '../assets/ps5Games/catsritual.png';
import srcw from '../assets/ps5Games/srcw.png';
import outerworld from '../assets/ps5Games/outerworld.png';
import tekken8 from '../assets/ps5Games/tekken8.png';
import lego from '../assets/ps5Games/lego.png';
import lifestrange from '../assets/ps5Games/lifestrange.png';
import metaphor from '../assets/ps5Games/metaphor.png';
import readyornot from '../assets/ps5Games/readyornot.png';
import ijgc from '../assets/ps5Games/ijgc.png';
import firstberserker from '../assets/ps5Games/firstberserker.png';
import spy from '../assets/ps5Games/spy.png';
import p5 from '../assets/ps5Games/p5.png';
import edenzero from '../assets/ps5Games/edenzero.png';
import hxh from '../assets/ps5Games/hxh.png';
import atelieryumia from '../assets/ps5Games/atelieryumia.png';
import shin from '../assets/ps5Games/shin.png';
import f1 from '../assets/ps5Games/f1.png';
import mhw from '../assets/ps5Games/mhw.png';
import er from '../assets/ps5Games/er.png';

// Create image mapping
const imageMap = {
  'watchdog.png': watchdog,
  'ffvr.png': ffvr,
  'badcat.png': badcat,
  'digimon.png': digimon,
  'octapath0.png': octapath0,
  'sh1.png': sh1,
  'dytb.png': dytb,
  're3nemesis.png': re3nemesis,
  'catsritual.png': catsritual,
  'srcw.png': srcw,
  'outerworld.png': outerworld,
  'tekken8.png': tekken8,
  'lego.png': lego,
  'lifestrange.png': lifestrange,
  'metaphor.png': metaphor,
  'readyornot.png': readyornot,
  'ijgc.png': ijgc,
  'firstberserker.png': firstberserker,
  'spy.png': spy,
  'p5.png': p5,
  'edenzero.png': edenzero,
  'hxh.png': hxh,
  'atelieryumia.png': atelieryumia,
  'shin.png': shin,
  'f1.png': f1,
  'mhw.png': mhw,
  'er.png': er
};

// Extended product data with more games for pagination
const allProducts = [
  { id: 1, title: "Watch Dogs: Legion - Deluxe Edition", price: "₱1,800", image: "watchdog.png", genre: "Action", type: "Digital", priceRange: "1000-2000" },
  { id: 2, title: "FINAL FANTASY VII REBIRTH", price: "₱2,500", image: "ffvr.png", genre: "RPG", type: "Digital", priceRange: "2000-3000" },
  { id: 3, title: "Bad Cat", price: "₱1,000", image: "badcat.png", genre: "Adventure", type: "Digital", priceRange: "1000-2000" },
  { id: 4, title: "Digimon Story Time Stranger", price: "₱1,500", image: "digimon.png", genre: "RPG", type: "Digital", priceRange: "1000-2000" },
  { id: 5, title: "OCTOPATH TRAVELER O", price: "₱1,800", image: "octapath0.png", genre: "RPG", type: "Digital", priceRange: "1000-2000" },
  { id: 6, title: "SILENT HILL 1", price: "₱2,800", image: "sh1.png", genre: "Adventure", type: "Digital", priceRange: "2000-3000" },
  { id: 7, title: "Dying Light: The Beast", price: "₱1,200", image: "dytb.png", genre: "Action", type: "Digital", priceRange: "1000-2000" },
  { id: 8, title: "Resident Evil 3 Nemesis", price: "₱1,700", image: "re3nemesis.png", genre: "Action", type: "Digital", priceRange: "1000-2000" },
  { id: 9, title: "Cats Ritual", price: "₱1,000", image: "catsritual.png", genre: "Adventure", type: "Digital", priceRange: "1000-2000" },
  { id: 10, title: "Sonic Racing: CrossWorlds", price: "₱2,000", image: "srcw.png", genre: "Racing", type: "Digital", priceRange: "1000-2000" },
  { id: 11, title: "The Outer Worlds 2", price: "₱2,800", image: "outerworld.png", genre: "RPG", type: "Digital", priceRange: "2000-3000" },
  { id: 12, title: "TEKKEN 8 Advanced Edition", price: "₱2,400", image: "tekken8.png", genre: "Action", type: "Deluxe", priceRange: "2000-3000" },
  { id: 13, title: "LEGO® Horizon Adventures™", price: "₱2,800", image: "lego.png", genre: "Adventure", type: "Digital", priceRange: "2000-3000" },
  { id: 14, title: "Life is Strange: Double Exposure", price: "₱2,800", image: "lifestrange.png", genre: "Adventure", type: "Digital", priceRange: "2000-3000" },
  { id: 15, title: "Metaphor: ReFantazio", price: "₱2,800", image: "metaphor.png", genre: "RPG", type: "Digital", priceRange: "2000-3000" },
  { id: 16, title: "Ready or Not: Digital Deluxe Edition", price: "₱2,200", image: "readyornot.png", genre: "Action", type: "Deluxe", priceRange: "2000-3000" },
  { id: 17, title: "Indiana Jones and the Great Circle", price: "₱1,100", image: "ijgc.png", genre: "Adventure", type: "Digital", priceRange: "1000-2000" },
  { id: 18, title: "The First Berserker: Khazan", price: "₱2,800", image: "firstberserker.png", genre: "Action", type: "Digital", priceRange: "2000-3000" },
  { id: 19, title: "SPYKANYA: Operation Memories", price: "₱2,800", image: "spy.png", genre: "Adventure", type: "Digital", priceRange: "2000-3000" },
  { id: 20, title: "Persona 5 Tactical", price: "₱2,800", image: "p5.png", genre: "RPG", type: "Digital", priceRange: "2000-3000" },
  { id: 21, title: "EDENS ZERO", price: "₱2,400", image: "edenzero.png", genre: "RPG", type: "Digital", priceRange: "2000-3000" },
  { id: 22, title: "HUNTER×HUNTER NEN×IMPACT", price: "₱1,500", image: "hxh.png", genre: "Action", type: "Digital", priceRange: "1000-2000" },
  { id: 23, title: "Atelier Yumic The Alchemist of Memories", price: "₱1,500", image: "atelieryumia.png", genre: "RPG", type: "Digital", priceRange: "1000-2000" },
  { id: 24, title: "Shin Megami Tensei V Vengeance", price: "₱2,000", image: "shin.png", genre: "RPG", type: "Digital", priceRange: "1000-2000" },
  { id: 25, title: "F1 24", price: "₱1,700", image: "f1.png", genre: "Racing", type: "Digital", priceRange: "1000-2000" },
  // Additional games for pagination
  { id: 26, title: "Monster Hunter Wilds", price: "₱3,200", image: "mhw.png", genre: "Action", type: "Digital", priceRange: "3000+" },
  { id: 27, title: "Cyberpunk 2077", price: "₱2,100", image: "cyberpunk-2077.png", genre: "Action", type: "Digital", priceRange: "2000-3000" },
  { id: 28, title: "Grand Theft Auto Online", price: "₱1,800", image: "gta-online.png", genre: "Action", type: "Digital", priceRange: "1000-2000" },
  { id: 29, title: "Call of Duty Black Ops 6", price: "₱2,600", image: "codbo6.png", genre: "Action", type: "Digital", priceRange: "2000-3000" },
  { id: 30, title: "NBA 2K26", price: "₱2,300", image: "nba2k26.png", genre: "Sports", type: "Digital", priceRange: "2000-3000" },
  { id: 31, title: "Mortal Kombat", price: "₱2,100", image: "mk.png", genre: "Action", type: "Digital", priceRange: "2000-3000" },
  { id: 32, title: "Street Fighter 6", price: "₱2,400", image: "streetfighter.png", genre: "Action", type: "Digital", priceRange: "2000-3000" },
  { id: 33, title: "King of Fighters XV", price: "₱1,900", image: "kingoffighters.png", genre: "Action", type: "Digital", priceRange: "1000-2000" },
  { id: 34, title: "Dead by Daylight", price: "₱1,600", image: "dbd.png", genre: "Action", type: "Digital", priceRange: "1000-2000" },
  { id: 35, title: "Phasmophobia", price: "₱800", image: "phasmophobia.png", genre: "Adventure", type: "Digital", priceRange: "under-1000" },
  { id: 36, title: "Hogwarts Legacy", price: "₱2,700", image: "hl.png", genre: "RPG", type: "Digital", priceRange: "2000-3000" },
  { id: 37, title: "ASTRO BOT", price: "₱1,900", image: "ab.png", genre: "Adventure", type: "Digital", priceRange: "1000-2000" },
  { id: 38, title: "Hitman World of Assassination", price: "₱2,200", image: "hitman.png", genre: "Action", type: "Digital", priceRange: "2000-3000" },
  { id: 39, title: "The Last of Us Part II", price: "₱2,800", image: "thelastofus.png", genre: "Action", type: "Digital", priceRange: "2000-3000" },
  { id: 40, title: "WUCHANG Fallen Feathers", price: "₱2,500", image: "wff.png", genre: "Action", type: "Digital", priceRange: "2000-3000" },
  { id: 41, title: "DOOM The Dark Ages", price: "₱2,300", image: "doom.png", genre: "Action", type: "Digital", priceRange: "2000-3000" },
  { id: 42, title: "EA SPORTS FC", price: "₱2,400", image: "ea-sports-fc.png", genre: "Sports", type: "Digital", priceRange: "2000-3000" },
  { id: 43, title: "Death Stranding 2", price: "₱2,900", image: "ds2tb.png", genre: "Adventure", type: "Digital", priceRange: "2000-3000" },
  { id: 44, title: "Ghost of Yōtei", price: "₱2,600", image: "gy.png", genre: "Action", type: "Digital", priceRange: "2000-3000" },
  { id: 45, title: "Metal Gear Solid Delta", price: "₱3,000", image: "mgsse.png", genre: "Action", type: "Digital", priceRange: "3000+" },
  { id: 46, title: "Split Fiction", price: "₱2,200", image: "sf.png", genre: "Adventure", type: "Digital", priceRange: "2000-3000" },
  { id: 47, title: "CarX Street", price: "₱1,800", image: "carx-street.png", genre: "Racing", type: "Digital", priceRange: "1000-2000" },
  { id: 48, title: "Forza Horizon 5", price: "₱2,500", image: "fh5.png", genre: "Racing", type: "Digital", priceRange: "2000-3000" },
  { id: 49, title: "Borderlands 4", price: "₱2,700", image: "borderlands4.png", genre: "Action", type: "Digital", priceRange: "2000-3000" },
  { id: 50, title: "Clair Obscur Expedition 33", price: "₱2,300", image: "coe33.png", genre: "RPG", type: "Digital", priceRange: "2000-3000" }
];

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMonsterHunterModalOpen, setIsMonsterHunterModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const productsPerPage = 25; // Show 25 products per page (5x5 grid)
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  // Handle search term from header navigation
  useEffect(() => {
    if (location.state?.searchTerm) {
      setSearchTerm(location.state.searchTerm);
    }
  }, [location.state]);

  // Handle Monster Hunter modal
  const handleMonsterHunterVideoClick = () => {
    setIsMonsterHunterModalOpen(true);
  };

  const handleCloseMonsterHunterModal = () => {
    setIsMonsterHunterModalOpen(false);
  };

  // Handle product card click
  const handleProductClick = (product) => {
    // Generate random details for the product
    const randomRating = (Math.random() * 2 + 3).toFixed(1); // Rating between 3.0-5.0
    const randomDownloads = Math.floor(Math.random() * 2000000) + 100000; // Downloads between 100k-2M
    const randomSize = Math.floor(Math.random() * 50) + 10; // Size between 10-60GB
    
    const gameData = {
      title: product.title,
      subtitle: "",
      image: product.image,
      price: product.price,
      rating: randomRating,
      downloads: randomDownloads,
      size: `${randomSize}GB`,
      company: "GameNation Studios",
      release: "2024",
      genre: "Action",
      description: `Experience the ultimate gaming adventure with ${product.title}. This incredible game offers stunning graphics, immersive gameplay, and hours of entertainment. Perfect for gamers of all skill levels, ${product.title} delivers an unforgettable experience that will keep you coming back for more.`
    };
    
    navigate("/item-details", { state: { gameData } });
  };

  // Filter products based on search term and all filters
  const filteredProducts = allProducts.filter(product => {
    // Search term filter
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Genre filter
    const matchesGenre = !genreFilter || product.genre === genreFilter;
    
    // Type filter
    const matchesType = !typeFilter || product.type === typeFilter;
    
    // Price filter
    const matchesPrice = !priceFilter || product.priceRange === priceFilter;
    
    return matchesSearch && matchesGenre && matchesType && matchesPrice;
  }).sort((a, b) => {
    // Apply sorting
    if (!sortBy) return 0;
    
    switch (sortBy) {
      case 'price-low-high':
        return parseFloat(a.price.replace(/[₱,]/g, '')) - parseFloat(b.price.replace(/[₱,]/g, ''));
      case 'price-high-low':
        return parseFloat(b.price.replace(/[₱,]/g, '')) - parseFloat(a.price.replace(/[₱,]/g, ''));
      case 'name-a-z':
        return a.title.localeCompare(b.title);
      case 'name-z-a':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  // Calculate pagination for filtered products
  const totalFilteredPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

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
  }, [searchTerm, sortBy, genreFilter, typeFilter, priceFilter]);

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
    <div className="allproducts-container">
      {/* Header */}
      <Header />

      {/* Featured Section */}
      <section className="allproducts-featured-section">
        <div className="allproducts-featured-hero-banner">
          <div className="allproducts-hero-game-scene">
            {/* Large hero banner with game scene background */}
            <div className="allproducts-hero-background">
              <img 
                src={imageMap['mhw.png']} 
                alt="Monster Hunter World"
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

           <div className="allproducts-video-overlay">
              <div className="allproducts-video-player">
                <div className="allproducts-video-thumbnail-small">
                  <div 
                    className="allproducts-video-placeholder-small"
                    onClick={handleMonsterHunterVideoClick}
                    style={{ cursor: 'pointer' }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/URG75CDX_rg"
                      title="Monster Hunter World Trailer"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        borderRadius: '12px',
                        pointerEvents: 'none'
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="allproducts-video-overlay1">
              <div className="allproducts-video-text-content">
                <h3>Monster Hunter World</h3>
                <p>Hunt massive monsters in a living, breathing ecosystem</p>
                <button 
                  className="allproducts-see-more-btn-small"
                  onClick={() => {
                    const monsterHunterData = {
                      title: "Monster Hunter World",
                      subtitle: "Hunt massive monsters in a living, breathing ecosystem",
                      image: "mhw.png",
                      price: "₱2,499",
                      rating: "4.7",
                      downloads: 1200000,
                      size: "45GB",
                      company: "Capcom",
                      release: "2018",
                      genre: "Action RPG",
                      description: "Monster Hunter World is an action RPG that puts you in the role of a hunter tasked with tracking down and slaying massive monsters in a living, breathing ecosystem. Craft weapons and armor from materials gathered during your hunts, and team up with other hunters to take down the most dangerous beasts."
                    };
                    navigate("/item-details", { state: { gameData: monsterHunterData } });
                  }}
                >
                  See more
                </button>
              </div>
            </div>
      </section>

      {/* Filters and Search */}
      <div className="allproducts-filters">
        <div className="allproducts-search-container">
          <SearchOutlined className="allproducts-search-icon" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="allproducts-search-input"
          />
        </div>
        
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
              { value: 'price-low-high', label: 'Price: Low to High' },
              { value: 'price-high-low', label: 'Price: High to Low' },
              { value: 'name-a-z', label: 'Name: A-Z' },
              { value: 'name-z-a', label: 'Name: Z-A' }
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
        
        <div className="allproducts-filter-group">
          <label className="allproducts-filter-label">Type</label>
          <Select
            className="allproducts-filter-select"
            placeholder="Type"
            value={typeFilter}
            onChange={setTypeFilter}
            allowClear
            style={{ minWidth: 120 }}
            options={[
              { value: 'Digital', label: 'Digital' },
              { value: 'Physical', label: 'Physical' },
              { value: 'Deluxe', label: 'Deluxe' },
              { value: 'Standard', label: 'Standard' }
            ]}
          />
        </div>
        
        <div className="allproducts-filter-group">
          <label className="allproducts-filter-label">Price Range</label>
          <Select
            className="allproducts-filter-select"
            placeholder="Price"
            value={priceFilter}
            onChange={setPriceFilter}
            allowClear
            style={{ minWidth: 150 }}
            options={[
              { value: 'under-1000', label: 'Under ₱1,000' },
              { value: '1000-2000', label: '₱1,000 - ₱2,000' },
              { value: '2000-3000', label: '₱2,000 - ₱3,000' },
              { value: '3000+', label: 'Over ₱3,000' }
            ]}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="allproducts-product-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 px-4 sm:px-10 max-w-7xl mx-auto z-10 mb-8">
        {currentProducts.map((product) => (
          <div 
            key={product.id} 
            className="allproducts-product-card"
            onClick={() => handleProductClick(product)}
            style={{ 
              cursor: "pointer",
              pointerEvents: "auto",
              position: "relative",
              zIndex: 10
            }}
          >
            <div className="allproducts-product-thumb">
              <img 
                src={imageMap[product.image] || imageMap['mhw.png']} 
                alt={product.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  pointerEvents: "none"
                }}
              />
            </div>
            <h4 className="allproducts-product-title">{product.title}</h4>
            <p className="allproducts-product-price">{product.price}</p>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredProducts.length === 0 && searchTerm && (
        <div className="allproducts-no-results text-center py-10 text-white/70 text-base max-w-7xl mx-auto z-10">
          <p>No games found matching "{searchTerm}"</p>
        </div>
      )}

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-2 mx-auto z-10 my-8">
          <button 
            type="button"
            className="bg-white/10 border border-white/20 text-white px-3 py-2 rounded-xl cursor-pointer text-sm transition-all duration-300 min-w-10 backdrop-blur-sm hover:bg-white/15 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed" 
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={{ 
              pointerEvents: 'auto',
              zIndex: 999,
              position: 'relative'
            }}
          >
            {"<"}
          </button>
          
          {getPageNumbers().map((num) => (
            <button
              key={num}
              type="button"
              className={`px-3 py-2 rounded-xl cursor-pointer text-sm transition-all duration-300 min-w-10 backdrop-blur-sm ${
                currentPage === num 
                  ? "bg-white text-slate-900 border-white" 
                  : "bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-white/30"
              }`}
              onClick={() => handlePageChange(num)}
              style={{ 
                pointerEvents: 'auto',
                zIndex: 999,
                position: 'relative'
              }}
            >
              {num}
            </button>
          ))}
          
          {totalFilteredPages > 4 && currentPage < totalFilteredPages - 2 && (
            <span className="text-white text-sm px-1">...</span>
          )}
          
          {totalFilteredPages > 4 && currentPage < totalFilteredPages - 2 && (
            <button 
              type="button"
              className="bg-white/10 border border-white/20 text-white px-3 py-2 rounded-xl cursor-pointer text-sm transition-all duration-300 min-w-10 backdrop-blur-sm hover:bg-white/15 hover:border-white/30"
              onClick={() => handlePageChange(totalFilteredPages)}
            >
              {totalFilteredPages}
            </button>
          )}
          
          <button 
            type="button"
            className="bg-white/10 border border-white/20 text-white px-3 py-2 rounded-xl cursor-pointer text-sm transition-all duration-300 min-w-10 backdrop-blur-sm hover:bg-white/15 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed" 
            onClick={handleNextPage}
            disabled={currentPage === totalFilteredPages}
            style={{ 
              pointerEvents: 'auto',
              zIndex: 999,
              position: 'relative'
            }}
          >
            {">"}
          </button>
        </div>
      )}

      {/* Monster Hunter Video Modal */}
      {isMonsterHunterModalOpen && (
        <div className="video-modal-overlay" onClick={handleCloseMonsterHunterModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={handleCloseMonsterHunterModal}>
              ×
            </button>
            <div className="video-modal-header">
              <h3>Monster Hunter World</h3>
            </div>
            <div className="video-modal-body">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/URG75CDX_rg"
                title="Monster Hunter World Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '12px' }}
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllProducts;
