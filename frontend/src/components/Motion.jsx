import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const slides = [
  {
    title: "Grow Relationships",
    subtitle: "In order to grow deeper in our relationship with Christ, we must start applying what we learn in our daily lives.",
  },
  {
    title: "Connect with God",
    subtitle: "Connecting to God isn't just a 'one and done' event at the point  of conversion, but it's an ongoing lifestyle." ,
  },
  {
    title: "Give Generously",
    subtitle: "One of the most beautiful things is that when you give, you enable the church to help its people grow spiritually and spread the gospel around the world.",
  },
];

export default function TextSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="text-slider-section">
      <div className="text-slider-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="text-slide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
          >
            <h2>{slides[current].title}</h2>
            <h3>{slides[current].subtitle}</h3>
            <button className="text-slider-btn">Read More</button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
