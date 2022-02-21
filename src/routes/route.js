const express = require('express');
const router = express.Router();
const logger = require('../logger/logger'); 
const dateStatus = require('../util/helper');
const validators = require('../validator/formatter');
const lodashModule = require('../lodash/lodash'); 

router.get('/test-me', (request, response) =>{
    response.send('My first ever api!')
    console.log(logger.welcome());

    console.log("==== Question 2 ===="); 

    console.log(dateStatus.currentDate()); 
    console.log(dateStatus.currentMonth());
    console.log(dateStatus.batchInfo()); 

    console.log("==== Question 3 ===="); 

    console.log(validators.trimData());
    console.log(validators.lowerCase());
    console.log(validators.upperCase())
});

router.get('/hello', (request, response)=>{
    response.send('Hello Route !');
    lodashModule.chunkMethod();

    console.log("===== Tail ======");

    lodashModule.tailMethod(); 

    console.log("===== uninon ======");
    
    lodashModule.uninonMethod();

    console.log("===== fromPairs ======");
    
    lodashModule.fromPairsMethod();
}); 

module.exports = router;