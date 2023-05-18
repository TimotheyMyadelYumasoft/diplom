const { Schema, model} = require('mongoose');

const mainVacationDurationSchema = new Schema({
    name: {type: String, required: true},
    daysCount: {type: Number, required: true},
})

module.exports = model('MainVacationDuration', mainVacationDurationSchema);