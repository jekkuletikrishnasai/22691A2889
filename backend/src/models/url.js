const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema({
  shortcode: { type: String, required: true, unique: true },
  originalUrl: { type: String, required: true },
  expiry: { type: Date, required: true },
  clickData: [{
    timestamp: Date,
    source: String,
    location: String
  }]
});
module.exports = mongoose.model('Url', urlSchema);
