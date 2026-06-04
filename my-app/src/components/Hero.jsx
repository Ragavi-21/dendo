// Hero.jsx

import React from 'react';
import './Hero.css';

import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

import food1 from '../assets/food1.jpg';
import noodles from '../assets/noodles.jpg';
import biryani from '../assets/biriyani.jpg';

/* ================= IMAGE DATA ================= */

const images = [
  {
    src: food1,
    alt: 'Food',
    className: 'img-top-dark',
  },
  {
    src: noodles,
    alt: 'Noodles',
    className: 'img-right-noodles',
  },
  {
    src: biryani,
    alt: 'Biryani',
    className: 'img-bottom-biryani',
  },
];

const Hero = () => {
  return (
    <section className="hero">

      {/* ================= LEFT CONTENT ================= */}

      <div className="hero-content">

        <h1 className="hero-title">
          Built to Deliver
          <br />
          Designed to Connect
        </h1>

        <p className="hero-subtitle">
          Dendo connects customers with<br/>
          their favorite restaurants and<br/>
          helps local vendors grow.
        </p>

        {/* ================= DROPDOWN ================= */}

        <div className="hero-dropdown" id="partner">

          <button
            className="btn-partner-dropdown"
            aria-label="Partner with us"
          >
            Partner with Us

            <FaChevronDown className="dropdown-icon" />
          </button>

          <div className="hero-dropdown-menu">

            <Link to="/vendor">
              Vendor
            </Link>

            <Link to="/driver">
              Driver
            </Link>

          </div>

        </div>

      </div>

      {/* ================= RIGHT IMAGES ================= */}

      <div className="hero-images">

        <div className="image-collage">

          {images.map((image, index) => (

            <div
              key={index}
              className={`img-container ${image.className}`}
            >

              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default React.memo(Hero);