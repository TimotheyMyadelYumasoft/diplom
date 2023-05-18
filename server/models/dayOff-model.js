const { Schema, model} = require('mongoose');

const DayOffSchema = new Schema({
    type: {type: String, required: true},
    status: {type: String, required: true},
    endDate: {type: Date, required: true},
    startDate: {type: Date, required: true},
})

module.exports = model('DayOff', DayOffSchema);