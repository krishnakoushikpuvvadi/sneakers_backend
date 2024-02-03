const router = require('express').Router();
const userController = require('../controllers/userscontrollers');
const { verifyToken } = require('../middleware/verifyToken');

router.get('/',verifyToken,userController.getUser)
router.delete('/',verifyToken,userController.delete)

module.exports = router