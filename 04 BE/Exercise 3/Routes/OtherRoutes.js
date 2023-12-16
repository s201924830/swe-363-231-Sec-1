const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/Data_Submitted', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'Data_Submitted.html'));
});

router.get('/ScreenSaver', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'ScreenSaver.html'));
});

module.exports = router;