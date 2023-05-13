const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    daNumber: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profile: {
        type: String,
        enum: ["programming", "networking"],
        required: true
    }
});


module.exports = mongoose.model("Student", studentSchema, "students");
