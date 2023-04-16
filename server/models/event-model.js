const { Schema, model} = require('mongoose');

const EventSchema = new Schema({
    participants: [{type: Schema.Types.ObjectId, ref: 'User'}],
    title: {type: String, required: true},
    description: {type: String},
    startDate: {type: Date},
})

module.exports = model('Event', EventSchema);