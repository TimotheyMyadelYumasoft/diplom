const dayOffService = require('../service/dayOff-service')
const ApiError = require('../exceptions/api-error')

class DayOffController {
    async create(req, res, next) {
        try{
            const {vacation, startDate, endDate, type, status} = req.body
            const dayOff = await dayOffService.create(vacation, startDate, endDate, type, status)
            return res.json(dayOff)
        }
        catch (e) {
            next(e);
        }
    }

    async approve(req, res, next) {
        try{
            const { _id, status} = req.body
            const dayOff = await dayOffService.approve(_id, status)
            return res.json(dayOff)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const dayOffs = await dayOffService.getAll()
            return res.json(dayOffs)
        }
        catch (e) {
            next(e);
        }
    }

    async getOneDayOff(req, res, next) {
        try{
            const { _id } = req.params;
            console.log(_id)
            const dayOff = await dayOffService.getOneDayOff(_id)
            return res.json(dayOff)
        }
        catch (e) {
            next(e);
        }
    }

    async del(req, res, next) {
        try{
            const { _id } = req.body;
            const dayOff = await dayOffService.deleteOne(_id)
            return res.json(dayOff)
        }
        catch (e) {
            next(e);
        }
    }

}

module.exports = new DayOffController();