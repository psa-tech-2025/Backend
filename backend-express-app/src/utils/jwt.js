const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Replace with your actual secret key

const generateToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        mobile: user.mobile,
        admin: user.admin,
    };
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null;
    }
};

module.exports = {
    generateToken,
    verifyToken,
};