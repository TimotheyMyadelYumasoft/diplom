const MainVacationDurationService = require('../service/mainVacationDuration-service')
const ApiError = require('../exceptions/api-error')

class LocationController {
    async create(req, res, next) {
        try{
            const {name, daysCount} = req.body
            console.log(typeof daysCount)
            const mainVacationDurationService = await MainVacationDurationService.create(name, daysCount)
            return res.json(mainVacationDurationService);
        }
        catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try{
            const {_id, name, daysCount} = req.body
            const mainVacationDurationService = await MainVacationDurationService.editLocation(_id, name, daysCount)
            return res.json(mainVacationDurationService)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const mainVacationDurationServices = await MainVacationDurationService.getAll()
            return res.json(mainVacationDurationServices)
        }
        catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try{
            const { _id } = req.params;
            const mainVacationDurationService = await MainVacationDurationService.getOne(_id)
            return res.json(mainVacationDurationService)
        }
        catch (e) {
            next(e);
        }
    }

    async delOne(req, res, next) {
        try{
            const {_id} = req.body
            const mainVacationDurationService = await MainVacationDurationService.delOne(_id)
            return res.json(mainVacationDurationService)
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new LocationController();