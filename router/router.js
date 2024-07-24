const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');
const orderController = require('../controller/orderController')


//******Customers APi*************** */
router.get('/getCustomers', customerController.getCustomer); //List all customers

router.post('/insertCustomer', customerController.insertCustomer) //Create a new customer

router.get('/getCustomerById/:id', customerController.getCustomerById) //Retrieve a customer by ID

router.put('/updateCustomer/:id', customerController.updateById)  //Update a customer by ID

router.delete('/deleteCustomer/:id', customerController.deleteCustomer) //Delete a customer by ID


//customer order

router.get('/getOrder',orderController.getorderList) //List all orders

router.post('/insertOrder', orderController.insertOrder) //Create a new order

router.get('/getOrderById/:id', orderController.getOrderById) //Retrieve an order by ID

router.put('/updateOrder/:id', orderController.updateById) //Update an order by ID

router.delete('/deleteOrder/:id', orderController.deleteOrder) //Delete an order by ID

router.patch('/updateStatus/:id/:status', orderController.updateStatus) //Update the status of an order

router.get('/orders/:id', orderController.getOrderItem)  //List all items in an order



module.exports = router;