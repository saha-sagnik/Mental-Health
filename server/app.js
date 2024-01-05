require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const session = require('express-session');
const connectDB = require('./database/connectDB');
//const chatgpt = require('../server/chatgpt.js');
const User = require('./models/user.js');
const gpt = require('./gpt.js')


const app = express();

app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
      mongoUrl: process.env.DB_URI
  }),
  cookie: { maxAge: 10 * 60 * 60 * 1000 }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

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
          if(users.password===pass){
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

// app.post('/signup',async (req,res)=>{
//     otp = Math.floor(100000 + Math.random() * 900000);
//     const {mail} = req.body;
//     const mailOptions = {
//       from: 'ajaysbiradar3@gmail.com',
//       to: mail,
//       subject: 'OTP',
//       text: otp.toString()
//     };
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
  
//         } else {
//           res.json(otp);
//         }
//     });
// })

//gpt();

app.post('/user', (req, res) => {
  res.json({ user: req.user });
  console.log("Whassap my niggas");
});


app.post('/info',async (req,res)=>{
  console.log(req.body);
  
})

app.listen(5001,()=>{
    console.log("running at 5001");
})