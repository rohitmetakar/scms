const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const router = require('./router/router.js'); 
const authRoutes = require('./router/authRoutes.js'); //  authentication routes
require('./auth/middleware'); // add the authentication middleware
require('./config/config.js'); // Add configuration settings
require('dotenv').config(); // env variables from .env file
const verifyToken = require('./auth/middleware.js'); // add token to verification the middleware

const app = express();
const port = process.env.PORT; // Get the port number in env var

// Middleware
app.use(bodyParser.json()); // parse JSON body
app.use(bodyParser.urlencoded({ extended: true })); // parse urlencoded body
app.use(express.json()); // Parse JSON body

// Routes
app.use('/api/auth', authRoutes); // Set routes for user authentication 
app.use('/api', verifyToken, router); // Set API routes with token verification middleware

// Start the server
app.listen(port, () => {
    console.log(`Project started on port ${port}`); 
});
