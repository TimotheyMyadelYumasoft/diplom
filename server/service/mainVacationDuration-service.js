const MainVacationDurationModel = require('../models/mainVacationDuration-model')
const ApiError = require('../exceptions/api-error')

class LocationService {

    async create(name, daysCount) {
        const mainVacationDuration = await MainVacationDurationModel.create({name: name, daysCount: daysCount})
        if(!mainVacationDuration){
            throw ApiError.BadRequest(`Город не был создан`)
        }
        return mainVacationDuration
    }

    async editLocation(_id, name, daysCount) {
        const mainVacationDuration = await MainVacationDurationModel.findByIdAndUpdate(_id, {name: name, daysCount: daysCount})
        if(!mainVacationDuration){
            throw ApiError.BadRequest(`Город не изменен`)
        }
        return await MainVacationDurationModel.findById(_id)
    }

    async getAll() {
        const mainVacationDuration = await MainVacationDurationModel.find()
        if(!mainVacationDuration){
            throw ApiError.BadRequest(`Города не получены`)
        }
        return mainVacationDuration
    }

    async getOne(_id) {
        const mainVacationDuration = await MainVacationDurationModel.findById(_id)
        if(!mainVacationDuration){
            throw ApiError.BadRequest(`Город не существует`)
        }
        return mainVacationDuration
    }
    async delOne(_id){
        const mainVacationDuration = await MainVacationDurationModel.findByIdAndDelete(_id)
        if(!mainVacationDuration){
            throw ApiError.BadRequest(`Город не удален`)
        }
        return mainVacationDuration
    }
}

module.exports = new LocationService();