-- =======================================================
-- Database schema for the Dendo Hyperlocal Backend
-- Run this once against your PostgreSQL database.
-- =======================================================

-- 1. Zone Requests (Request zone page -> POST /api/zone-requests)
CREATE TABLE IF NOT EXISTS zone_requests (
  id          SERIAL PRIMARY KEY,
  state       VARCHAR(100) NOT NULL,
  district    VARCHAR(100) NOT NULL,
  area        VARCHAR(255) NOT NULL,
  message     TEXT,
  created_at  TIMESTAMP DEFAULT NOW()
);

-- 2. Contact Messages (Contact page -> POST /api/contact-messages)
CREATE TABLE IF NOT EXISTS contact_messages (
  id            SERIAL PRIMARY KEY,
  first_name    VARCHAR(100) NOT NULL,
  email         VARCHAR(255) NOT NULL,
  mobile_number VARCHAR(50) NOT NULL,
  query_type    VARCHAR(100) NOT NULL,
  message       TEXT NOT NULL,
  created_at    TIMESTAMP DEFAULT NOW()
);

-- 3. Driver Applications (Driver onboarding page -> POST /api/driver-applications)
CREATE TABLE IF NOT EXISTS driver_applications (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  phone       VARCHAR(50) NOT NULL,
  state       VARCHAR(100) NOT NULL,
  district    VARCHAR(100) NOT NULL,
  area        VARCHAR(255) NOT NULL,
  dob         DATE NOT NULL,
  created_at  TIMESTAMP DEFAULT NOW()
);

-- 4. Vendor Applications (Vendor partner onboarding page -> POST /api/vendor-applications)
CREATE TABLE IF NOT EXISTS vendor_applications (
  id          SERIAL PRIMARY KEY,
  owner_name  VARCHAR(100) NOT NULL,
  phone       VARCHAR(50) NOT NULL,
  shop_name   VARCHAR(255) NOT NULL,
  shop_number VARCHAR(100),
  state       VARCHAR(100) NOT NULL,
  district    VARCHAR(100) NOT NULL,
  city        VARCHAR(100) NOT NULL,
  created_at  TIMESTAMP DEFAULT NOW()
);
