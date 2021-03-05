function errHandler(err,req,res,next) {
    console.log('ini error handler');
    let errors = []
    let status = 500
    console.log(err);
    if(err.name === 'SequelizeValidationError'){        
        err.errors.forEach((element)=>{
            errors.push(element.message)
            status = 400
        })
    } 
    
    if (err.name === 'SequelizeUniqueConstraintError'){
        err.errors.forEach((element)=>{
            if(element.message === 'email must be unique'){
                element.message = "Email already exist"
            }
            errors.push(element.message)
            status = 400
        })
    }
    if(err.err === 'Invalid email or password'){
        errors.push(err.err)
        status = 400
    }
    
    res.status(status).json({errors})
}

module.exports = errHandler