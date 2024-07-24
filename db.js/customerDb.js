const dbConn = require('../config/config');

let customerDb = {
    getCustomers:  function () {
        return new Promise((resolve, reject) => {
            let query = 'SELECT * FROM customer';
            dbConn.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },

    _insertCustomer: function (name, contact_info) {
        return new Promise((resolve, reject) => {
            let query = `INSERT INTO customer(name, contact_info)VALUES(?,?)`;
            dbConn.query(query, [name, contact_info], (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        })
    },

    _getCustomerById: function (id) {
        return new Promise((resolve, reject) => {
            let query = `SELECT * FROM customer WHERE id = ?`;
            dbConn.query(query, [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },

    updateCutomer: function (id, name, contact_info) {
        return new Promise((resolve, reject) => {
            let query = `UPDATE customer SET name = '${name}', contact_info = '${contact_info}' WHERE id = '${id}'`;
            dbConn.query(query, [], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    },

    _deleteCustomer: function (id) {
        return new Promise((resolve, reject) => {
            let query = `DELETE FROM customer WHERE id = ?`;
            dbConn.query(query, [id], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    }

};

module.exports = customerDb;
