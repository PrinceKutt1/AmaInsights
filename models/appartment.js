const mongoose = require('mongoose')
const {Schema} = mongoose.Schema;


const appartmentSchema = new mongoose.Schema({
    type_of_room: {
        type: String,
        trim: true,
        unique: true,
        maxlength: [50, 'Name of room should be less than 50 characters']
    },
    description:{
        type: String,
        required: [true, 'Description of room type is required']


    },
    price:{
        type: Number,
        required: [true, 'Please include amount']

    }
});




module.exports = mongoose.model('Appartment', appartmentSchema)