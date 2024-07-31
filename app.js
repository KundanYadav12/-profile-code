// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const contactRoute = require('./routes/contact');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/kundan-portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
