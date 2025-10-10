import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/componentsStyle/AllProducts.css";
import Header from "../customs/Header";
import Footer from "../customs/Footer";
import { PlayCircleOutlined, SearchOutlined } from '@ant-design/icons';

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
  { id: 1, title: "Watch Dogs: Legion - Deluxe Edition", price: "₱1,800", image: "watchdog.png" },
  { id: 2, title: "FINAL FANTASY VII REBIRTH", price: "₱2,500", image: "ffvr.png" },
  { id: 3, title: "Bad Cat", price: "₱1,000", image: "badcat.png" },
  { id: 4, title: "Digimon Story Time Stranger", price: "₱1,500", image: "digimon.png" },
  { id: 5, title: "OCTOPATH TRAVELER O", price: "₱1,800", image: "octapath0.png" },
  { id: 6, title: "SILENT HILL 1", price: "₱2,800", image: "sh1.png" },
  { id: 7, title: "Dying Light: The Beast", price: "₱1,200", image: "dytb.png" },
  { id: 8, title: "Resident Evil 3 Nemesis", price: "₱1,700", image: "re3nemesis.png" },
  { id: 9, title: "Cats Ritual", price: "₱1,000", image: "catsritual.png" },
  { id: 10, title: "Sonic Racing: CrossWorlds", price: "₱2,000", image: "srcw.png" },
  { id: 11, title: "The Outer Worlds 2", price: "₱2,800", image: "outerworld.png" },
  { id: 12, title: "TEKKEN 8 Advanced Edition", price: "₱2,400", image: "tekken8.png" },
  { id: 13, title: "LEGO® Horizon Adventures™", price: "₱2,800", image: "lego.png" },
  { id: 14, title: "Life is Strange: Double Exposure", price: "₱2,800", image: "lifestrange.png" },
  { id: 15, title: "Metaphor: ReFantazio", price: "₱2,800", image: "metaphor.png" },
  { id: 16, title: "Ready or Not: Digital Deluxe Edition", price: "₱2,200", image: "readyornot.png" },
  { id: 17, title: "Indiana Jones and the Great Circle", price: "₱1,100", image: "ijgc.png" },
  { id: 18, title: "The First Berserker: Khazan", price: "₱2,800", image: "firstberserker.png" },
  { id: 19, title: "SPYKANYA: Operation Memories", price: "₱2,800", image: "spy.png" },
  { id: 20, title: "Persona 5 Tactical", price: "₱2,800", image: "p5.png" },
  { id: 21, title: "EDENS ZERO", price: "₱2,400", image: "edenzero.png" },
  { id: 22, title: "HUNTER×HUNTER NEN×IMPACT", price: "₱1,500", image: "hxh.png" },
  { id: 23, title: "Atelier Yumic The Alchemist of Memories", price: "₱1,500", image: "atelieryumia.png" },
  { id: 24, title: "Shin Megami Tensei V Vengeance", price: "₱2,000", image: "shin.png" },
  { id: 25, title: "F1 24", price: "₱1,700", image: "f1.png" },
  // Additional games for pagination
  { id: 26, title: "Monster Hunter Wilds", price: "₱3,200", image: "mhw.png" },
  { id: 27, title: "Cyberpunk 2077", price: "₱2,100", image: "cyberpunk-2077.png" },
  { id: 28, title: "Grand Theft Auto Online", price: "₱1,800", image: "gta-online.png" },
  { id: 29, title: "Call of Duty Black Ops 6", price: "₱2,600", image: "codbo6.png" },
  { id: 30, title: "NBA 2K26", price: "₱2,300", image: "nba2k26.png" },
  { id: 31, title: "Mortal Kombat", price: "₱2,100", image: "mk.png" },
  { id: 32, title: "Street Fighter 6", price: "₱2,400", image: "streetfighter.png" },
  { id: 33, title: "King of Fighters XV", price: "₱1,900", image: "kingoffighters.png" },
  { id: 34, title: "Dead by Daylight", price: "₱1,600", image: "dbd.png" },
  { id: 35, title: "Phasmophobia", price: "₱800", image: "phasmophobia.png" },
  { id: 36, title: "Hogwarts Legacy", price: "₱2,700", image: "hl.png" },
  { id: 37, title: "ASTRO BOT", price: "₱1,900", image: "ab.png" },
  { id: 38, title: "Hitman World of Assassination", price: "₱2,200", image: "hitman.png" },
  { id: 39, title: "The Last of Us Part II", price: "₱2,800", image: "thelastofus.png" },
  { id: 40, title: "WUCHANG Fallen Feathers", price: "₱2,500", image: "wff.png" },
  { id: 41, title: "DOOM The Dark Ages", price: "₱2,300", image: "doom.png" },
  { id: 42, title: "EA SPORTS FC", price: "₱2,400", image: "ea-sports-fc.png" },
  { id: 43, title: "Death Stranding 2", price: "₱2,900", image: "ds2tb.png" },
  { id: 44, title: "Ghost of Yōtei", price: "₱2,600", image: "gy.png" },
  { id: 45, title: "Metal Gear Solid Delta", price: "₱3,000", image: "mgsse.png" },
  { id: 46, title: "Split Fiction", price: "₱2,200", image: "sf.png" },
  { id: 47, title: "CarX Street", price: "₱1,800", image: "carx-street.png" },
  { id: 48, title: "Forza Horizon 5", price: "₱2,500", image: "fh5.png" },
  { id: 49, title: "Borderlands 4", price: "₱2,700", image: "borderlands4.png" },
  { id: 50, title: "Clair Obscur Expedition 33", price: "₱2,300", image: "coe33.png" }
];

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMonsterHunterModalOpen, setIsMonsterHunterModalOpen] = useState(false);
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

  // Filter products based on search term
  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <select className="allproducts-filter-select">
          <option>Sort</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Name: A-Z</option>
          <option>Name: Z-A</option>
        </select>
        <select className="allproducts-filter-select">
          <option>Genre</option>
          <option>Action</option>
          <option>Adventure</option>
          <option>RPG</option>
          <option>Sports</option>
          <option>Racing</option>
        </select>
        <select className="allproducts-filter-select">
          <option>Type</option>
          <option>Digital</option>
          <option>Physical</option>
          <option>Deluxe</option>
          <option>Standard</option>
        </select>
        <select className="allproducts-filter-select">
          <option>Price</option>
          <option>Under ₱1,000</option>
          <option>₱1,000 - ₱2,000</option>
          <option>₱2,000 - ₱3,000</option>
          <option>Over ₱3,000</option>
        </select>
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
