const express = require('express');
const router = express.Router();
const obj = require('./logger'); 

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    obj.printMessage('Prakash'); 
    console.log(obj.endPoint); 
});

module.exports = router;