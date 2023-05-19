const Router = require('express').Router;
const StatusDayOffController = require('../controllers/statusDayOff-controller')
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', StatusDayOffController.create)
router.post('/edit', StatusDayOffController.edit)
router.get('/', StatusDayOffController.getAll)
router.get('/:_id', StatusDayOffController.getOne)
router.post('/del_one', StatusDayOffController.delOne)

module.exports = router;