const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    firstName:{
    type: String,
    required:true // null לא יכול להיות - must fill the detail.
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// const Student = mongoose.model('Student',StudentSchema)

module.exports = mongoose.model('Student',StudentSchema)

