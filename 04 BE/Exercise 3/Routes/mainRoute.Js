const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'Main.html'));
});

router.get('/Items_Table', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'Items_Table.html'));
});

router.get('/Contact_Us', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'Contact_Us.html'));
});

module.exports = router;
