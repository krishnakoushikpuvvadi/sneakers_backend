const router = require('express').Router();
const cartController = require('../controllers/cartcontrollers');
const {verifyToken} = require('../middleware/verifyToken')

router.get('/find/',verifyToken,cartController.getCart)
router.post('/',verifyToken,cartController.addCart)
router.delete('/:cartItem',verifyToken,cartController.deleteCartItem)

module.exports = router 