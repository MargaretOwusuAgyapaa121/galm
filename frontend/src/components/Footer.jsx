
import React from "react";
import { FaFacebookF, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="galm-footer">
      <div className="footer-content">

        {/* Logo */}
        <img src="/assets/pv/logo/icon2.png" alt="GALM Logo" className="footer-logo" />

        {/* Scripture */}
        <p className="footer-scripture">
          But dedicate your lives to <span>Christ as Lord.</span> Always be ready
          to defend your confidence in God when anyone asks you to explain it.
          However, make your defense with gentleness and respect.
        </p>
        <p className="footer-verse">1 Peter 3:15</p>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaInstagram /></a>
        </div>

        {/* Subscribe Text */}
        <p className="footer-cta">
          Don’t miss out on upcoming events
        </p>
        <p className="footer-cta-strong">
          Subscribe Now
        </p>

        {/* Form */}
        <form className="footer-form">
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <button type="submit">Subscribe</button>
        </form>

        {/* Privacy */}
        <p className="footer-privacy">
          We respect your privacy. Your information will never be shared.
        </p>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 GALM. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
