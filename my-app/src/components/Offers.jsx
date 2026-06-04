import React, { useEffect } from "react";
import "./Offers.css";

const Offers = () => {

  useEffect(() => {

    const cards = document.querySelectorAll(".unique-offer-card");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("unique-show-card");
          }

        });

      },
      {
        threshold: 0.25,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();

  }, []);

  return (
    <section className="unique-offers-section">

      {/* ================= CARDS ================= */}

      <div className="unique-offers-container">

        {/* CARD 1 */}

        <div className="unique-offer-card unique-card-blue">

          <div className="unique-offer-header">

            <span className="unique-offer-badge unique-badge-orange">
              50% OFF
            </span>

            <svg
              className="unique-offer-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>

              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>

          </div>

          <div className="unique-offer-body">

            <h3 className="unique-offer-title">
              First Order Discount
            </h3>

            <p className="unique-offer-desc">
              Valid on all partner restaurants for new users.
              Enjoy premium meals at half the price.
            </p>

          </div>

          <div className="unique-offer-footer">

            <span className="unique-offer-code">
              WELCOME50
            </span>

          </div>
        </div>

        {/* CARD 2 */}

        <div className="unique-offer-card unique-card-light">

          <div className="unique-offer-header">

            <span className="unique-offer-badge unique-badge-dark">
              FREE
            </span>

            <svg
              className="unique-offer-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="3" width="15" height="13"></rect>

              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>

              <circle cx="5.5" cy="18.5" r="2.5"></circle>

              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>

          </div>

          <div className="unique-offer-body">

            <h3 className="unique-offer-title">
              Zero Delivery Fee
            </h3>

            <p className="unique-offer-desc">
              Free delivery on your first 3 orders
              above ₹159 with lightning-fast delivery.
            </p>

          </div>

          <div className="unique-offer-footer">

            <span className="unique-offer-code">
              FREESHIP
            </span>

          </div>
        </div>

      </div>

      {/* ================= TITLE BELOW ================= */}

      <div className="unique-offers-title-container">

        <h2 className="unique-section-title-centered">
          Exclusive Offers & Rewards
        </h2>

        

      </div>

    </section>
  );
};

export default Offers;