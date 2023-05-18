const { Schema, model} = require('mongoose');

const VacationSchema = new Schema({
    mainDuration: {type: Schema.Types.ObjectId, ref: 'MainVacationDuration'},
    dayOff: {type: Schema.Types.ObjectId, ref: 'DayOff'},
    additionalDuration: {type: Number, require: true},
    usedDuration: {type: Number, required: true},
})

module.exports = model('Vacation', VacationSchema);