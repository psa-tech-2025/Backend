class IndexController {
    getIndex(req, res) {
        res.send('Welcome to the backend Express.js project!');
    }
}

module.exports = IndexController;