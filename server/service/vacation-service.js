const VacationModel = require('../models/vacation-model')
const uuid = require('uuid')
const ApiError = require('../exceptions/api-error')

class VacationService {

    async create(user, mainDuration) {
        const vacation = await VacationModel.create({user: user, mainDuration: mainDuration, additionalDuration: 0, usedDuration: 0})
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

    async getOneVacationByUser(user) {
        const vacation = await VacationModel.findOne({user: user})
        if(!vacation){
            throw ApiError.BadRequest(`Отпуск не существует`)
        }
        return vacation
    }

    async editVacationMainDuration(user, mainDuration) {
        let vacation;
        const isVacationCreated = await VacationModel.findOne({user: user})
        if(!isVacationCreated){
            console.log('Not exist')
            vacation = await VacationModel.create({user: user, mainDuration: mainDuration, additionalDuration: 0, usedDuration: 0})
            return vacation
        }
        vacation = await VacationModel.findOneAndUpdate({user: user}, {mainDuration: mainDuration})
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