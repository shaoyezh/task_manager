const mongoose = require("mongoose")

const connection = mongoose.connect('mongodb://localhost:27017/my-db').then(()=>console.log("connected")).catch(e=>console.log(e));

var schema = new mongoose.Schema({ name: 'string'});
var Test = mongoose.model('Test', schema);

const testItem = new Test({name: "first input"})
testItem.save()
const output = Test.find()
console.log(output)