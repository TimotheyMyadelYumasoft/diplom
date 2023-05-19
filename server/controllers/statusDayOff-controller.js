const StatusDayOffService = require('../service/statusDayOff-service')
const ApiError = require('../exceptions/api-error')

class StatusDayOffController {
    async create(req, res, next) {
        try{
            const {name} = req.body
            const statusDayOff = await StatusDayOffService.create(name)
            return res.json(statusDayOff);
        }
        catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try{
            const {_id, name} = req.body
            const statusDayOff = await StatusDayOffService.editStatusDayOff(_id, name)
            return res.json(statusDayOff)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const statusDayOffs = await StatusDayOffService.getAll()
            return res.json(statusDayOffs)
        }
        catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try{
            const { _id } = req.params;
            const statusDayOff = await StatusDayOffService.getOne(_id)
            return res.json(statusDayOff)
        }
        catch (e) {
            next(e);
        }
    }

    async delOne(req, res, next) {
        try{
            const {_id} = req.body
            const statusDayOff = await StatusDayOffService.delOne(_id)
            return res.json(statusDayOff)
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new StatusDayOffController();