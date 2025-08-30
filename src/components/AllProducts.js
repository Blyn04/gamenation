import React, { useState } from "react";
import "../styles/componentsStyle/AllProducts.css";
import Header from "../customs/Header";
import Footer from "../customs/Footer";
import { PlayCircleOutlined } from '@ant-design/icons';

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
  'mhw.png': mhw
};

// Product data matching the image
const products = [
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
  { id: 25, title: "F1 24", price: "₱1,700", image: "f1.png" }
];

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

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
                alt="Monster Hunter Wilds"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* Video player overlay in bottom-left */}
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
                <h3>Monster Hunter Wilds</h3>
                <p>Experience the epic adventure in the wilds</p>
                <button className="allproducts-see-more-btn-small">See more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="allproducts-filters">
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
        {products.map((product) => (
          <div key={product.id} className="allproducts-product-card">
            <div className="allproducts-product-thumb">
              <img 
                src={imageMap[product.image]} 
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

      {/* Pagination */}
      <div className="allproducts-pagination">
        <button className="allproducts-pagination-btn">{"<"}</button>
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            className={`allproducts-pagination-btn ${currentPage === num ? "active" : ""}`}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </button>
        ))}
        <span className="allproducts-pagination-dots">...</span>
        <button className="allproducts-pagination-btn">{totalPages}</button>
        <button className="allproducts-pagination-btn">{">"}</button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllProducts;
