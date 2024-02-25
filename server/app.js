require('dotenv').config();
const express = require('express');
const cors = require("cors");
const session = require('express-session');
const connectDB = require('./database/connectDB');
const MongoStore = require('connect-mongo');

const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:"mindharbour08@gmail.com",
    pass: process.env.NODEMIALER_PASS
  }
})

const app = express();

app.use(session({
  secret: 'yoursecretkey',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
      mongoUrl: process.env.DB_URI
  }),
  cookie: { maxAge: 10 * 60 * 60 * 1000 }
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

connectDB();

const routes = require('./routes/routes');
// const { default: ResultSlice } = require('../client/src/store/ResultSlice');
app.use('/', routes);


app.post('/sendmail',(req,res)=>{
  console.log(req.body);
  // MAIL = req.body.mail 
const mailOptions = {
    from: 'mindharbour08@gmail.com',
    to: 'sbmunnu@gmail.com',
    subject: '🏥 Patient Analysis Report Link',
    text: `👩‍⚕️ Dear Doctor,

           📊 Please find the patient analysis report link below:
           ${req.body?.link}

           🙏 Thank you for your attention to this matter.

           💼 Best regards,
           Mind-Harbour`
};

  transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.json({error:true})
      //   res.sendFile(path.join(__dirname, '2.html'));
      } else {
        console.log('Email is sent', info.response);
      //   res.sendFile(path.join(__dirname, '3.html'));/
        res.json({sent:true})
      }
  });
})

app.listen(3000,()=>{
    console.log("Server running at port 3000");
})