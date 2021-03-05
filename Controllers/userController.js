
const {User} = require('../models')
const Bcrypt = require('../helpers/bcryptjs')
const Jwt = require('../helpers/JasonWebToken')
const { Country,CovidNews, CovidTravel } = require('../helpers/api')
const {OAuth2Client} = require('google-auth-library');


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
    static GetDataTravelCovid(req, res){
        CovidTravel()
        .then((data)=>{
            res.json(data).status(200)
        })
        .catch((err)=>{
            res.json(err).status(500)
        })
    }

    static loginGoogle(req, res){

        // console.log('login');
        console.log(req.body);
        const client = new OAuth2Client('677709530338-9brnronquupqd6qahtv9tcemian1i7sh.apps.googleusercontent.com');
        async function verify() {

            // console.log('verify');
            const ticket = await client.verifyIdToken({
                idToken: req.body.token,
                audience: '677709530338-9brnronquupqd6qahtv9tcemian1i7sh.apps.googleusercontent.com'
            });

            const googleUserParams = ticket.getPayload();
            
            // console.log(googleUserParams.email ,'=========emial');
            User.findOrCreate({
                where : {
                    email : googleUserParams.email
                },
                defaults : {
                    name : googleUserParams.name,
                    password : 'test'
                }   
            })
            .then(data =>{
                console.log(data, 'ini dataa=============');
                let token = Jwt.token({
                    id : data.id,
                    email : data.email,
                    name : data.name
                })
                res.status(200).json({token})
            })
        }
        verify().catch(console.error);
    }
}

module.exports = Controller;
