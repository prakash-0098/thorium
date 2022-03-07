const productModel = require('../models/productModel'); 

const createProduct = async (request, response)=>{
    const data = request.body; 
    const dataRes = await productModel.create(data); 
    response.send({
        'msg': dataRes
    }); 
}

module.exports.createProduct = createProduct; 