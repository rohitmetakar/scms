const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userDb = require('../db.js/userDb'); // userDb for database operations

// Generate a JWT token for user
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h' // expires in 1 hr
  });
};

// Register user
const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 6);

    // Create the user in the users database
    const result = await userDb.createUser(email, hashedPassword);
    
    return res.status(201).json({ message: "user created ",result }); 
  } catch (error) {
    return res.status(500).json({ error: error.message }); // Respond with error message if an error occurs
  }
};

// Login an existing user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check email is exist or not
    const user = await userDb.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'invalid email or password' }); // if user not found
    }

    // compare the password with the stored hashed password
    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid) {
      return res.status(401).json({ error: 'invalid email or password' }); // if password is invalid
    }

    // Generate a JWT token for the authenticated user
    const token = generateToken(user);
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message }); // if an error occurs
  }
};

module.exports = { register, login }; // export the register and login functions
