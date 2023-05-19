const Router = require('express').Router;
const dayOffController = require('../controllers/dayOff-controller');
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', dayOffController.create)
router.post('/approve', dayOffController.approve)
router.get('/', dayOffController.getAll)
router.get('/:_id', dayOffController.getOneDayOff)
router.post('/del', dayOffController.del)

module.exports = router;