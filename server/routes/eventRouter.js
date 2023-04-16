const Router = require('express').Router;
const eventController = require('../controllers/event-controller');
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', eventController.create)
router.post('/edit', eventController.edit)
router.get('/get_all', eventController.getAll)
router.get('/get_one', eventController.getOne)
router.delete('/del_one', eventController.delOne)

module.exports = router;