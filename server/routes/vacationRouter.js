const Router = require('express').Router;
const vacationController = require('../controllers/vacation-controller');
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', vacationController.create)
router.get('/', vacationController.getAll)
router.get('/:_id', vacationController.getOneVacation)
router.get('/user/:user', vacationController.getOneVacationByUser)
router.post('/mdupdate', vacationController.editVacationMainDuration)
router.post('/del', vacationController.del)
router.post('/vadditional', vacationController.updateAdditionalDuration)
router.post('/vused', vacationController.updateUsedDuration)

module.exports = router;