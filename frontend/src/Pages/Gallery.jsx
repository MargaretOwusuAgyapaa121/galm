import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaEnvelope
} from "react-icons/fa";

const Gallery = () => {

  const day1Images = [
    "/assets/pv/gallery/g.jpg",
    "/assets/pv/gallery/g1.jpg",
    "/assets/pv/gallery/g2.jpeg",
    "/assets/pv/gallery/g3.jpeg",
    "/assets/pv/gallery/g4.jpeg",
     "/assets/pv/gallery/g5.jpg",
    "/assets/pv/gallery/g6.jpeg",
    "/assets/pv/gallery/g7.jpeg",
    "/assets/pv/gallery/g8.jpeg",
    "/assets/pv/gallery/g9.jpeg",
  ];

  const day2Images = [
    "/assets/pv/gallery/g5.jpg",
    "/assets/pv/img/img8.jpeg",
    "/assets/pv/img/galm10.jpeg",
    "/assets/pv/img/galm6.jpg",
    "/assets/pv/img/galm5.jpeg",
     "/assets/pv/gallery/g5.jpg",
    "/assets/pv/img/img8.jpeg",
    "/assets/pv/img/galm10.jpeg",
    "/assets/pv/img/galm6.jpg",
    "/assets/pv/img/galm5.jpeg",
  ];

  const day3Images = [
    "/assets/pv/gallery/g10.jpeg",
    "/assets/pv/gallery/g11.jpeg",
    "/assets/pv/gallery/g12.jpeg",
    "/assets/pv/gallery/g15.jpeg",
    "/assets/pv/gallery/g14.jpeg",
    "/assets/pv/img/Galm-3.jpg",
    "/assets/pv/img/galm-c.jpeg",
    "/assets/pv/img/galm1.jpg",
    "/assets/pv/img/galm2.jpg",
    "/assets/pv/img/galm3.jpeg",
  ];

  const [day1Index, setDay1Index] = useState(0);
  const [day2Index, setDay2Index] = useState(0);
  const [day3Index, setDay3Index] = useState(0);

  useEffect(() => {

    const interval1 = setInterval(() => {
      setDay1Index(prev => (prev + 1) % day1Images.length);
    }, 3000);

    const interval2 = setInterval(() => {
      setDay2Index(prev => (prev + 1) % day2Images.length);
    }, 3500);

    const interval3 = setInterval(() => {
      setDay3Index(prev => (prev + 1) % day3Images.length);
    }, 4000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };

  }, []);

  const renderSlider = (images, currentIndex, title) => (
    <div className="day-wrapper">
      <h3>{title}</h3>
      <div className="day-slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} slide ${index}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="gallery-page">

      {/* HERO SECTION */}
      <section className="gallery-hero">
        <div className="hero-overlay" />
        <div className="hero-socials">
          <FaFacebookF />
          <FaWhatsapp />
          <FaInstagram />
          <FaYoutube />
          <FaEnvelope />
        </div>

        <div className="hero-content">
          <h1>
            Experience the Love<br />& Joy of Christ.
          </h1>
          <button className="hero-btn">About</button>
        </div>
      </section>

      {/* DAYS SECTION */}
      <section className="days-section">
        {renderSlider(day1Images, day1Index, "DAY ONE")}
        {renderSlider(day2Images, day2Index, "DAY TWO")}
        {renderSlider(day3Images, day3Index, "DAY THREE")}
      </section>

      {/* SCRIPTURE SECTION */}
      <section className="scripture-section">
        <div className="scripture-text">
          <small className="section-tag">
            GLORIOUS ANCHOR OF LIFE MINISTRIES
            <span className="broken-line" />
          </small>

          <h2>A CHOSEN GALM IN CHRIST...</h2>

          <p>
            “But you are a chosen generation, a royal priesthood,
            a holy nation, His own special people, that you may proclaim
            the praises of Him who called you out of darkness
            into His marvelous light”
          </p>

          <span className="scripture-ref">1 Peter 2:9</span>

          <button className="play-btn">▶</button>
        </div>

        <div className="scripture-image">
          <img src="/assets/pv/background/b9.jpeg" alt="Worship" />
        </div>
      </section>

      {/* FOLLOW SECTION */}
      <section className="follow-section">
        <h3>Follow Us On Facebook</h3>
        <div className="follow-gallery">
          <img src="/assets/pv/img/galm3.jpeg" alt="" />
          <img src="/assets/pv/img/Galm-3.jpg" alt="" />
          <img src="/assets/pv/img/galm-c1.jpg" alt="" />
          <img src="/assets/pv/img/Galm-Cut-cake.jpeg" alt="" />
        </div>
      </section>

    </div>
  );
};

export default Gallery;