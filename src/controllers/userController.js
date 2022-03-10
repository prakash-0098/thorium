const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken'); 

const createUser = async (request, response)=>{
  try{
    const data = request.body; 
    const dataRes = await userModel.create(data); 
    response.status(201).send({
      'msg': dataRes
    }); 
  }catch(error){
    response.status(500).send({
      'Error :': error.message
    }); 
  }
}

const loginUser = async (request, response)=>{
  try{
    const data = request.body; 
    const dataRes = await userModel.findOne(data);
    if(!dataRes){
      return response.status(401).send({
        'status': false,
        'message': 'username or the password is not corerct'
      }); 
    } 
    const token = jwt.sign({
      userId: dataRes._id.toString(),
    }, '12345');
    response.setHeader("x-auth-token", token); 
    response.status(201).send({
      'status': true,
      'token': token
    }); 
  }catch(error){
    response.status(500).send({
      'Error :': error.message
    });
  }
}

const getUserData = async (request, response)=>{
  try{
    const userId = request.params.userId; 
    const dataRes = await userModel.findById(userId); 
    response.status(200).send({
      'status': true,
      'msg': dataRes
    }); 
  }catch(error){
    response.status(500).send({
      'Error :': error.message
    });
  }
}

const updatedUser = async (request, response)=>{
  try{
    const userId = request.params.userId; 
    const data = request.body; 
    const dataRes = await userModel.findByIdAndUpdate(userId, data, { new: true}); 
    response.status(200).send({
      'status': true, 
      'msg': dataRes
    }); 
  }catch(error){
    response.status(500).send({
      'Error :': error.message
    });
  }
}

const userDelete = async (request, response)=>{
  try{
    const userId = request.params.userId; 
    const dataRes = await userModel.findByIdAndUpdate(userId, {
      isDeleted: true
    }, {
      new: true
    }); 
    response.status(200).send({
      'status': true, 
      'msg': dataRes
    }); 
  }catch(error){
    response.status(500).send({
      'Error :': error.message
    });
  }
}

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  getUserData: getUserData,
  updatedUser: updatedUser,
  userDelete: userDelete
}

