class UserController {
    async register(req, res) {
        const { name, mobile, password, admin } = req.body;
        // Logic for user registration, including validation and saving to the database
        res.status(201).send('User registered successfully');
    }

    async login(req, res) {
        const { mobile, password } = req.body;
        // Logic for user login, including validation and JWT generation
        res.status(200).send('User logged in successfully');
    }
}

module.exports = UserController;