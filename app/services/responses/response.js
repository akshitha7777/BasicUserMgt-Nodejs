exports.successMessage=(req,res,data)=>{
    res.send({message:data})
    res.status(200)
}

exports.successData=(req,res,data)=>{
    res.send(data)
    res.status(200)
}

exports.successNoDataFound=(req,res)=>{
    res.send({message:"Data doesnt exist"})
    res.status(204)
}

exports.resourceNotFound=(req,res)=>{
    res.send({message:"Resource not available"})
    res.status(404)
}

exports.badRequest=(req,res)=>{
    res.send({message:"Make a valid request"})
    res.status(400)
}

exports.authRequired=(req,res)=>{
    res.send({message:"Authorization required"})
    res.status(401)
}

exports.usernamePasswordNotMatched=(req,res)=>{
    res.send({message:"Username and Password doesnt match"})
    res.status(401)
}

exports.internalServerError=(req,res)=>{
    res.send({message:"Unknown internal server error"})
    res.status(500)
}