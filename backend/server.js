// server.js

// ✅ Load env variables before using them
const dotenv = require('dotenv');
dotenv.config(); // This MUST come before any process.env references

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000; // ✅ Now this will correctly read from .env

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
