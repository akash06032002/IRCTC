const mongoose = require("mongoose");

const train = new mongoose.Schema({
    train_Name: {
        type: String,
        required : true,
        trim: true
    },
    source: {
        type:  String,
        required : true,
        trim: true
    },
    destination: {
        type:  String,
        required : true,
        trim: true
    },
    seat_capacity: {
        type: Number,
        default:'100'
    },
    seat_available: {
        type: Number,
        
    },
    source_arrival: {
        type: Date,
        required : true,
        trim: true
    },
    destination_arrival: {
        type: Date,
        required : true,
        trim: true
    }

})

//Creating a new Collection
const Train = new mongoose.model("Train", train);

module.exports = Train;