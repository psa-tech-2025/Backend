const express = require('express');
const UserController = require('../controllers/userController');

const setUserRoutes = (app) => {
    const userController = new UserController();
    const router = express.Router();

    router.post('/register', userController.register.bind(userController));
    router.post('/login', userController.login.bind(userController));

    app.use('/api/users', router);
};

module.exports = setUserRoutes;