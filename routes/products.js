const router = require('express').Router();
const productContoller = require('../controllers/productcontrollers');

router.get('/', productContoller.getAllProducts)
router.get('/:id', productContoller.getProduct)
router.get ('/search/:key', productContoller.searchProducts)
router.post('/', productContoller.createProduct)

module.exports = router;