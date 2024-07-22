const dbConn = require('../config/config');

let customerDb = {
    getCustomers: async function () {
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

        console.log(name, contact_info);
        return new Promise((resolve, reject) => {
            let query = `INSERT INTO customer(name, contact_info)VALUES(?,?)`;
            console.log(query);
            dbConn.query(query, [name, contact_info], (err, results) => {
                if (err) {
                    console.log(err)
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
            console.log('query :>>>>>>', query);
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
            console.log(id);
            console.log(name);
            console.log(contact_info);
            let query = `UPDATE customer SET name = '${name}', contact_info = '${contact_info}' WHERE id = '${id}'`;
            dbConn.query(query, [], (error, result) => {
                if (error) {
                    console.log(error)
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    },

    _deleteCustomer : function(id){
        return new Promise((resolve, reject)=>{
            let query = `DELETE FROM customer WHERE id = ?`;
            dbConn.query(query, [id], (error, result)=>{
                if(error){
                    console.log(error);
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

};

module.exports = customerDb;
