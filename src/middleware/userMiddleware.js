const checkHeader = (request, response, next)=>{
    if(request.headers.isfreeappuser != undefined){
        next();
    } 
    else{
        response.send({
            'msg': 'The request is missing a mandatory header !'
        }); 
    } 
}

const updateHeader = (request, response, next)=>{
    request.headers.isFreeAppUser = true; 
    next(); 
}

module.exports.checkHeader = checkHeader; 
module.exports.updateHeader = updateHeader; 