const { Schema, model} = require('mongoose');


const UserSchema = new Schema({
    role: {type: Schema.Types.ObjectId, ref: 'Role'},
    position: {type: Schema.Types.ObjectId, ref: 'Position'},
    location: {type: Schema.Types.ObjectId, ref: 'Location'},
    gender: {type: Schema.Types.ObjectId, ref: 'Gender'},
    statusCandidate: {type: Schema.Types.ObjectId, ref: 'StatusCandidate'},
    email: { type: String, unique: true },
    password: {type: String },
    firstname: { type: String },
    secondname: { type: String },
    image: { type: String },
    phoneNumber: { type: String },
    birthDay: { type: Date },
    hiredDate: { type: Date },
    firedDate: { type: Date },
})

module.exports = model('User', UserSchema);