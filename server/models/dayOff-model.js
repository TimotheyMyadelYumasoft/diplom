const { Schema, model} = require('mongoose');

const DayOffSchema = new Schema({
    vacation: {type: Schema.Types.ObjectId, ref: 'Vacation'},
    type: {type: Schema.Types.ObjectId, ref: 'TypeDayOff'},
    status: {type: Schema.Types.ObjectId, ref: 'StatusDayOff'},
    endDate: {type: Date, required: true},
    startDate: {type: Date, required: true},
})

module.exports = model('DayOff', DayOffSchema);