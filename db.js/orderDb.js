const myDb = require('../config/config')

const orderDb = {
    getOrder: async function () {
        return new Promise((resolve, reject) => {
            let query = 'SELECT * FROM orders';
            myDb.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },

    _insertOrder: function (customer_id, order_date, status) {
        return new Promise((resolve, reject) => {
            let query = 'INSERT INTO orders(customer_id, order_date, status)VALUES(?,?,?)';
            myDb.query(query, [customer_id, order_date, status], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },

    _getOrderById: function (id) {
        return new Promise((resolve, reject) => {
            let query = `SELECT * FROM orders WHERE id = ?`;
            myDb.query(query, [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },

    updateOrder: function (id, order_date, status) {
        return new Promise((resolve, reject) => {
            let query = `UPDATE orders SET order_date = '${order_date}', status = '${status}' WHERE id = '${id}'`;
            myDb.query(query, [], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    },

    _deleteOrder: function (id) {
        return new Promise((resolve, reject) => {
            let query = `DELETE FROM orders WHERE id = ?`;
            myDb.query(query, [id], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    },

    updateStatus: function (id, status) {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE orders SET status = ? WHERE id = ?';  //update status
            myDb.query(query, [status, id], (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            });
        });
    },

    _getOrderItems: function (id) {
        return new Promise((resolve, reject) => {
            // get all data in order item by order_id
            let query = `SELECT oi.order_id, oi.product_id, oi.quantity, oi.price, o.order_date, o.status 
                         FROM orders o 
                         INNER JOIN orderitem oi ON oi.order_id = o.id
                         WHERE o.id = ?`;
            myDb.query(query, [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },


}

module.exports = orderDb