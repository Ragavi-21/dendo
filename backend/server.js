import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression';
import { query, initializeDatabase } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(compression());
app.use(cors());
app.use(express.json());

// Diagnostic Health Check Route
app.get('/api/status', async (req, res) => {
  try {
    const zoneCount = await query('SELECT COUNT(*) FROM zone_requests');
    const contactCount = await query('SELECT COUNT(*) FROM contact_messages');
    const driverCount = await query('SELECT COUNT(*) FROM driver_applications');
    const vendorCount = await query('SELECT COUNT(*) FROM vendor_applications');
    
    res.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString(),
      counts: {
        zoneRequests: parseInt(zoneCount.rows[0].count),
        contactMessages: parseInt(contactCount.rows[0].count),
        driverApplications: parseInt(driverCount.rows[0].count),
        vendorApplications: parseInt(vendorCount.rows[0].count),
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      error: error.message
    });
  }
});

// 1. Submit Zone Request
app.post('/api/zone-requests', async (req, res) => {
  const { state, district, area, message } = req.body;

  if (!state || !district || !area) {
    return res.status(400).json({
      success: false,
      message: 'State, District, and Area/Locality are required fields.'
    });
  }

  try {
    const result = await query(
      `INSERT INTO zone_requests (state, district, area, message) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [state, district, area, message || '']
    );

    res.status(201).json({
      success: true,
      message: 'Zone request submitted successfully!',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Error saving zone request:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error: Failed to submit zone request.',
      error: error.message
    });
  }
});

// 2. Submit Contact Message
app.post('/api/contact-messages', async (req, res) => {
  const { firstName, email, mobileNumber, queryType, message } = req.body;

  if (!firstName || !email || !mobileNumber || !queryType || !message) {
    return res.status(400).json({
      success: false,
      message: 'First Name, Email, Mobile Number, Query Type, and Message are required fields.'
    });
  }

  try {
    const result = await query(
      `INSERT INTO contact_messages (first_name, email, mobile_number, query_type, message) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [firstName, email, mobileNumber, queryType, message]
    );

    res.status(201).json({
      success: true,
      message: 'Contact message sent successfully!',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Error saving contact message:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error: Failed to send contact message.',
      error: error.message
    });
  }
});

// 3. Submit Driver Application
app.post('/api/driver-applications', async (req, res) => {
  const { name, phone, state, district, area, dob } = req.body;

  if (!name || !phone || !state || !district || !area || !dob) {
    return res.status(400).json({
      success: false,
      message: 'Name, Phone, State, District, Area, and Date of Birth are all required fields.'
    });
  }

  try {
    const result = await query(
      `INSERT INTO driver_applications (name, phone, state, district, area, dob) 
       VALUES ($1, $2, $3, $4, $5, $6) 
       RETURNING *`,
      [name, phone, state, district, area, dob]
    );

    res.status(201).json({
      success: true,
      message: 'Driver application submitted successfully!',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Error saving driver application:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error: Failed to submit driver application.',
      error: error.message
    });
  }
});

// 4. Submit Vendor Application
app.post('/api/vendor-applications', async (req, res) => {
  const { ownerName, phone, shopName, shopNumber, state, district, city } = req.body;

  if (!ownerName || !phone || !shopName || !state || !district || !city) {
    return res.status(400).json({
      success: false,
      message: 'Owner Name, Phone Number, Shop Name, State, District, and City are required fields.'
    });
  }

  try {
    const result = await query(
      `INSERT INTO vendor_applications (owner_name, phone, shop_name, shop_number, state, district, city) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [ownerName, phone, shopName, shopNumber || null, state, district, city]
    );

    res.status(201).json({
      success: true,
      message: 'Vendor application submitted successfully!',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Error saving vendor application:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error: Failed to submit vendor application.',
      error: error.message
    });
  }
});

// Start Backend Server
async function startServer() {
  try {
    await initializeDatabase();
    let port = PORT;
    const maxAttempts = 5;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        await new Promise((resolve, reject) => {
          const server = app.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`);
            resolve();
          });
          server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
              console.warn(`⚠️ Port ${port} in use, trying next port...`);
              server.close();
              reject(err);
            } else {
              reject(err);
            }
          });
        });
        // If we reach here, server started successfully
        break;
      } catch (err) {
        if (err.code === 'EADDRINUSE') {
          port++;
          continue;
        }
        throw err;
      }
    }
  } catch (error) {
    console.error('❌ Failed to start backend server:', error.message);
    process.exit(1);
  }
}

startServer();
