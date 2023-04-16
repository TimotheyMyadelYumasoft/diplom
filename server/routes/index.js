const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const projectRouter = require('./projectRouter')
const eventRouter = require('./eventRouter')
const vacationRouter = require('./vacationRouter')

router.use('/user', userRouter)
router.use('/project', projectRouter)
router.use('/event', eventRouter)
router.use('/vacation', vacationRouter)

module.exports = router