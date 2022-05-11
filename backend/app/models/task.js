const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
  text: String,
  day: String,
  remainder: Boolean
})

module.exports = mongoose.model("Task", taskSchema)