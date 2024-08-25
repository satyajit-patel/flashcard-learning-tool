const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true,
        unique: true,
    }, 
    poet: {
        type: String,
        required: true,
    }
}, {timeseries: true});

const Todo = mongoose.model("Todo", userSchema);

module.exports = Todo;