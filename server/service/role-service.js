const RoleModel = require('../models/role-model')
const ApiError = require('../exceptions/api-error')

class RoleService {

    async create(name) {
        const role = await RoleModel.create({name})
        if(!role) {
            throw ApiError.BadRequest('Роль не создана')
        }
        return role
    }

    async editRole(_id, name) {
        const role = await RoleModel.findByIdAndUpdate(_id, {name: name})
        if(!role){
            throw ApiError.BadRequest('Роль не была изменена')
        }
        return await RoleModel.findById(_id)
    }

    async getAll() {
        const roles = await RoleModel.find()
        if(!roles){
            throw ApiError.BadRequest('Роли не были получены')
        }
        return roles
    }

    async getOne(_id) {
        const role = await RoleModel.findById(_id)
        if(!role){
            throw ApiError.BadRequest('Роль не существует')
        }
        return role
    }
    async delOne(_id){
        const role = RoleModel.findByIdAndDelete(_id)
        if(!role){
            throw ApiError.BadRequest('Роль не была удалена')
        }
        return role
    }
}

module.exports = new RoleService();