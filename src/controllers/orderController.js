const orderSchema = require('../models/orderModel'); 
const userSchema = require('../models/userModel'); 
const productSchema = require('../models/productModel'); 

const createOrder = async (request, response)=>{
    const data = request.body; 
    const isFreeAppUser = request.headers.isfreeappuser; 

    const userRes = await userSchema.findById(data.userId); 
    if(userRes == null){
        return response.send({
            'msg': 'User does not exist !'
        }); 
    }
    const productRes = await productSchema.findById(data.productId); 
    if(productRes == null){
        return response.send({
            'msg': 'Product does not exist !'
        }); 
    }
    if(isFreeAppUser == "true"){
       data.amount = 0; 
       data.isFreeAppUser = true

       const dataRes = await orderSchema.create(data); 
       return response.send({
           'msg': dataRes
       }); 
    }
    else{
       const getProductPrice = await productSchema.findById(data.productId); 
       const userBalance = await userSchema.findById(data.userId); 

       if(userBalance.balance >= getProductPrice.price){
          const deductionRes = await userSchema.findByIdAndUpdate(data.userId, {
              $inc:{
                  balance: -getProductPrice.price
              }
          }, 
          {
              new: true
          }); 
          data.amount = getProductPrice.price; 
          data.isFreeAppUser = false; 
          const storeOrder = await orderSchema.create(data); 
          return response.send({
              'msg': deductionRes
          }); 
       }
       else{
           return response.send({
               'msg': 'You do not have much balance'
           })
       } 

    }
    
}

module.exports.createOrder = createOrder; 