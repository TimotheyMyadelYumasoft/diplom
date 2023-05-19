const TypeDayOffService = require('../service/typeDayOff-service')
const ApiError = require('../exceptions/api-error')

class TypeDayOffController {
    async create(req, res, next) {
        try{
            const {name} = req.body
            const typeDayOff = await TypeDayOffService.create(name)
            return res.json(typeDayOff);
        }
        catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try{
            const {_id, name} = req.body
            const typeDayOff = await TypeDayOffService.editTypeDayOff(_id, name)
            return res.json(typeDayOff)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const typeDayOffs = await TypeDayOffService.getAll()
            return res.json(typeDayOffs)
        }
        catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try{
            const { _id } = req.params;
            const typeDayOff = await TypeDayOffService.getOne(_id)
            return res.json(typeDayOff)
        }
        catch (e) {
            next(e);
        }
    }

    async delOne(req, res, next) {
        try{
            const {_id} = req.body
            const typeDayOff = await TypeDayOffService.delOne(_id)
            return res.json(typeDayOff)
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new TypeDayOffController();