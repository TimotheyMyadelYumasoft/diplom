const { Schema, model} = require('mongoose');

const LocationSchema = new Schema({
    city: {type: String, required: true},
})

module.exports = model('Location', LocationSchema);