import express from 'express';
// const cookieParser = require('cookie-parser')
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
// import cookieparser from 'cookie-parser';
import cors from 'cors';
// const bcrypt=require('bcrypt')
import bcrypt from 'bcrypt';
// const jwt=require('jsonwebtoken')
import  jwt  from 'jsonwebtoken';
import sql from 'mysql2';
// import multer from 'multer';
import pool from './dbconn.js';
import { sellapartroute } from './Routes/sellapart.js';
import { sellhouseroute } from './Routes/sellhouse.js';
import { selllandroute } from './Routes/sellland.js';
import { buyapartroute } from './Routes/buyapart.js';
import { buyhouseroute } from './Routes/buyhouse.js';
import { buylandroute } from './Routes/buyland.js';
dotenv.config();

const app = express();

app.use(cookieParser());

app.use(express.json())
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cookieParser());

// app.use(cors());
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST","GET"],
    credentials:true
}));


// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

// app.post('/upload', upload.single('image'), (req, res) => {
//     const image = {
//       image_data: req.file.buffer,
//     };
  
//     pool.query('INSERT INTO images SET ?', image, (error, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send('Error uploading image to database');
//       } else {
//         res.status(200).send('Image uploaded to database');
//       }
//     });
//   });

app.use('/api/sell/apart',sellapartroute)
app.use('/api/sell/house',sellhouseroute)
app.use('/api/sell/land',selllandroute)
app.use('/api/buy/apart',buyapartroute)
app.use('/api/buy/house',buyhouseroute)
app.use('/api/buy/land',buylandroute)

// app.use('/api/buy',)

 



// const express=require('express')
// const cors=require('cors')
// const sql=require('mysql2')
// const app=express();
// const bcrypt=require('bcrypt')
// const jwt=require('jsonwebtoken')



const salt=10;
const db=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'realestate'

})


const verifyUser=(req,res,next)=>{
const token=req.cookies.token;

if(!token){return res.json({Error:"error"});}
else{
    jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
     if(err){
        return res.json({Error:"token is not correct"});
    }
     else{
        req.name=decoded.name;
        next();
     }
    })
}
}


app.get('/',verifyUser,(req,res)=>{
    return res.json({Status:"Success",name:req.name});
})



app.post('/Signup',(req,res)=>{
    const sql="INSERT INTO user (name,email,password) VALUES (?)";
    bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
    if(err)
    return res.json({Error:"Error for hashing"});
    const values=[
        req.body.name,
        req.body.email,
        hash
       ]
       db.query(sql,[values],(err,data)=>{
        if(err){return res.json({Error:"error"});}
        return res.json( {Status:"Success"});
            })

    })
  

      
})



app.post('/Login',(req,res)=>{
    const sql="SELECT * FROM user WHERE email= ? ";
    // console.log(req);
    db.query(sql,[req.body.email],(err,data)=>{
        console.log(req.body.email);
        // console.log(err)
        if(err)return res.json({Error:"error"});
        if(data.length>0){
        bcrypt.compare(req.body.password.toString(),data[0].password,(err,response)=>{
            if(err)return res.json({Error:"match error"});
             if(response){
                const name=data[0].name;
                const token=jwt.sign({name},"jwt-secret-key",{expiresIn:'1d'});
                res.cookie('token',token);
                console.log(`success`);
                return res.json({Status:"Success"});
            }
           else return res.json({Error:"Password didnt match"});
        })
        
    }
      else return res.json({Error:"No email id found"})
    })
    // res.send(resp)
})


app.get('/logout',(req,res) =>{
    res.clearCookie('token');
    return res.json({Status:"Success"});
}
    
)
// app.listen(8081,()=>console.log("listening..."))


