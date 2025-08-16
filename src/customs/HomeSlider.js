import React, { useRef } from 'react';
import { Carousel } from 'antd';
import '../styles/customsStyle/HomeSlider.css';
import backgroundImage from '../assets/backgroundhomepage.jpg'; 

// Import your local PS5 game images
import assassinsCreed from '../assets/ps5Games/sinx-shadows.png';
import astroBot from '../assets/ps5Games/ab.png';
import avatar from '../assets/ps5Games/afp.png';

const banners = [
  {
    title: "Welcome To GameNation",
    description: "Browse Our Popular Games Here",
    image: assassinsCreed
  },
  {
    title: "Discover New Games",
    description: "Check Out The Latest Releases",
    image: astroBot
  },
  {
    title: "Join The Community",
    description: "Connect With Gamers Worldwide",
    image: avatar
  }
];

const HomeSlider = () => {
  const carouselRef = useRef(null);

  const handleNext = () => carouselRef.current.next();
  const handlePrev = () => carouselRef.current.prev();

  return (
    <div className="slider-wrapper">
      <div
        className="slider-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="slider-content">
        <Carousel autoplay ref={carouselRef}>
          {banners.map((banner, idx) => (
            <div className="slider-slide" key={idx}>
              <div className="slider-text">
                <div className="slider-title">{banner.title}</div>
                <p>{banner.description}</p>
                <button>Browse Now</button>
              </div>

              <img
                src={banner.image}
                alt={banner.title}
                className="carousel-image"
              />
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
