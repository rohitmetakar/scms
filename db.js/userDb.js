const myDb = require('../config/config');

const userDb = {
    createUser: function (email, password) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO users(email, password) VALUES(?, ?)';
            myDb.query(query, [email, password], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },

    findByEmail: function (email) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE email = ?';
            myDb.query(query, [email], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]); // return the first result
                }
            });
        });
    },

    findById: function (id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE id = ?';
            myDb.query(query, [id], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]); // return the first result
                }
            });
        });
    },
};

module.exports = userDb;
