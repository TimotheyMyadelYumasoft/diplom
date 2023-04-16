const { Schema, model} = require('mongoose');


const UserSchema = new Schema({
    email: { type: String, unique: true },
    password: {type: String },
    role: { type: String },
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    firstname: { type: String },
    secondname: { type: String },
    imageUrl: { type: String },
    backgroundImage: { type: String },
    gender: { type: String },
    departament: { type: String },
    location: { type: String },
    phoneNumber: { type: String },
    skills: [{ type: String }],
    statusCandidate: {type: String},
    birthDay: { type: Date },
    hiredDate: { type: Date },
    firedDate: { type: Date },
})

module.exports = model('User', UserSchema);