const mongoose = require('mongoose'); 
const bookSchema = new mongoose.Schema({
    bookName: String,
    autherName: String,
    category: [ String ],
    year: Number
}); 

module.exports = mongoose.model('Book', bookSchema); 



