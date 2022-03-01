const mongoose = require('mongoose'); 
const bookSchema = new mongoose.Schema({
    name: String,
    author_id: {
        type: Number,
        unique: false,
        required: true
    },
    price: Number,
    ratings: Number
}); 

module.exports = mongoose.model("Book", bookSchema); 