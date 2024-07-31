// server/routes/contact.js
const express = require('express');
const multer = require('multer');
const Contact = require('../models/Contact');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
  const { name, email, phone } = req.body;
  const file = req.file.path;

  try {
    const contact = new Contact({ name, email, phone, file });
    await contact.save();
    res.status(201).send('Contact saved successfully');
  } catch (err) {
    res.status(500).send('Error saving contact');
  }
});

module.exports = router;
