const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken'); 

const createUser = async (request, response)=>{
  const data = request.body; 
  const dataRes = await userModel.create(data); 
  response.send({
    'msg': dataRes
  }); 
}

const loginUser = async (request, response)=>{
  const data = request.body; 
  const dataRes = await userModel.findOne(data);
  if(!dataRes){
    return response.send({
      'status': false,
      'message': 'username or the password is not corerct'
    }); 
  } 
  const token = jwt.sign({
    userId: dataRes._id.toString(),
  }, '12345');
  response.setHeader("x-auth-token", token); 
  response.send({
    'status': true,
    'token': token
  });  
}

const getUserData = async (request, response)=>{
  const userId = request.params.userId; 
  const dataRes = await userModel.findById(userId); 
  response.send({
    'status': true,
    'msg': dataRes
  }); 
}

const updatedUser = async (request, response)=>{
  const userId = request.params.userId; 
  const data = request.body; 
  const dataRes = await userModel.findByIdAndUpdate(userId, data, { new: true}); 
  response.send({
    'status': true, 
    'msg': dataRes
  }); 
}

const userDelete = async (request, response)=>{
    const userId = request.params.userId; 
    const dataRes = await userModel.findByIdAndUpdate(userId, {
      isDeleted: true
    }, {
      new: true
    }); 
    response.send({
      'status': true, 
      'msg': dataRes
    }); 
}

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  getUserData: getUserData,
  updatedUser: updatedUser,
  userDelete: userDelete
}

