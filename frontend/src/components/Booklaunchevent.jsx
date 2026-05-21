// BookLaunchEvent.jsx



const BookLaunchEvent = () => {
  return (
    <section className="launch-section">

      {/* BACKGROUND GLOW */}
      <div className="launch-glow glow-left"></div>
      <div className="launch-glow glow-right"></div>

      <div className="launch-container">

        {/* LEFT SIDE */}
        <div className="launch-image-wrapper">

          <div className="launch-image">

            <img
              src="/assets/pv/book/launch.jpeg"
              alt="Book Launch Event"
            />

            <div className="launch-image-overlay"></div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="launch-content">

          <span className="launch-tag">
            LIVE BOOK LAUNCH
          </span>

          <h2>
            Join The Official
            <span> Book Launch</span>
            Experience
          </h2>

          <p className="launch-description">
            Be part of a powerful and transformational launch event
            filled with inspiration, worship, wisdom, and divine
            impartation. Experience an unforgettable gathering as
            lives are impacted through these transformational books.
          </p>

          {/* EVENT DETAILS */}
          <div className="event-details">

            <div className="event-card">
              <h3>Date</h3>
              <p>May 16, 2026</p>
            </div>

            <div className="event-card">
              <h3>Time</h3>
              <p>3:00 PM GMT</p>
            </div>

            <div className="event-card">
              <h3>Venue</h3>
              <p>GALM Auditorium
                173 Grove street worcester, MA 01605
              </p>
            </div>

            <div className="event-card">
              <h3>Entry</h3>
              <p>Free Access</p>
            </div>

          </div>

          {/* COUNTDOWN */}
          <div className="countdown-wrapper">

            <div className="count-box">
              <h3>1</h3>
              <span>Days</span>
            </div>

            <div className="count-box">
              <h3>05</h3>
              <span>Hours</span>
            </div>

            <div className="count-box">
              <h3>21</h3>
              <span>Minutes</span>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="launch-buttons">

            <a href="/register" className="launch-btn">
              Reserve Seat
            </a>

            <a href="/order" className="secondary-launch-btn">
              Order Books
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BookLaunchEvent;