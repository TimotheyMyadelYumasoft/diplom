const TypeDayOffModel = require('../models/typeDayOff-model')
const ApiError = require('../exceptions/api-error')

class TypeDayOffService {

    async create(name) {
        const typeDayOff = await TypeDayOffModel.create({name: name})
        if(!typeDayOff){
            throw ApiError.BadRequest('Тип выходного не создан')
        }
        return typeDayOff;
    }

    async editTypeDayOff(_id, name) {
        const typeDayOff = await TypeDayOffModel.findByIdAndUpdate(_id, {name: name})
        if(!typeDayOff){
            throw ApiError.BadRequest('Тип выходного не изменен')
        }
        return await TypeDayOffModel.findById(_id);
    }

    async getAll() {
        const typeDayOff = await TypeDayOffModel.find()
        if(!typeDayOff){
            throw ApiError.BadRequest('Типы выходных не получены')
        }
        return typeDayOff;
    }

    async getOne(_id) {
        const typeDayOff = await TypeDayOffModel.findById(_id)
        if(!typeDayOff){
            throw ApiError.BadRequest('Тип выходного не существует')
        }
        return typeDayOff;
    }
    async delOne(_id){
        const typeDayOff = await TypeDayOffModel.findByIdAndDelete(_id)
        if(!typeDayOff){
            throw ApiError.BadRequest('Тип выходного не удален')
        }
        return typeDayOff;
    }
}

module.exports = new TypeDayOffService();