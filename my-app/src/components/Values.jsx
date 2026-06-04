import React, { useState } from "react";
import "./Values.css";

import {
  FaMapMarkerAlt,
  FaBiking,
  FaEye,
  FaBars,
} from "react-icons/fa";

const Values = () => {

  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "INSTANT ACCESS",
      description:
        "Everything nearby delivered through one smart platform.",
      fullText:
        "Experience lightning-fast access to everything around your city with smooth delivery and modern digital systems.",
      icon: <FaMapMarkerAlt />,
    },

    {
      id: 2,
      title: "SMART MOVEMENT",
      description:
        "Fast rider networks powered by intelligent logistics.",
      fullText:
        "Smart logistics and optimized routes create faster deliveries and seamless rider coordination.",
      icon: <FaBiking />,
    },

    {
      id: 3,
      title: "VISUAL DISCOVERY",
      description:
        "Clean layouts and rich visuals for effortless browsing.",
      fullText:
        "Large visuals and premium UI interactions help users explore products more comfortably.",
      icon: <FaEye />,
    },

    {
      id: 4,
      title: "URBAN FLOW",
      description:
        "Minimal interfaces inspired by modern city experiences.",
      fullText:
        "Inspired by smart-city platforms with smooth navigation and modern user experiences.",
      icon: <FaBars />,
    },
  ];

  return (
    <section className="values-section">

      <div className="values-header">

        <h2 className="values-title">
          City Connected Commerce
        </h2>

        <p className="values-subtitle">
          Designed for modern local living.
        </p>

      </div>

      <div className="values-grid">

        {cards.map((card) => (

          <div
            key={card.id}
            className="value-card"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >

            {/* ICON */}
            <div className="value-icon">
              {card.icon}
            </div>

            <h3 className="value-card-title">
              {card.title}
            </h3>

            <p className="value-card-desc">
              {card.description}
            </p>

            {/* HOVER CARD */}
            <div
              className={`hover-expand-card ${
                hoveredCard === card.id ? "show-card" : ""
              }`}
            >

              <div className="expand-top">

                <div className="big-icon">
                  {card.icon}
                </div>

                <h2>{card.title}</h2>

              </div>

              <p>{card.fullText}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Values;