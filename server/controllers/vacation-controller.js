const vacationService = require('../service/vacation-service')
const ApiError = require('../exceptions/api-error')

class VacationController {
    async create(req, res, next) {
        try{
            const {user, mainDuration} = req.body
            const vacation = await vacationService.create(user, mainDuration)
            return res.json(vacation)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const vacations = await vacationService.getAll()
            return res.json(vacations)
        }
        catch (e) {
            next(e);
        }
    }

    async getOneVacation(req, res, next) {
        try{
            const { _id } = req.params;
            console.log(_id)
            const vacation = await vacationService.getOneVacation(_id)
            return res.json(vacation)
        }
        catch (e) {
            next(e);
        }
    }

    async getOneVacationByUser(req, res, next) {
        try{
            const { user } = req.params;
            console.log(user)
            const vacation = await vacationService.getOneVacationByUser(user)
            return res.json(vacation)
        }
        catch (e) {
            next(e);
        }
    }
    async editVacationMainDuration(req, res, next) {
        try{
            const { user, mainDuration } = req.body;
            console.log(user)
            const vacation = await vacationService.editVacationMainDuration(user, mainDuration)
            return res.json(vacation)
        }
        catch (e) {
            next(e);
        }
    }

    async del(req, res, next) {
        try{
            const { _id } = req.body;
            const vacation = await vacationService.deleteOne(_id)
            return res.json(vacation)
        }
        catch (e) {
            next(e);
        }
    }

    async updateAdditionalDuration(req, res, next) {
        try{
            const {_id, additionalDuration} = req.body;
            console.log(_id, additionalDuration)
            const vacation = await vacationService.editAdditionalDuration(_id, additionalDuration)
            return res.json(vacation)
        } catch (e) {
            next(e);
        }
    }

    async updateUsedDuration(req, res, next) {
        try{
            const {_id, usedDuration} = req.body;
            const vacation = await vacationService.editUsedDuration(_id, usedDuration)
            return res.json(vacation)
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new VacationController();