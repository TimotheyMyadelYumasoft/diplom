const projectService = require('../service/project-service')
const ApiError = require('../exceptions/api-error')

class ProjectController {
    async create(req, res, next) {
        try{
            const {title, country, userId} = req.body
            const project = await projectService.createProject(title, country, userId)
            return res.json(project)
        }
        catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try{
            const { _id, title, country, userId } = req.body
            const project = await projectService.editProject(_id, title, country, userId)
            return res.json(project)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const projects = await projectService.getAll()
            return res.json(projects)
        }
        catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try{
            const { _id } = req.body;
            const project = await projectService.getOne(_id)
            return res.json(project)
        }
        catch (e) {
            next(e);
        }
    }

    // async del(req, res, next) {
    //     try{
            
    //     }
    //     catch (e) {
    //         next(e);
    //     }
    // }
}

module.exports = new ProjectController();