const LocationModel = require('../models/location-model')
const ApiError = require('../exceptions/api-error')

class LocationService {

    async create(city) {
        const location = await LocationModel.create({city: city})
        if(!location){
            throw ApiError.BadRequest(`Город не был создан`)
        }
        return location
    }

    async editLocation(_id, city) {
        const location = await LocationModel.findByIdAndUpdate(_id, {city: city})
        if(!location){
            throw ApiError.BadRequest(`Город не изменен`)
        }
        return await LocationModel.findById(_id)
    }

    async getAll() {
        const location = await LocationModel.find()
        if(!location){
            throw ApiError.BadRequest(`Города не получены`)
        }
        return location
    }

    async getOne(_id) {
        const location = await LocationModel.findById(_id)
        if(!location){
            throw ApiError.BadRequest(`Город не существует`)
        }
        return location
    }
    async delOne(_id){
        const location = await LocationModel.findByIdAndDelete(_id)
        if(!location){
            throw ApiError.BadRequest(`Город не удален`)
        }
        return location
    }
}

module.exports = new LocationService();