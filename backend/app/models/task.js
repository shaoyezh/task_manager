const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
  text: String,
  day: String,
  remainder: Boolean
})

// static method
taskSchema.methods.toggleRemainder = function(){
  this.remainder = !this.remainder
  this.save()
}

module.exports = mongoose.model("Task", taskSchema)