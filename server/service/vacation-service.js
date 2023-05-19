const VacationModel = require('../models/vacation-model')
const uuid = require('uuid')
const ApiError = require('../exceptions/api-error')

class VacationService {

    async create(user, mainDuration) {
        const vacation = await VacationModel.create({user: user, mainDuration: mainDuration})
        return vacation
    }

    async getAll() {
        const vacations = await VacationModel.find()
        if(!vacations){
            throw ApiError.BadRequest(`Отпуск не существует`)
        }
        return vacations
    }

    async getOneVacation(_id) {
        const vacation = await VacationModel.find({_id: _id})
        if(!vacation){
            throw ApiError.BadRequest(`Отпуск не существует`)
        }
        return vacation
    }
    async deleteOne(_id) {
        const vacation = await VacationModel.findByIdAndDelete(_id)
        if(!vacation){
            throw ApiError.BadRequest(`Отпуск не существует`)
        }
        return vacation
    }

    async editAdditionalDuration(_id, additionalDuration) {
        const vacation = await VacationModel.findByIdAndUpdate(_id, {additionalDuration: additionalDuration})
        if(!vacation){
            throw ApiError.BadRequest(`Отпуск не существует`)
        }
        return await VacationModel.findById(_id)
    }

    async editUsedDuration(_id, usedDuration) {
        const vacation = await VacationModel.findByIdAndUpdate(_id, {usedDuration: usedDuration})
        if(!vacation){
            throw ApiError.BadRequest(`Отпуск не существует`)
        }
        return await VacationModel.findById(_id)
    }
}

module.exports = new VacationService();