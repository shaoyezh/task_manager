const Task = require("./task.js")
require('dotenv').config();
const mongoose = require("mongoose")


const connectDb = () =>{
  return mongoose.connect(process.env.DATABASE_URL)
}

const models = {Task}
module.exports = {models, connectDb}