const Jwt = require('../helpers/JasonWebToken')
const {User} = require('../models')

const authenticate = (req,res,next)=>{
    let {id,email} = Jwt.verify(req.headers.token)
    User.findOne({
        where:{id, email }
    })
    .then(()=>{
        next()
    })
    .catch((err)=>{
        res.status(401).json({message:"Unauthorizes"})
    })
}

module.exports = authenticate