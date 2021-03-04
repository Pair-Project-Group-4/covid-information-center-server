var bcrypt = require('bcryptjs');

class Bcrypt {
    static hash(password) { 
        let result = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        return result
    }
    static compare(input,password) {
        let result = bcrypt.compareSync(input, password); 
        return result
    }
    
}

module.exports = Bcrypt