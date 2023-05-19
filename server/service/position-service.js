const PositionModel = require('../models/position-model')
const ApiError = require('../exceptions/api-error')

class PositionService {

    async create(name) {
        const position = await PositionModel.create({name: name})
        if(!position){
            throw ApiError.BadRequest('Должность не создана')
        }
        return position;
    }

    async editPosition(_id, name) {
        const position = await PositionModel.findByIdAndUpdate(_id, {name: name})
        if(!position){
            throw ApiError.BadRequest('Должность не изменена')
        }
        return await PositionModel.findById(_id);
    }

    async getAll() {
        const position = await PositionModel.find()
        if(!position){
            throw ApiError.BadRequest('Должности не получены')
        }
        return position;
    }

    async getOne(_id) {
        const position = await PositionModel.findById(_id)
        if(!position){
            throw ApiError.BadRequest('Должность не существует')
        }
        return position;
    }
    async delOne(_id){
        const position = await PositionModel.findByIdAndDelete(_id)
        if(!position){
            throw ApiError.BadRequest('Должность не удалена')
        }
        return position;
    }
}

module.exports = new PositionService();