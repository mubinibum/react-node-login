const jwt = require('jsonwebtoken');

module.exports = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return (req, res, next) => {
        const token = req.headers['authorization'];

        if (!token) return res.status(401).json({ message: 'Access denied' });

        jwt.verify(token, 'secretkey', (err, decoded) => {
            if (err) return res.status(401).json({ message: 'Invalid token' });

            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Forbidden' });
            }

            req.user = decoded;
            next();
        });
    };
};
