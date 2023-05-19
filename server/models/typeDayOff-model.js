const { Schema, model} = require('mongoose');

const TypeDayOffSchema = new Schema({
    name: {type: String, required: true},
})

module.exports = model('TypeDayOff', TypeDayOffSchema);