const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/url-shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.then(() => console.log('Server running on port 3000'))
.catch(err => console.log('connection error:', err));