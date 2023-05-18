const Router = require('express').Router;
const LocationController = require('../controllers/location-controller')
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', LocationController.create)
router.post('/edit', LocationController.edit)
router.get('/', LocationController.getAll)
router.get('/:_id', LocationController.getOne)
router.post('/del_one', LocationController.delOne)

module.exports = router;