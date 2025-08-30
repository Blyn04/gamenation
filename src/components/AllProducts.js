import React, { useState } from "react";
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
  const productsPerPage = 25; // Show 25 products per page (5x5 grid)
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

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

           <div className="allproducts-video-overlay">
              <div className="allproducts-video-player">
                <div className="allproducts-video-thumbnail-small">
                  <div className="allproducts-video-placeholder-small">
                    <PlayCircleOutlined className="allproducts-small-play-icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="allproducts-video-overlay1">
              <div className="allproducts-video-text-content">
                <h3>ELDEN RING</h3>
                <p>Experience the epic adventure in the Lands Between</p>
                <button className="allproducts-see-more-btn-small">See more</button>
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
      <div className="allproducts-product-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="allproducts-product-card">
            <div className="allproducts-product-thumb">
              <img 
                src={imageMap[product.image] || imageMap['mhw.png']} 
                alt={product.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px'
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
        <div className="allproducts-no-results">
          <p>No games found matching "{searchTerm}"</p>
        </div>
      )}

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div className="allproducts-pagination">
          <button 
            className="allproducts-pagination-btn" 
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          
          {getPageNumbers().map((num) => (
            <button
              key={num}
              className={`allproducts-pagination-btn ${currentPage === num ? "active" : ""}`}
              onClick={() => handlePageChange(num)}
            >
              {num}
            </button>
          ))}
          
          {totalFilteredPages > 4 && currentPage < totalFilteredPages - 2 && (
            <span className="allproducts-pagination-dots">...</span>
          )}
          
          {totalFilteredPages > 4 && currentPage < totalFilteredPages - 2 && (
            <button 
              className="allproducts-pagination-btn"
              onClick={() => handlePageChange(totalFilteredPages)}
            >
              {totalFilteredPages}
            </button>
          )}
          
          <button 
            className="allproducts-pagination-btn" 
            onClick={handleNextPage}
            disabled={currentPage === totalFilteredPages}
          >
            {">"}
          </button>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllProducts;
