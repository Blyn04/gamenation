import React, { useRef } from 'react';
import { Carousel } from 'antd';
import '../styles/customsStyle/HomeSlider.css';
import backgroundImage from '../assets/backgroundhomepage.jpg'; 

const banners = [
  {
    title: "Welcome To GameNation",
    description: "Browse Our Popular Games Here",
    image: "https://via.placeholder.com/600x300?text=Banner+1"
  },
  {
    title: "Discover New Games",
    description: "Check Out The Latest Releases",
    image: "https://via.placeholder.com/600x300?text=Banner+2"
  },
  {
    title: "Join The Community",
    description: "Connect With Gamers Worldwide",
    image: "https://via.placeholder.com/600x300?text=Banner+3"
  }
];

const HomeSlider = () => {
  const carouselRef = useRef(null);

  const handleNext = () => carouselRef.current.next();
  const handlePrev = () => carouselRef.current.prev();

  return (
    <div className="slider-wrapper">
      {/* Background image */}
      <div
        className="slider-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="slider-content">
        <Carousel autoplay ref={carouselRef}>
          {banners.map((banner, idx) => (
            <div className="slider-slide" key={idx}>
              <img src={banner.image} alt={banner.title} className="carousel-image" />
              <div className="slider-text">
                <div className="slider-title">{banner.title}</div>
                <p>{banner.description}</p>
                <button>Browse Now</button>
              </div>
            </div>
          ))}
        </Carousel>

        <button className="prev-btn" onClick={handlePrev}>&lt;</button>
        <button className="next-btn" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default HomeSlider;
