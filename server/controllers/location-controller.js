const LocationService = require('../service/location-service')
const ApiError = require('../exceptions/api-error')

class LocationController {
    async create(req, res, next) {
        try{
            const {city} = req.body
            const location = await LocationService.create(city)
            return res.json(location);
        }
        catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try{
            const {_id, city} = req.body
            const location = await LocationService.editLocation(_id, city)
            return res.json(location)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const locations = await LocationService.getAll()
            return res.json(locations)
        }
        catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try{
            const { _id } = req.params;
            const location = await LocationService.getOne(_id)
            return res.json(location)
        }
        catch (e) {
            next(e);
        }
    }

    async delOne(req, res, next) {
        try{
            const {_id} = req.body
            const location = await LocationService.delOne(_id)
            return res.json(location)
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new LocationController();