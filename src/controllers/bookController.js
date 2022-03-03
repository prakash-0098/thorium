const mongoose = require('mongoose'); 
const _ = require('lodash'); 
const ObjectId = mongoose.Types.ObjectId; 

const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel"); 
const publisherModel = require('../models/publisherModel'); 
const { update } = require('lodash');

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

const book = async (request, response)=>{
    const dataRes = await bookModel.find().populate('publisher').select({
        publisher: 1,
        _id: 0
    }); 
    const publisherList = _.compact(_.uniq(dataRes.map((data)=>{
        if(data.publisher.name == "Penguin" || data.publisher.name == "HarperCollins"){
            return data.publisher._id; 
        }
    }))); 
    if(!publisherList.length == 2){
        response.send({
            'msg': "Both Penguin and HarperCollins Publisher compulsary"
        }); 
    }
    for(let i = 0; i < publisherList.length; i++){
        const updateRes = await bookModel.updateOne(
            {
                'publisher': ObjectId(publisherList[i])
            },
            {
                $set: {
                    isHardCover: true
                }
            }
        );
        response.send({
            'msg': updateRes
        }); 
    } 
 
}

const increasePrice = async (request, response)=>{
    const dataRes = await bookModel.updateMany(
        {
            ratings: {
                $gt: 3.5
            }
        },
        {
            $inc:{
                price: +10
            }
        }
    ); 
    response.send({
        'msg': dataRes
    });
}

module.exports = {
    createBook: createBook,
    getAllBooks: getAllBooks,
    book: book,
    increasePrice: increasePrice
}



