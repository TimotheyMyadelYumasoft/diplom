const { Schema, model} = require('mongoose');

const VacationSchema = new Schema({
    startDate: {type: String},
    endDate: {type: String},
    status: {type: String},
    employerId: {type: Schema.Types.ObjectId, ref: 'User'},
    type: {type: String},
    employComment: [{type: String}],
    reviewerComment: [{type: String}],
})

module.exports = model('Vacation', VacationSchema);