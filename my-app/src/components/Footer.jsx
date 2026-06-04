// Footer.jsx

import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <footer className="footer-section">

      <div className="footer-content">

        {/* ================= LEFT ================= */}

        <div className="footer-left">

          {/* LOGO */}

          <h2 className="footer-logo">
            DENDO
          </h2>

          {/* DESCRIPTION */}

          <p className="footer-desc">
            Connecting food, people, and businesses.
            <br />
            Delivering convenience to your doorstep.
          </p>

          {/* SOCIALS */}

          <div className="footer-socials">

            {/* SHARE */}

            <a href="#" aria-label="Share">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />

                <circle cx="6" cy="12" r="3" />

                <circle cx="18" cy="19" r="3" />

                <line
                  x1="8.59"
                  y1="13.51"
                  x2="15.42"
                  y2="17.49"
                />

                <line
                  x1="15.41"
                  y1="6.51"
                  x2="8.59"
                  y2="10.49"
                />

              </svg>

            </a>

            {/* EMAIL */}

            <a href="#" aria-label="Email">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >

                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />

                <polyline points="22,6 12,13 2,6" />

              </svg>

            </a>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="footer-right">

          <ul className="footer-links">

    {/* PRIVACY */}

    <li>
      <Link to="/privacy-policy">
        Privacy Policy
      </Link>
    </li>

    {/* TERMS */}

    <li>
      <Link to="/terms">
        Terms of Service
      </Link>
    </li>

    {/* DELIVERY */}

    <li>
      <Link to="/delivery">
        Delivery Areas
      </Link>
    </li>

    {/* CONTACT */}

    <li>
      <Link to="/contact">
        Contact Us
      </Link>
    </li>

    {/* ABOUT */}

    <li>
      <Link to="/about">
        About Us
      </Link>
    </li>

            {/* JOIN US */}

            <li>
              <a href="/#partner">
                Join Us
              </a>
            </li>

          </ul>

        </div>

      </div>

    </footer>
  );
};

export default Footer;