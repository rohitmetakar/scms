const customerDb = require('../db.js/customerDb');

const customerController = {
    getCustomer: async function (req, res) {
        try {
            let getCustomer = await customerDb.getCustomers();
            return res.status(200).json({ message: "get all customer", getCustomer });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    insertCustomer: async function (req, res) {
        try {
            let { name, contact_info } = req.body

            if (!name) {
                return res.status(401).json({ error: 'name required' }); // if user not found
            }
            if (!contact_info) {
                return res.status(401).json({ error: 'contact_info is required' }); // if user not found
            }

            let data = await customerDb._insertCustomer(name, contact_info);  //insert database
            return res.status(200).json({ message: "insert customer" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    getCustomerById: async function (req, res) {
        try {
            let { id } = req.params || req.query;  // check parameter or query string
            let customerByid = await customerDb._getCustomerById(id)  //find data sing id
            return res.status(200).json({ message: "get  customer", customerByid });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    updateById: async function (req, res) {
        try {
            let { id } = req.params || req.query;
            let { name, contact_info } = req.body
            let upddateRec = await customerDb.updateCutomer(id, name, contact_info)  //update customer table
            return res.status(200).json({ message: "update customer by id" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    deleteCustomer: async function (req, res) {
        try {
            let { id } = req.params || req.query;
            let deleteRec = await customerDb._deleteCustomer(id)
            return res.status(200).json({ message: "delete customer by id", deleteRec });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }




};

module.exports = customerController;
