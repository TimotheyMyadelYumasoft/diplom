const MainVacationDurationModel = require('../models/mainVacationDuration-model')
const ApiError = require('../exceptions/api-error')

class MainVacationDurationService {

    async create(name, daysCount) {
        const mainVacationDuration = await MainVacationDurationModel.create({name: name, daysCount: daysCount})
        if(!mainVacationDuration){
            throw ApiError.BadRequest(`Категория основного отпуска не была создана`)
        }
        return mainVacationDuration
    }

    async editMainVacationDuration(_id, name, daysCount) {
        const mainVacationDuration = await MainVacationDurationModel.findByIdAndUpdate(_id, {name: name, daysCount: daysCount})
        if(!mainVacationDuration){
            throw ApiError.BadRequest(`Категория основного отпуска не измененf`)
        }
        return await MainVacationDurationModel.findById(_id)
    }

    async getAll() {
        const mainVacationDuration = await MainVacationDurationModel.find()
        if(!mainVacationDuration){
            throw ApiError.BadRequest(`Категории основного отпуска не получены`)
        }
        return mainVacationDuration
    }

    async getOne(_id) {
        const mainVacationDuration = await MainVacationDurationModel.findById(_id)
        if(!mainVacationDuration){
            throw ApiError.BadRequest(`Категория основного отпуска не существует`)
        }
        return mainVacationDuration
    }
    async delOne(_id){
        const mainVacationDuration = await MainVacationDurationModel.findByIdAndDelete(_id)
        if(!mainVacationDuration){
            throw ApiError.BadRequest(`Категория основного отпуска не удалена`)
        }
        return mainVacationDuration
    }
}

module.exports = new MainVacationDurationService();