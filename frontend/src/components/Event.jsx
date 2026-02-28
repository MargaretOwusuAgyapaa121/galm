import React from "react";
import { motion } from "framer-motion";

const eventsData = [
  {
    image1: "/assets/pv/background/d.jpg",
    image2: "/assets/pv/background/d1.jpg",
    title: "Touch & Transform",
    description: "We must fulfill our calling to touch lives.",
  },
  {
    image1: "/assets/pv/background/preach.png",
    image2: "/assets/pv/background/bg3.jpg",
    title: "Street Evangelism",
    description: "Sending the Word on the streets.",
  },
  {
    image1: "/assets/pv/background/d2.jpg",
    image2: "/assets/pv/background/bg1.jpg",
    title: "Community Outreach",
    description: "Engaging with our local community.",
  },
];

export default function Events() {
  return (
    <section className="events-section">
      <motion.h2
        className="events-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Upcoming Events
      </motion.h2>

      <div className="events-container">
        {eventsData.map((event, index) => (
          <motion.div
            key={index}
            className="event-card"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ y: -6, scale: 1.03 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="image-wrapper">
              <img
                src={event.image1}
                alt={event.title}
                className="image image-default"
              />
              <img
                src={event.image2}
                alt={event.title}
                className="image image-hover"
              />
            </div>
            <div className="overlay">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button>Learn More</button>
            </div>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}
