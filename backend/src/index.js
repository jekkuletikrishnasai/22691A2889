const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const shortUrlRouter = require('./routes/shorturl');

const app = express();
app.use(cors()); 
app.use(express.json());
app.use('/shorturls', shortUrlRouter);

mongoose.connect('mongodb://127.0.0.1:27017/url-shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => console.log('Server running on port 3000'));
})
.catch(err => console.log('Connection error:', err));
const Url = require('./models/url');

app.get('/:shortcode', async (req, res) => {
  try {
    const url = await Url.findOne({ shortcode: req.params.shortcode });
    if (!url) return res.status(404).send('Short URL not found');
    if (new Date() > url.expiry) return res.status(410).send('Link has expired');

    url.clickData.push({ timestamp: new Date() });
    await url.save();

    return res.redirect(url.originalUrl);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

