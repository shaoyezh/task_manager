const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
  task:{
    type: String,
    unique: true,
  },
  date: String,
  remainder: Boolean
})

module.exports = mongoose.model("Task", taskSchema)