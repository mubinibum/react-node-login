const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Konfigurasi CORS untuk mengizinkan akses dari port 3000
const corsOptions = {
    origin: 'http://localhost:3000', // Ganti ini dengan alamat frontend Anda
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(authRoutes);
app.use(userRoutes);
app.use(adminRoutes);

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
