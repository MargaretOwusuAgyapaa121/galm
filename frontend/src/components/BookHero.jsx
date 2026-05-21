
import React from "react";
const ExploreHero = () => {
  return (
    <section className="explore-hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-tag">
          OFFICIAL GALM BOOK COLLECTION
        </span>

        <h1>
          Books That Heal,
          <span> Transform & Inspire</span>
        </h1>

        <p>
          Discover powerful transformational books filled with wisdom,
          healing, leadership, faith, and divine insight.
        </p>

        <div className="hero-buttons">
          <a href="/book" className="primary-btn">
            Explore Books
          </a>

          <a href="/order" className="secondary-btn">
            Order Now
          </a>
        </div>
      </div>

      {/* BOOK SHOWCASE */}
      <div className="books-wrapper">

        <div className="side-book left-book">
          <img src="/assets/pv/book/b2.jpeg" alt="Book" />
        </div>

        <div className="main-book">
          <img src="/assets/pv/book/b1.jpeg" alt="Main Book" />
        </div>

        <div className="side-book right-book">
          <img src="/assets/pv/book/b3.jpeg" alt="Book" />
        </div>

      </div>
    </section>
  );
};

export default ExploreHero;
