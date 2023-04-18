const Router = require('express').Router;
const vacationController = require('../controllers/vacation-controller');
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', vacationController.create)
router.post('/approve', vacationController.approve)
router.get('/', vacationController.getAll)
router.get('/:_id', vacationController.getOneVacation)
router.post('/del', vacationController.del)
router.post('/comment_employer', vacationController.commentEmployer)
router.post('/comment_reviewer', vacationController.commentReviewer)

module.exports = router;