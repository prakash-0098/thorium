const userModel= require("../models/userModel")

const storeData = async (request, response)=>{
    const dataRes = await userModel.create(request.body); 
    response.send(dataRes); 
}

const fetchData = async (request, response)=>{
    const dataRes = await userModel.find(); 
    response.send(dataRes); 
}

module.exports = {
    storeData: storeData,
    fetchData: fetchData
}