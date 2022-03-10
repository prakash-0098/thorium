const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
    const userId = request.params.userId;
    const token = request.headers['x-auth-token'];
    if (!token) {
        response.status(400).send({
            'status': false,
            'msg': 'token must be present'
        });
    }
    const decodedToken = jwt.verify(token, '12345');
    if (!decodedToken){
        return response.status(400).send({
            status: false,
            msg: "token is invalid"
        });
    }
    else{
        if(decodedToken.userId != userId){
            return response.status(403).send({
                status: false,
                msg: "User not authorized !"
            });
        }
        next();
    }
}


module.exports.auth = auth; 