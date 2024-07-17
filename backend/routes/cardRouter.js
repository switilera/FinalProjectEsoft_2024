const Router = require('express');
const {CardController} = require("../controllers/cardController");
const checkRole = require("../middleware/checkRoleMiddleware");

const router = new Router();

router.get('/', checkRole(), CardController.getCard)
router.post('/',checkRole(), CardController.addProduct)
router.put('/', checkRole(), CardController.deleteProduct)
router.delete('/', checkRole(), CardController.clearProducts)

module.exports = router;
