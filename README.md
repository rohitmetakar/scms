# Supply Chain Management API

# A RESTful API for managing a supply chain system, including products, suppliers, customers, orders, and shipments.

# code structure
- create controller.js file for buisness logic.
- create DB.js file to write all database queris.
- create route.js file to add all route.
- craete auth.js file and write user login and residtration API function and generate jwt token.
- create config.js file write database connection code.

# authentication.
    create middleware function for verify the jsonWebtoken
    create .env file and add security key
    create gitignore file for node_module

# database name : 
    supply_chain_management
 # use phpMyAdmin for storing the data:
    host =localhost
    user=root
    password=
    db_name = supply_chain_management

# project run command : 
node app.js
# tools :
  VS code
  phpMyAdmin
# dependencies :
    "bcrypt": "^5.1.1",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.2",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mysql": "^2.18.1",
    "nodemon": "^3.1.4",
