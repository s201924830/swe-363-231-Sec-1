const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/Data_Submitted', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'Data_Submitted.html'));
});

router.get('/ScreenSaver', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'ScreenSaver.html'));
});

module.exports = router;
