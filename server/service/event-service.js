const EventModel = require('../models/event-model')
const uuid = require('uuid')
const ApiError = require('../exceptions/api-error')

class EventService {

    async create(participants, title, description, startDate) {
        const event = await EventModel.create({participants: participants, title: title, description: description, startDate: startDate})
        return event
    }

    async editEvent(_id, participants, title, description, startDate) {
        const event = await EventModel.findByIdAndUpdate(_id, {participants: participants, title: title, description: description, startDate: startDate})
        console.log(event)
        if(!event){
            throw ApiError.BadRequest(`Мероприятия с данным названием ${title} не существует`)
        }
        return event
    }

    async getAll() {
        const events = await EventModel.find()
        console.log(events)
        if(!events){
            throw ApiError.BadRequest(`Мероприятий не существует`)
        }
        return events
    }

    async getOne(_id) {
        const event = await EventModel.findById(_id)
        console.log(_id)
        if(!event){
            throw ApiError.BadRequest(`Данного мероприятия не существует`)
        }
        return event
    }
    async delOne(_id){
        const event = await EventModel.deleteOne({_id: _id})
        console.log(_id)
        if(!event){
            throw ApiError.BadRequest(`Данного мероприятия не существует`)
        }
        return event
    }
}

module.exports = new EventService();