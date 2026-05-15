



const BookShowcase = () => {
  return (
    <section className="book-showcase">
      {/* Background Overlay */}
      <div className="book-overlay"></div>

      {/* Floating Glow */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <div className="book-container">
        {/* LEFT CONTENT */}
        <div className="book-content">
          <span className="launch-tag">OFFICIAL BOOK LAUNCH</span>

          <h1>
            Discover Powerful <span>Life-Changing Books</span>
          </h1>

          <p>
            Experience inspiration, transformation, wisdom, and spiritual growth
            through these powerful books written to impact lives and strengthen
            faith.
          </p>

          <div className="cta-buttons">
            <a href="/book" className="primary-btn">
              Explore Books
            </a>

            <a href="/book" className="secondary-btn">
              Join Launch Event
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="book-images">
          {/* Author Image */}
          <div className="author-circle">
            <img src="/assets/pv/book/auth.jpeg" alt="Author" />
          </div>

          {/* Book 1 */}
          <div className="book-card left-book">
            <img src="/assets/pv/book/b1.jpeg" alt="Book 1" />
          </div>

          {/* Book 2 */}
          <div className="book-card center-book">
            <img src="/assets/pv/book/b2.jpeg" alt="Book 2" />
          </div>

          {/* Book 3 */}
          <div className="book-card right-book">
            <img src="/assets/pv/book/b3.jpeg" alt="Book 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;


