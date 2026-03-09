import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Events from '../components/Event';

const EventsSection = () => {
  const [play, setPlay] = useState(false);

  return (
    <section className="events-section">
      <div className="events-wrapper">

        {/* LEFT SIDE - TEXT */}
        <div className="events-text">
          <p className="events-subtitle">Upcoming Events</p>
          <h2 className="events-title">Upcoming Events</h2>

          <p className="events-description">
            Join us in our upcoming spirit-filled gatherings designed to uplift,
            transform, and empower your faith journey.
          </p>

          <button className="events-cta">See All Events</button>
        </div>

        {/* RIGHT SIDE - VIDEO */}
        <div className="events-video">

          {!play ? (
            <div className="video-thumbnail" onClick={() => setPlay(true)}>
              <img
                src="/assets/pv/img/Pastor-1.jpg"
                alt="Event Video"
              />
              <div className="play-button">
                <FaPlay />
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="Event Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}

        </div>

      </div>
      <Events/>
    </section>
  );
};

export default EventsSection;
