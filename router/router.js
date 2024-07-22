const express = require('express');
const router = express.Router();

const customerController = require('../controller/customerController');


//******Customers APi*************** */
router.get('/getCustomers', customerController.getCustomer);

router.post('/insertCustomer', customerController.insertCustomer)

router.get('/getCustomerById/:id', customerController.getCustomerById)

router.put('/updateCustomer/:id', customerController.updateById)

router.delete('/deleteCustomer/:id', customerController.deleteCustomer)


//customer order


module.exports = router;