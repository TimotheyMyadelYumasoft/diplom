const VacationModel = require('../models/vacation-model')
const uuid = require('uuid')
const ApiError = require('../exceptions/api-error')

class VacationService {

    async create(startDate, endDate, type, employerId) {
        const vacation = await VacationModel.create({startDate: startDate, endDate: endDate, type: type, employerId: employerId})
        return vacation
    }

    async approve(_id, status) {
        const vacation = await VacationModel.findByIdAndUpdate(_id, {status: status})
        console.log(vacation)
        if(!vacation){
            throw ApiError.BadRequest(`Выходной с данным статусом ${status} не существует`)
        }
        return vacation
    }

    async getAll() {
        const vacations = await VacationModel.find()
        console.log(vacations)
        if(!vacations){
            throw ApiError.BadRequest(`Выходных не существует`)
        }
        return vacations
    }

    async getOneEmployer(employerId) {
        const vacation = await VacationModel.find({employerId: employerId})
        console.log(vacation)
        if(!vacation){
            throw ApiError.BadRequest(`Данного выходного не существует`)
        }
        return vacation
    }
    async deleteOne(_id) {
        const vacation = await VacationModel.findByIdAndDelete(_id)
        console.log(vacation)
        if(!vacation){
            throw ApiError.BadRequest(`Данного выходного не существует`)
        }
        return vacation
    }

    async commentEmployer(_id, _employComment) {
        const comment = await VacationModel.findByIdAndUpdate(_id, {employComment: [_employComment]})
        console.log(comment)
        if(!comment){
            throw ApiError.BadRequest(`Данного выходного не существует`)
        }
        return comment
    }
    async commentReviewer(_id, _reviewerComment) {
        const comment = await VacationModel.findByIdAndUpdate(_id, {reviewerComment: [_reviewerComment]})
        console.log(comment)
        if(!comment){
            throw ApiError.BadRequest(`Данного выходного не существует`)
        }
        return comment
    }
}

module.exports = new VacationService();