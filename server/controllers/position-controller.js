const PositionService = require('../service/position-service')
const ApiError = require('../exceptions/api-error')

class PositionController {
    async create(req, res, next) {
        try{
            const {name} = req.body
            const position = await PositionService.create(name)
            return res.json(position);
        }
        catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try{
            const {_id, name} = req.body
            const position = await PositionService.editPosition(_id, name)
            return res.json(position)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const positions = await PositionService.getAll()
            return res.json(positions)
        }
        catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try{
            const { _id } = req.params;
            const position = await PositionService.getOne(_id)
            return res.json(position)
        }
        catch (e) {
            next(e);
        }
    }

    async delOne(req, res, next) {
        try{
            const {_id} = req.body
            console.log(_id)
            const position = await PositionService.delOne(_id)
            return res.json(position)
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new PositionController();