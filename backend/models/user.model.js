const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true, trim: true, minlenght: 3},
}, 
{
    //Will create fields for when it was create or modified
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;