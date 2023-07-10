const mongoose = require("mongoose");

const userData = new mongoose.Schema({
    username: {
        type: String,
        required : true,
        trim: true
    },
    email: {
        type: String,
        required : true,
        trim: true
    },
    password: {
        type: String,
        required : true,
    }
})

//Creating a new Collection
const registration = new mongoose.model("registration", userData);

module.exports = registration;