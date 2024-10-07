const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');

exports.login = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM member_main WHERE email = ?', [email], (err, results) => {
        if (err) throw err;
        if (results.length === 0) return res.status(401).json({ message: 'User not found' });

        const user = results[0];
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });

        const token = jwt.sign({ id: user.id, role: user.role }, 'secretkey', { expiresIn: '1h' });

        res.json({ token });
    });
};
