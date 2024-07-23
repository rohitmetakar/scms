const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');
const orderController = require('../controller/orderController')


//******Customers APi*************** */
router.get('/getCustomers', customerController.getCustomer);

router.post('/insertCustomer', customerController.insertCustomer)

router.get('/getCustomerById/:id', customerController.getCustomerById)

router.put('/updateCustomer/:id', customerController.updateById)

router.delete('/deleteCustomer/:id', customerController.deleteCustomer)


//customer order

router.get('/getOrder',orderController.getorderList)

router.post('/insertOrder', orderController.insertOrder)

router.get('/getOrderById/:id', orderController.getOrderById)

router.put('/updateOrder/:id', orderController.updateById)

router.delete('/deleteOrder/:id', orderController.deleteOrder)

router.patch('/updateStatus/:id/:status', orderController.updateStatus)

router.get('/orders/:id', orderController.getOrderItem)



module.exports = router;