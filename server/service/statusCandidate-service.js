const StatusCandidateModel = require('../models/statusCandidate-model')
const ApiError = require('../exceptions/api-error')

class StatusCandidateService {

    async create(name) {
        const statusCandidate = await StatusCandidateModel.create({name: name})
        if(!statusCandidate){
            throw ApiError.BadRequest('Статус кандидата не создан')
        }
        return statusCandidate;
    }

    async editStatusCandidate(_id, name) {
        const statusCandidate = await StatusCandidateModel.findByIdAndUpdate(_id, {name: name})
        if(!statusCandidate){
            throw ApiError.BadRequest('Статус кандидата не изменен')
        }
        return await StatusCandidateModel.findById(_id);
    }

    async getAll() {
        const statusCandidate = await StatusCandidateModel.find()
        if(!statusCandidate){
            throw ApiError.BadRequest('Статусы кандидатов не получены')
        }
        return statusCandidate;
    }

    async getOne(_id) {
        const statusCandidate = await StatusCandidateModel.findById(_id)
        if(!statusCandidate){
            throw ApiError.BadRequest('Статус кандидата не существует')
        }
        return statusCandidate;
    }
    async delOne(_id){
        const statusCandidate = await StatusCandidateModel.findByIdAndDelete(_id)
        if(!statusCandidate){
            throw ApiError.BadRequest('Статус кандидата не удален')
        }
        return statusCandidate;
    }
}

module.exports = new StatusCandidateService();