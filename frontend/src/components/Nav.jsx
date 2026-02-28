import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Left Logo */}
        <div className="nav-left">
          <img src="/assets/pv/logo/icon2.png" alt="GALM Logo" className="navbar-logo" />
        </div>

        {/* Center Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a className="active" href="/">WELCOME</a>
          <a href="/about">ABOUT US</a>
          <a href="/service">SERVICES</a>
          <a href="/events">OUR EVENTS</a>
          <a href="/join">JOIN CLASS</a>
          <a href="/gallery">GALLERY</a>
          <a href="/contact">CONTACT US</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
