const GenderService = require('../service/gender-service')
const ApiError = require('../exceptions/api-error')

class GenderController {
    async create(req, res, next) {
        try{
            const {name} = req.body
            const gender = await GenderService.create(name)
            return res.json(gender);
        }
        catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try{
            const {_id, name} = req.body
            const gender = await GenderService.editGender(_id, name)
            return res.json(gender)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const genders = await GenderService.getAll()
            return res.json(genders)
        }
        catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try{
            const { _id } = req.params;
            const gender = await GenderService.getOne(_id)
            return res.json(gender)
        }
        catch (e) {
            next(e);
        }
    }

    async delOne(req, res, next) {
        try{
            const {_id} = req.body
            const gender = await GenderService.delOne(_id)
            return res.json(gender)
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new GenderController();