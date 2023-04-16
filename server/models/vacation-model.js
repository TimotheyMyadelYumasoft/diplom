const { Schema, model} = require('mongoose');

const ProjectSchema = new Schema({
    startDate: {type: Date},
    endDate: {type: Date},
    status: {type: String},
    employerId: {type: Schema.Types.ObjectId, ref: 'User'},
    type: {type: String},
    employComment: [{type: String}],
    reviewerComment: [{type: String}],
})

module.exports = model('Vacation', ProjectSchema);