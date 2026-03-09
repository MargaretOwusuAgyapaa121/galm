
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
          <a href="https://web.facebook.com/Anchorghalm/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.youtube.com/watch?v=CKJogOqoEB0" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://wa.me/+15082026458" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.bing.com/ck/a?!&&p=c5e1b4586eef03f970bfe035e42962f4786937fac92eaa82ee5532cabe6ac347JmltdHM9MTc3MzAxNDQwMA&ptn=3&ver=2&hsh=4&fclid=0448689d-696a-63e9-1d9e-7eb868786247&psq=glourious+anchor+of+life&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9nbG9yaW91c2FuY2hvci9yZWVscy8" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
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
