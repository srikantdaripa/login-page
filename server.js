const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');




app.get('/api',(req,res)=>{
    res.json({
        message:"hey there welcome to this api service"
    });
});
app.post('/api/post',(req,res)=>{
    jwt.verify(req.token,'secret key',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }

        else{
            res.json({
                message:'post created',
                authData,
            });
        }
    }
    
});
app.post('/api/login',(req,res) => {
        const user = {
            id:1,
            name: srikant,
            email: srikant@gmail.com,
        };
        jwt.sign({user:user},"secretkey",(err,token)=>{
            res.json( {
                token
            });
        });
    
});

function verifyToken(req,res,next){
    const bearheader=req.header['authorization'];
    if (typeof bearheader!== 'undefined'){
        const beartoken=bearheader('')[1]
        req.token= beartoken;
        next()
        
    }else{
        res.sendStatus(403);
    }

}
app.listen(3000);