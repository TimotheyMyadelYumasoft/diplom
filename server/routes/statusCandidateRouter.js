const Router = require('express').Router;
const StatusCandidateController = require('../controllers/statusCandidate-controller')
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', StatusCandidateController.create)
router.post('/edit', StatusCandidateController.edit)
router.get('/', StatusCandidateController.getAll)
router.get('/:_id', StatusCandidateController.getOne)
router.post('/del_one', StatusCandidateController.delOne)

module.exports = router;