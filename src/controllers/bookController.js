const mongoose = require('mongoose'); 
const ObjectId = mongoose.Types.ObjectId; 

const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel"); 
const publisherModel = require('../models/publisherModel'); 

const createBook = async (request, response)=>{
    const data = request.body; 
    if(data.author == undefined || data.author == ''){
        response.send({
            'msg': "Author Id is required !"
        });
    }
    else{
        if(data.publisher == undefined || data.publisher == ''){
            response.send({
                'msg': "Publisher Id is required !"
            });
        }
        else{
            if(ObjectId.isValid(data.author) == false || ObjectId.isValid(data.publisher) == false){
                response.send({
                    'msg': 'Enter a Valid Object Id !'
                }); 
            }
            else{
                const authorIdRes = await authorModel.findById(data.author); 
                if(authorIdRes != null){
                    const publisherIdRes = await publisherModel.findById(data.publisher); 
                    if(publisherIdRes != null){
                        const dataRes = await bookModel.create(data); 
                        response.send({
                            'msg': dataRes
                        })
                    }
                    else{
                        response.send({
                            'msg': "Publisher Id is not Found !"
                        });
                    }
                }
                else{
                    response.send({
                        'msg': "Author Id is not Found !"
                    });
                }
            }
        }
    }
}

const getAllBooks = async (request, response)=>{
    const dataRes = await bookModel.find().populate(['author', 'publisher']);
    response.send({
        'msg': dataRes
    });  
}

module.exports = {
    createBook: createBook,
    getAllBooks: getAllBooks
}



