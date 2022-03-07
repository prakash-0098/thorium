const userModel= require("../models/userModel");
const orderModel = require("../models/orderModel");

const createUser = async (request, response)=>{
    const data = request.body; 
    const dataRes = await userModel.create(data); 
    response.send({
        'msg': dataRes
    }); 
}


const updateStatus = async (request, response)=>{
    const data = request.body; 
    const header = request.headers.isFreeAppUser; 
    const userRes = await userModel.findByIdAndUpdate(data.userId, {
        isFreeAppUser: header
    }, {
        new: true
    }); 
    const orderRes = await orderModel.findByIdAndUpdate(data.orderId, {
        isFreeAppUser: header
    }, {
        new: true
    });
    response.send({
        'msg': [userRes, orderRes]
    }); 
}


module.exports.createUser= createUser; 
module.exports.updateStatus = updateStatus; 
