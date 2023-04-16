const { Schema, model} = require('mongoose');

const ProjectSchema = new Schema({
    title: {type: String, unique: true},
    description: {type: String},
    country: {type: String},
    userId: [{type: Schema.Types.ObjectId, ref: 'User'}],
})

module.exports = model('Project', ProjectSchema);