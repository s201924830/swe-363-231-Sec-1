const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/Main', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Public', 'Main.html'));
});

router.get('/Items_Table', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Public', 'Items_Table.html'));
});

router.get('/Contact_Us', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Public', 'Contact_Us.html'));
});

module.exports = router;