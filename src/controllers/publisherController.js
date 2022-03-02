const publisherSchema = require('../models/publisherModel'); 

const createPublisher = async (request, response)=>{
    const data = request.body; 
    const dataRes = await publisherSchema.create(data); 
    response.send({
        'msg': dataRes
    }); 
}

module.exports.createPublisher = createPublisher; 