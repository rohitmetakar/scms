const mysql = require('mysql')
require('dotenv').config();

const dbConn  = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME
})
// console.log("dbConn:>>>>", process.env.HOST);

dbConn.connect((err) => {
    if (err) {
        console.error('database connection error:', err.stack);
        return err;
    }
    console.log('database connection success');
});


module.exports = dbConn


