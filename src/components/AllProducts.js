import React, { useState } from "react";
import "../styles/componentsStyle/AllProducts.css";

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  // Placeholder product data
  const products = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    title: `Game Title`,
    price: `₱${(i + 1) * 100}`,
  }));

  return (
    <div className="allproducts-container">
      {/* Featured Product Section */}
      <section className="featured-section">
        <img
          src="https://via.placeholder.com/1000x250"
          alt="Featured Product"
          className="featured-image"
        />
        <div className="featured-overlay">
          <h2 className="featured-title">Game Title</h2>
          <p className="featured-desc">Description</p>
          <button className="see-more-btn">See more</button>
        </div>
        <div className="featured-video">
          <button className="play-btn">▶</button>
        </div>
      </section>

      {/* Filters */}
      <div className="filters">
        <select><option>Sort</option></select>
        <select><option>Genre</option></select>
        <select><option>Type</option></select>
        <select><option>Price</option></select>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-thumb"></div>
            <h4>{product.title}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button>{"<"}</button>
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            className={currentPage === num ? "active" : ""}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </button>
        ))}
        <span>...</span>
        <button>{totalPages}</button>
        <button>{">"}</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h4>ABOUT US</h4>
          <p>Who we are</p>
          <p>Mission</p>
          <p>Vision</p>
        </div>
        <div>
          <h4>CUSTOMER CARE</h4>
          <p>FAQs</p>
          <p>Feedback & Inquiry</p>
        </div>
        <div>
          <h4>PARTNERSHIPS</h4>
          <p>NM MOA</p>
          <p>PlayStation</p>
        </div>
      </footer>
    </div>
  );
};

export default AllProducts;
