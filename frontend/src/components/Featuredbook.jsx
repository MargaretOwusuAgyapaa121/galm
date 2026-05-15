

const FeaturedBook = () => {
  return (
    <section className="featured-book-section">

      <div className="featured-container">

        {/* LEFT SIDE */}
        <div className="featured-image-wrapper">

          <div className="image-glow"></div>

          <div className="featured-book-image">
            <img src="/assets/pv/book/b1.jpeg" alt="Featured Book" />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="featured-content">

          <span className="featured-tag">
            FEATURED BOOK
          </span>

          <h2>
            Loss & <span>Discovery</span>
          </h2>

          <p className="featured-description">
            A transformational journey through pain, healing,
            restoration, and spiritual discovery. This powerful
            book reveals deep insights that inspire growth,
            faith, wisdom, and purpose.
          </p>

          {/* CATEGORY TAGS */}
          <div className="book-categories">

            <span>Faith</span>
            <span>Healing</span>
            <span>Transformation</span>
            <span>Wisdom</span>

          </div>

          {/* QUOTE */}
          <div className="book-quote">
            <p>
              “Sometimes what feels like loss becomes the beginning
              of divine discovery.”
            </p>
          </div>

          {/* BUTTONS */}
          <div className="featured-buttons">

            <a href="/book-launch" className="order-btn">
              Order Now
            </a>

            <a href="/books-preview" className="preview-btn">
              Read Preview
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FeaturedBook;