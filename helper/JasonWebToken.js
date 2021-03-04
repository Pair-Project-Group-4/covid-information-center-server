var jwt = require('jsonwebtoken');

class Jwt {
    static token(payload){
        let result = jwt.sign(payload, 'shhhhh');
        return result
    }
    static verify(token){
        let result = jwt.verify(token, 'shhhhh');
        return result
    }
}

module.exports = Jwt