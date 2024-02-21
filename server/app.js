require('dotenv').config();
const express = require('express');
const cors = require("cors");
const session = require('express-session');
const connectDB = require('./database/connectDB');
const MongoStore = require('connect-mongo');
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
app.use('/', routes);


app.listen(3000,()=>{
    console.log("Server running at port 3000");
})