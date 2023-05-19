const { Schema, model} = require('mongoose');

const StatusCandidateSchema = new Schema({
    name: {type: String, required: true},
})

module.exports = model('StatusCandidate', StatusCandidateSchema);