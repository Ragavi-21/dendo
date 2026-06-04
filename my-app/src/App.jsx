import React, { Suspense, lazy } from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Values from './components/Values';
import Offers from './components/Offers';
import Footer from './components/Footer';

const About = lazy(() => import('./components/AboutPage'));
const Contact = lazy(() => import('./components/ContactPage'));
const Delivery = lazy(() => import('./components/DeliveryPage'));
const Vendor = lazy(() => import('./components/VendorPage'));
const Driver = lazy(() => import('./components/DriverPage'));

const TermsPage = lazy(() => import('./components/Termspage'));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage'));
const RequestZone = lazy(() => import('./components/RequestZone'));

import './App.css';

/* =========================
   HOME PAGE
========================= */

const Home = () => {
  return (
    <div className="app-container">

      <div className="hero-section-wrapper">
        <Navbar />
        <Hero />
      </div>

      <Features />
      <Values />
      <Offers />
      <Footer />

    </div>
  );
};

/* =========================
   COMMON LAYOUT
========================= */

const AboutLayout = ({ content }) => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        {content}
      </Suspense>
      <Footer />
    </>
  );
};

/* =========================
   APP
========================= */

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f8fafc' }}>
    <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #113f8c', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LANDING PAGE */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT PAGE */}
        <Route
          path="/about"
          element={
            <AboutLayout content={<About />} />
          }
        />

        {/* CONTACT PAGE */}
        <Route
          path="/contact"
          element={
            <AboutLayout content={<Contact />} />
          }
        />

        {/* DELIVERY PAGE */}
        <Route
          path="/delivery"
          element={
            <AboutLayout content={<Delivery />} />
          }
        />

        {/* VENDOR PAGE */}
        <Route
          path="/vendor"
          element={
            <AboutLayout content={<Vendor />} />
          }
        />

        {/* DRIVER PAGE */}
        <Route
          path="/driver"
          element={
            <AboutLayout content={<Driver />} />
          }
        />

        {/* TERMS PAGE */}
        <Route
          path="/terms"
          element={
            <Suspense fallback={<PageLoader />}>
              <TermsPage />
            </Suspense>
          }
        />

        {/* PRIVACY POLICY PAGE */}
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <PrivacyPolicyPage />
            </Suspense>
          }
        />

        {/* REQUEST ZONE PAGE */}
        <Route
          path="/request-zone"
          element={
            <Suspense fallback={<PageLoader />}>
              <RequestZone />
            </Suspense>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;