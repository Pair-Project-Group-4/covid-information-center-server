const {User} = require('../models')
const Bcrypt = require('../helpers/bcryptjs')
const Jwt = require('../helpers/JasonWebToken')
const { Country,CovidNews } = require('../helpers/api')

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
            res.json(err).status(500)
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
            res.json(err).status(500)
        })
    }
    static GetDataCovid(req,res){
        Country()
        .then((data)=>{
            res.json(data).status(200)
        })
        .catch((err)=>{
            res.json(err).status(500)
        })
    }
    static GetCovidNews(req,res){
        CovidNews()
        .then((data)=>{
            res.json(data).status(200)
        })
        .catch((err)=>{
            res.json(err).status(500)
        })
    }

}

module.exports = Controller