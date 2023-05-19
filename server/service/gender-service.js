const GenderModel = require('../models/gender-model')
const ApiError = require('../exceptions/api-error')

class GenderService {

    async create(name) {
        const gender = await GenderModel.create({name: name})
        if(!gender){
            throw ApiError.BadRequest('Пол не создан')
        }
        return gender;
    }

    async editGender(_id, name) {
        const gender = await GenderModel.findByIdAndUpdate(_id, {name: name})
        if(!gender){
            throw ApiError.BadRequest('Пол не изменен')
        }
        return await GenderModel.findById(_id);
    }

    async getAll() {
        const gender = await GenderModel.find()
        if(!gender){
            throw ApiError.BadRequest('Полы не получены')
        }
        return gender;
    }

    async getOne(_id) {
        const gender = await GenderModel.findById(_id)
        if(!gender){
            throw ApiError.BadRequest('Пол не существует')
        }
        return gender;
    }
    async delOne(_id){
        const gender = await GenderModel.findByIdAndDelete(_id)
        if(!gender){
            throw ApiError.BadRequest('Пол не удален')
        }
        return gender;
    }
}

module.exports = new GenderService();