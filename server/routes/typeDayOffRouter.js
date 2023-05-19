const Router = require('express').Router;
const TypeDayOffController = require('../controllers/typeDayOff-controller')
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', TypeDayOffController.create)
router.post('/edit', TypeDayOffController.edit)
router.get('/', TypeDayOffController.getAll)
router.get('/:_id', TypeDayOffController.getOne)
router.post('/del_one', TypeDayOffController.delOne)

module.exports = router;