const express = require('express');
const app = express();
const db = require('./config/db');
const loggingMiddleware = require('./middleware/logging');
const shorturlRoutes = require('./routes/shorturl');

app.use(loggingMiddleware);
app.use('/shorturls', shorturlRoutes);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => console.log('Server running on port 3000'));
});
