import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo + Church Name */}
        <Link to="/" className="nav-brand">
          <img
            src="/assets/pv/logo/icon2.png"
            alt="Church Logo"
            className="navbar-logo"
          />
          <span className="church-name">
            Glorious Anchor Life Ministry
          </span>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;