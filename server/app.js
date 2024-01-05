require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const session = require('express-session');
const connectDB = require('./database/connectDB');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const User = require('./models/user.js');
const gpt = require('./gpt.js')
const auth=require('./auth.js');

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

app.use('/',require('./auth.js'));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

connectDB();

app.get('/',cors(),(req,res)=>{
 })

//gpt();


app.post('/info',async (req,res)=>{
  console.log("This is the info that is coming from /info route: ",req.body.info);
  let message = "These are the questions and its answers provided by the user for a questionnaire:";
  for (let i = 0; i < req.body.info.length; i++) {
    message=message+`Question${i+1}: `+req.body.info[i].ques+`Its Answer: `+req.body.info[i].data;
}
  console.log("This is the message that should be given as prompt:",message);
  message+=`.From this questionnaire understand and diagnose from these disorders: Anxiety Disorders,Depression,PTSD,OCD,Bipolar Disorder,Schizophrenia,Eating Disorders,Substance Use Disorders,ADHD which disorder
  is the user likely to have? Give the response as a JSON object such that it has disorder name, index number and the complete assessment considering the options I gave above as an array.`
  
  let GeminiResponse = await gpt(message);
  console.log("Gemini gives this response: ",GeminiResponse, typeof(GeminiResponse));
  
  // Remove leading/trailing white spaces, newlines, etc.
  const cleanedString = GeminiResponse.trim();
  
  // Extract the content between curly braces
  const jsonString = cleanedString.match(/\{([^}]+)\}/)?.[1];
  
  if (jsonString) {
    try {
      // Parse the extracted content as JSON
      const jsonObject = JSON.parse(`{${jsonString}}`);
      console.log('Extracted JavaScript object:', jsonObject);
      res.json(jsonObject);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  } else {
    console.log('No JavaScript object found in the string.');
  }
  
});

app.listen(5001,()=>{
    console.log("Server running at port 5001");
})