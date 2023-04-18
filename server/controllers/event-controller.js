const eventService = require('../service/event-service')
const ApiError = require('../exceptions/api-error')

class EventController {
    async create(req, res, next) {
        try{
            const {participants, title, description, startDate} = req.body
            const project = await eventService.create(participants, title, description, startDate)
            return res.json(project)
        }
        catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try{
            const { _id, participants, title, description, startDate } = req.body
            const project = await eventService.editEvent(_id, participants, title, description, startDate)
            return res.json(project)
        }
        catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try{
            const events = await eventService.getAll()
            return res.json(events)
        }
        catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try{
            const { _id } = req.params;
            console.log(_id)
            const event = await eventService.getOne(_id)
            return res.json(event)
        }
        catch (e) {
            next(e);
        }
    }

    async delOne(req, res, next) {
        try{
            const { _id } = req.body;
            const event = await eventService.delOne(_id)
            return res.json(event)
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new EventController();