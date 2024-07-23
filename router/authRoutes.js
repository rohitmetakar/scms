const express = require('express');
const router = express.Router();
const authProcess = require('../auth/auth'); 

router.post('/register', authProcess.register);
router.post('/login', authProcess.login);

module.exports = router;
