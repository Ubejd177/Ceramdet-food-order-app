const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

let activeLocation = 'Main Street 1';
let allOrders = [];

// Reset all orders
app.post('/orders/reset', (req, res) => {
  allOrders = [];
  res.json({ success: true });
});
// Get all orders
app.get('/orders', (req, res) => {
  res.json({ orders: allOrders });
});

// Add a new order
app.post('/orders', (req, res) => {
  const { order, customer, location } = req.body;
  if (Array.isArray(order) && typeof customer === 'string' && typeof location === 'string') {
    allOrders.push({ order, customer, location, time: new Date().toISOString() });
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, error: 'Invalid order data' });
  }
});

app.get('/location', (req, res) => {
  res.json({ location: activeLocation });
});

app.post('/location', (req, res) => {
  const { location } = req.body;
  if (typeof location === 'string' && location.length > 0) {
    activeLocation = location;
    res.json({ success: true, location: activeLocation });
  } else {
    res.status(400).json({ success: false, error: 'Invalid location' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Location API server running on http://0.0.0.0:${PORT}`);
});
