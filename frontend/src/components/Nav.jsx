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
  <Link to="/">
    <img 
      src="/assets/pv/logo/icon2.png" 
      alt="GALM Logo" 
      className="navbar-logo" 
    />
  </Link>
</div>

        {/* Center Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="active">
            WELCOME
          </Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/service">SERVICES</Link>
          <Link to="/events">OUR EVENTS</Link>
          <Link to="/join">JOIN CLASS</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/contact">CONTACT US</Link>
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
