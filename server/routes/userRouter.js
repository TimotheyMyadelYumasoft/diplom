const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/', authMiddleware, userController.getUsers);
router.post('/edit_background', userController.editBackground);
router.post('/edit_image', userController.editImage);
router.post('/edit_user', userController.editUser);
router.get('/:_id', userController.getUserById)
router.post('/set_candidate_status', userController.setStatusCandidate)
router.post('/create_candidate', checkRole('RECRUITER' || 'ADMIN'), userController.createCandidate)
router.post('/create_employee', checkRole('RECRUITER' || 'ADMIN'), userController.createEmployeeByCandidate)
router.post('/create_user', checkRole('RECRUITER' || 'ADMIN'), userController.createUser)
router.post('/reset_password', userController.resetPassword)
router.post('/del', userController.del)
router.post('/sort', userController.sortAllUsers)

module.exports = router;