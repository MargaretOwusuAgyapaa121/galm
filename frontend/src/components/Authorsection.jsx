// AuthorSection.jsx



const AuthorSection = () => {
  return (
    <section className="author-section">

      {/* BACKGROUND GLOW */}
      <div className="author-glow glow-one"></div>
      <div className="author-glow glow-two"></div>

      <div className="author-container">

        {/* LEFT SIDE */}
        <div className="author-image-wrapper">

          <div className="author-image">

            <img
              src="/assets/pv/book/auth.jpeg"
              alt="Author"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="author-content">

          <span className="author-tag">
            ABOUT THE AUTHOR
          </span>

          <h2>
            Meet The <span>Visionary</span>
            Behind The Books
          </h2>

          <p className="author-description">
            Through years of ministry, leadership, and spiritual
            mentorship, the author has inspired lives with messages
            of healing, faith, transformation, and divine purpose.
            These books were written to empower generations and
            reveal deeper truths that transform lives.
          </p>

          {/* INFO CARDS */}
          <div className="author-cards">

            <div className="author-card">
              <h3>Author</h3>
              <p>Inspirational Writer</p>
            </div>

            <div className="author-card">
              <h3>Minister</h3>
              <p>Spiritual Leadership</p>
            </div>

            <div className="author-card">
              <h3>Speaker</h3>
              <p>Global Conferences</p>
            </div>

            <div className="author-card">
              <h3>Mentor</h3>
              <p>Life Transformation</p>
            </div>

          </div>

          {/* QUOTE */}
          <div className="author-quote">

            <p>
              “Every book carries a message designed to heal,
              inspire, restore, and transform lives.”
            </p>

          </div>

          {/* BUTTON */}
          <div className="author-btn-wrapper">

            <a href="/about" className="author-btn">
              Read Full Story
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AuthorSection;