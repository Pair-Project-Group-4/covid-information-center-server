const {User} = require('../models')
const Bcrypt = require('../helpers/bcryptjs')
const Jwt = require('../helpers/JasonWebToken')
const { Country,CovidNews } = require('../helpers/api')

class Controller {
    static loginPost(req,res,next){
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
                res.status(200).json({
                    id : data.id,
                    email : data.email,
                    token
                })
            }else {
                throw('Invalid email or password')
            }
        })
        .catch((err)=>{
            res 
            next({err})
            console.log(err);
        })
    }
    static registerPost(req,res,next){
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
            next(err)
        })
    }
    static GetDataCovid(req,res,next){
        Country()
        .then((data)=>{
            res.json(data).status(200)
        })
        .catch((err)=>{
            next({err})
        })
    }   
    static GetCovidNews(req,res,next){
        CovidNews()
        .then((data)=>{
            res.json(data).status(200)
        })
        .catch((err)=>{
            next({err})
        })
    }

}

module.exports = Controller