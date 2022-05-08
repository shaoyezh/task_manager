const routes = require("./routes")
const {models, connectDb} = require("./models")
const express = require('express');
const cors = require('cors');
const middlewares = require('./middlewares');
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
// env
require('dotenv').config();

// express framework
const app = express();

// body-parse
app.use(bodyParser.urlencoded({extended: true}))

// mongoose connect
mongoose.connect(process.env.DATABASE_URL)

// Application middleware

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

// Third-party middleware

app.use(cors());

// Build-in middleware
app.use(express.json());

// Custom Middleware

app.use(async (req, res, next)=>{
  req.context = {
    models
  };
  next();
});

app.use('/tasks', routes.taskRouter)

app.get('/', (req, res) => {
  console.log("hello")
  return res.send("hello")
});

module.exports = app
