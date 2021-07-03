const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'taha',
    database: 'covid',
    password: 'password'
});

module.exports = pool.promise();