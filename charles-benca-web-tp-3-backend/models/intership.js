const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const intershipSchema = new Schema({
    contactName: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    companyAddress: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        enum: ["programming", "networking"],
        required: true
    },
    placesAvailable: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pay: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Intership", intershipSchema, "interships");