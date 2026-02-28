import React, { useState, useEffect } from "react";

const BeliefSection = () => {
  const slides = [
    {
      highlight: "We hold firm to this",
      text: "And I also say to you that you are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it.",
      reference: "Matthew 16:18",
      version: "NKJV",
    },
    {
      highlight: "We hold firm to this",
      text: "We have this as an anchor for the soul, firm and secure. It enters the inner sanctuary behind the curtain, where jesus our forerunner has gone for us has entered on our behalf. He has become our high priest forever in order of Melchizedek.",
      reference: "Hebrews 6:19-20",
      version: "NIV",
    },
    {
      highlight: "We hold firm to this",
      text: "For when I preach the gospel, I cannot boast, since I am compelled to preach woe to me if I do not preach the gospel.",
      reference: "1 Corinthians 9:16",
      version: "NIV",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // slide changes every 6s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="belief-section">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`belief-slide ${currentSlide === index ? "active" : ""}`}
          >
            <h3 className="belief-title">Holy Scriptures</h3>
            <h2 className="belief-highlight">{slide.highlight}</h2>
            <p className="belief-text">{slide.text}</p>
            <p className="belief-ref">
              {slide.reference} <span className="belief-version">{slide.version}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Static Call-to-Action Section */}
      <div className="belief-cta-section">
        <p className="cta-text">
          Subscribe to our daily manner. Don’t miss out on new episodes.
        </p>
        <button className="cta-button">Subscribe Now</button>
      </div>
    </section>
  );
};

export default BeliefSection;
