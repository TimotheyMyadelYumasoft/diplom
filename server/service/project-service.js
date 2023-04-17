const ProjectModel = require('../models/project-model')
const uuid = require('uuid')
const ApiError = require('../exceptions/api-error')

class ProjectService {

    async createProject(title, country, userId) {
        const candidate = await ProjectModel.findOne({title})
        if(candidate) {
            throw ApiError.BadRequest(`Проект с данным названием ${title} уже существует`)
        }

        const project = await ProjectModel.create({title: title, country: country, userId: userId})
        return project
    }

    async editProject(_id, title, country, userId) {
        const project = await ProjectModel.findByIdAndUpdate(_id, {title: title, country: country, userId: userId})
        console.log(project)
        if(!project){
            throw ApiError.BadRequest(`Проекта с данным названием ${title} не существует`)
        }
        return project
    }

    async getAll() {
        const projects = await ProjectModel.find()
        console.log(projects)
        if(!projects){
            throw ApiError.BadRequest(`Проектов не существует`)
        }
        return projects
    }

    async getOne(_id) {
        const project = await ProjectModel.find({userId: _id})
        console.log(_id)
        if(!project){
            throw ApiError.BadRequest(`Данного проекта не существует`)
        }
        return project
    }
}

module.exports = new ProjectService();