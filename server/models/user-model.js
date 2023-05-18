const { Schema, model} = require('mongoose');


const UserSchema = new Schema({
    roleId: {type: Schema.Types.ObjectId, ref: 'Role'},
    positionId: {type: Schema.Types.ObjectId, ref: 'Position'},
    location: {type: Schema.Types.ObjectId, ref: 'Location'},
    mainVacationDuration: {type: Schema.Types.ObjectId, ref: 'MainVacationDuration'},
    email: { type: String, unique: true },
    password: {type: String },
    firstname: { type: String },
    secondname: { type: String },
    image: { type: String },
    gender: { type: String },
    phoneNumber: { type: String },
    statusCandidate: {type: String},
    additionalVacationDuration: {type: String},
    birthDay: { type: Date },
    hiredDate: { type: Date },
    firedDate: { type: Date },
})

module.exports = model('User', UserSchema);