const UserModel= require("../models/userModel")

const storeData = async (request, response)=>{
    const dataRes = await userModel.create(request.body); 
    response.send(dataRes); 
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports = {
    storeData: storeData
}