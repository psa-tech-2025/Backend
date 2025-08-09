const express = require('express');
const bodyParser = require('body-parser');
const setRoutes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

// If you want to test the SQLite connection here, you can require your index.js
require('./index'); // This will run the connection test

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
setRoutes(app);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});