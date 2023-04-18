const vacationService = require('../service/vacation-service')
const ApiError = require('../exceptions/api-error')

class VacationController {
    async create(req, res, next) {
        try{
            const {startDate, endDate, type, employerId} = req.body
            const vacation = await vacationService.create(startDate, endDate, type, employerId)
            return res.json(vacation)
        }
        catch (e) {
            next(e);
        }
    }

    async approve(req, res, next) {
        try{
            const { _id, status} = req.body
            const vacation = await vacationService.approve(_id, status)
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

    async commentEmployer(req, res, next) {
        try{
            const { _id, employComment } = req.body;
            const vacation = await vacationService.commentEmployer(_id, employComment)
            return res.json(vacation)
        }
        catch (e) {
            next(e);
        }
    }
    async commentReviewer(req, res, next) {
        try{
            const { _id, reviewerComment } = req.body;
            const vacation = await vacationService.commentReviewer(_id, reviewerComment)
            return res.json(vacation)
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new VacationController();