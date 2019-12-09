const mongoose = require("mongoose")

const schemamodel =new mongoose.Schema({
name : String,
email: String,
age: Number
})

const User = mongoose.model("User" , schemamodel)
module.exports = User


