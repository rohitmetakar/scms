const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); 
const router = require('./router/router.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



// Routes
app.use('/api', router);

// Start the server
app.listen(port, () => {
    console.log(`Project started on port...: ${port}`);
});
