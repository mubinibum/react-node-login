const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'iapiwebi_main_dev'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Database connected!');
});

module.exports = connection;
