// CTASection.jsx



const CTASection = () => {
  return (
    <section className="cta-section">

      {/* BACKGROUND GLOW */}
      <div className="cta-glow glow-left"></div>
      <div className="cta-glow glow-right"></div>

      <div className="cta-container">

   

        {/* CONTENT */}
        <div className="cta-content">

          <span className="cta-tag">
            READY TO BEGIN?
          </span>

          <h2>
            Ready To Experience The
            <span> Message?</span>
          </h2>

          <p>
            Step into a transformational journey through faith,
            healing, wisdom, and purpose. Order your copy or join
            the official book launch event today.
          </p>

          {/* BUTTONS */}
          <div className="cta-buttons">

            <a href="/order" className="primary-cta">
              Order Your Copy
            </a>

            <a href="/order" className="secondary-cta">
              Reserve Your Seat
            </a>

            <a href="/contact" className="ghost-cta">
              Contact Ministry
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;