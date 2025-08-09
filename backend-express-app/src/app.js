const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const setRoutes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const dbConfig = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
dbConfig();

// Set up routes
setRoutes(app);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});