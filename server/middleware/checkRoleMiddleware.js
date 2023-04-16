const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS'){
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            console.log(token)
            if (!token) {
                res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            if (decoded.role !== role) {
                res.status(403).json({message: "Нет доступа"})
            }
            console.log('')
            res.user = decoded;
            next()

        } catch (e) {
            console.log('hey')
            res.status(401).json({message: "Не авторизован"})
        }
    }
}