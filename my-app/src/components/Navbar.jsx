import { NavLink, Link } from 'react-router-dom';
import { memo } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

import logoImg from '../assets/logo.png';

const Navbar = () => {
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

      {/* NAV LINKS */}
      <div className="navbar-links-container">

        <ul className="navbar-links">

          <li>
            <NavLink to="/about">
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/delivery">
              Delivery Areas
            </NavLink>
          </li>

        </ul>

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