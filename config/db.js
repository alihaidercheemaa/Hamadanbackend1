const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db5016192254.hosting-data.io',
    user: 'dbu1235704',
    password: 'hcrf7861%',
    database: 'dbs13177801', 
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = connection;
