const routes = require("./routes")
const {models, connectDb} = require("./models")
const express = require('express');
const cors = require('cors');
const middlewares = require('./middlewares');
const mongoose = require("mongoose")
require('dotenv').config();
const app = express();
console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL)
console.log(mongoose.connection.readyState);
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
