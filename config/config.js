const mysql = require('mysql');
require('dotenv').config();
// Create a MySQL connection using env variables
const dbConn = mysql.createConnection({
    host: process.env.HOST, //  host
    user: process.env.USER, //  user
    password: process.env.PASSWORD, //  password
    database: process.env.NAME //name
});
// Connect to database
dbConn.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.stack); //  if connection fails
        return err; // return error
    }
    console.log('Database connection successful'); //  if connection is successful
});
module.exports = dbConn; 