const {User} = require('../models')
const Bcrypt = require('../helpers/bcryptjs')
const Jwt = require('../helpers/JasonWebToken')
const { Country } = require('../helpers/api')

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
                    email : data.email,
                    name : data.name
                })
                res.status(200).json({token})
            }else {
                throw {msg : 'invalid email or password'}
            }
        })
        .catch((err)=>{
            res.status(400)
        })
    }
    static registerPost(req,res){
        let input = {
            email : req.body.email,
            password : req.body.password,
            name : req.body.name
        }

        User.create(input)
        .then((data)=>{
            res.status(201).json(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static test(req,res){
        Country()
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
}

module.exports = Controller