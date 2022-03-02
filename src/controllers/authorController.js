const authorModel= require("../models/authorModel"); 

const createAuthor = async (request, response)=>{
    const data = request.body; 
    const dataRes = await authorModel.create(data); 
    response.send({
        'msg': dataRes
    }); 
}

module.exports = {
    createAuthor: createAuthor
}

// const createAuthor= async function (req, res) {
//     let author = req.body
//     let authorCreated = await AuthorModel.create(author)
//     res.send({data: authorCreated})
// }

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

// module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData