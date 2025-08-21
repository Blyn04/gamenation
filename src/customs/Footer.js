import React from "react";
import "../styles/customsStyle/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4 className="footer-title">ABOUT US</h4>
        <ul>
          <li><a href="#who">Who we are</a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#vision">Vision</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">CUSTOMER CARE</h4>
        <ul>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#feedback">Feedback & Inquiry</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">PARTNERSHIPS</h4>
        <ul>
          <li><a href="#nu-moa">NU MOA</a></li>
          <li><a href="#playstation">PlayStation</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
