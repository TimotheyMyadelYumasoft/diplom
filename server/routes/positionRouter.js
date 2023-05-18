const Router = require('express').Router;
const PositionController = require('../controllers/position-controller')
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', PositionController.create)
router.post('/edit', PositionController.edit)
router.get('/', PositionController.getAll)
router.get('/:_id', PositionController.getOne)
router.post('/del_one', PositionController.delOne)

module.exports = router;