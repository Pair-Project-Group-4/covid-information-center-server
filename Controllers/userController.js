const {User} = require('../models')
const Bcrypt = require('../helper/bcryptjs')
const Jwt = require('../helper/JasonWebToken')

class Controller {
    static loginPost(req,res){
        User.findOne({
            where : {email : req.body.email}
        })
        .then((data)=>{
            let compare = Bcrypt.compare(req.body.password, data.password)
            if(data && compare){
                let token = Jwt.token({
                    id : data.id,
                    email : data.email
                })
                res.status(200).json({token})
            }else {
                throw {msg : 'invalid email or password'}
            }
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static registerPost(req,res,next){
        let input = {
            email : req.body.email,
            password : req.body.password
        }
        User.create(input)
        .then((data)=>{
            res.status(201).json(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
}

module.exports = Controller