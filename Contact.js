// server/models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  file: String,
});

module.exports = mongoose.model('Contact', contactSchema);
