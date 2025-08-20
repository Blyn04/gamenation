import React from "react";
import "../styles/componentsStyle/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
        <div className="logo">GameNation</div>
        <input type="text" placeholder="Search Here..." className="search-bar" />
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Browse</a>
          <a href="#">My Library</a>
        </nav>
        <div className="profile-icon">⚪</div>
      </header>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="profile-card">
          <div className="avatar"></div>
          <div className="user-info">
            <h2>Username</h2>
            <p>Full Name</p>
            <button className="settings-btn">⚙ Settings</button>
          </div>
          <div className="stats-box">
            <p>Games Downloaded <span>10</span></p>
            <p>Vouchers <span>09</span></p>
            <p>Points <span>12</span></p>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="games-section">
        <div className="section-header">
          <h3>Library</h3>
          <a href="#">Show All</a>
        </div>
        <div className="game-list">
          <div className="game-card">
            <div className="game-thumb"></div>
            <div>
              <h4>Game Title</h4>
              <p>Description</p>
            </div>
          </div>
          <div className="game-card">
            <div className="game-thumb"></div>
            <div>
              <h4>Game Title</h4>
              <p>Description</p>
            </div>
          </div>
          <div className="game-card">
            <div className="game-thumb"></div>
            <div>
              <h4>Game Title</h4>
              <p>Description</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wishlist Section */}
      <section className="games-section">
        <div className="section-header">
          <h3>Wish list</h3>
          <a href="#">Show All</a>
        </div>
        <div className="game-list">
          <div className="game-card">
            <div className="game-thumb"></div>
            <div>
              <h4>Game Title</h4>
              <p>Description</p>
            </div>
          </div>
          <div className="game-card">
            <div className="game-thumb"></div>
            <div>
              <h4>Game Title</h4>
              <p>Description</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="profile-footer">
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
          <p>NU MOA</p>
          <p>Playstation</p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
