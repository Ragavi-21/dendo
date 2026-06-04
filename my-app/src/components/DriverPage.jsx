import React, { useState } from 'react';
import './DriverPage.css';

import {
  FaChevronDown,
  FaWallet,
  FaClock,
  FaLocationArrow
} from 'react-icons/fa';

/* ================= LOCATION DATA ================= */

const locationData = {
  TamilNadu: {
    Chennai: ["Adyar", "T. Nagar", "Velachery", "Anna Nagar"],
    Coimbatore: ["Pollachi", "Mettupalayam", "Sulur"],
    Madurai: ["Melur", "Thirumangalam", "Vadipatti"]
  },

  Karnataka: {
    "Bengaluru Rural": ["Devanahalli", "Hoskote", "Nelamangala"],
    Mysuru: ["Nanjangud", "Hunsur", "K.R. Nagar"]
  },

  AndhraPradesh: {
    Krishna: ["Machilipatnam", "Gudivada", "Nuzvid"],
    Guntur: ["Tenali", "Sattenapalle", "Macherla"]
  },

  Telangana: {
    Hyderabad: ["Ghatkesar", "Shamirpet", "Medchal"],
    Warangal: ["Hanamkonda", "Kazipet", "Narsampet"]
  }
};

const DriverPage = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [dob, setDob] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  /* ================= HANDLE SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!name || !phone || !state || !district || !area || !dob) {
      alert("Please fill in all required fields.");
      return;
    }

    try {

      const response = await fetch('/api/driver-applications', {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          name,
          phone: `+91 ${phone}`,
          state,
          district,
          area,
          dob
        })

      });

      const data = await response.json();

      if (response.ok && data.success) {

        setPopupMessage(
          data.message || "Application submitted successfully!"
        );

        setShowPopup(true);

        setName("");
        setPhone("");
        setState("");
        setDistrict("");
        setArea("");
        setDob("");

      } else {

        setPopupMessage(
          data.message || "Failed to submit application"
        );

        setShowPopup(true);
      }

    } catch (err) {

      console.error("Submission error:", err);

      setPopupMessage(
        "Failed to connect to backend server"
      );

      setShowPopup(true);
    }
  };

  return (

    <div className="driver-page">

      {/* ================= HERO SECTION ================= */}

      <section className="driver-hero">

        <div className="driver-container">

          {/* ================= HERO CONTENT ================= */}

          <div className="driver-hero-content">

            <span className="hero-badge">
              PARTNER ONBOARDING
            </span>

            <h1 className="driver-title">
              Deliver the Future with DENDO
            </h1>

            <p className="driver-subtitle">
              Join the most advanced hyperlocal delivery network
              in South India. Set your own schedule and earn
              premium rates.
            </p>

          </div>

          {/* ================= FORM SECTION ================= */}

          <div className="driver-form-wrapper">

            <div className="driver-form-outline">

              <div className="driver-card">

                <div className="driver-form-container">

                  {/* ================= FORM HEADER ================= */}

                  <div className="form-header">

                    <h2 className="form-heading">
                      Driver Application
                    </h2>

                    <p className="form-subheading">
                      Complete your profile to start your journey with us.
                    </p>

                  </div>

                  {/* ================= FORM ================= */}

                  <form
                    onSubmit={handleSubmit}
                    className="driver-form"
                  >

                    {/* ================= POPUP ================= */}

                    {showPopup && (

                      <div className="popup-overlay">

                        <div className="popup-content">

                          <p>{popupMessage}</p>

                          <button
                            type="button"
                            className="popup-close"
                            onClick={() => setShowPopup(false)}
                          >
                            Close
                          </button>

                        </div>

                      </div>
                    )}

                    {/* ================= NAME ================= */}

                    <div className="form-group">

                      <label>Full Name</label>

                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />

                    </div>

                    {/* ================= PHONE ================= */}

                    <div className="form-group">

                      <label>Phone Number</label>

                      <div className="phone-input-group">

                        <span className="country-code">
                          +91
                        </span>

                        <input
                          type="text"
                          placeholder="Mobile Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />

                      </div>

                    </div>

                    {/* ================= TWO COLUMN ================= */}

                    <div className="two-column">

                      {/* STATE */}

                      <div className="form-group">

                        <label>State</label>

                        <div className="select-wrapper">

                          <select
                            value={state}
                            onChange={(e) => {
                              setState(e.target.value);
                              setDistrict("");
                            }}
                            required
                          >

                            <option value="">
                              Select State
                            </option>

                            {Object.keys(locationData).map((st) => (

                              <option
                                key={st}
                                value={st}
                              >
                                {st}
                              </option>

                            ))}

                          </select>

                          <FaChevronDown className="select-icon" />

                        </div>

                      </div>

                      {/* DISTRICT */}

                      <div className="form-group">

                        <label>District</label>

                        <div className="select-wrapper">

                          <select
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            disabled={!state}
                            required
                          >

                            <option value="">
                              Select District
                            </option>

                            {state &&
                              Object.keys(locationData[state]).map((dist) => (

                                <option
                                  key={dist}
                                  value={dist}
                                >
                                  {dist}
                                </option>

                              ))
                            }

                          </select>

                          <FaChevronDown className="select-icon" />

                        </div>

                      </div>

                    </div>

                    {/* ================= AREA ================= */}

                    <div className="form-group">

                      <label>Area / Locality</label>

                      <input
                        type="text"
                        placeholder="Enter your area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                      />

                    </div>

                    {/* ================= DOB ================= */}

                    <div className="form-group">

                      <label>Date of Birth</label>

                      <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                      />

                    </div>

                    {/* ================= BUTTON ================= */}

                    <button
                      type="submit"
                      className="btn-start-journey"
                    >
                      Start Your Journey
                    </button>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY DENDO SECTION ================= */}

      <section className="why-dendo">

        <h2 className="why-title">
          Why DENDO?
        </h2>

        <div className="why-line"></div>

        <div className="why-container">

          {/* CARD 1 */}

          <div className="why-card">

            <div className="why-icon-box">
              <FaWallet />
            </div>

            <h3>Weekly Payouts</h3>

            <p>
              Instant transfers every Monday morning directly
              to your linked bank account.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="why-card">

            <div className="why-icon-box">
              <FaClock />
            </div>

            <h3>Flexible Hours</h3>

            <p>
              Work whenever you want. Deliver part-time or
              full-time with complete flexibility.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="why-card">

            <div className="why-icon-box">
              <FaLocationArrow />
            </div>

            <h3>Smart Routing</h3>

            <p>
              AI-driven route suggestions help maximize your
              earnings and reduce travel time.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default DriverPage;