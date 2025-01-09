const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('dbs13177801', 'dbu1235704', 'hcrf7861%', { 
    host: 'db5016192254.hosting-data.io',
    dialect: 'mysql',
});

// Test the connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to MySQL has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to MySQL:', error);
    }
})();

module.exports = sequelize;
