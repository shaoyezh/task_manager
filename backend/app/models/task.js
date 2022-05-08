const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
  name: String,
  date: String,
  remainder: Boolean
})

module.exports = mongoose.model("Task", taskSchema)