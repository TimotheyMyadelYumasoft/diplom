const StatusCandidateService = require('../service/statusCandidate-service')
const ApiError = require('../exceptions/api-error')

class StatusCandidateController {
    async create(req, res, next) {
        try{
            const {name} = req.body
            const statusCandidate = await StatusCandidateService.create(name)
            return res.json(statusCandidate);
        }
        catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try{
            const {_id, name} = req.body
            const statusCandidate = await StatusCandidateService.editStatusCandidate(_id, name)
            return res.json(statusCandidate)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const statusCandidates = await StatusCandidateService.getAll()
            return res.json(statusCandidates)
        }
        catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try{
            const { _id } = req.params;
            const statusCandidate = await StatusCandidateService.getOne(_id)
            return res.json(statusCandidate)
        }
        catch (e) {
            next(e);
        }
    }

    async delOne(req, res, next) {
        try{
            const {_id} = req.body
            const statusCandidate = await StatusCandidateService.delOne(_id)
            return res.json(statusCandidate)
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new StatusCandidateController();