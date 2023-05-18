const Router = require('express').Router;
const RoleController = require('../controllers/role-controller')
const router = new Router();
const authMiddleware = require('../middleware/auth-middleware')

router.post('/create', RoleController.create)
router.post('/edit', RoleController.edit)
router.get('/', RoleController.getAll)
router.get('/:_id', RoleController.getOne)
router.post('/del_one', RoleController.delOne)

module.exports = router;