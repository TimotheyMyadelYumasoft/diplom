const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const eventRouter = require('./eventRouter')
const vacationRouter = require('./vacationRouter')
const locationRouter = require('./locationRouter')
const positionRouter = require('./positionRouter')
const roleRouter = require('./roleRouter')
const mainVacationDurationRouter = require('./mainVacationDurationRouter')


router.use('/user', userRouter)
router.use('/event', eventRouter)
router.use('/vacation', vacationRouter)
router.use('/location', locationRouter)
router.use('/position', positionRouter)
router.use('/role', roleRouter)
router.use('/vduration', mainVacationDurationRouter)

module.exports = router