const { Schema, model} = require('mongoose');

const VacationSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    mainDuration: {type: Schema.Types.ObjectId, ref: 'MainVacationDuration'},
    additionalDuration: {type: Number},
    usedDuration: {type: Number},
})

module.exports = model('Vacation', VacationSchema);