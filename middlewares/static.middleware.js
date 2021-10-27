const path = require('path');

const staticHandler = (req,res)=>{
    res.sendFile(path.resolve( 'client','build','index.html'));
}

const staticErrorHandler = (err, req,res,next)=>{
    
    next()
}

module.exports = {
    staticHandler,
    staticErrorHandler
}