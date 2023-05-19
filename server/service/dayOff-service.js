const DayOffModel = require('../models/dayOff-model')
const uuid = require('uuid')
const ApiError = require('../exceptions/api-error')

class DayOffService {

    async create(vacation, startDate, endDate, type, status) {
        const dayOff = await DayOffModel.create({vacation: vacation, startDate: startDate, endDate: endDate, type: type, status: status})
        return dayOff
    }

    async approve(_id, status) {
        const dayOff = await DayOffModel.findByIdAndUpdate(_id, {status: status})
        if(!dayOff){
            throw ApiError.BadRequest(`Выходной с данным статусом ${status} не существует`)
        }
        return await DayOffModel.findById(_id)
    }

    async getAll() {
        const dayOffs = await DayOffModel.find()
        if(!dayOffs){
            throw ApiError.BadRequest(`Выходных не существует`)
        }
        return dayOffs
    }

    async getOneDayOff(_id) {
        const dayOff = await DayOffModel.find({_id: _id})
        if(!dayOff){
            throw ApiError.BadRequest(`Данного выходного не существует`)
        }
        return dayOff
    }
    async deleteOne(_id) {
        const dayOff = await DayOffModel.findByIdAndDelete(_id)
        if(!dayOff){
            throw ApiError.BadRequest(`Данного выходного не существует`)
        }
        return dayOff
    }
}

module.exports = new DayOffService();