// TermsPage.jsx

import React from "react";
import "./TermsPage.css";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import dendoLogo from "../assets/logo.png";

const TermsPage = () => {

  const navigate = useNavigate();

  return (

    <div className="terms-page">

      {/* ================= HEADER ================= */}

      <div className="terms-header">

        {/* LEFT SIDE */}

        <div className="terms-header-left">

          {/* BACK BUTTON */}

          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            <FaArrowLeft className="back-icon" />
          </button>

          {/* TITLE */}

          <h1 className="terms-title">
            Terms & Conditions
          </h1>

        </div>

        {/* RIGHT LOGO */}

        <img
          src={dendoLogo}
          alt="Dendo"
          className="dendo-logo"
        />

      </div>

      {/* ================= CONTENT BOX ================= */}

      <div className="terms-content-wrapper">

      
<div className="terms-content">

  <h2>TERMS AND CONDITIONS</h2>

 

  <p>
    These Terms and Conditions ("Terms") govern the use of the
    DENDO platform operated under DENDO Private Limited.
  </p>

  <p>
    By accessing or using the DENDO application, website,
    or services, you agree to these Terms and Conditions.
  </p>

  <hr />

  <h3>1. Eligibility</h3>

  <p>
    DENDO is strictly intended only for individuals who are
    18 years of age or older.
  </p>

  <p>By using the Platform, you confirm that:</p>

  <ul>
    <li>You are legally eligible to enter into binding agreements.</li>
    <li>The information provided by you is accurate.</li>
    <li>You will use the Platform only for lawful purposes.</li>
  </ul>

  <hr />

  <h3>2. Platform Services</h3>

  <p>
    DENDO operates as a technology-enabled delivery and service
    facilitation platform connecting users with vendors and
    delivery partners.
  </p>

  <p>Services may include:</p>

  <ul>
    <li>Food delivery</li>
    <li>Grocery delivery</li>
    <li>Pharmacy delivery</li>
    <li>Hyperlocal quick delivery services</li>
  </ul>

  <hr />

  <h3>3. Account Responsibility</h3>

  <p>Users are responsible for:</p>

  <ul>
    <li>Maintaining account confidentiality</li>
    <li>Securing login credentials</li>
    <li>Activities conducted through their account</li>
  </ul>

  <p>
    DENDO may suspend or terminate accounts involved in fraud,
    misuse, abuse, or illegal activities.
  </p>

  <hr />

  <h3>4. Orders and Payments</h3>

  <p>Orders are subject to:</p>

  <ul>
    <li>Vendor acceptance</li>
    <li>Product availability</li>
    <li>Delivery serviceability</li>
    <li>Successful payment authorization</li>
  </ul>

  <p>Users agree to pay:</p>

  <ul>
    <li>Product charges</li>
    <li>Delivery fees</li>
    <li>Taxes</li>
    <li>Packaging charges</li>
    <li>Platform fees where applicable</li>
  </ul>

  <hr />

  <h3>5. Cancellations and Refunds</h3>

  <p>
    Cancellation and refund eligibility may vary depending on:
  </p>

  <ul>
    <li>Order status</li>
    <li>Vendor policies</li>
    <li>Delivery status</li>
    <li>Product category</li>
  </ul>

  <p>
    DENDO reserves the right to deny refunds in cases involving
    misuse, fraud, repeated abuse, or false complaints.
  </p>

  <hr />

  <h3>6. Delivery Terms</h3>

  <p>
    Delivery timelines are estimates and may vary due to:
  </p>

  <ul>
    <li>Traffic conditions</li>
    <li>Weather conditions</li>
    <li>Vendor delays</li>
    <li>Operational issues</li>
  </ul>

  <p>
    Users must provide accurate delivery information and
    cooperate during delivery.
  </p>

  <hr />

  <h3>7. User Conduct</h3>

  <p>Users shall not:</p>

  <ul>
    <li>Use the Platform for unlawful activities</li>
    <li>Abuse vendors, delivery partners, or employees</li>
    <li>Conduct fraudulent transactions</li>
    <li>Misuse offers or promotions</li>
    <li>Attempt unauthorized access to the Platform</li>
  </ul>

  <p>
    Violation may result in account suspension or permanent
    termination.
  </p>

  <hr />

  <h3>8. Privacy</h3>

  <p>
    Use of the Platform is also governed by the DENDO
    Privacy Policy.
  </p>

  <p>
    By using the Platform, users consent to the collection
    and processing of information as described in the
    Privacy Policy.
  </p>

  <hr />

  <h3>9. Communication Consent</h3>

  <p>Users agree to receive:</p>

  <ul>
    <li>Order updates</li>
    <li>OTPs</li>
    <li>Delivery notifications</li>
    <li>Customer support messages</li>
    <li>Promotional communications where legally permitted</li>
  </ul>

  <p>Communications may be sent through:</p>

  <ul>
    <li>WhatsApp</li>
    <li>SMS</li>
    <li>Email</li>
    <li>Phone calls</li>
    <li>Push notifications</li>
  </ul>

  <hr />

  <h3>10. Limitation of Liability</h3>

  <p>DENDO shall not be liable for:</p>

  <ul>
    <li>Delivery delays</li>
    <li>Vendor-related quality issues</li>
    <li>Technical downtime</li>
    <li>Data loss</li>
    <li>Indirect or consequential damages</li>
  </ul>

  <p>
    Services are provided on an "as is" and "as available"
    basis.
  </p>

  <hr />

  <h3>11. Termination</h3>

  <p>
    DENDO reserves the right to suspend or terminate user
    access for:
  </p>

  <ul>
    <li>Violation of Terms</li>
    <li>Fraudulent activities</li>
    <li>Misuse of the Platform</li>
    <li>Harmful conduct</li>
  </ul>

  <hr />

  <h3>12. Modifications to Terms</h3>

  <p>
    DENDO may update these Terms at any time.
  </p>

  <p>Updates may be communicated through:</p>

  <ul>
    <li>In-app notifications</li>
    <li>WhatsApp communications</li>
    <li>SMS</li>
    <li>Email</li>
    <li>Website announcements</li>
  </ul>

  <p>
    Continued use of the Platform constitutes acceptance of
    revised Terms.
  </p>

  <hr />

  <h3>13. Governing Law</h3>

  <p>
    These Terms shall be governed by the laws of India.
  </p>

  <p>
    Any disputes shall be subject to the jurisdiction of
    courts located in Dharmapuri, Tamil Nadu, India.
  </p>

  <hr />

  <h3>14. Contact Information</h3>

  <p>
    [COMPANY CONTACT DETAILS TO BE ADDED]
  </p>

  <hr />

  <p>
    By using the DENDO Platform, users acknowledge that
    they have read, understood, and agreed to these
    Terms and Conditions.
  </p>

  <p>
    DENDO operates as a service and application under
    DENDO Private Limited.
  </p>

</div>



      </div>

    </div>
  );
};

export default TermsPage;