const Router = require('express').Router;
const MainVacationDurationController = require('../controllers/mainVacationDuration-controller')
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', MainVacationDurationController.create)
router.post('/edit', MainVacationDurationController.edit)
router.get('/', MainVacationDurationController.getAll)
router.get('/:_id', MainVacationDurationController.getOne)
router.post('/del_one', MainVacationDurationController.delOne)

module.exports = router;