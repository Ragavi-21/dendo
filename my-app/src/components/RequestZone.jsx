import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./RequestZone.css";

import requestImg from "../assets/request.jpg";

const RequestZone = () => {

  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [formData, setFormData] = useState({
    state: '',
    district: '',
    area: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/zone-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setPopupMessage(data.message || "Submitted successfully!");
        setShowPopup(true);
        // reset form
        setFormData({
          state: "",
          district: "",
          area: "",
          message: ""
        });
      } else {
        setPopupMessage(data.message || "Failed to submit request");
        setShowPopup(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setPopupMessage("Failed to connect to the backend server. Please make sure the server is running.");
      setShowPopup(true);
    }
  };

  return (
    <div className="request-zone-page">

        {showPopup && (
          <div className="popup-overlay" style={{backgroundColor: 'rgba(0, 128, 0, 0.5)'}}>
            <div className="popup-content">
              <p>{popupMessage}</p>
              <button onClick={() => setShowPopup(false)} className="popup-close">Close</button>
            </div>
          </div>
        )}

      {/* ================= HEADER ================= */}
      <div className="request-header">

        <div className="request-header-left">

          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            <FaArrowLeft className="back-icon" />
          </button>

        </div>

      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="request-zone-container">

        {/* ================= LEFT CONTENT ================= */}
        <div className="request-left">

          <span className="request-badge">
            DENDO EXPANSION
          </span>

          <h1>
            Request Your
            <br />
            Delivery Zone
          </h1>

          <p>
            Don’t see your city or locality yet?
            Submit your request and help us expand
            DENDO into your area faster.
          </p>

          {/* IMAGE MOVED BELOW TEXT */}
          <div className="form-illustration">
            <img
              src={requestImg}
              alt="Request Illustration"
            />
          </div>

        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="request-form-card">

          <h1 className="form-main-title">
            Request Zone Form
          </h1>


          <form onSubmit={handleSubmit}>

            {/* STATE */}
            <div className="form-group">

              <label>State</label>

              <input
                type="text"
                name="state"
                placeholder="Enter your state"
                value={formData.state}
                onChange={handleChange}
                required
              />

            </div>

            {/* DISTRICT */}
            <div className="form-group">

              <label>District</label>

              <input
                type="text"
                name="district"
                placeholder="Enter your district"
                value={formData.district}
                onChange={handleChange}
                required
              />

            </div>

            {/* AREA */}
            <div className="form-group">

              <label>Area / Locality</label>

              <input
                type="text"
                name="area"
                placeholder="Enter your area"
                value={formData.area}
                onChange={handleChange}
                required
              />

            </div>

            {/* MESSAGE */}
            <div className="form-group">

              <label>Additional Message</label>

              <textarea
                name="message"
                placeholder="Tell us about your location..."
                value={formData.message}
                onChange={handleChange}
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="submit-btn"
            >
              Submit Request
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default RequestZone;