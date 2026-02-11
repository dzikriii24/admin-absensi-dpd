const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');

// Load Config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Biar frontend bisa akses
app.use(express.json()); // Biar bisa baca JSON dari frontend
app.use(express.static('public')); // Untuk akses folder foto/uploads

// Route Test Sederhana
app.get('/', (req, res) => {
    res.send('🚀 Server API User Absensi Siap!');
});

// Contoh Route Test Database Langsung di Browser
app.get('/api/test-users', async (req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM users');
        res.json({
            status: 'success',
            message: 'Koneksi DB Aman',
            data: users
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Jalankan Server
app.listen(PORT, () => {
    console.log(`
    ========================================
    SERVER USER RUNNING ON PORT ${PORT}
    http://localhost:${PORT}
    ========================================
    `);
});