const express = require('express');
const userRoutes = require('./userRoutes');

function setRoutes(app) {
    app.use('/api/users', userRoutes);
}

module.exports = setRoutes;