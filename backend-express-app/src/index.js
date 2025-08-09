const { Sequelize } = require('sequelize');

// Initialize Sequelize for SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();