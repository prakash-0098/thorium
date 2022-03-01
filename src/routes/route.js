const express = require('express');
const router = express.Router();
const bookSchema = require('../controllers/book.controller'); 
const authorSchema = require('../controllers/author.controller'); 


router.post('/createAuthor', authorSchema.createAuthor); 
router.post('/createBook', bookSchema.createBook); 

router.get('/getBookList', authorSchema.getBookList); 

router.put('/updatePrice', authorSchema.updatePrice); 

router.get('/checkAuthorByRange', bookSchema.checkAuthorByRange); 




module.exports = router;