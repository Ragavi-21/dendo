import React, { useState } from 'react';
import './ContactPage.css';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane
} from 'react-icons/fa';

import { IoChatbubbleEllipses } from 'react-icons/io5';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    countryCode: '+91',
    mobileNumber: '',
    queryType: 'General Inquiry',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const fullMobile = `${formData.countryCode} ${formData.mobileNumber}`.trim();

    try {
      const response = await fetch('/api/contact-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          mobileNumber: fullMobile,
          queryType: formData.queryType,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setPopupMessage(data.message || "Message sent successfully!");
        setShowPopup(true);
        setFormData({
          firstName: '',
          email: '',
          countryCode: '+91',
          mobileNumber: '',
          queryType: 'General Inquiry',
          message: ''
        });
      } else {
        setPopupMessage(data.message || "Failed to send message");
        setShowPopup(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setPopupMessage("Failed to connect to the backend server. Please make sure the server is running.");
        setShowPopup(true);
    }
  };

  return (
    <div className="contact-page">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)} className="popup-close">Close</button>
          </div>
        </div>
      )}
      

      {/* ================= HERO ================= */}
      <section className="contact-hero">

        <div className="contact-hero-content">

          <h1 className="contact-hero-title">
            Get in Touch with Dendo
          </h1>

          <p className="contact-hero-subtitle">
            Have questions, ideas, or business inquiries?
            Connect with DENDO
            <br />
            We're here to answer your questions and hear your stories.
          </p>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section">

        <div className="contact-container">

          <div className="contact-wrapper">

            {/* ================= LEFT FORM ================= */}

            <div className="contact-form-side">

              <h2 className="contact-form-title">
                Send us a message
              </h2>

              <p className="contact-form-desc">
                Questions, partnerships, support,
                or business inquiries — feel free
                to contact the DENDO team anytime.
              </p>

              {/* ================= FORM ================= */}

              <form className="contact-form" onSubmit={handleSubmit}>

                {/* ROW 1 */}

                <div className="form-row">

                  {/* FIRST NAME */}

                  <div className="form-group">

                    <label>FIRST NAME</label>

                    <input
                      type="text"
                      name="firstName"
                      placeholder="Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  {/* EMAIL */}

                  <div className="form-group">

                    <label>EMAIL ADDRESS</label>

                    <input
                      type="email"
                      name="email"
                      placeholder="gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>

                {/* ROW 2 */}

                <div className="form-row">

                  {/* MOBILE NUMBER */}

                  <div className="form-group">

                    <label>MOBILE NUMBER</label>

                    <div className="contact-details-input">

                      <select 
                        className="country-code"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                      >
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>

                      <input
                        type="text"
                        name="mobileNumber"
                        placeholder="1234567890"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>

                  {/* QUERY TYPE */}

                  <div className="form-group">

                    <label>QUERY TYPE</label>

                    <select 
                      className="query-select"
                      name="queryType"
                      value={formData.queryType}
                      onChange={handleChange}
                    >
                      <option>General Inquiry</option>
                      <option>Support</option>
                      <option>Feedback</option>
                    </select>

                  </div>

                </div>

                {/* MESSAGE */}

                <div className="form-group full-width">

                  <label>MESSAGE</label>

                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>

                {/* BUTTON */}

                <button
                  type="submit"
                  className="btn-send-message"
                >
                  SEND A MESSAGE

                  <FaPaperPlane className="btn-icon" />

                </button>

              </form>

            </div>

            {/* ================= RIGHT INFO CARD ================= */}

            <div className="contact-info-side">

              <h2 className="info-card-title">
                Hi! We are always here to help you.
              </h2>

              <p className="info-card-desc">
                Our concierge team is dedicated to
                providing you with the highest level
                of service in the luxury food-tech landscape.
              </p>

              {/* INFO ITEMS */}

              <div className="info-items">

                {/* PHONE */}

                <div className="info-item">

                  <div className="info-icon">
                    <FaPhoneAlt />
                  </div>

                  <div className="info-text">

                    <strong>CUSTOMER CARE</strong>

                    <span>+91 87543 68593</span>

                  </div>

                </div>

                {/* WHATSAPP */}

                <div className="info-item">

                  <div className="info-icon">
                    <IoChatbubbleEllipses />
                  </div>

                  <div className="info-text">

                    <strong>SMS / WHATSAPP</strong>

                    <span>+91 87543 68593</span>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="info-item">

                  <div className="info-icon">
                    <FaEnvelope />
                  </div>

                  <div className="info-text">

                    <strong>EMAIL</strong>

                    <span>support@dendo.store</span>

                  </div>

                </div>

              </div>

              {/* SOCIAL */}

              <div className="info-socials">

                <span>CONNECT WITH US</span>

                <div className="social-icons">

                  <a href="https://www.instagram.com/dendo.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-icon">
                    <FaInstagram />
                  </a>

                  <a href="https://www.linkedin.com/company/dendo-store/" className="social-icon">
                    <FaLinkedinIn />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


    </div>
  );
};

export default ContactPage;