const { Schema, model} = require('mongoose');

const StatusDayOffSchema = new Schema({
    name: {type: String, required: true},
})

module.exports = model('StatusDayOff', StatusDayOffSchema);