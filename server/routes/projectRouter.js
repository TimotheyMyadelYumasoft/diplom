const Router = require('express').Router;
const projectController = require('../controllers/project-controller');
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', projectController.create)
router.post('/edit', projectController.edit)
router.get('/get_all', projectController.getAll)
router.get('/:_id', projectController.getOne)

module.exports = router;