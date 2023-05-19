const StatusDayOffModel = require('../models/statusDayOff-model')
const ApiError = require('../exceptions/api-error')

class StatusDayOffService {

    async create(name) {
        const statusDayOff = await StatusDayOffModel.create({name: name})
        if(!statusDayOff){
            throw ApiError.BadRequest('Тип выходного не создан')
        }
        return statusDayOff;
    }

    async editStatusDayOff(_id, name) {
        const statusDayOff = await StatusDayOffModel.findByIdAndUpdate(_id, {name: name})
        if(!statusDayOff){
            throw ApiError.BadRequest('Тип выходного не изменен')
        }
        return await StatusDayOffModel.findById(_id);
    }

    async getAll() {
        const statusDayOff = await StatusDayOffModel.find()
        if(!statusDayOff){
            throw ApiError.BadRequest('Типы выходных не получены')
        }
        return statusDayOff;
    }

    async getOne(_id) {
        const statusDayOff = await StatusDayOffModel.findById(_id)
        if(!statusDayOff){
            throw ApiError.BadRequest('Тип выходного не существует')
        }
        return statusDayOff;
    }
    async delOne(_id){
        const statusDayOff = await StatusDayOffModel.findByIdAndDelete(_id)
        if(!statusDayOff){
            throw ApiError.BadRequest('Тип выходного не удален')
        }
        return statusDayOff;
    }
}

module.exports = new StatusDayOffService();