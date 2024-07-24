let orderDb = require('../db.js/orderDb')


let orderController = {

    getorderList: async function (req, res) {
        try {
            let getOrder = await orderDb.getOrder();
            return res.status(200).json({ message: "get all orders", getOrder });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    insertOrder: async function (req, res) {
        try {
            let { customer_id, order_date, status } = req.body

            if (!customer_id) {
                return res.status(401).json({ error: 'name required' }); // if user not found
            }
            if (!order_date) {
                return res.status(401).json({ error: 'contact_info is required' }); // if user not found
            }
            if (!status) {
                return res.status(401).json({ error: 'contact_info is required' }); // if user not found
            }
            let data = await orderDb._insertOrder(customer_id, order_date, status);
            return res.status(200).json({ message: "Insert order" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    getOrderById: async function (req, res) {
        try {
            let { id } = req.params || req.query;  // check parameter or query string
            let orderById = await orderDb._getOrderById(id)
            return res.status(200).json({ message: "get  order by id", orderById });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    updateById: async function (req, res) {
        try {
            let { id } = req.params || req.query;
            let { order_date, status } = req.body
            let upddateRec = await orderDb.updateOrder(id, order_date, status)
            return res.status(200).json({ message: "update order by id" });
        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    },

    deleteOrder: async function (req, res) {
        try {
            let { id } = req.params || req.query;
            let deleteRec = await orderDb._deleteOrder(id)
            return res.status(200).json({ message: "delete order by id" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },


    updateStatus: async function (req, res) {
        try {
            const id = req.params.id || req.query.id;
            const status = req.params.status || req.query.status;
            if (!status) {
                return res.status(400).json({ message: 'status required' });
            }
            const updateStatus = await orderDb.updateStatus(id, status);  //  update the status 'Pending', 'Fulfilled', 'Cancelled'
            return res.status(200).json({ message: 'Order status updated', updateStatus });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    getOrderItem: async function (req, res) {
        try {
            let { id } = req.params || req.query;  // check parameter or query string
            let orderitems = await orderDb._getOrderItems(id)
            return res.status(200).json({ message: "get  order Items", orderitems });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },




}
module.exports = orderController;