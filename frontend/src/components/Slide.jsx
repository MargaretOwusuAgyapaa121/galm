// // import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaFacebook } from "react-icons/fa";

// const images = [
//   "/assets/pv/img/Galm-3.jpg",
//   "/assets/pv/img/galm-c.jpeg",
//   "/assets/pv/img/galm-c1.jpg",
//   "/assets/pv/img/galm.jpg",
//   "/assets/pv/img/galm1.jpg",
//   "/assets/pv/img/galm2.jpg",
//   "/assets/pv/img/galm3.jpeg",
//   "/assets/pv/img/galm4.jpeg",
//   "/assets/pv/img/galm5.jpeg",
//   "/assets/pv/img/galm6.jpg",
// ];

// export default function Slider() {
//   const visibleCount = 4;
//   const [current, setCurrent] = useState(0);
//   const trackRef = useRef(null);

//   // Duplicate slides at start and end for seamless loop
//   const slides = [...images, ...images, ...images];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => prev + 1);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (!trackRef.current) return;

//     const totalSlides = images.length;

//     if (current >= totalSlides * 2) {
//       // reset back to the first duplicate without transition
//       trackRef.current.style.transition = "none";
//       setCurrent(totalSlides);
//       void trackRef.current.offsetWidth; // force reflow
//       trackRef.current.style.transition = "transform 0.8s linear";
//     }
//   }, [current]);

//   return (
//     <section className="slider-section">
//       <div className="text-content">
//         <h2 className="slider-title">Worship With Us</h2>
//         <h3 className="slider-subtitle">Sunday Service @10am EST</h3>
//         <button className="watch-btn">
//           <FaFacebook size={18} style={{ marginRight: "8px" }} />
//           Watch Live
//         </button>
//       </div>

//       <div className="slider-container">
//         <motion.div
//           className="slider-track"
//           ref={trackRef}
//           style={{
//             transform: `translateX(-${(current * 100) / visibleCount}%)`,
//           }}
//           transition={{ duration: 0.8, ease: "linear" }}
//         >
//           {slides.map((img, idx) => (
//             <div className="slide" key={idx}>
//               <img src={img} alt={`Slide ${idx + 1}`} />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

const images = [
  "/assets/pv/img/Galm-3.jpg",
  "/assets/pv/img/galm-c.jpeg",
  "/assets/pv/img/galm-c1.jpg",
  "/assets/pv/img/galm.jpg",
  "/assets/pv/img/galm1.jpg",
  "/assets/pv/img/galm2.jpg",
  "/assets/pv/img/galm3.jpeg",
  "/assets/pv/img/img8.jpeg",
  "/assets/pv/img/galm5.jpeg",
  "/assets/pv/img/galm6.jpg",
];

export default function Slider() {
  const visibleCount = 4;
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  // Duplicate slides at start and end for seamless loop
  const slides = [...images, ...images, ...images];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;

    const totalSlides = images.length;

    if (current >= totalSlides * 2) {
      // reset back to the first duplicate without transition
      trackRef.current.style.transition = "none";
      setCurrent(totalSlides);
      void trackRef.current.offsetWidth; // force reflow
      trackRef.current.style.transition = "transform 0.8s linear";
    }
  }, [current]);

  return (
    <section className="slider-section">
      <div className="text-content">
        <h2 className="slider-title">Worship With Us</h2>
        <h3 className="slider-subtitle">Sunday Service @10am EST</h3>
        <button
          className="watch-btn"
          onClick={() => window.open("https://web.facebook.com/Anchorghalm/?_rdc=1&_rdr#", "_blank")}
        >
          <FaFacebook size={18} style={{ marginRight: "8px" }} />
          Watch Live
        </button>
      </div>

      <div className="slider-container">
        <motion.div
          className="slider-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${(current * 100) / visibleCount}%)`,
          }}
          transition={{ duration: 0.8, ease: "linear" }}
        >
          {slides.map((img, idx) => (
            <div className="slide" key={idx}>
              <img src={img} alt={`Slide ${idx + 1}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
