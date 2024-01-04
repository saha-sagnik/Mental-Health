require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const connectDB = require('./database/connectDB');

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:"ajaysbiradar3@gmail.com",
      pass: "lqhvdmghcavraxop"
    }
})

connectDB();

app.get('/',cors(),(req,res)=>{
})

app.post('/',async(req,res)=>{
    const {mail,pass} = req.body;
    console.log(mail);

    User.findOne({email:mail}).then((users)=>{
        if (users) {
          // User exists in the database
          console.log('User found:', users);
          // Perform actions for existing user 
          if(users.password==pass){
            console.log("Successful in login")
            res.json("success");
          }
          else{
            console.log('password and username not matched')
            res.json("fail");
          }
        } else {
          console.log('User not found');
          res.json("fail");
        }
    
      })
      .catch((err)=>{
        res.json("fail");
      })
})

app.post('/signup',async (req,res)=>{
    otp = Math.floor(100000 + Math.random() * 900000);
    const {mail} = req.body;
    const mailOptions = {
      from: 'ajaysbiradar3@gmail.com',
      to: mail,
      subject: 'OTP',
      text: otp.toString()
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
  
        } else {
          res.json(otp);
        }
    });
})

app.listen(5001,()=>{
    console.log("running at 5001");
})