const Router = require('express').Router;
const eventController = require('../controllers/event-controller');
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', eventController.create)
router.post('/edit', eventController.edit)
router.get('/', eventController.getAll)
router.get('/:_id', eventController.getOne)
router.post('/del_one', eventController.delOne)

module.exports = router;