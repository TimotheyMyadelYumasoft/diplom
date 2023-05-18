const RoleService = require('../service/role-service')
const ApiError = require('../exceptions/api-error')

class Controller {
    async create(req, res, next) {
        try{
            const {name} = req.body
            const role = await RoleService.create(name)
            return res.json(role);
        }
        catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try{
            const {_id, name} = req.body
            const role = await RoleService.editRole(_id, name)
            return res.json(role)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const roles = await RoleService.getAll()
            return res.json(roles)
        }
        catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try{
            const { _id } = req.params;
            const role = await RoleService.getOne(_id)
            return res.json(role)
        }
        catch (e) {
            next(e);
        }
    }

    async delOne(req, res, next) {
        try{
            const {_id} = req.body
            const role = await RoleService.delOne(_id)
            return res.json(role)
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new Controller();