const Router = require('express').Router;
const GenderController = require('../controllers/gender-controller')
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', GenderController.create)
router.post('/edit', GenderController.edit)
router.get('/', GenderController.getAll)
router.get('/:_id', GenderController.getOne)
router.post('/del_one', GenderController.delOne)

module.exports = router;