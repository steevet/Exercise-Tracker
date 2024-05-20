const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true}
}, 
{
    //Will create fields for when it was create or modified
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', userSchema);

module.exports = Exercise;