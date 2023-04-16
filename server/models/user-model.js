const { Schema, model} = require('mongoose');


const UserSchema = new Schema({
    email: { type: String, unique: true, required: true},
    password: {type: String, require: true},
    role: { type: String, require: true },
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
    project: [{type: Schema.Types.ObjectId, ref: 'Project'}],
    birthDay: { type: Date },
    hiredDate: { type: Date },
    firedDate: { type: Date },
})

module.exports = model('User', UserSchema);