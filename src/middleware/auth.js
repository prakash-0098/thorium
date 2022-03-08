const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
    const userId = request.params.userId;
    const token = request.headers['x-auth-token'];
    if (!token) {
        response.send({
            'status': false,
            'msg': 'token must be present'
        });
    }
    const decodedToken = jwt.verify(token, '12345');
    if (!decodedToken)
        return res.send({
            status: false,
            msg: "token is invalid"
        });
    next();
}

module.exports.auth = auth; 