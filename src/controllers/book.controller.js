const { response } = require('express');
const bookSchema = require('../models/book.model'); 
const authorSchema = require('../models/author.model'); 

const createBook = async (request, response)=>{
    const data = request.body; 
    const dataRes = await authorSchema.find({
        "author_id": data.author_id
    });
    if(dataRes.length){
        const insertRes = await bookSchema.create(data); 
        response.send({
            'msg': insertRes
        });
    }
    else{
        response.send({
            'msg': 'Author Id Not Found !'
        }); 
    }  
}

const checkAuthorByRange = async (request, response)=>{
    const startRange = 50, endRange = 100; 
    const dataRes = await bookSchema.find({
       $and: [
           {
               price: {
                   $gte: startRange
               }
           },
           {
               price:{
                   $lte: endRange
               }
           }
       ]
    }); 
    response.send({
        'msg': dataRes
    }); 
}

module.exports = {
    createBook: createBook,
    checkAuthorByRange: checkAuthorByRange
}

