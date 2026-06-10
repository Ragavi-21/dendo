import { NavLink, Link } from 'react-router-dom';
import { memo, useState, useCallback } from 'react';
import './Navbar.css';

import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="navbar-logo">
        <Link to="/">
          <img
            src={logoImg}
            alt="Dendo Logo"
            className="navbar-logo-img"
          />
        </Link>
      </div>

      {/* HAMBURGER BUTTON (mobile only) */}
      <button
        className={`hamburger-btn ${menuOpen ? 'hamburger-open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {/* OVERLAY (mobile only) */}
      <div
        className={`mobile-overlay ${menuOpen ? 'mobile-overlay--visible' : ''}`}
        onClick={closeMenu}
      />

      {/* NAV LINKS */}
      <div className={`navbar-links-container ${menuOpen ? 'navbar-links-container--open' : ''}`}>

        <ul className="navbar-links">

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/delivery" onClick={closeMenu}>
              Delivery Areas
            </NavLink>
          </li>

        </ul>

        {/* MOBILE ACTIONS */}
        <div className="navbar-mobile-actions">
          <button className="btn-get-dendo-mobile">
            GET DENDO
          </button>
        </div>

      </div>

      {/* BUTTON */}
      <div className="navbar-actions">

        <button className="btn-get-dendo">
          GET DENDO
        </button>

      </div>

    </nav>
  );
};

export default memo(Navbar);