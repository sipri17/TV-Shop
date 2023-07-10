const Controller = require('../controllers');
const authentication = require('../middlewares/authentication');
const router = require('express').Router()




router.post('/login', Controller.login )

router.use(authentication )
router.get('/orders', Controller.findAllOrders )
router.get('/items', Controller.findAllItems )
router.post('/order',Controller.createOrder)
router.get('/order/:id', Controller.findOrder )




module.exports = router