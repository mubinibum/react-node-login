const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/member', authMiddleware(['member', 'admin']), (req, res) => {
    res.json({ message: 'Hello, Member' });
});

module.exports = router;
