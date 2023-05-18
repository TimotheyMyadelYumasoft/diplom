const { Schema, model} = require('mongoose');

const PositionSchema = new Schema({
    name: {type: String, required: true},
})

module.exports = model('Position', PositionSchema);