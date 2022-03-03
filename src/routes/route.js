const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController");
const publisherController = require('../controllers/publisherController'); 
const bookController= require("../controllers/bookController"); 
const { book } = require('../controllers/bookController');

router.post("/createAuthor", authorController.createAuthor); 

router.post('/createPublisher', publisherController.createPublisher); 

router.post('/createBook', bookController.createBook); 

router.get('/getAllBooks', bookController.getAllBooks); 

router.put('/book', bookController.book);

router.put('/increasePrice', bookController.increasePrice); 


module.exports = router;