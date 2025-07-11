const express = require('express');
const router = express.Router();
const Url = require('../models/url');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/', async (req, res) => {
  const { url, validity = 30, shortcode } = req.body;
  if (!isValidUrl(url)) return res.status(400).json({ error: 'Invalid URL' });
  const expiry = new Date(Date.now() + validity * 60000);
  const finalShortcode = shortcode || uuidv4().slice(0, 6);
  const newUrl = new Url({ shortcode: finalShortcode, originalUrl: url, expiry, clickData: [] });
  await newUrl.save();
  res.status(201).json({
    shortLink: `http://localhost:3000/${finalShortcode}`,
    expiry: expiry.toISOString()
  });
});

router.get('/:shortcode', async (req, res) => {
  const url = await Url.findOne({ shortcode: req.params.shortcode });
  if (!url) return res.status(404).json({ error: 'Shortcode not found' });
  res.json({
    totalClicks: url.clickData.length,
    originalUrl: url.originalUrl,
    creationDate: url.createdAt,
    expiryDate: url.expiry,
    clickData: url.clickData
  });
});

function isValidUrl(string) {
  try { new URL(string); return true; } catch { return false; }
}

module.exports = router;
