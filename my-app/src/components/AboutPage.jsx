import React from "react";
import { Helmet } from "react-helmet-async";
import "./AboutPage.css";

import heroFoodImg from "../assets/abouthero.jpg";
import driverImg from "../assets/driver1.jpg";
import tableImg from "../assets/Drinks.jpg";

import {
  FaRocket,
  FaEye,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about-page">

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>About Dendo - Hyperlocal Delivery Connecting Every City</title>
        <meta
          name="description"
          content="Learn about Dendo's mission to transform local commerce with fast hyperlocal delivery, smart logistics, and community-driven partnerships across India."
        />
        <link rel="canonical" href="https://amazing-nougat-742e37.netlify.app/about" />
        <meta property="og:title" content="About Dendo - Hyperlocal Delivery Connecting Every City" />
        <meta property="og:description" content="Dendo transforms local commerce into a faster, more accessible, and community-driven delivery ecosystem." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amazing-nougat-742e37.netlify.app/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dendo - Hyperlocal Delivery Connecting Every City" />
        <meta name="twitter:description" content="Dendo transforms local commerce into a faster, more accessible, and community-driven delivery ecosystem." />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="about-hero">

        <div className="about-hero-content">

          <h1 className="about-hero-title">
            Every City Deserves Modern Convenience
          </h1>

          <p className="about-hero-subtitle">
            DENDO transforms local commerce into a faster,
            more accessible, and community-driven
            delivery ecosystem.
          </p>

          <button className="btn-download-app">
            DOWNLOAD APP
          </button>

        </div>

        {/* CURVED BOTTOM DECORATION */}
        <div className="hero-bottom-curve"></div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="about-philosophy">

        <div className="philosophy-container">

          {/* IMAGE */}
          <div className="philosophy-image">

            <img
              src={driverImg}
              alt="Dendo delivery driver on a bike delivering food in the city"
              className="philosophy-driver-image"
            />

          </div>

          {/* CONTENT */}
          <div className="philosophy-content">
            <div className="philosophy-text-wrapper">
              <span className="philosophy-label">
                THE PHILOSOPHY
              </span>

              <h2 className="philosophy-text">
                Dendo brings modern, technology-driven<br/>
                commerce to every city in India, beyond just metros.<br/>
                By connecting neighborhoods with smart logistics,<br/>
                we empower local businesses and build an inclusive<br/>
                commerce ecosystem.
              </h2>
            </div>
          </div>

        </div>

      </section>

      {/* ================= MISSION ================= */}
      <section className="about-mission">

        <div className="mission-container">

          {/* CARD 1 */}
          <div className="mission-card">
  <div className="hover_color_bubble"></div>

  <div className="mission-icon">
    <FaRocket />
  </div>

  <h3 className="mission-card-title">
    Our Mission
  </h3>

  <p className="mission-card-desc">
    To build India's most accessible hyperlocal
    commerce ecosystem by bridging the gap
    between local vendors and the digital-first
    consumer.
  </p>
</div>

          {/* CARD 2 */}
          <div className="mission-card">
  <div className="hover_color_bubble"></div>

  <div className="mission-icon">
    <FaEye />
  </div>

  <h3 className="mission-card-title">
    Our Vision
  </h3>

  <p className="mission-card-desc">
    To become the digital infrastructure
    powering local commerce across India,
    creating a future where every neighborhood
    business thrives.
  </p>
</div>

        </div>

      </section>

      {/* ================= EVERYWHERE ================= */}
      <section className="about-everywhere">
        <div className="everywhere-container">
          {/* CONTENT (LEFT CARD) */}
          <div className="everywhere-content">
            <h2 className="everywhere-title">
              Fast. Intelligent. Local.
              <br />
              Everywhere!
            </h2>

            <p className="everywhere-desc">
              Dendo delivers a seamless hyperlocal<br/>
              experience built around speed,simplicity,<br/>
              and trust — connecting customers with<br/>
              local restaurants,stores, and essentials<br/>
              through one intelligent platform.
            </p>
          </div>

          {/* IMAGE (RIGHT OVERLAP) */}
          <div className="everywhere-image">
            <img
              src={tableImg}
              alt="Fresh drinks and food dishes available for hyperlocal delivery on Dendo"
              className="everywhere-drink-image"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;