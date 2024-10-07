const express = require('express');
const router = express.Router();
const authMiddleware = require('../config/middleware');

router.get('/admin', authMiddleware(['admin']), (req, res) => {
    res.json({ message: 'Hello, Admin' });
});

module.exports = router;
